# Untangle — ADHD Playbook · Netlify Deployment Handoff

> **🤖 Claude Code: read this first.**
>
> This folder contains an updated version of an already-deployed static website (`untangleyouradhd.com`, hosted on Netlify with GitHub continuous deploy). The user wants the changes in this folder pushed live.
>
> **What to do:**
> 1. Ask the user for the GitHub repo URL (and clone path on their machine, if any). The repo is the source for the Netlify site — they may already have a local clone, or you can clone it fresh.
> 2. Copy the contents of this folder into the working tree of that repo, overwriting existing files. Preserve `.git/` and any local-only files like `.env`.
> 3. Run `git status` and show the diff summary to the user before committing.
> 4. Commit with a descriptive message (e.g. `Content updates: photo swaps for pages 12/19/20/22/26/49/50/69/70/71/74, domain → untangleyouradhd.com, compressed all image assets`).
> 5. `git push` to `main`.
> 6. Tell the user to check the **Deploys** tab on Netlify — auto-deploy usually completes in 30–60 seconds.
> 7. If `netlify` CLI is installed, you can also run `netlify open` to jump straight to the dashboard, or `netlify status` to confirm the linked site.
>
> **Do not** change the contents of any file in this folder — they're the intended new state. The only edits should be to whatever lives in the GitHub repo that ISN'T in this folder (e.g. nothing, usually).
>
> If the user's local clone doesn't exist, clone the repo into a fresh folder first, then proceed.
>
> Domain to confirm in `index.html` after copying: `untangleyouradhd.com` (canonical + og:url, lines 11–12).

---

This bundle contains a finished static website. Your job is to **deploy it to Netlify** and wire up the custom domain. No code changes are needed unless something flagged in the "Known issues" section comes up.

---

## What this site is

A free UK ADHD playbook (web reader). Built as a static site:

- `index.html` is the entry point.
- Two extra HTML files: `adhd-playbook.html`, `untangle.html`.
- React 18 + Babel Standalone are loaded from `unpkg.com` (CDN). **JSX is transpiled in the browser** via `<script type="text/babel">` — so there is **no build step**. Do not try to add Vite/Webpack/etc. unless asked.
- Page content lives in `playbook-content-1.jsx` … `playbook-content-14.jsx` + `playbook-content-feedback.jsx`.
- Styles: `playbook.css`, `playbook-pages.css`.
- Images: `assets/` (49 JPGs).

## Already configured

- **`netlify.toml`** — publish dir `.`, no build command, redirects for old space-URL filenames, pretty `/playbook` route, cache headers, basic security headers, and an explicit `Content-Type: text/babel` on `.jsx` files (needed so Babel-in-browser picks them up correctly).
- **`.gitignore`** — excludes editor cruft and `.netlify/` local state. (The bundle does not include internal docs like `MARKETING.md` — they were intentionally left out.)

Do not overwrite either of these without asking.

---

## Pushing an update to an already-deployed site

If this site is already live on Netlify connected to a GitHub repo (continuous deploy):

```bash
cd <this-folder>
# If this folder isn't already a git clone of the repo, replace its contents into
# your local clone, OR run:
#   git init && git remote add origin <repo-url> && git fetch && git checkout -t origin/main -- .

git add -A
git commit -m "Content + image updates"
git push
```

Netlify auto-deploys on push to `main`. Check progress in **Deploys** tab; the new build is usually live within 30–60 seconds. If anything looks wrong on the live site, hit **"Lock"** on the previous deploy in Netlify, or use the **"Publish deploy"** button on any older entry to roll back instantly.

---

## First-time deployment steps

(Skip if the site is already live.)

### 1. Push to GitHub

```bash
cd <this-folder>
git init
git add .
git commit -m "Initial commit: Untangle ADHD Playbook"
gh repo create untangle-adhd-playbook --public --source=. --push
```

(Or create the repo via the GitHub web UI and `git remote add origin … && git push -u origin main`.)

