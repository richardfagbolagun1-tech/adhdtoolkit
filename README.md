# Untangle — website files

Upload this whole folder to Netlify (drag it into the Deploys tab, or push it to your GitHub repo). No build step is needed.

- `index.html` is the cover. Every other page is its own file (see `page-list.md`), so Netlify Analytics shows views per page.
- `playbook.bundle.js` is the compiled site code. The editable source is in `src/`. If you edit anything in `src/`, the bundle must be rebuilt (Babel, classic React preset, each file wrapped in its own function, in this order: numbered, content-1…14, content-feedback, app).
- `assets/` holds the photos, `vendor/` holds React.
- `netlify.toml` sets caching and redirects.
