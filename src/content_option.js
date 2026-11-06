// All page text lives here. Name, education, experience, skills, dates and
// contact details come from the CV in public/. Project details also draw on the
// public repositories and live sites linked from each project.
import portrait from "./assets/images/portrait.webp";
import denaqcShot from "./assets/images/denaqc.webp";
import mondoShot from "./assets/images/mondo-tappeti.webp";
import wordloopDashboard from "./assets/images/wordloop-dashboard.webp";
import wordloopStudy from "./assets/images/wordloop-study.webp";
import wordloopQuiz from "./assets/images/wordloop-quiz.webp";

const cvFilename = "Saeid_Asgharian_Shirvan_CV.pdf";

export const cv = {
  filename: cvFilename,
  url: `${process.env.PUBLIC_URL}/${cvFilename}`,
  format: "PDF, Italian",
};

export const profile = {
  name: "Saeid Asgharian Shirvan",
  nameLines: ["Saeid Asgharian", "Shirvan"],
  role: "Junior software developer: backend, APIs and IoT",
  intro:
    "I work on the parts of a system people don't see: backend logic, REST APIs and devices that pass data to each other. I have a Master's in ICT – Cyber Systems from the University of Padova and 600 hours of backend internship experience.",
  portrait: {
    src: portrait,
    width: 412,
    height: 420,
    alt: "Portrait of Saeid Asgharian Shirvan",
  },
  facts: [
    "Based in Vicenza, Italy",
    "Available immediately",
    "Open to relocating anywhere in Italy",
  ],
};

export const navigation = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const about = {
  lead: "I started in biomedical engineering, where my thesis was a mechanical ventilator prototype: mechanical and electronic parts, a control system, then testing and validation.",
  paragraphs: [
    "My Master's in ICT – Cyber Systems at the University of Padova took me further into software and networks. My thesis there was a four-node LoRa network on Arduino, and during the degree I spent 600 hours as a backend/API intern at Tribit Company, building the backend of a custom WordPress plugin in PHP and MySQL.",
    "I've also built company websites and a Shopify store, and looked after their hosting, SSL and backups.",
    "I'm now looking for a junior role in backend or API development, or in IoT and systems integration.",
  ],
};

export const projectsIntro =
  "Five projects, from radio firmware to client websites. Each entry says what I did and whether the code is public.";

export const lora = {
  id: "lora",
  title: "LoRa Multi-Node Forwarding Network",
  kind: "Master's thesis · Embedded / IoT",
  status: { label: "Public code", isPublic: true },
  nodes: [
    {
      name: "Node 1",
      role: "Sender",
      detail:
        "Sends the data packets, then a control frame that moves the chain to the next radio settings.",
    },
    {
      name: "Node 2",
      role: "Forwarder",
      detail:
        "Checks source and hop, logs RSSI and SNR to its SD card, then forwards to node 3.",
    },
    {
      name: "Node 3",
      role: "Forwarder",
      detail: "Does the same one hop further along, forwarding to node 4.",
    },
    {
      name: "Node 4",
      role: "Receiver",
      detail: "End of the chain. Logs every packet it receives, with RSSI and SNR.",
    },
  ],
  caption:
    "The chain as built: four Arduino MKR WAN 1310 boards, each with its own SD card, on 868 MHz.",
  tests: [
    { test: "1", sf: "SF7", cr: "4/5" },
    { test: "2", sf: "SF7", cr: "4/8" },
    { test: "3", sf: "SF12", cr: "4/5" },
    { test: "4", sf: "SF12", cr: "4/8" },
  ],
  testsNote: "100 packets per test, 20 seconds between transmissions.",
  logLine:
    "Node:4 | Msg:From:3 | PTZL is working on it | count:103 | RSSI:-79 | SNR:12.25 | Count:100",
  logSource: "Last line of results/example-logs/recv4.txt in the repository",
  problem:
    "Pass messages along a chain of four Arduino boards, strictly in order, and measure link quality at each hop under different radio settings. Each board also writes to an SD card over SPI, and that must not get in the way of its radio.",
  contribution:
    "Developed the firmware for the sender, the two forwarders and the receiver. That covers packet forwarding with source and hop checks, automatic synchronisation through control frames and a test label in every packet, error handling, per-node configuration and packet logging to SD cards.",
  technologies: ["Arduino MKR WAN 1310", "C/C++", "LoRa", "SPI", "SD card logging"],
  outcome:
    "Tested end to end across all four devices. The sample logs in the repository show each node receiving from the one before it, with RSSI and SNR on every line.",
  links: [
    {
      label: "View code on GitHub",
      href: "https://github.com/saeidptzl/LoRa-MultiNode-Network",
    },
  ],
};

