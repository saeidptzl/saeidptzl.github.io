# Saeid Asgharian Shirvan: Portfolio

Source of my portfolio site, published at <https://saeidptzl.github.io/>.

It is a single-page React site built with Create React App and deployed to GitHub Pages through GitHub Actions. There is no backend, and the only runtime dependencies are React and React DOM.

A Persian version of this guide is in [README_FA.md](README_FA.md).

## Requirements

- Node.js 22, the version the deployment workflow uses
- npm

## Run locally

```bash
npm ci
npm start
```

The site opens at <http://localhost:3000>.

## Checks

```bash
npm test
CI=true npm run build
```

`npm test` checks the rendered page: one H1 with the correct name, every PDF link pointing to the current CV, no contact form, and no details from the old CV. With `CI=true`, the build treats lint warnings as errors, as it does on GitHub Actions.

## Preview the production build

```bash
npm run build
python3 -m http.server 8000 --directory build
```

Then open <http://localhost:8000>. This simple server has no `404.html` fallback, so the redirects for old URLs only work on GitHub Pages.

## Deploy

`.github/workflows/deploy.yml` runs on every push to `main`. It runs `npm ci` and `npm run build`, then publishes the `build` folder to GitHub Pages.

The repository needs this setting once: **Settings → Pages → Source → GitHub Actions**.

The site is served from the root of `saeidptzl.github.io`, which `homepage` in `package.json` already reflects. If it ever moves to a sub-path, change `homepage` and update the absolute URLs in `public/index.html`, `public/robots.txt` and `public/sitemap.xml`.

## Update the content

| What | Where |
| --- | --- |
| All page text, projects, skills and links | `src/content_option.js` |
| Images | `src/assets/images/` |
| Page title, description and social preview | `public/index.html`, `public/og-image.png` |
| Colours, type and layout | `src/styles.css` |

### Replace the CV

1. Overwrite `public/Saeid_Asgharian_Shirvan_CV.pdf`.
2. If the filename changes, update `cvFilename` in `src/content_option.js` and the link in the `<noscript>` block of `public/index.html`.

All CV buttons read the same setting, so nothing else needs changing.

### Project screenshots

The DenaQC and Mondo Tappeti images are screenshots of the live sites, and their captions give the capture date. Update both the image and the caption when a site changes. The WordLoop images come from the public [wordloop-showcase](https://github.com/saeidptzl/wordloop-showcase) repository and use sample data.

## Old URLs

The previous site had separate pages. GitHub Pages serves `404.html` (a copy of `index.html`, made by the `postbuild` script) for unknown paths, and `src/index.js` then redirects them:

| Old URL | Goes to |
| --- | --- |
| `/about` | `/#about` |
| `/portfolio` | `/#projects` |
| `/contact` | `/#contact` |
| `/Saeid_Asgharian_CV.pdf` | the current CV |
| anything else | the home page |

## Licences

- `LICENSE` is the MIT licence of the template this repository started from. It is kept as required.
- The fonts in `public/fonts/` (Schibsted Grotesk and IBM Plex Mono) are under the SIL Open Font License. The licence texts are next to them.
- React's licence notices are added to the build output automatically.
