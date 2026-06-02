# Decap CMS for Travel Helpers

Cyndi can edit site text and photos at **https://gotravelhelpers.com/admin** without touching code. Changes save to GitHub and the site auto-deploys within a few minutes.

## What she can edit

| Section | Examples |
|---|---|
| **Site Settings** | Phone, email, motto, description, service area, Facebook link |
| **Site Images** | Homepage hero, page header photos |
| **Services** | Titles, descriptions, photos |
| **Who We Help** | Audience cards |
| **How It Works** | Process steps |
| **Recent Adventures** | Trip stories and photos |
| **Cyndi's Travel Note** | Title, intro, bullet points, gallery |
| **FAQs** | Questions and answers |

Navigation links and page layout are not editable (by design).

---

## One-time setup (developer)

The live site is static on IONOS, so GitHub login needs a tiny OAuth helper on Cloudflare Workers (free).

### 1. Create a GitHub OAuth App

1. Open [GitHub → Settings → Developer settings → OAuth Apps → New](https://github.com/settings/applications/new)
2. Fill in:
   - **Application name:** Travel Helpers CMS
   - **Homepage URL:** `https://gotravelhelpers.com`
   - **Authorization callback URL:** `https://YOUR-WORKER-URL/oauth/callback`  
     (You'll update this after step 2 — use a placeholder, then edit the OAuth app.)
3. Save the **Client ID** and generate a **Client secret**.

### 2. Deploy the OAuth worker

```bash
cd cms-oauth
npm install -g wrangler   # if needed
wrangler login
wrangler secret put GITHUB_CLIENT_ID
wrangler secret put GITHUB_CLIENT_SECRET
wrangler deploy
```

Note the worker URL (e.g. `https://gotravelhelpers-cms-oauth.yourname.workers.dev`).

### 3. Update configs

1. **GitHub OAuth app** — set callback URL to `https://YOUR-WORKER-URL/oauth/callback`
2. **`public/admin/config.yml`** — replace `YOUR-OAUTH-WORKER-URL` with the worker URL (no `https://` prefix in `base_url` is wrong — include full URL):

```yaml
base_url: https://gotravelhelpers-cms-oauth.yourname.workers.dev
```

3. Commit and push to `main`.

### 4. Give Cyndi GitHub access

She needs **write access** to the `rwakefi/gotravelhelpers` repo:

- **Settings → Collaborators → Add** her GitHub username, or
- Have her log in with an account that already has access.

---

## Client workflow

1. Go to **https://gotravelhelpers.com/admin**
2. Click **Login with GitHub** and authorize
3. Edit content in the sidebar sections
4. Click **Publish** (top) — saves to GitHub and triggers deploy
5. Live site updates in ~2–3 minutes

### Photo uploads

- Use image fields in the CMS — files upload to `public/images/`
- Prefer JPG, under ~500 KB when possible
- Always fill in **alt text** (accessibility + SEO)

---

## Local editing (optional)

For testing the CMS on your machine:

```bash
npm run cms        # starts decap-server on :8081
npm run dev        # in another terminal
```

Open **http://localhost:4321/admin**. With `local_backend: true` in config, edits write directly to local files (no GitHub login needed locally).

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Login popup fails | Check OAuth callback URL matches worker URL exactly |
| "Not found" on save | GitHub user needs repo write access |
| Changes not on live site | Wait for GitHub Actions deploy; check Actions tab |
| Image upload fails | Check file size; use JPG/PNG/WebP |

---

## Files

| Path | Purpose |
|---|---|
| `public/admin/index.html` | CMS admin UI |
| `public/admin/config.yml` | CMS field definitions |
| `src/data/content/*.json` | Editable content (loaded by site) |
| `cms-oauth/` | Cloudflare Worker for GitHub login |