export const plugin = {
  id: "plugin",
  title: "WordPress Plugin for Babysitter Management",
  kind: "Internship at Tribit Company · Backend / API",
  status: { label: "Private code", isPublic: false },
  privacyNote: "The company's source code is not public, so there is no link or screenshot here.",
  flowCaption: "How the parts connect (simplified)",
  flow: [
    { name: "Frontend and admin dashboard", detail: "Shortcodes, AJAX requests, availability management" },
    { name: "REST API", detail: "Communication between frontend and backend" },
    { name: "Plugin logic", detail: "PHP, WordPress API, input validation, image uploads" },
    { name: "MySQL", detail: "Custom tables and CRUD operations" },
  ],
  problem:
    "Babysitter profiles, availability and related data had to be managed from inside WordPress, by both the site's frontend and its administrators.",
  contribution:
    "Developed the plugin's backend logic in PHP with the WordPress API, on custom MySQL tables. Added the REST API features, AJAX requests and shortcodes for dynamic content, and built the admin dashboard.",
  technologies: ["PHP", "MySQL", "WordPress API", "REST API", "AJAX"],
  outcome:
    "Profile and availability management, the REST API features and the admin dashboard were all built during the 600-hour internship (Oct 2024 – Jan 2025).",
};

export const wordloop = {
  id: "wordloop",
  title: "WordLoop",
  kind: "Personal project · Vocabulary-learning web app",
  status: { label: "Private code, public showcase", isPublic: false },
  images: [
    {
      src: wordloopDashboard,
      width: 1280,
      height: 1000,
      alt: "WordLoop dashboard on desktop: cards due now, new cards today, reviews today, a study streak and a 14-day activity chart",
    },
    {
      src: wordloopStudy,
      width: 520,
      height: 1125,
      alt: "Flashcard study session on a phone in dark mode, with Again, Hard, Good and Easy buttons that each show the next review interval",
    },
    {
      src: wordloopQuiz,
      width: 520,
      height: 1125,
      alt: "Written quiz on a phone: a Persian prompt, the typed Italian answer and the result Correct",
    },
  ],
  caption:
    "Screenshots from the public showcase. They use fictional sample words and a simulated study history.",
  problem:
    "Learning words from a list is easy to start and hard to keep up: without a plan, you review what you already know and forget the rest. I wanted a tool for my own Italian study, with Persian translations, that schedules each review and works offline.",
  contribution:
    "Built a browser-first React and TypeScript app that keeps its data in IndexedDB and schedules flashcards with the FSRS algorithm. It also has typed quizzes, statistics and validated backup and restore. An optional Node.js server sends daily Web Push reminders, with hashed tokens, rate limits, restricted CORS and SSRF protection.",
  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "IndexedDB",
    "ts-fsrs",
    "zod",
    "Workbox",
    "Node.js",
    "SQLite",
    "Web Push",
    "Vitest",
    "Playwright",
  ],
  outcome:
    "All 172 automated tests passed on 2 November 2026: 111 unit and integration, 35 reminder-server and 26 browser tests. The app isn't deployed yet, so installing it on a real phone and real push delivery are still untested.",
  links: [
    {
      label: "View showcase on GitHub",
      href: "https://github.com/saeidptzl/wordloop-showcase",
    },
  ],
  privacyNote: "The source code can be shared with reviewers on request.",
};

