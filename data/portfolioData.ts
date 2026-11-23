export interface ArchitectureNode {
  label: string;
  sublabel?: string;
  accent?: 'emerald' | 'amber' | 'violet' | 'cyan' | 'rose';
}

export interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  affiliation?: string;
  category: 'AI & RAG' | 'Backend & Telephony' | 'Full Stack';
  tech: string[];
  summary: string;
  highlights: string[];
  architecture: ArchitectureNode[];
  metrics?: { label: string; value: string }[];
  github?: string;
  live?: string;
  liveLabel?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  commitHash: string;
  role: string;
  company: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  code: string;
  description: string;
  items: {
    name: string;
    usedIn: string[];
  }[];
}

export const PERSONAL_INFO = {
  name: "Noor Ahmad",
  handle: "noor.ahmad",
  role: "Full Stack Engineer",
  headline: "Full Stack Engineer crafting high-throughput backends, modern React/Next.js apps & AI-enabled RAG systems.",
  email: "noorashna121@gmail.com",
  phone: "+923312826716",
  phoneFormatted: "+92 331 2826716",
  location: "Islamabad / Lahore, Pakistan",
  timezone: "PKT (UTC+5)",
  degree: "BS Software Engineering — FAST NUCES Islamabad",
  experienceYears: "3+ Years",
  github: "https://github.com/NoorAshna",
  githubHandle: "github.com/NoorAshna",
  linkedin: "https://linkedin.com/in/noor-ahmed-b788a818a",
  linkedinHandle: "linkedin.com/in/noor-ahmed-b788a818a",
  bio: "Full Stack Engineer and Software Engineering graduate from FAST Islamabad with 3+ years of experience. I have experience in building and improving production web applications across React/Next.js, Node.js, NestJS, Express/Fastify. Hands-on with AI-enabled products, including LLM-powered document Q&A, retrieval-augmented generation (RAG), semantic search, and NLP workflows. Comfortable owning features across API design, data modeling, integrations, performance optimization, and CI/CD, with a focus on maintainable code and practical product outcomes.",
  shortBio: "FAST Islamabad Software Engineering graduate with 3+ years shipping production systems across React/Next.js, Node.js, NestJS, and Fastify — from telephony & payment architectures to LLM-powered RAG pipelines with pgvector.",
  status: "Available for Full Stack & Backend roles",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "mars-digital",
    commitHash: "e8a4f21",
    role: "Full Stack Developer",
    company: "Mars (Digital) BPO SMC Pvt Ltd",
    period: "December 2025 – August 2026",
    type: "Production Systems & Telephony",
    summary: "Core engineer on CallLoom and full-stack microservices across Node.js, NestJS, Fastify, React, and PostgreSQL.",
    highlights: [
      "Build and maintain full-stack applications and backend services using Node.js, NestJS, Fastify, React, and PostgreSQL.",
      "Contribute to CallLoom, a call-tracking platform, improving backend APIs, data modeling, and performance for call-related workflows.",
      "Integrate third-party services including Telnyx, Twilio, and Stripe, supporting telephony workflows, subscriptions, webhooks, and payment processing.",
      "Improve API response times and throughput through endpoint/query optimization and Redis caching and session management.",
      "Design relational data models with PostgreSQL and use Sequelize/TypeORM for data access across services.",
      "Maintain CI/CD pipelines for automated testing, builds, and deployments."
    ],
    skills: ["Node.js", "NestJS", "Fastify", "React", "PostgreSQL", "Redis", "Telnyx", "Twilio", "Stripe API", "Sequelize", "TypeORM", "CI/CD"]
  },
  {
    id: "techflo",
    commitHash: "b39c10d",
    role: "Full Stack Developer",
    company: "TechFlo",
    period: "June 2024 – November 2025",
    type: "Full Stack Product Engineering",
    summary: "Engineered scalable MERN & PostgreSQL web platforms within a 6-person Agile engineering team.",
    highlights: [
      "Developed and maintained 3+ scalable MERN applications, contributing to approximately 30% performance improvement.",
      "Built full-stack features integrating React interfaces, Node.js APIs, and PostgreSQL-backed data workflows.",
      "Developed and maintained REST APIs and database integrations across multi-stack product work, emphasizing reliable data handling and maintainable services.",
      "Collaborated in a six-person Agile team through sprint planning, stand-ups, code reviews, and GitHub-based workflows."
    ],
    skills: ["React", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Sequelize", "REST APIs", "Git/GitHub"]
  },
  {
    id: "freelance",
    commitHash: "7f12a98",
    role: "Freelance Software Developer",
    company: "Independent / Client Projects",
    period: "January 2023 – May 2024",
    type: "Client Delivery & Systems Design",
    summary: "Delivered 5+ end-to-end client software products spanning full-stack web apps and Java/JavaFX desktop applications.",
    highlights: [
      "Delivered 5+ client projects using JavaScript/MERN technologies and Java/JavaFX, tailoring features to product requirements.",
      "Built desktop games and object-oriented applications in Java/JavaFX, strengthening software design and problem-solving skills.",
      "Developed web application features and backend integrations using Node.js and PostgreSQL, with a focus on scalable data access and reliable functionality."
    ],
    skills: ["JavaScript", "Node.js", "React", "PostgreSQL", "MongoDB", "Java", "JavaFX"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "callloom",
    index: "01",
    title: "CallLoom",
    tagline: "Call Tracking Software & AI Call Intelligence",
    affiliation: "Veeivs / Mars Digital",
    category: "Backend & Telephony",
    tech: ["Node.js", "NestJS", "Fastify", "PostgreSQL", "Telnyx", "Twilio", "Redis", "AI Integration"],
    summary: "High-concurrency call-tracking platform integrating inbound telephony carriers, Redis-cached endpoints, and AI-powered call analysis for transcript summaries and lead-quality intelligence.",
    highlights: [
      "Build and improve backend services and REST APIs for a call-tracking platform, with attention to performance and concurrent usage.",
      "Integrate telephony services including Telnyx and Twilio for inbound-call and related communication workflows.",
      "Optimize endpoint logic, PostgreSQL queries, and frequently accessed data using Redis caching.",
      "AI integration: connect AI-powered call analysis to call workflows to support transcript-based summaries, lead-quality insights, and searchable call intelligence.",
      "Maintain relational data models and CI/CD pipelines for automated testing, builds, and deployments."
    ],
    architecture: [
      { label: "Telnyx & Twilio", sublabel: "Inbound Call Webhooks", accent: "amber" },
      { label: "NestJS / Fastify", sublabel: "High-Throughput API", accent: "emerald" },
      { label: "Redis + PostgreSQL", sublabel: "Cache & Relational Store", accent: "cyan" },
      { label: "AI Call Engine", sublabel: "Transcripts & Lead Insights", accent: "violet" }
    ],
    metrics: [
      { label: "Telephony Carriers", value: "Telnyx + Twilio" },
      { label: "AI Capabilities", value: "Transcript & Lead QA" },
      { label: "Data & Cache", value: "PostgreSQL + Redis" }
    ],
    featured: true
  },
  {
    id: "docmind",
    index: "02",
    title: "DocMind",
    tagline: "AI-Powered PDF Q&A & Semantic RAG Pipeline",
    affiliation: "AI Product Engineering",
    category: "AI & RAG",
    tech: ["React", "Node.js", "Express.js", "LangChain", "Google Gemini", "PostgreSQL", "pgvector", "Redis", "BullMQ"],
    summary: "End-to-end Retrieval-Augmented Generation (RAG) application with asynchronous BullMQ ingestion workers, 768-dimensional Gemini vector embeddings in pgvector, and citation-backed answers.",
    highlights: [
      "Built a React frontend and REST API for PDF upload and document management, with asynchronous ingestion using Redis/BullMQ workers, retry handling, and status tracking.",
      "Implemented a RAG pipeline using PDF extraction and chunking, storing 768-dimensional Gemini embeddings in PostgreSQL with pgvector.",
      "Enabled semantic search to retrieve relevant passages and generate context-grounded answers with Google Gemini, including source snippets."
    ],
    architecture: [
      { label: "React + REST API", sublabel: "PDF Upload & Status", accent: "cyan" },
      { label: "Redis / BullMQ", sublabel: "Async Worker & Retries", accent: "amber" },
      { label: "LangChain + Gemini", sublabel: "Chunking & 768-d Vectors", accent: "violet" },
      { label: "pgvector Search", sublabel: "Grounded Q&A + Citations", accent: "emerald" }
    ],
    metrics: [
      { label: "Embedding Dim", value: "768-d Gemini" },
      { label: "Vector Store", value: "PG + pgvector" },
      { label: "Ingestion Queue", value: "BullMQ + Redis" }
    ],
    featured: true
  },
  {
    id: "cognizdraw",
    index: "03",
    title: "CognizDraw",
    tagline: "NLP & Fine-Tuned GPT-2 UML Diagram Generator",
    affiliation: "Final Year Project — FAST NUCES",
    category: "AI & RAG",
    tech: ["Python", "React", "MongoDB", "Node.js", "spaCy", "Transformers"],
    summary: "NLP-driven software design tool that parses natural-language system requirements and leverages a fine-tuned GPT-2 model to automate Class, Sequence, Use-Case, and ER diagram generation.",
    highlights: [
      "Built an NLP-based tool to simplify creation of class, sequence, use-case, and ER diagrams.",
      "Fine-tuned the GPT-2 language model using Hugging Face Transformers to generate UML diagrams from natural-language descriptions, automating diagram generation.",
      "Implemented natural-language parsing to generate UML diagrams, reducing manual diagram creation time by approximately 80%."
    ],
    architecture: [
      { label: "Natural Language", sublabel: "Requirement Specs", accent: "cyan" },
      { label: "spaCy NLP Parser", sublabel: "Entity & Relation Extraction", accent: "amber" },
      { label: "Fine-Tuned GPT-2", sublabel: "Hugging Face Transformers", accent: "violet" },
      { label: "React Canvas", sublabel: "Class / Seq / Use-Case / ER", accent: "emerald" }
    ],
    metrics: [
      { label: "Time Saved", value: "~80% Faster" },
      { label: "Diagram Types", value: "4 UML Formats" },
      { label: "NLP Engine", value: "GPT-2 + spaCy" }
    ],
    featured: true
  },
  {
    id: "movd",
    index: "04",
    title: "MOVD",
    tagline: "Logistics & Shipment Management Platform",
    affiliation: "TechFlo",
    category: "Full Stack",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Tailwind", "REST APIs"],
    summary: "Production logistics platform featuring merge-shipment workflows, multi-parameter filtering dashboards, and Sequelize-modeled PostgreSQL relational workflows.",
    highlights: [
      "Developed React modules for shipment filtering, merge-shipment workflows, dashboards, and reusable UI components.",
      "Built and integrated Node.js/Express REST APIs for shipments, companies, points of contact, bookings, and status handling.",
      "Managed the PostgreSQL database using Sequelize as the ORM, with relational models for shipments, companies, and bookings.",
      "Collaborated with backend and product teams to fix bugs, refine logic, and deliver production-ready features."
    ],
    architecture: [
      { label: "React + Tailwind", sublabel: "Dashboards & Merge Flows", accent: "cyan" },
      { label: "Node.js / Express", sublabel: "Shipments & Bookings API", accent: "emerald" },
      { label: "Sequelize ORM", sublabel: "Relational Domain Models", accent: "amber" },
      { label: "PostgreSQL", sublabel: "Companies, POCs & Status", accent: "violet" }
    ],
    metrics: [
      { label: "Core Workflows", value: "Merge & Filter" },
      { label: "Data Layer", value: "PG + Sequelize" },
      { label: "Team Setup", value: "6-Eng Agile" }
    ],
    live: "https://getmovd.com",
    liveLabel: "getmovd.com",
    featured: true
  },
  {
    id: "blindpak",
    index: "05",
    title: "BlindPak",
    tagline: "Anonymous College Community Platform",
    affiliation: "Live Production Community",
    category: "Full Stack",
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Cloudinary", "JWT", "SHA-256"],
    summary: "Privacy-first anonymous student network with OTP verification, SHA-256 email hashing, EXIF metadata stripping, role-based permissions, and a full moderation control center.",
    highlights: [
      "Built an anonymous social platform with posting, image sharing, OTP-based authentication, comments, likes, and moderation.",
      "Implemented JWT authentication, SHA-256 email hashing, image metadata stripping, role-based posting permissions, and secure Cloudinary storage.",
      "Designed an admin panel for managing users, posts, reports, and platform moderation.",
      "Implemented Express API with posting, comments, likes, and secure Cloudinary image storage."
    ],
    architecture: [
      { label: "Next.js Client", sublabel: "Anonymous Feed & Admin", accent: "cyan" },
      { label: "OTP + SHA-256", sublabel: "Zero-Knowledge Identity", accent: "violet" },
      { label: "EXIF Stripper", sublabel: "Cloudinary Media Pipeline", accent: "amber" },
      { label: "Express + PG", sublabel: "RBAC & Moderation API", accent: "emerald" }
    ],
    metrics: [
      { label: "Identity Privacy", value: "SHA-256 + EXIF Strip" },
      { label: "Auth Flow", value: "OTP + JWT RBAC" },
      { label: "Live Domain", value: "Blindpak.com" }
    ],
    live: "https://blindpak.com",
    liveLabel: "Blindpak.com",
    github: "https://github.com/NoorAshna/BlindPak",
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    category: "Languages",
    code: "01 // LANG",
    description: "Strongly-typed and relational query languages for full-stack & data engineering.",
    items: [
      { name: "JavaScript", usedIn: ["CallLoom", "DocMind", "MOVD", "BlindPak"] },
      { name: "TypeScript", usedIn: ["CallLoom", "BlindPak", "Mars Digital"] },
      { name: "SQL", usedIn: ["CallLoom", "DocMind", "MOVD", "BlindPak"] },
      { name: "Python", usedIn: ["CognizDraw"] }
    ]
  },
  {
    id: "frontend",
    category: "Frontend",
    code: "02 // UI",
    description: "Component-driven interfaces, SSR/App Router workflows, and responsive design.",
    items: [
      { name: "React", usedIn: ["CallLoom", "DocMind", "CognizDraw", "MOVD"] },
      { name: "Next.js", usedIn: ["BlindPak"] },
      { name: "Tailwind CSS", usedIn: ["MOVD", "BlindPak"] }
    ]
  },
  {
    id: "backend",
    category: "Backend",
    code: "03 // CORE",
    description: "High-throughput REST APIs, modular microservice architectures, and event workers.",
    items: [
      { name: "Node.js", usedIn: ["CallLoom", "DocMind", "CognizDraw", "MOVD", "BlindPak"] },
      { name: "NestJS", usedIn: ["CallLoom"] },
      { name: "Express.js", usedIn: ["DocMind", "MOVD", "BlindPak"] },
      { name: "Fastify", usedIn: ["CallLoom"] }
    ]
  },
  {
    id: "databases",
    category: "Databases & Data",
    code: "04 // DATA",
    description: "Relational modeling, vector similarity storage, caching layers, and ORMs.",
    items: [
      { name: "PostgreSQL", usedIn: ["CallLoom", "DocMind", "MOVD", "BlindPak"] },
      { name: "MongoDB", usedIn: ["CognizDraw", "TechFlo"] },
      { name: "Redis", usedIn: ["CallLoom", "DocMind"] },
      { name: "pgvector", usedIn: ["DocMind"] },
      { name: "Sequelize", usedIn: ["CallLoom", "MOVD"] },
      { name: "TypeORM", usedIn: ["CallLoom"] }
    ]
  },
  {
    id: "ai-search",
    category: "AI & Search",
    code: "05 // AI-RAG",
    description: "Applied LLM integrations, vector retrieval pipelines, and custom NLP models.",
    items: [
      { name: "LLM API Integration", usedIn: ["CallLoom", "DocMind"] },
      { name: "LangChain", usedIn: ["DocMind"] },
      { name: "RAG", usedIn: ["DocMind"] },
      { name: "Embeddings", usedIn: ["DocMind"] },
      { name: "Semantic Search", usedIn: ["DocMind", "CallLoom"] },
      { name: "Google Gemini", usedIn: ["DocMind"] },
      { name: "spaCy & Transformers", usedIn: ["CognizDraw"] }
    ]
  },
  {
    id: "devops-tools",
    category: "DevOps & Tools",
    code: "06 // OPS",
    description: "Async queues, telephony carriers, payment webhooks, and deployment automation.",
    items: [
      { name: "Docker", usedIn: ["CallLoom", "DocMind"] },
      { name: "CI/CD", usedIn: ["CallLoom", "Mars Digital"] },
      { name: "AWS", usedIn: ["CallLoom", "Mars Digital"] },
      { name: "BullMQ", usedIn: ["DocMind"] },
      { name: "Git/GitHub", usedIn: ["CallLoom", "DocMind", "MOVD", "BlindPak"] },
      { name: "Stripe API", usedIn: ["Mars Digital"] },
      { name: "Telnyx", usedIn: ["CallLoom"] },
      { name: "Twilio", usedIn: ["CallLoom"] }
    ]
  }
];

export const EDUCATION = [
  {
    degree: "BS Software Engineering",
    institution: "FAST NUCES Islamabad",
    period: "2020 – 2024",
    badge: "Bachelor of Science",
    coursework: [
      "Web Engineering",
      "Computer Networks",
      "Database Systems",
      "Algorithms",
      "OOP",
      "Operating Systems",
      "Software Architecture",
      "Software Quality Engineering"
    ]
  },
  {
    degree: "Intermediate Computer Science",
    institution: "Government College University Lahore",
    period: "2018 – 2020",
    badge: "Pre-Engineering & CS",
    coursework: [
      "Computer Science",
      "Mathematics",
      "Physics"
    ]
  }
];

export const LANGUAGES = [
  { name: "Urdu", level: "Native", greeting: "اسلام علیکم — خوش آمدید", code: "UR" },
  { name: "English", level: "Fluent", greeting: "Hello — let's build together", code: "EN" },
  { name: "German", level: "A2", greeting: "Hallo — willkommen auf meinem Portfolio", code: "DE" }
];
