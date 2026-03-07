# Chrome21 Home Inspections — Website

Static marketing website for **Chrome21 Home Inspections LLC** (Denver metro area), owned by **Scott Kimball**. The site is a single-page HTML/CSS/JS app, hosted on **Firebase Hosting** on the **Spark (free) plan**, with deployments triggered automatically from **GitHub** via GitHub Actions.

---

## What this repo is

- **Purpose:** Marketing and scheduling site for a local home inspection business.
- **Stack:** Plain HTML, CSS, and JavaScript (no framework; no build step).
- **Form:** The “Schedule” / contact form is powered by **[JotForm](https://www.jotform.com)** (free tier). The embed is loaded from `https://jotform.com/jsform/260646412725052` and is embedded in the schedule section of `chrome21/index.html`.
- **Hosting:** Firebase Hosting (Spark plan). The live site is served from the `chrome21/` directory.
- **CI/CD:** Every push to the `master` branch deploys to the live Firebase Hosting channel. Pull requests get a preview deployment.

---

## Repository structure

| Path | Description |
|------|-------------|
| `chrome21/` | **Deployed site** — everything Firebase Hosting serves (HTML, CSS, JS, assets). |
| `chrome21/index.html` | Single-page content and structure. |
| `chrome21/css/styles.css` | All styles (layout, responsive, print, reduced motion). |
| `chrome21/js/main.js` | Vanilla JS: scroll-aware nav, smooth scroll, scroll-triggered animations. |
| `chrome21/assets/logo.png` | Logo used in nav, hero, and favicon. |
| `chrome21/llms.txt` | Plain-text summary of the site for LLMs/AI; served at `/llms.txt`. |
| `chrome21/README.md` | Short guide for editing content, form, and testimonials (non-technical). |
| `.github/workflows/` | GitHub Actions: Firebase Hosting deploy on push to `master`, preview on PR. |
| `firebase.json` | Firebase Hosting config: `public` = `chrome21`, clean URLs. |
| `.firebaserc` | Firebase project alias: default = `chrome21-home-inspections`. |
| `chrome21.html` | Original single-file mockup (reference only; not deployed). |
| `chrome21-build-instructions.md` | Build/design spec used to create the site (reference only). |

---

## How deployment works

1. **Firebase plan:** **Spark (free)**. No Blaze or billing required for this setup.
2. **Deploy source:** The **`chrome21`** folder is the Hosting “public” directory (see `firebase.json`).
3. **Trigger:** Pushes to the **`master`** branch run the workflow in `.github/workflows/firebase-hosting-merge.yml`, which uses the Firebase Hosting GitHub Action to deploy to the **live** channel.
4. **Preview:** Opening a **pull request** runs `.github/workflows/firebase-hosting-pull-request.yml` and creates a temporary preview URL (no live site change).
5. **No build step:** The Action checks out the repo and deploys the existing files; there is no `npm install` or build script.

**Live URLs (after deploy):**

- `https://chrome21-home-inspections.web.app`
- `https://chrome21-home-inspections.firebaseapp.com`

---

## What the owner should know

- **Content:** Edit `chrome21/index.html` and `chrome21/css/styles.css` as needed. Pushing to `master` redeploys the site.
- **Form:** The schedule/contact form is a **JotForm** embed (form ID `260646412725052`). To change the form or provider, replace the `<script src="https://jotform.com/jsform/260646412725052"></script>` block in `chrome21/index.html` (search for `FORM EMBED` or `jotform`).
- **Logo:** Replace `chrome21/assets/logo.png` to update the logo everywhere (nav, hero, favicon). Keep a square or circular asset for best results.
- **Copyright:** The footer year is set by a small script to the current year; no manual update needed.
- **Testimonials:** A testimonials block exists in `index.html` but is commented out; uncomment and fill in when ready (see `chrome21/README.md`).

---

## Technical details for maintainers / fork takeover

### Firebase project

- **Project ID:** `chrome21-home-inspections`
- **Config:** `.firebaserc` (default project), `firebase.json` (hosting `public: "chrome21"`).

### GitHub secret required for deploy

- **Name:** `FIREBASE_SERVICE_ACCOUNT_CHROME21`
- **Value:** Full contents of a **Firebase service account JSON key** (from Firebase Console → Project settings → Service accounts → Generate new private key). This is used by the GitHub Action to deploy; do not commit the key or put it in repo files.

### Branch and workflows

- **Production branch:** `master`. Pushing here triggers the live deploy.
- **Workflows:** Under `.github/workflows/`:
  - `firebase-hosting-merge.yml` — on push to `master` → deploy to Firebase Hosting **live**.
  - `firebase-hosting-pull-request.yml` — on pull request → deploy to a **preview** channel.

### If someone forks or takes over

1. Create (or reuse) a Firebase project and set its ID in `.firebaserc` and in both workflow files (`projectId`).
2. In the Firebase project, create a service account key (JSON) and add it as the GitHub secret `FIREBASE_SERVICE_ACCOUNT_CHROME21` in the fork’s repo settings.
3. Ensure the default branch is `master` if you keep the current workflow triggers, or change the `branches` in both YAML files to match the new default branch.
4. The `chrome21/` folder stays as the only deployed content; no build step is required.
5. To point the form elsewhere, replace the JotForm script in `chrome21/index.html` with the new provider’s embed.

### SEO, accessibility, and LLMs

- **Schema.org:** JSON-LD in `index.html` `<head>` for `LocalBusiness`, `WebSite`, and `WebPage` (Google and other crawlers).
- **llms.txt:** Served at `/llms.txt` from `chrome21/llms.txt`. Describes the business, contact, and services for LLM/AI use; no code or secrets.
- **Meta/OG:** Description, keywords, Open Graph, and geo tags are in `index.html` `<head>`.
- **A11y:** Focus styles, semantic HTML, and a reduced-motion media query are in `chrome21/css/styles.css`.

### Local preview

- Open `chrome21/index.html` in a browser, or from repo root run:  
  `npx firebase serve`  
  (requires [Firebase CLI](https://firebase.google.com/docs/cli) and `firebase login`).

---

## License and contact

Content and branding belong to Chrome21 Home Inspections LLC / Scott Kimball. Site built by **Jake Beckstead**. For site or deployment questions, use the contact details on the live site or in `chrome21/llms.txt`.
