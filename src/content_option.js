import profileImage from "./assets/images/saeid-profile-cutout.png";
import messageRewriterImage from "./assets/images/project-message.svg";
import jobHelperImage from "./assets/images/project-job.svg";
import jobTrackerImage from "./assets/images/project-api.svg";

const logotext = "SAEID";

const meta = {
  title: "Saeid Asgharian Shirvan | AI Automation & Python Developer",
  description:
    "Portfolio of Saeid Asgharian Shirvan, a junior AI Automation and Python developer in Padova, Italy, focused on FastAPI, REST APIs, LLM integrations and applied machine learning.",
};

const introdata = {
  title: "I'm Saeid Asgharian Shirvan",
  animated: {
    first: "AI Automation Developer",
    second: "Python & FastAPI Developer",
    third: "REST API & LLM Builder",
  },
  description:
    "I build practical Python applications, backend APIs and LLM-powered automation tools for real business workflows.",
  availability: "Available for junior roles · Italy / Remote / Hybrid",
  your_img_url: profileImage,
};

const dataabout = {
  title: "Junior developer focused on useful, production-minded automation.",
  aboutme:
    "I am a junior developer with a 600-hour software development internship completed in Italy. My background combines backend/API experience, web development and applied machine learning. I am now focused on Python, FastAPI and AI automation—building document assistants, professional text tools and reliable REST APIs.",
};

const worktimeline = [
  {
    jobtitle: "Software Developer Intern — Backend/API",
    where: "Tribit Company · Padova, Italy",
    date: "Oct 2024 – Jan 2025",
    details: [
      "Completed a 600-hour technical internship in a real software development environment.",
      "Integrated REST API functionality between frontend and backend components.",
      "Built an administration dashboard for availability and operational data.",
      "Developed backend logic for a custom WordPress availability-management plugin.",
    ],
  },
  {
    jobtitle: "Junior Web/API Developer",
    where: "Freelance & Personal Projects",
    date: "2023 – Present",
    details: [
      "Integrated REST APIs using fetch and JSON for dynamic web content.",
      "Managed code and project history with Git and GitHub.",
      "Moved web/API experience toward Python backend and AI automation projects.",
    ],
  },
];

const education = [
  {
    degree: "Master's Degree in ICT — Cyber Systems",
    institution: "University of Padova, Italy",
    date: "2022 – 2025",
    description:
      "Thesis: modelling and simulation of underwater LoRa communication in freshwater using the DESERT Underwater Framework.",
  },
  {
    degree: "Bachelor's Degree in Biomedical Engineering",
    institution: "Azad University, Bojnord, Iran",
    date: "2016 – 2020",
    description:
      "Thesis: low-cost Ambu-bag mechanical ventilator with an automated compression system.",
  },
];

const skillGroups = [
  {
    title: "Python & Backend",
    items: ["Python", "FastAPI", "REST APIs", "CRUD", "JSON", "OpenAPI / Swagger"],
  },
  {
    title: "AI Automation",
    items: ["OpenAI API", "Claude API", "Prompt Engineering", "RAG Basics", "Document Assistants"],
  },
  {
    title: "Web & Data",
    items: ["JavaScript", "PHP", "SQL Basics", "HTML5", "CSS3", "WordPress"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Linux / Ubuntu", "VS Code", "Debugging", "Problem Solving"],
  },
];

const services = [
  {
    title: "AI Workflow Automation",
    description:
      "Python tools that automate repetitive writing, document-processing and operational workflows through LLM APIs.",
  },
  {
    title: "Backend & REST APIs",
    description:
      "FastAPI services with structured endpoints, validation, CRUD operations and automatic OpenAPI documentation.",
  },
  {
    title: "Applied Machine Learning",
    description:
      "Academic and personal work with CNNs, MFCC voice recognition, SVM, Random Forest, K-Means, PCA and reinforcement learning.",
  },
];

const dataportfolio = [
  {
    img: messageRewriterImage,
    title: "AI Message Rewriter",
    description:
      "A Python + LLM tool that rewrites emails, LinkedIn messages and follow-ups into polished professional versions.",
    technologies: ["Python", "LLM API", "Prompt Engineering"],
    link: "https://github.com/saeidptzl?tab=repositories",
    linkLabel: "View repositories",
  },
  {
    img: jobHelperImage,
    title: "AI Job Application Helper",
    description:
      "Analyzes job descriptions, extracts required skills and suggests targeted improvements for stronger applications.",
    technologies: ["Python", "Text Analysis", "LLM Integration"],
    link: "https://github.com/saeidptzl?tab=repositories",
    linkLabel: "View repositories",
  },
  {
    img: jobTrackerImage,
    title: "FastAPI Job Tracker API",
    description:
      "A REST API for managing job applications through CRUD endpoints, JSON responses and automatic Swagger documentation.",
    technologies: ["FastAPI", "REST API", "CRUD", "OpenAPI"],
    link: "https://github.com/saeidptzl?tab=repositories",
    linkLabel: "View repositories",
  },
];

const contactConfig = {
  YOUR_EMAIL: "saeid.asgharianshirvan@studenti.unipd.it",
  YOUR_FONE: "+39 389 432 0164",
  LOCATION: "Padova, Italy",
  description:
    "Open to junior AI automation, Python, backend/API and software development opportunities in Italy or remotely.",
};

const socialprofils = {
  github: "https://github.com/saeidptzl",
  linkedin: "https://www.linkedin.com/in/saeid-asgharian-shirvan",
  email: "mailto:saeid.asgharianshirvan@studenti.unipd.it",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  education,
  skillGroups,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
