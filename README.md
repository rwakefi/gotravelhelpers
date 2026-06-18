# Travel Helpers

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

**Note:** `remote_path` in `.github/workflows/deploy.yml` is set to `/` (web root). If uploads land in the wrong place, change `remote_path` to your IONOS web folder (e.g. `/htdocs/`).

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

## Academy & Training Curriculum (Future Agents Reference)

The site features a dedicated `/become-a-travel-helper` route for Cyndi Glidewell's Travel Companion Masterclass.

**Crucial Business/Topic Distinctions:**
- This training is for a **Travel Companion / Patient Escort business** (physically accompanying travelers who need assistance during transit, such as elderly, post-surgery, disabled, or anxious passengers).
- It is **NOT** a medical tourism facilitator course (i.e., arranging treatment abroad, dental tourism, or hospital partnerships).
- All pricing and numeric references are strictly omitted from public copy.

**Curriculum Outline:**
1. **Identifying Travelers in Need**: Finding elderly, post-surgery, disabled, or anxious clients.
2. **Scope of Practice**: The exact boundaries and legal limits of what a travel companion can and cannot do.
3. **Liability, Insurance, & Waivers**: Protecting the companion business.
4. **Custom Companion Pricing**: Structuring trip-based pricing (no specific numbers).
5. **Client Intake & Fit Assessment**: Evaluating customer needs and medical clearances.
6. **Airline Coordination**: Booking companion fares, wheelchair setups, and medical clearances.
7. **Emergency Protocols**: Action steps if a health issue or travel delay occurs mid-transit.
8. **Business Marketing**: Networking with families, discharge planners, hospitals, and senior facilities.
