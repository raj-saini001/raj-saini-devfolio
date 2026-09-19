/**
 * Centralized Portfolio Data for Raj Saini
 * All content, projects, skills, education, experience, and contact details
 * are managed here for modularity and easy updates.
 */

export const personalInfo = {
  name: "Raj Saini",
  firstName: "Raj",
  lastName: "Saini",
  role: "CSE Student | Full Stack Developer",
  shortBio: "Passionate Computer Science student and Full Stack Developer dedicated to building performant, modern, and scalable web applications with clean architecture.",
  longBio: `I'm a Computer Science & Engineering student at Mandsaur University with a strong foundation in full stack web development, database architecture, and algorithmic problem-solving.
  
I specialize in building end-to-end web applications using modern JavaScript/TypeScript, React, Node.js, Express, and both SQL (MySQL) and NoSQL (MongoDB) databases. Always excited to learn cutting-edge tools, contribute to impactful projects, and craft seamless digital experiences.`,
  university: "Mandsaur University",
  degree: "B.Tech in Computer Science & Engineering",
  graduationYear: "2023 – 2027",
  location: "Mandsaur, Madhya Pradesh, India",
  email: "rajsaini9727@gmail.com",
  github: "https://github.com/raj-saini001",
  linkedin: "https://www.linkedin.com/in/raj-saini-166236326?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  resumeUrl: "#", // Placeholder: add direct link to PDF resume if desired
  stats: [
    { num: "15+", label: "Completed Projects" },
    { num: "16+", label: "Core Tech Skills" },
    { num: "2+", label: "Infosys Certifications" },
    { num: "100%", label: "Dedication to Code" },
  ],
  focusTags: [
    "Full Stack Web Development",
    "MERN Stack",
    "Database Architecture",
    "RESTful APIs",
    "Frontend Engineering",
    "Clean Code & Git Workflow",
  ],
};

export const skillsData = {
  frontend: {
    category: "Frontend Development",
    skills: [
      { name: "React.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "HTML5 / Semantic Web", level: 95 },
      { name: "CSS3 / Modern Styling", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 82 },
    ],
  },
  backend: {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", level: 84 },
      { name: "Express.js", level: 82 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs & CRUD", level: 88 },
      { name: "Database Design", level: 80 },
    ],
  },
  tools: {
    category: "Languages & Tools",
    skills: [
      { name: "Python", level: 85 },
      { name: "C Programming", level: 80 },
      { name: "Git & Version Control", level: 85 },
      { name: "GitHub Collaboration", level: 84 },
      { name: "VS Code", level: 92 },
      { name: "Postman API Testing", level: 86 },
    ],
  },
};

export const projectsData = [
  {
    id: "01",
    featured: true,
    title: "Vijay Shree Resort Management & Booking System",
    subtitle: "Full Stack Resort Operations & Customer Booking Platform",
    description:
      "A comprehensive full-stack hotel and resort management solution built to streamline room reservations, customer check-in/check-out flows, billing calculations, and administrative room inventory oversight with a dynamic, responsive user interface.",
    longDescription:
      "The Vijay Shree Resort Management & Booking System is an end-to-end platform engineered for seamless resort operations. It features real-time room availability checks, automated booking invoice generation, role-based admin controls for inventory and staff assignments, and robust data persistence. Designed with responsive UI components and structured database queries for optimal performance.",
    stack: ["React", "Node.js", "Express.js", "MySQL / MongoDB", "Tailwind CSS", "REST API"],
    category: "Full Stack System",
    highlights: [
      "Real-time room availability & booking scheduler",
      "Admin dashboard with room status & occupancy metrics",
      "Automated bill generation & reservation history tracking",
      "Responsive, touch-friendly UI for both guests and management",
    ],
    githubUrl: "https://github.com/placeholder-rajsaini/vijayshree-resort-system",
    liveUrl: "#", // Add live deployment URL if available
  },
  {
    id: "02",
    featured: false,
    title: "Dynamic E-Commerce & Cart Engine",
    subtitle: "Modern Responsive Storefront & API Integration",
    description:
      "A full-featured responsive online shopping storefront incorporating interactive product catalogs, real-time cart state management, checkout simulation, and category filtering.",
    longDescription:
      "Engineered with React hooks and modern state management, this application delivers instantaneous search, filter by category and price, cart persistence via localStorage, and modular UI cards designed for maximum conversion and aesthetic appeal.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Postman"],
    category: "Frontend & API Integration",
    highlights: [
      "Instant multi-filter search and category indexing",
      "Persistent cart state with responsive drawer checkout",
      "Modular components for product cards and promo banners",
    ],
    githubUrl: "https://github.com/placeholder-rajsaini/ecommerce-react-engine",
    liveUrl: "#",
  },
  {
    id: "03",
    featured: false,
    title: "RESTful Task & Inventory API Service",
    subtitle: "Scalable Backend Architecture with Authentication",
    description:
      "A high-performance CRUD backend API designed with Express and MongoDB/MySQL for managing items, status transitions, and data validation with Postman test suites.",
    longDescription:
      "Implements clean MVC architecture, parameterized queries to prevent SQL injections, schema validations, centralized error handling middleware, and comprehensive endpoint documentation tested thoroughly with Postman collections.",
    stack: ["Node.js", "Express.js", "MongoDB", "MySQL", "Postman", "Git"],
    category: "Backend Architecture",
    highlights: [
      "Clean MVC layered directory structure",
      "Robust input validation and centralized error middleware",
      "Complete automated Postman test collection with environment scripts",
    ],
    githubUrl: "https://github.com/placeholder-rajsaini/restful-task-service",
    liveUrl: "#",
  },
  {
    id: "04",
    featured: false,
    title: "Python Automation & Data Processing Suite",
    subtitle: "Core Python Scripting & Data Handling Utilities",
    description:
      "A collection of Python scripts developed for automated file organization, structured CSV/JSON data parsing, algorithmic operations, and foundational backend logic.",
    longDescription:
      "Built to solidify object-oriented programming principles and Python standard libraries, featuring modular classes, exception handling, data sanitization, and automated CLI workflows.",
    stack: ["Python", "Algorithms", "File I/O", "VS Code", "Git"],
    category: "Python Scripting",
    highlights: [
      "Automated batch data processing pipelines",
      "Robust exception handling and logging mechanisms",
      "Adheres strictly to PEP 8 standards and clean modular structure",
    ],
    githubUrl: "https://github.com/placeholder-rajsaini/python-automation-suite",
    liveUrl: "#",
  },
];

