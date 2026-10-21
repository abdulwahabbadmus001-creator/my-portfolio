export type Status =
  | "Live"
  | "Prototype"
  | "In Development"
  | "Paused"
  | "Experiment";
export type Project = {
  name: string;
  slug: string;
  status: Status;
  kind: string;
  year: string;
  role: string;
  summary: string;
  built: string;
  stack: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
  problem?: string;
  approach?: string;
  decisions?: string;
  remaining?: string;
};
const gh = "https://github.com/abdulwahabbadmus001-creator/";
export const projects: Project[] = [
  {
    name: "Africa & Global Power Platform",
    slug: "agp-platform",
    status: "Live",
    kind: "Research infrastructure",
    year: "2026",
    role: "Builder",
    summary:
      "A publishing and research workspace for African policy analysis and collaboration.",
    built:
      "Editorial workflows, research submission interfaces and publishing infrastructure.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    repo: gh + "Africa-Global-Power-Platform",
    live: "https://africaglobalpower.netlify.app/",
    featured: true,
    problem:
      "Research publishing needs structured editorial processes beyond a static blog.",
    approach:
      "Separate the research initiative from the technical platform supporting its work.",
    decisions: "A typed frontend with API-backed publishing workflows.",
    remaining:
      "Continue production validation and editorial workflow improvements.",
  },
  {
    name: "OjaFlow",
    slug: "ojaflow",
    status: "Live",
    kind: "Small-business software",
    year: "2026",
    role: "Founder · Developer",
    summary:
      "Business record-keeping for traders and SMEs managing sales, stock, expenses, debts and invoices.",
    built: "Business dashboard, records, invoices and account workflows.",
    stack: ["TypeScript", "React", "FastAPI", "PostgreSQL"],
    repo: gh + "OjaFlow",
    live: "https://ojaflow.netlify.app/",
    featured: true,
    problem:
      "Everyday trading records are difficult to reconcile when kept across notebooks and messages.",
    approach: "Put core records in one straightforward interface.",
    decisions: "Own API and relational storage, with a lightweight frontend.",
    remaining:
      "Improve real-world testing, reliability and user feedback cycles.",
  },
  {
    name: "LexiNaija",
    slug: "lexinaija",
    status: "Live",
    kind: "Language access",
    year: "2026",
    role: "Developer",
    summary:
      "A Nigerian-language learning and reference application built around digital inclusion.",
    built: "Language discovery, vocabulary and learning interfaces.",
    stack: ["TypeScript", "React"],
    repo: gh + "LexiNaija",
    live: "https://lexinaija.netlify.app/",
    featured: true,
  },
  {
    name: "Moji's Heritage",
    slug: "mojis-heritage",
    status: "Live",
    kind: "Cultural discovery",
    year: "2026",
    role: "Developer",
    summary:
      "A digital space for exploring and preserving Nigerian cultural heritage.",
    built: "Public-facing cultural content and administration workflows.",
    stack: ["React", "Firebase", "i18next", "Leaflet"],
    repo: gh + "mojis-heritage",
    live: "https://mojis-heritage-ae06c.web.app/",
    featured: true,
  },
  {
    name: "Decidr",
    slug: "decidr",
    status: "Live",
    kind: "Decision tool",
    year: "2026",
    role: "Developer",
    summary: "A compact web application for thinking through everyday choices.",
    built: "An interactive decision-making interface.",
    stack: ["JavaScript", "Web"],
    repo: gh + "decidr-app",
    live: "https://decidrapp.netlify.app/",
    featured: true,
  },
  {
    name: "My Journey So Far",
    slug: "my-journey",
    status: "Live",
    kind: "Personal publishing",
    year: "2026",
    role: "Developer",
    summary:
      "An earlier personal storytelling website and source of biographical context.",
    built: "A digital memoir and portfolio experiment.",
    stack: ["Web", "Firebase"],
    repo: gh + "my-journey-so-far",
    live: "https://myjourneysofar.netlify.app/",
  },
  {
    name: "FocusMate",
    slug: "focusmate",
    status: "Prototype",
    kind: "Productivity",
    year: "2026",
    role: "Developer",
    summary: "A focus timer exploring simple productivity routines.",
    built: "Timed focus sessions and interface experiments.",
    stack: ["JavaScript", "PWA"],
    repo: gh + "FocusMate",
  },
  {
    name: "AfriSync",
    slug: "afrisync",
    status: "In Development",
    kind: "Offline-first systems",
    year: "2026",
    role: "Developer",
    summary:
      "An offline/online synchronisation experiment for unreliable connectivity.",
    built: "API, local storage and synchronisation states.",
    stack: ["Python", "FastAPI", "SQLite"],
    repo: gh + "afrisync",
    problem: "Connectivity cannot be assumed in many mobile environments.",
    approach:
      "Queue local changes and synchronise them when connectivity returns.",
    decisions:
      "A small FastAPI service and explicit local synchronisation states.",
    remaining:
      "Registration and remote deployment reliability are still being worked on.",
  },
  {
    name: "NaijaHomes",
    slug: "naijahomes",
    status: "Paused",
    kind: "Property technology",
    year: "2026",
    role: "Developer",
    summary:
      "A paused property-marketplace build exploring listings, moderation and role-aware workflows.",
    built:
      "Authentication, workspace roles, multilingual UI and property-media workflows.",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI"],
    repo: gh + "NaijaHomes",
    problem: "Property discovery needs clearer listing and trust workflows.",
    approach:
      "Model buyer, seller, agent and administrator experiences separately.",
    decisions: "Role-aware workspaces and a distinct backend.",
    remaining:
      "Development is paused; no public marketplace launch is claimed.",
  },
  {
    name: "PurposePath AI",
    slug: "purposepath",
    status: "Prototype",
    kind: "Education",
    year: "2026",
    role: "Builder",
    summary: "An exploration of educational and career guidance tools.",
    built: "Early-stage concept and technical exploration.",
    stack: ["AI", "Web"],
    repo: gh + "PurposePath-AI",
  },
  {
    name: "Sankofa Link",
    slug: "sankofa",
    status: "Prototype",
    kind: "Digital inclusion",
    year: "2026",
    role: "Builder",
    summary: "An exploratory project related to access and connection.",
    built: "Early-stage repository and concept work.",
    stack: ["Web"],
    repo: gh + "sankofa-link",
  },
  {
    name: "ForeTrend",
    slug: "foretrend",
    status: "Experiment",
    kind: "Technical experiment",
    year: "2026",
    role: "Developer",
    summary: "An independent technical exploration.",
    built: "Experimental implementation.",
    stack: ["Python"],
    repo: gh + "ForeTrend",
  },
  {
    name: "Modern Python Mini Projects",
    slug: "python-mini",
    status: "Experiment",
    kind: "Learning project",
    year: "2026",
    role: "Learner · Developer",
    summary: "Small Python projects for practising programming concepts.",
    built: "A collection of exercises and mini-applications.",
    stack: ["Python"],
    repo: gh + "mini-python-modern-projects",
  },
];
export const publications = [
  {
    title: "When the Regulator Hallucinates",
    subtitle: "What South Africa’s withdrawn AI policy teaches the continent",
    type: "Policy analysis",
    year: "2026",
    url:
      gh +
      "Africa-Global-Power/blob/main/publications/2026/when-the-regulator-hallucinates-what-south-africas-withdrawn-ai-policy-teaches-the-continent/article.md",
  },
  {
    title: "The AI ROI Crisis",
    subtitle:
      "An examination of the gap between AI investment narratives and demonstrable returns.",
    type: "Research analysis",
    year: "2026",
    url:
      gh +
      "Africa-Global-Power/blob/main/publications/2026/the-ai-roi-crisis-what-a-70-billion-global-failure-means-for-africas-ai-investment-window/article.md",
  },
  {
    title:
      "Linguistic Sovereignty and Algorithmic Justice: Toward Governance Frameworks for Culturally-Grounded AI in Multilingual African States",
    subtitle:
      "Nigeria's more than 500 indigenous languages show why AI governance in Africa cannot be built on data alone",
    type: "Research analysis",
    year: "2026",
    url:
      gh +
      "Africa-Global-Power/blob/main/publications/2026/linguistic-sovereignty-and-algorithmic-justice-toward-governance-frameworks-for-culturally-grounded-ai-in-multilingual-african-states/article.md",
  },
];
export const experience = [
  {
    role: "Founder & Analyst / Lead Analyst",
    place: "Africa & Global Power",
    period: "2024–Present",
    detail: "Independent research, publication and policy analysis.",
  },
  {
    role: "Director of Research & Development",
    place: "The Visionnaires",
    period: "2025-2026",
    detail: "Research and development responsibilities.",
  },
  {
    role: "Director, Research, Innovation & Operations — Founding",
    place: "Sourcely Integrated Limited",
    period: "2026–Present",
    detail:
      "Research, operational planning and innovation in an agro-allied venture.",
  },
];
export const education = {
  degree: "B.A. History and Diplomatic Studies",
  school: "Tai Solarin Federal University of Education, Ijagun",
  year: "2025",
  result: "Second Class Upper · CGPA 4.18/5.00",
  methods: "Historical research, archival inquiry and oral-history methods.",
};
export const learning = [
  {
    name: "CS50: Introduction to Computer Science",
    provider: "Harvard / edX",
    status: "Currently studying",
  },
  {
    name: "Python",
    provider: "freeCodeCamp",
    status: "Currently studying",
  },
];
export const training = [
  {
    name: "TechCrush Mobile App Development Programme",
    date: "Completed June 2026",
  },
  {
    name: "Heinrich Böll Foundation Nigeria Green Academy Fellowship",
    date: "Completed 2026",
  },
];
export const skills = [
  {
    name: "Languages & interfaces",
    items:
      "Python · C · JavaScript · TypeScript · React · Next.js · React Native · Expo · HTML/CSS · Tailwind · Scratch",
  },
  {
    name: "Backend & data",
    items: "FastAPI · REST APIs · SQLite · PostgreSQL · Neon · Firebase",
  },
  {
    name: "Workflow & deployment",
    items: "Git · GitHub · VS Code · Netlify · Render",
  },
  {
    name: "Research methods",
    items:
      "Policy analysis · Historical research · Literature review · Research synthesis · AI governance · Geopolitical analysis · Long-form writing",
  },
];
export const social = [
  { name: "GitHub", url: "https://github.com/abdulwahabbadmus001-creator" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/wahab-badmus-6a50a0231",
  },
  { name: "Email", url: "mailto:abdulwahabbadmus001@gmail.com" },
  {
    name: "X",
    url: "https://twitter.com/wbadmus001",
  },
  {
    name: "Medium",
    url: "https://wbadmus001.medium.com",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1MHetk3cpF/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/wbadmus_001",
  },
  {
    name: "Telegram",
    url: "https://t.me/badmus00",
  },
  {
    name: "Threads",
    url: "https://www.threads.com/@wbadmus_001",
  },
];
