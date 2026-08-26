# probe.md

The landing page for [Probe](https://github.com/ds1/socratic-probes), a set of
six-lens critical-analysis commands for Claude Code. Live at
[probe.md](https://probe.md).

A static site (plain HTML, CSS, and vanilla JS), no build step. Companion to
[boilerplate.md](https://boilerplate.md).

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy (GitHub Pages)

1. Push this repo to GitHub.
2. Settings -> Pages -> Build from branch -> `master` / root.
3. The `CNAME` file points the site at `probe.md`; set that A/CNAME record with
   your DNS provider (GitHub Pages IPs, or a CNAME to `<user>.github.io`).

## Files

- `index.html` - the page
- `css/style.css` - styles (shares the boilerplate.md design tokens)
- `js/app.js` - install-tab switching and copy buttons
- `favicon.svg`, `og-image.svg` - icons and social preview
- `CNAME` - custom domain
