# Go Travel Helpers

Website for [gotravelhelpers.com](https://gotravelhelpers.com) — built with [Astro](https://astro.build) as a static site you can edit in Cursor and deploy to IONOS.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — upload this folder to IONOS.

## Deploy to IONOS

### Option A: Automatic (GitHub → IONOS)

Every push to `main` builds the site and uploads it to IONOS via SFTP (port 22).

**One-time setup:**

1. **Create a GitHub repo** and push this project (see below).
2. In your GitHub repo, go to **Settings → Secrets and variables → Actions → New repository secret** and add:

   | Secret name | Value |
   |-------------|--------|
   | `IONOS_FTP_HOST` | SFTP server host from IONOS (e.g. `access-XXXX.webspace-host.com`) |
   | `IONOS_FTP_USER` | SFTP username from IONOS |
   | `IONOS_FTP_PASSWORD` | SFTP password you set when creating the account |

3. Find SFTP credentials in **IONOS → Hosting → SFTP** (Web Hosting plan required, not Website Builder).
4. Push to `main` — the **Deploy to IONOS** workflow runs automatically.

To deploy manually without pushing code, use **Actions → Deploy to IONOS → Run workflow**.

**Note:** `remoteDir` in `.github/workflows/deploy.yml` is set to `/` (web root). If uploads land in the wrong place, change `remoteDir` to your IONOS web folder (e.g. `/htdocs/`).

### Option B: Manual SFTP

1. Run `npm run build`
2. Upload the contents of `dist/` to your IONOS web root via SFTP (port 22)

## Push to GitHub

```bash
cd gotravelhelpers
git init
git add .
git commit -m "Initial Go Travel Helpers site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gotravelhelpers.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. Create the empty repo on GitHub first (no README) so the push is clean.

## Updating content

Most editable content lives in one file:

- **`src/data/site.ts`** — business info, services, FAQs, testimonials, social links, address

Pages are in `src/pages/`. Ask Cursor to update copy, add pages, or change design — then rebuild and re-upload.

## Contact form

The contact form UI is built but **not wired to send email yet**. Options when ready:

- [Formspree](https://formspree.io)
- [Web3Forms](https://web3forms.com)
- IONOS email + server-side handler

Until then, visitors can call or email directly.

## Project structure

```
src/
  data/site.ts       # Editable content
  components/        # Header, Footer
  layouts/           # Page shell
  pages/             # All routes
  styles/global.css  # Design system
public/              # Static assets
dist/                # Built site (after npm run build)
```
