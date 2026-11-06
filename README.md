# Saeid Asgharian Shirvan — Developer Portfolio

**Junior Software Developer | Backend Development, REST APIs & IoT**

Personal portfolio website showcasing my software development experience, technical skills, academic background, and selected projects.

I hold a Master's degree in ICT – Cyber Systems from the University of Padova, Italy. My work includes backend and API development, WordPress customization, web applications, and embedded IoT systems.

**Live Website:** https://saeidptzl.github.io/

**GitHub:** https://github.com/saeidptzl

**LinkedIn:** https://www.linkedin.com/in/saeid-asgharian-shirvan/

---

## About This Project

This repository contains the source code for my personal developer portfolio.

The website was redesigned to provide a clear, responsive, and accessible presentation of my professional background and technical work.

It is built with **React and Create React App**, deployed through **GitHub Actions**, and hosted on **GitHub Pages**.

The application is entirely frontend-based and does not require a backend server or database.

## Key Features

- Modern, responsive single-page design
- Optimized layouts for desktop, tablet, and mobile
- Accessible navigation and mobile menu
- Smooth navigation between sections
- Reduced-motion accessibility support
- Project presentations with screenshots and verified links
- Interactive visualization of a four-node LoRa network
- Professional experience and education timeline
- Categorized technical skills
- Downloadable PDF CV
- Direct contact and social links
- Search-engine and social-sharing metadata
- Automatic deployment through GitHub Actions

## Portfolio Sections

| Section | Description |
|---|---|
| Home | Professional introduction and primary navigation |
| About | Background, education, and development interests |
| Projects | Selected software, IoT, and web projects |
| Experience | Professional experience and education |
| Skills | Programming languages, frameworks, and technical tools |
| Contact | Email, LinkedIn, GitHub, and CV |

## Featured Projects

### 1. LoRa Multi-Node Forwarding Network

**Technologies:** Arduino, C/C++, LoRa, Embedded Systems, SD Logging

My master's thesis project at the University of Padova.

Developed a four-node LoRa communication network using Arduino MKR WAN 1310 boards.

The system consists of:

- Node 1: Sender
- Node 2: Forwarder
- Node 3: Forwarder
- Node 4: Receiver

The project implements sequential packet forwarding, radio configuration management, and SD-card logging.

Recorded communication data includes RSSI and SNR measurements for evaluating wireless link performance.

**Repository:** https://github.com/saeidptzl/LoRa-MultiNode-Network

### 2. WordLoop — Vocabulary Learning Application

**Technologies:** React, TypeScript, Vite, IndexedDB, PWA

A vocabulary-learning application developed to support language study through spaced repetition and active recall.

Features include:

- Vocabulary management
- Spaced-repetition flashcards
- Written vocabulary quizzes
- Daily learning goals
- Progress tracking and statistics
- Offline functionality
- Local data storage
- Backup and restore
- Responsive layouts

The application was originally designed for studying Italian vocabulary with Persian translations.

**Public Showcase:** https://github.com/saeidptzl/wordloop-showcase

The application source code is maintained in a private repository.

### 3. DenaQC — Corporate Website

**Technologies:** WordPress, PHP, JavaScript, HTML, CSS

Development and customization of a B2B corporate website for product inspection and quality-control services.

Work includes:

- Responsive website development
- WordPress customization
- Custom components and page layouts
- Service and industry pages
- Hosting, SSL, and backup configuration
- Technical maintenance
- Mobile optimization
- On-page SEO improvements

**Live Website:** https://denaqc.com/

### 4. Mondo Tappeti Italy — E-commerce

**Technologies:** Shopify, Liquid, HTML, CSS

Customization and optimization of an Italian e-commerce website specializing in rugs.

Work includes:

- Shopify theme customization
- Responsive storefront improvements
- Product and collection organization
- Navigation and filtering improvements
- Product content optimization
- SEO titles, descriptions, and image metadata
- Mobile shopping experience improvements

**Live Website:** https://mondotappetitaly.it/

## Professional Experience

### Software Developer Intern — Backend/API

**Tribit Company | Padova, Italy**

October 2024 – January 2025 | 600-hour internship

Worked on the backend development of a custom WordPress plugin for managing babysitter profiles, availability, and operational information.

Main responsibilities included:

- Developing PHP backend functionality
- Implementing MySQL database operations
- Creating and maintaining CRUD functionality
- Integrating WordPress REST API endpoints
- Implementing AJAX-based functionality
- Developing an administrative dashboard
- Managing image uploads and input validation

## Technical Skills

| Category | Technologies |
|---|---|
| Backend & APIs | PHP, Python, FastAPI, REST API, JSON, AJAX, CRUD |
| Databases | SQL, MySQL |
| Web Development | JavaScript, HTML5, CSS3, WordPress |
| E-commerce | Shopify, Liquid |
| Embedded & IoT | Arduino, C/C++, LoRa |
| Systems & Deployment | Linux, GitHub Actions, Hosting, SSL, Backups |
| Tools | Git, GitHub |
| Additional Skills | Responsive Design, SEO, Debugging |

---

## Technology Stack

The portfolio website itself uses:

| Component | Technology |
|---|---|
| Frontend | React 18 |
| Language | JavaScript |
| Styling | Custom CSS |
| Build Tool | Create React App / React Scripts |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Version Control | Git and GitHub |
| Fonts | Schibsted Grotesk, IBM Plex Mono |

The website does not require a backend or database.

Its runtime dependencies are React and React DOM.

