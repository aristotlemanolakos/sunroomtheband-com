# Sun Room

Static official band website. No build or package installation is required.

## Local preview

Run `python3 -m http.server 4188 --bind 127.0.0.1` from this directory, then open http://127.0.0.1:4188. Stop the server with Ctrl+C. Reload the browser after edits.

## Content

- `index.html`: merch destination, management/booking contacts, and social links.
- `css/site.css`: blue/cream design, responsive layout, and Seated widget styling.
- `js/site.js`: live-widget loading/error feedback and safe external links.
- `images/sunroom-*`: optimized exports from the supplied photo and Photoshop logo.

Tour dates and ticket destinations come directly from the official Seated widget for artist `1c296b62-808e-4308-9d64-caf638c93409`. Changes in Seated appear automatically. Internet access is required for the widget; an unavailable widget shows recovery actions instead of an empty section.

Cloudflare Pages project: `sunroomtheband`, connected to this GitHub repository. Serve the repository root as-is; no build command is required. Push the `staging` branch for the review deployment. Keep release work on `main` separate from staging.