export const websites = [
  {
    id: "denaqc",
    title: "DenaQC",
    kind: "B2B company website · WordPress",
    status: { label: "Live website", isPublic: true },
    image: {
      src: denaqcShot,
      width: 1200,
      height: 750,
      alt: "DenaQC home page: the heading Independent Product Inspection in China over an aerial photo of a container port",
    },
    caption: "Screenshot of the live site, 6 November 2026.",
    problem:
      "An independent product-inspection company working in China needed a B2B website covering its services, sectors and pricing, with a clear way for buyers to get in touch.",
    contribution:
      "Took the site from hosting and domain setup to launch. Built responsive templates and custom WordPress components for services, sectors, pricing, the blog, contact forms and galleries. Configured SSL and backups, optimised for mobile, handled on-page SEO, and maintain its content and features.",
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "On-page SEO"],
    outcome: "The site is live over HTTPS at denaqc.com.",
    links: [{ label: "denaqc.com", href: "https://denaqc.com/" }],
  },
  {
    id: "mondo-tappeti",
    title: "Mondo Tappeti Italy",
    kind: "E-commerce store · Shopify",
    status: { label: "Live store", isPublic: true },
    image: {
      src: mondoShot,
      width: 1200,
      height: 750,
      alt: "Mondo Tappeti store: the navigation bar above a row of rug collections, including modern, Persian, silk and antique rugs",
    },
    caption: "Screenshot of the live store, 6 November 2026.",
    problem:
      "A Shopify store selling handmade Persian and oriental rugs needed a redesign, with clearer navigation and collections on desktop and mobile, and better on-page SEO.",
    contribution:
      "Redesigned the store by customising the theme code in Liquid, HTML and CSS. Improved the layout, navigation, collections and responsive behaviour, and worked on titles, meta descriptions, URLs and image optimisation for products and collections.",
    technologies: ["Shopify", "Liquid", "HTML", "CSS", "On-page SEO"],
    outcome: "The store is live at mondotappetitaly.it.",
    links: [{ label: "mondotappetitaly.it", href: "https://mondotappetitaly.it/" }],
  },
];

export const experience = [
  {
    dates: "Oct 2024 – Jan 2025",
    title: "Software Developer Intern, Backend/API",
    place: "Tribit Company, Padova, Italy · Internship, 600 hours",
    details: [
      "Developed the backend logic of a custom WordPress plugin for managing babysitter profiles, availability and data, using PHP, MySQL and the WordPress API.",
      "Created custom database tables and CRUD operations for adding, updating, viewing and deleting data.",
      "Implemented REST API features for communication between frontend and backend, along with AJAX requests and shortcodes for dynamic content.",
      "Built an admin dashboard for managing availability and operational information.",
      "Handled image uploads and input validation following standard WordPress practices.",
    ],
  },
];

export const education = [
  {
    dates: "2022 – 2025",
    title: "Master's Degree in ICT – Cyber Systems",
    place: "University of Padova, Italy",
    detail: "Thesis: LoRa Multi-Node Forwarding Network (4-Node Chain).",
  },
  {
    dates: "2017 – 2021",
    title: "Bachelor's Degree in Biomedical Engineering",
    place: "Azad University, Bojnord, Iran",
    detail:
      "Thesis: design and construction of a mechanical ventilator prototype, integrating mechanical and electronic components, a control system, testing and validation.",
  },
];

export const skills = [
  {
    group: "Backend and APIs",
    items: [
      "PHP",
      "WordPress API",
      "REST API",
      "AJAX",
      "JSON",
      "CRUD",
      "Python",
      "FastAPI",
      "OpenAPI/Swagger",
    ],
  },
  {
    group: "Databases",
    items: ["SQL", "MySQL (custom tables, CRUD operations)"],
  },
  {
    group: "Embedded and IoT",
    items: ["Arduino (C/C++)", "LoRa", "Packet forwarding", "SD card logging"],
  },
  {
    group: "Web development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "WordPress (themes and plugins)",
      "Shopify/Liquid",
      "Responsive design",
      "On-page SEO",
    ],
  },
  {
    group: "Linux, hosting and deployment",
    items: [
      "Linux/Ubuntu",
      "Website hosting and domains",
      "SSL",
      "Backups",
      "Website deployment",
      "Basic security",
    ],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub"],
  },
  {
    group: "Languages",
    items: ["Persian (native)", "Kurdish (native)", "English (C1)", "Italian (A2, learning)"],
  },
];

export const contact = {
  intro:
    "I'm looking for a junior role in backend or API development, or in IoT and systems integration. I'm available immediately and open to relocating anywhere in Italy.",
  email: "saeed.asgharian97@gmail.com",
  links: [
    {
      label: "GitHub",
      text: "github.com/saeidptzl",
      href: "https://github.com/saeidptzl",
    },
    {
      label: "LinkedIn",
      text: "linkedin.com/in/saeid-asgharian-shirvan",
      href: "https://www.linkedin.com/in/saeid-asgharian-shirvan",
    },
  ],
};