### 2. Connect to Netlify

- Go to https://app.netlify.com → **Add new site** → **Import an existing project** → choose the repo.
- Build settings (Netlify should auto-detect these from `netlify.toml`, but confirm):
  - **Build command:** *(empty)*
  - **Publish directory:** `.`
- Click **Deploy**.

You'll get a `random-name.netlify.app` URL within ~30 seconds.

### 3. Custom domain

`index.html` declares `<link rel="canonical" href="https://untangleyouradhd.com/">`. Wire that domain up:

- Netlify → **Domain management** → **Add a domain** → `untangleyouradhd.com`.
- Follow Netlify's DNS instructions. Two paths:
  - **Easiest:** point the domain's nameservers at Netlify DNS.
  - **Or** add an `ALIAS`/`ANAME` (or `A` to Netlify's load balancer) at the registrar and a `CNAME` for `www`.
- Enable HTTPS once DNS resolves (Netlify provisions a free Let's Encrypt cert automatically — usually a one-click button labelled "Provision certificate").
- Set the **primary domain** to `untangleyouradhd.com` (so `www.` 301s to apex, or vice versa — pick one).

### 4. Smoke-test the deployed site

After the first deploy, verify in a browser:

1. **`/`** loads the playbook and React renders all content sections (you should see the cover image, then page content).
2. **No console errors.** A 404 on any `.jsx` or `.css` file means the publish dir is wrong — recheck `netlify.toml`.
3. **`/playbook`** rewrites to `/adhd-playbook.html` (200, not a redirect).
4. **`/ADHD%20Playbook.html`** 301-redirects to `/adhd-playbook.html`.
5. **Print stylesheet:** Cmd/Ctrl-P shows a clean single-spread print preview (there's a print stylesheet baked into `index.html`).
6. **Custom domain** resolves over HTTPS once DNS has propagated.

---

## Known issues / things to watch

- **CDN dependency.** React and Babel come from `unpkg.com`. If unpkg is down, the site won't render. This is a deliberate tradeoff (no build step). If reliability matters more than simplicity, vendor those three scripts into `/vendor/` and update the `<script src>` tags in `index.html` — but check first; don't do it pre-emptively.
- **In-browser Babel transpiles every page load.** Fine for a low-traffic content site; slow on cold-load. If it becomes a problem, pre-compile the `.jsx` files to `.js` with `npx babel` and update the script tags — again, only if asked.
- **Canonical URL.** If the domain isn't `untangleyouradhd.com`, update the `<link rel="canonical">` and `og:url` in `index.html` (lines 11–12) and the schema.org JSON-LD block (line ~22) before going live, or search engines will mis-attribute.
- **No analytics / no service worker.** If the user wants either, they'll ask.

---

## File map

```
.
├── README.md                       ← this file
├── netlify.toml                    ← deploy config (don't touch unless asked)
├── .gitignore
├── index.html                      ← entry point
├── adhd-playbook.html              ← (renamed from "ADHD Playbook.html")
├── untangle.html                   ← (renamed from "Untangle.html")
├── playbook.css
├── playbook-pages.css
├── playbook-content-1.jsx … 14.jsx ← page content, one file per spread
├── playbook-content-feedback.jsx
└── assets/                         ← 49 page illustrations (JPG)
```

---

## If something goes wrong

- **404 on `.jsx` files:** publish dir is wrong, or `.jsx` is being filtered. Confirm `netlify.toml` was picked up (Deploy log → "Config file detected").
- **JSX renders as raw text:** `Content-Type` header on `.jsx` files isn't `text/babel`. The `netlify.toml` sets this — verify it deployed.
- **Blank page, console error about React:** unpkg CDN failure or integrity hash mismatch. Don't change the integrity hashes; retry or vendor the scripts.
- **DNS not resolving after 24h:** check nameservers at the registrar match what Netlify shows.

Ping the user before making changes beyond what's listed above.
