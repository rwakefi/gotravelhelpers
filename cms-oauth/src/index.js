/**
 * Decap CMS GitHub OAuth proxy for static sites.
 * Deploy to Cloudflare Workers — see docs/CMS.md
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function authPage(token) {
  const message = `authorization:github:success:${JSON.stringify({ token, provider: 'github' })}`;
  return `<!doctype html><html><body><script>
    window.opener.postMessage(${JSON.stringify(message)}, window.location.origin);
    window.close();
  </script></body></html>`;
}

function errorPage(message) {
  return `<!doctype html><html><body><p>Login failed: ${message}</p><script>window.close();</script></body></html>`;
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const clientId = env.GITHUB_CLIENT_ID;
    const clientSecret = env.GITHUB_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return new Response('OAuth worker is missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET.', {
        status: 500,
        headers: corsHeaders,
      });
    }

    const origin = url.origin;
    const callbackUrl = `${origin}/oauth/callback`;

    if (url.pathname === '/oauth') {
      const authUrl = new URL('https://github.com/login/oauth/authorize');
      authUrl.searchParams.set('client_id', clientId);
      authUrl.searchParams.set('redirect_uri', callbackUrl);
      authUrl.searchParams.set('scope', 'repo,user');
      return Response.redirect(authUrl.toString(), 302);
    }

    if (url.pathname === '/oauth/callback') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response(errorPage('Missing authorization code.'), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'text/html; charset=utf-8' },
        });
      }

      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
          redirect_uri: callbackUrl,
        }),
      });

      const tokenData = await tokenResponse.json();
      if (!tokenData.access_token) {
        const message = tokenData.error_description || tokenData.error || 'Could not get access token.';
        return new Response(errorPage(message), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'text/html; charset=utf-8' },
        });
      }

      return new Response(authPage(tokenData.access_token), {
        headers: { ...corsHeaders, 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    return new Response('Decap CMS OAuth proxy. Use /oauth to sign in.', {
      headers: corsHeaders,
    });
  },
};