export const educationData = [
  {
    period: "2023 – 2027",
    tag: "Degree Program",
    institution: "MANDSAUR UNIVERSITY",
    degree: "B.Tech in Computer Science and Engineering",
    description:
      "Focusing on computer science fundamentals including Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
    highlight: "Student | Full Stack Developer",
  },
  {
    period: "CORE CURRICULUM",
    tag: "Technical Focus",
    institution: "DATABASE & SYSTEM ARCHITECTURE",
    degree: "Relational (MySQL) & Document (MongoDB) Databases",
    description:
      "In-depth coursework and hands-on laboratory implementation of normalization, indexing, transaction management, REST API principles, and modern web application development.",
    highlight: "MySQL · MongoDB · Express.js",
  },
  {
    period: "PRACTICAL LABS",
    tag: "Engineering Skills",
    institution: "FULL STACK WEB DEVELOPMENT",
    degree: "React, Node.js & Modern Web Technologies",
    description:
      "Active development of real-world projects, building responsive frontends with React and Tailwind CSS, backend routing with Express, and version-controlled Git workflows.",
    highlight: "React · Node.js · Tailwind CSS",
  },
];

export const experienceData = [
  {
    period: "2024 – Present",
    role: "Full Stack Project Developer",
    org: "Vijay Shree Resort Management Project",
    badge: "Featured Project",
    description:
      "Architected and developed the complete resort booking and management web platform from scratch. Designed relational database schemas in MySQL, built Express backend endpoints, and created a sleek, responsive React user interface.",
  },
  {
    period: "2023 – Present",
    role: "Computer Science & Engineering Student",
    org: "Mandsaur University",
    badge: "Academic",
    description:
      "Actively pursuing core CSE degree coursework, participating in coding workshops, project exhibitions, and continuously engineering software solutions using C, Python, JavaScript, and database systems.",
  },
  {
    period: "2024 – 2025",
    role: "Full Stack & Web Developer Trainee",
    org: "Self-Directed Practical Learning & Open Source",
    badge: "Continuous Learning",
    description:
      "Completed rigorous online training tracks across Infosys Springboard, mastering Python programming fundamentals, modern JavaScript ES6+, React component lifecycles, and RESTful API integrations with Postman.",
  },
  {
    period: "2023 – 2024",
    role: "Foundational Programming & Algorithms",
    org: "Academic Project Labs — Mandsaur University",
    badge: "Fundamentals",
    description:
      "Developed command-line utility tools and algorithm implementations in C and Python, mastering data structures, memory allocation concepts, and algorithmic complexity analysis.",
  },
];

export const achievementsData = [
  {
    icon: "🏆",
    title: "Featured Project Showcase",
    org: "Vijay Shree Resort Management System",
    detail: "Developed full-stack reservation & room management system presented as a flagship university project.",
    date: "2024 – 2025",
  },
  {
    icon: "💻",
    title: "Coding & Problem Solving",
    org: "CSE Department — Mandsaur University",
    detail: "Active participant in departmental programming contests and algorithmic challenges in C & Python.",
    date: "2023 – Present",
  },
  {
    icon: "📜",
    title: "Certified Python Developer",
    org: "Infosys Springboard",
    detail: "Completed certified Python Foundation and Basics of Python technical assessments with distinction.",
    date: "2024",
  },
];

export const certificationsData = [
  {
    issuer: "Infosys Springboard",
    name: "Python Foundation",
    date: "Certified 2024",
    badge: "Verified Certificate",
  },
  {
    issuer: "Infosys Springboard",
    name: "Basics of Python",
    date: "Certified 2024",
    badge: "Verified Certificate",
  },
  {
    issuer: "Self-Paced / Academic Track",
    name: "Full Stack Web Development (React & Node.js)",
    date: "2024",
    badge: "Specialization",
  },
  {
    issuer: "Database Learning Track",
    name: "Relational Database Design with MySQL",
    date: "2024",
    badge: "Database Mastery",
  },
  {
    issuer: "Version Control Track",
    name: "Git & GitHub for Collaborative Engineering",
    date: "2024",
    badge: "Developer Tooling",
  },
  {
    issuer: "API Engineering Track",
    name: "RESTful API Design & Testing with Postman",
    date: "2024",
    badge: "Backend & Testing",
  },
];

export const marqueeItems = [
  "React.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Python Foundation — Infosys",
  "Basics of Python — Infosys",
  "Vijay Shree Resort Management",
  "Tailwind CSS",
  "JavaScript ES6+",
  "REST APIs",
  "Git & GitHub",
  "Postman",
  "C Programming",
  "Full Stack Architecture",
];

export const navLinks = [
  { name: "About", href: "#intro" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#awards" },
  { name: "Certifications", href: "#certs" },
  { name: "Contact", href: "#contact" },
];
