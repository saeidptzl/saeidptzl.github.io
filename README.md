# Saeid Asgharian Shirvan — React Portfolio

A responsive React portfolio focused on AI Automation, Python, FastAPI, REST APIs and applied machine learning.

## Main features

- Split-screen home layout
- Animated role titles
- Dark and light themes
- Full-screen navigation
- About, experience, skills and education sections
- Project cards with custom visuals
- Contact page with email preparation form
- Downloadable CV
- Automatic GitHub Pages deployment through GitHub Actions

## Run locally

```bash
npm install --legacy-peer-deps
npm start
```

Open:

```text
http://localhost:3000
```

## Create a production build

```bash
npm run build
```

## Deploy

The repository includes:

```text
.github/workflows/deploy.yml
```

After the files are pushed to the `main` branch:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Change **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for the deployment workflow to finish.
5. Visit `https://saeidptzl.github.io/`.

## Update content

Most personal content is stored in:

```text
src/content_option.js
```

## Update project links

The three project cards currently link to the general repositories page because exact repository URLs were not provided.

Change each `link` value inside:

```text
src/content_option.js
```

## Replace profile image

Replace:

```text
src/assets/images/saeid-profile.jpg
```

with a new square image using the same filename.
