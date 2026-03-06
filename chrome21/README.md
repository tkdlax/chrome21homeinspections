# Chrome21 Home Inspections — Static Site

This folder contains the production-ready static website for **Chrome21 Home Inspections LLC**, a Denver-area home inspection company owned by **Scott Kimball**.

The site is pure HTML/CSS/JS and is deployed to **Firebase Hosting** via **GitHub Actions**.

## Project structure

- `index.html` — main single-page site
- `css/styles.css` — all styling and responsive layout rules
- `js/main.js` — scroll behavior and animations
- `assets/logo.png` — site logo and favicon (copied from `IMG_1453.PNG` in the project root)

## How to view the site locally

You can view the site in any modern browser:

1. Open this folder (`chrome21/`) in your file explorer.
2. Double-click `index.html` to open it in your default browser.

For a more accurate preview (especially for Firebase Hosting), a simple static server or `firebase serve` can be used by your developer, but this is not required just to see the page.

## Editing text or images

You can safely change wording or images without touching any code logic:

1. Open `index.html` in a text editor (VS Code, Notepad, etc.).
2. Search for the text you want to change and edit it directly.
3. Save the file.
4. Commit and push your changes to GitHub (your developer can help with this).

To update the logo:

1. Replace `chrome21/assets/logo.png` with a new PNG file using the same name (`logo.png`).
2. Keep the same square/circular layout if possible so it fits well in the design.

## Adding your scheduling or contact form

The **Schedule / Form CTA** section uses a clearly marked placeholder that you can replace with any form embed code (Formspree, Web3Forms, GoDaddy, etc.).

Steps:

1. Open `chrome21/index.html` in a text editor.
2. Search for the comment:

   ```html
   <!-- FORM EMBED: Replace the .form-placeholder div below with your embed code -->
   ```

3. Delete the entire block that looks like:

   ```html
   <div class="form-section">
     <div class="form-placeholder">
       <span>📋</span>
       Form embed goes here<br>
       <small style="opacity:0.6;">(Replace this block with your scheduling or contact form embed)</small>
     </div>
   </div>
   ```

4. Paste your provider’s embed code in its place.
5. Save the file and push your changes to GitHub to trigger a new deployment.

## Enabling testimonials later

The testimonials section is already built but **commented out** so it does not show yet.

When you have real reviews:

1. Open `chrome21/index.html` in a text editor.
2. Search for the comment:

   ```html
   <!-- TESTIMONIALS: Uncomment this section when you have client reviews ready -->
   ```

3. Remove the opening `<!--` and closing `-->` that wrap the testimonials section block.
4. Replace each `"Testimonial text goes here."` with a real client quote.
5. Update `Client Name` and location (e.g., `Denver, CO`) for each testimonial.
6. Save and push changes to GitHub to redeploy.

## How deployment works (non-technical overview)

This project is wired to **Firebase Hosting** using **GitHub Actions**:

- When you or your developer **open a Pull Request**, GitHub:
  - Builds the site from the `chrome21/` folder.
  - Deploys a temporary **preview URL** using Firebase Hosting, so you can review changes before they go live.

- When changes are **merged into the `master` branch**:
  - GitHub Actions runs again.
  - Firebase Hosting updates the **live Chrome21 site** (project ID: `chrome21-home-inspections`) using the new files in `chrome21/`.

Your developer will manage:

- Creating the Firebase project `chrome21-home-inspections`.
- Setting the GitHub secret `FIREBASE_SERVICE_ACCOUNT_CHROME21` with a Firebase service account JSON.
- Connecting this repository to GitHub so Actions can run.

Once that setup is done, your workflow is simple:

1. Edit content or assets in the `chrome21/` folder as needed.
2. Commit and push to GitHub (or ask your developer to do this).
3. GitHub and Firebase automatically handle previews (for PRs) and live deploys (when merged into `master`).

