# Prompt for Claude Code: deploy Untangle to Netlify

Paste everything below the line into Claude Code, run from inside the unzipped `untangle-site` folder.

---

This folder is the complete static website for Untangle, a free UK ADHD guide. Please deploy it to Netlify, replacing the current live version.

**About the site**
- Plain static HTML, CSS, JS and images. No build step. `netlify.toml` is already set up with `publish = "."` and `command = ""`.
- 79 pages. Each page is its own HTML file (listed in `page-list.md`). They all load `playbook.bundle.js`, `playbook.css` and `playbook-pages.css`.
- `src/` holds the JSX source files. The live pages do not load them. They are kept for editing only.
- React is self-hosted in `vendor/`. Images are in `assets/`, and one font file is in `assets/fonts/`.
- The canonical domain in every page's head is `https://untangleyouradhd.co.uk`.

**What I need you to do**
1. Check the Netlify CLI is installed (`npx netlify --version`). If not, install it. Log in with `netlify login` if needed.
2. Ask me whether to link to my existing Netlify site or create a new one. If existing, run `netlify link` and let me pick it.
3. Before deploying, run these checks and tell me the results:
   - Every `.html` file listed in `page-list.md` exists.
   - Every local file referenced in the HTML, CSS and `playbook.bundle.js` (`assets/...`, `vendor/...`) exists. List any that are missing.
   - No file is larger than 1 MB, apart from anything in `vendor/`.
4. Do a draft deploy first: `netlify deploy --dir .`. Give me the draft URL so I can check it on my phone.
5. Wait for me to say "go". Then run the production deploy: `netlify deploy --prod --dir .`.
6. After the production deploy, confirm that these load with a 200 status: `/`, `/the-screener.html`, `/adhd-and-pregnancy.html`, `/who-made-this.html`, `/assets/rich-about.webp`, `/playbook.bundle.js`.
7. Check that the custom domain `untangleyouradhd.co.uk` points at this site and that HTTPS is active. If it isn't, tell me the exact DNS records I need to add, and where.

**Please don't**
- Change any page content, styles or file names.
- Add a build step, a framework or a bundler.
- Delete the `src/` folder.

When you're done, give me a short summary: the live URL, anything that failed, and anything I need to do by hand.
