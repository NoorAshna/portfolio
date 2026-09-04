export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Backend' | 'AI / NLP' | 'Web';
  period?: string;
  tech: string[];
  description: string;
  highlights: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  items: { name: string; icon?: string; level?: string }[];
}

export const PERSONAL_INFO = {
  name: "Noor Ahmad",
  title: "Full Stack MERN & .NET Core Developer",
  email: "noorashna121@gmail.com",
  phone: "+92 331 2826716",
  location: "Islamabad / Lahore, Pakistan",
  github: "https://github.com/NoorAshna",
  linkedin: "https://linkedin.com/in/noor-ahmed-b788a818a",
  bio: "Full Stack Developer (MERN & .NET Core) with strong experience building scalable, responsive, and high-performing web applications. Skilled in Next.js, React, Node.js, NestJS, Express.js, PostgreSQL, MongoDB, and modern DevOps/API integration.",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "veeivs",
    role: "Backend Developer (Node.js / NestJS)",
    company: "Veeivs",
    period: "December 2025 – Present",
    highlights: [
      "Building and maintaining scalable microservices with Node.js, NestJS, and Fastify for high-performance API layers.",
      "Implemented Stripe integration for automated payment processing, recurring subscriptions, webhooks, and complex transaction workflows.",
      "Introduced Redis caching and session management, significantly reducing database load and boosting response speeds.",
      "Optimized endpoint performance and increased API throughput to handle high concurrent traffic seamlessly.",
      "Designed relational schemas in PostgreSQL utilizing Sequelize and TypeORM across distributed services.",
      "Maintained automated CI/CD pipelines for continuous testing, build generation, and production deployment."
    ],
    skills: ["NestJS", "Node.js", "Fastify", "Stripe API", "Redis", "PostgreSQL", "TypeORM", "Sequelize", "CI/CD"]
  },
  {
    id: "techflo",
    role: "Full Stack Developer",
    company: "TechFlo",
    period: "June 2024 – November 2025",
    highlights: [
      "Developed and maintained 3+ scalable MERN applications resulting in ~30% improved application performance.",
      "Built end-to-end full-stack solutions integrating React frontends with Node.js microservices and MongoDB storage.",
      "Contributed to .NET Core APIs and enterprise relational database architectures for multi-stack client projects.",
      "Collaborated in an Agile team of 6 developers, taking part in sprint planning, daily stand-ups, and conducting 10+ code reviews."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", ".NET Core", "Agile/Scrum", "Git"]
  },
  {
    id: "freelance",
    role: "Freelance Software Developer",
    company: "Self-Employed",
    period: "January 2023 – May 2024",
    highlights: [
      "Delivered 5+ custom client projects utilizing Java, JavaFX (desktop applications), and .NET web applications.",
      "Developed object-oriented desktop games and software applications using Java and JavaFX.",
      "Built robust .NET Core web apps with SQL Server & PostgreSQL database integrations, ensuring high availability.",
      "Communicated directly with international clients for requirements engineering, sprint updates, and achieved 100% satisfaction."
    ],
    skills: ["Java", "JavaFX", ".NET Core", "SQL Server", "PostgreSQL", "OOP", "Client Management"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "movd",
    title: "MOVD – Logistics & Shipment Platform",
    subtitle: "Enterprise Shipment Management",
    category: "Full Stack",
    tech: ["Next.js", "React", ".NET Core", "Tailwind CSS", "REST APIs"],
    description: "Contributed to GetMovd (getmovd.com), a comprehensive logistics and shipment management platform for managing complex shipping workflows.",
    highlights: [
      "Built key React/Next.js frontend modules including shipment filtering, merge shipment workflows, and interactive dashboards.",
      "Integrated .NET Core backend APIs for shipments, company profiles, POC assignments, and real-time status updates.",
      "Implemented date-range filtering, company dynamic filters, and status enum logic for enterprise users."
    ],
    live: "https://getmovd.com",
    featured: true
  },
  {
    id: "accounts-system",
    title: "Accounts Management System",
    subtitle: "Internal Enterprise Finance Portal",
    category: "Backend",
    tech: [".NET Core (MVC/API)", "SQL Server", "C#", "Role-Based Auth"],
    description: "Complete internal accounts management software built with .NET Core and SQL Server to digitize company financial operations.",
    highlights: [
      "Modules for expense management, vendor payouts, staff salaries, invoice generation, and transaction history.",
      "Implemented role-based access control (RBAC), secure authentication, and fine-grained permissions.",
      "Automated financial calculations (balances, salary breakdowns, net totals) with search and pagination."
    ],
    featured: true
  },
  {
    id: "cognizdraw",
    title: "CognizDraw – AI UML Generator",
    subtitle: "Final Year Degree Project",
    category: "AI / NLP",
    tech: ["MERN", "Python", "SpaCy", "Transformers", "React", "MongoDB"],
    description: "An NLP-powered tool that automatically translates plain natural language descriptions into precise UML diagrams (Class, Sequence, Use Case, ERD).",
    highlights: [
      "Used SpaCy & Hugging Face Transformers for natural language syntax parsing and entity extraction.",
      "Reduced manual UML diagram creation effort by approximately 80% for software engineers.",
      "Designed clean interactive canvas preview for generated diagrams."
    ],
    featured: true
  },
  {
    id: "blindpak",
    title: "BlindPak – College Community Platform",
    subtitle: "Anonymous Student Social Platform",
    category: "Full Stack",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Cloudinary", "SHA-256"],
    description: "A secure, anonymous social platform designed for college students featuring verified email registration without exposing user identity.",
    highlights: [
      "Built with SHA-256 email hashing, JWT authentication, and automated image EXIF metadata stripping.",
      "Comprehensive Admin Panel to moderate content, handle user reports, and manage categories.",
      "Cloudinary integration for secure image uploads and optimized delivery."
    ],
    github: "https://github.com/NoorAshna/BlindPak",
    featured: true
  },
  {
    id: "global-office",
    title: "Global Office Source",
    subtitle: "Corporate Business Website",
    category: "Web",
    tech: ["React", "MERN", "Tailwind CSS", "SEO Optimization"],
    description: "A sleek, responsive corporate website built for Global Office Source to present company services and attract B2B clients.",
    highlights: [
      "Designed modern UI/UX aligned with corporate branding guidelines.",
      "Integrated dynamic service showcases, interactive contact triggers, and SEO-friendly metadata structure."
    ],
    live: "http://www.globalofficesource.com",
    featured: false
  },
  {
    id: "food-on-wheels",
    title: "Food on Wheels",
    subtitle: "Desktop Delivery Management",
    category: "Backend",
    tech: ["Java", "JavaFX", "MySQL"],
    description: "Desktop food delivery system supporting user ordering, rider dispatching, and real-time delivery confirmation flows.",
    highlights: [
      "Order workflow tracking: Order Placement → Rider Assignment → Delivery → User Confirmation.",
      "MySQL relational database structure for order logs and rider availability."
    ],
    featured: false
  },
  {
    id: "hostelhero",
    title: "HostelHero",
    subtitle: "Hostel Management SaaS",
    category: "Full Stack",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    description: "MERN stack management application for university hostels handling room allocations, student registrations, and automated billing.",
    highlights: [
      "Role-based administrative dashboard for resident managers and students.",
      "Drastically improved hostel record retrieval speed over traditional paper/excel methods."
    ],
    featured: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Backend & Frameworks",
    items: [
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Express.js" },
      { name: "Fastify" },
      { name: ".NET Core / C#" },
      { name: "Java / JavaFX" },
    ]
  },
  {
    category: "Frontend & UI",
    items: [
      { name: "Next.js (App Router)" },
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" },
    ]
  },
  {
    category: "Databases & Caching",
    items: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "SQL Server" },
      { name: "Redis" },
      { name: "TypeORM" },
      { name: "Sequelize" },
    ]
  },
  {
    category: "DevOps, Tools & APIs",
    items: [
      { name: "Docker" },
      { name: "CI/CD Pipelines" },
      { name: "AWS" },
      { name: "Stripe API" },
      { name: "Git & GitHub" },
      { name: "REST APIs" },
    ]
  }
];

export const EDUCATION = [
  {
    degree: "BS in Software Engineering",
    institution: "FAST NUCES Islamabad",
    period: "2020 – 2024",
    details: "Key Courses: Web Engineering, Database Systems, Design & Analysis of Algorithms, Software Architecture, Software Quality Engineering, Human Computer Interaction."
  },
  {
    degree: "FSc Inter Computer Science",
    institution: "Government College University Lahore (GCU)",
    period: "2018 – 2020",
    details: "Computer Science, Mathematics, Physics."
  }
];

export const LANGUAGES = [
  { name: "English", level: "Fluent" },
  { name: "Urdu", level: "Native" },
  { name: "Pashto", level: "Native" },
  { name: "German", level: "A2 Elementary" },
];