## Project Structure

```text
saeidptzl.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── fonts/
│   ├── Saeid_Asgharian_Shirvan_CV.pdf
│   ├── index.html
│   ├── og-image.png
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   ├── App.js
│   ├── App.test.js
│   ├── content_option.js
│   ├── index.js
│   └── styles.css
├── README.md
├── README_FA.md
├── LICENSE
├── package.json
└── package-lock.json
```

## Getting Started

### Prerequisites

- Node.js 22
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/saeidptzl/saeidptzl.github.io.git
cd saeidptzl.github.io
```

### Install Dependencies

```bash
npm ci
```

### Start the Development Server

```bash
npm start
```

Open:

http://localhost:3000

The development server automatically reloads the application when source files change.

## Testing

Run the automated tests:

```bash
CI=true npm test -- --watch=false
```

Create an optimized production build:

```bash
CI=true npm run build
```

The automated tests verify important portfolio requirements, including:

- Correct primary heading
- Updated CV links
- Removal of outdated CV references
- Absence of an unconfigured contact form

The production build also checks for compilation errors and lint warnings.

### Preview the Production Build

```bash
npm run build
python3 -m http.server 8000 --directory build
```

Open:

http://localhost:8000

This basic local server does not reproduce every GitHub Pages routing behavior.

## Deployment

The portfolio is automatically deployed using GitHub Actions.

**Live URL:** https://saeidptzl.github.io/

### Deployment Workflow

The configuration is located at:

```text
.github/workflows/deploy.yml
```

On each push to the `main` branch, GitHub Actions:

1. Checks out the repository.
2. Configures Node.js.
3. Installs dependencies using `npm ci`.
4. Builds the production application.
5. Uploads the generated build artifacts.
6. Deploys the website to GitHub Pages.

### GitHub Pages Configuration

Navigate to:

**Repository → Settings → Pages**

Set the deployment source to:

**GitHub Actions**

No manual upload is required after the workflow has been configured.

### Deployment URL

The website is hosted at the root domain:

```text
https://saeidptzl.github.io/
```

The `homepage` configuration in `package.json` must match the hosting location.

If the website is moved to a repository subdirectory, update the relevant paths and metadata.

---

## Updating the Website

Most website content can be edited without changing the component structure.

| What to Update | File or Directory |
|---|---|
| Introduction and professional information | `src/content_option.js` |
| Projects and descriptions | `src/content_option.js` |
| Experience and education | `src/content_option.js` |
| Skills and contact links | `src/content_option.js` |
| Images and screenshots | `src/assets/images/` |
| Colors, typography, spacing, and layout | `src/styles.css` |
| SEO and social metadata | `public/index.html` |
| Social preview image | `public/og-image.png` |
| Downloadable CV | `public/Saeid_Asgharian_Shirvan_CV.pdf` |

### Replacing the CV

The current downloadable CV is:

```text
public/Saeid_Asgharian_Shirvan_CV.pdf
```

To update it:

1. Replace the existing PDF with the new CV.
2. Keep the same filename to avoid unnecessary link changes.
3. If the filename changes, update `cvFilename` in `src/content_option.js`.
4. Update the CV reference in the `<noscript>` block of `public/index.html`.
5. Run the production build.
6. Test the CV download buttons.
7. Commit and push the changes.

All CV download buttons use the centralized CV configuration.

### Updating Project Screenshots

The DenaQC and Mondo Tappeti images are screenshots of their live websites.

When replacing them, update the relevant capture dates in the content configuration.

WordLoop screenshots are based on sample data from its public showcase repository.

---

## Legacy URL Support

The previous portfolio used multiple routes.

The current website is a single-page application with section-based navigation.

For compatibility with older links, GitHub Pages serves a generated `404.html` file that loads the React application and allows client-side redirects.

| Previous URL | Current Destination |
|---|---|
| `/about` | `/#about` |
| `/portfolio` | `/#projects` |
| `/contact` | `/#contact` |
| `/Saeid_Asgharian_CV.pdf` | Current CV PDF |
| Other unknown paths | Homepage |

The fallback is generated during the production build.

## Accessibility and Performance

The website includes:

- Semantic HTML
- One primary H1
- Accessible interactive elements
- Keyboard navigation
- Visible focus indicators
- Mobile navigation with appropriate accessibility attributes
- Reduced-motion support
- Optimized WebP images
- Self-hosted fonts
- Responsive layouts
- Search-engine metadata
- Social-sharing metadata

The redesign was tested at viewport widths of 360, 390, 768, 1024, and 1440 pixels during development.

## Privacy and Security

- No backend server is required.
- No user accounts or authentication are implemented.
- No user database is used.
- No contact form collects personal information.
- External contact links open verified contact destinations.
- Private project source code is not included.
- No API credentials or secrets are required for the frontend.

## License and Attribution

The repository retains its original MIT license.

Self-hosted fonts use the SIL Open Font License:

- Schibsted Grotesk
- IBM Plex Mono

The corresponding license files are included in `public/fonts/`.

React dependency license notices are preserved in the production build.

## Contact

**Saeid Asgharian Shirvan**

Junior Software Developer — Backend, API & IoT

Based in Italy.

**Email:** saeed.asgharian97@gmail.com

**Portfolio:** https://saeidptzl.github.io/

**GitHub:** https://github.com/saeidptzl

**LinkedIn:** https://www.linkedin.com/in/saeid-asgharian-shirvan/

---

**Built and maintained by Saeid Asgharian Shirvan.**
