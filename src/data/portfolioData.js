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
  degree: "B.Tech in Computer Science & Engineering (AI)",
  graduationYear: "2024 – 2028",
  location: "Mandsaur, Madhya Pradesh, India",
  email: "rajsaini9727@gmail.com",
  github: "https://github.com/raj-saini001",
  linkedin: "https://www.linkedin.com/in/raj-saini-166236326?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  resumeUrl: "/Raj_Saini_Resume.pdf",
  stats: [
    { num: "4+", label: "Completed Projects" },
    { num: "18+", label: "Core Tech Skills" },
    { num: "6+", label: "Verified Certifications" },
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
    period: "Graduation / B.Tech · 2024 – 2028",
    tag: "Graduation",
    institution: "Mandsaur University, Mandsaur",
    degree: "B.Tech in Computer Science & Engineering (AI)",
    description:
      "Currently pursuing B.Tech in Computer Science & Engineering with an Artificial Intelligence specialization. Focusing on foundational computer science principles, intelligent systems, data structures, and modern software development.",
    highlight: "CGPA: 7.2 · Currently Pursuing",
  },
  {
    period: "Higher Secondary · Passing Year: 2024",
    tag: "Higher Secondary",
    institution: "Govt. Boys H. S. School, Pipliya Mandi",
    degree: "Senior Secondary (Class XII) · Stream: PCM",
    description:
      "Completed higher secondary education in the Science stream with Physics, Chemistry, and Mathematics (PCM). Built strong analytical, quantitative reasoning, and scientific problem-solving fundamentals.",
    highlight: "Percentage: 73.6%  ",
  },
  {
    period: "High School · Passing Year: 2022",
    tag: "High School",
    institution: "Sharda Education Academy H. S. School, Pipliya Mandi",
    degree: "Secondary School (Class X)",
    description:
      "Completed foundational secondary school education covering mathematics, science, and general academics, demonstrating consistent scholastic performance across core subjects.",
    highlight: "Percentage: 80% ",
  },
];

export const experienceData = [
  {
    period: "July 2026 – September 2026",
    role: "Frontend Developer Intern",
    org: "Syntecxhub Tech",
    badge: "Internship",
    description:
      "Engineered responsive user interface components and modular web views using JavaScript (ES6+), HTML5, and modern CSS/Tailwind, ensuring cross-device compatibility and optimized client-side performance.",
  },
  {
    period: "July 2026",
    role: "Freelance Full-Stack Web Developer",
    org: "Vijay Shree Complex and Resort",
    badge: "Freelance",
    description:
      "Developed end-to-end full-stack web solutions for resort booking operations, integrating dynamic React frontends with Express.js RESTful API services and MySQL database persistence.",
  },
  {
    period: "June 2026",
    role: "Freelance Web Developer",
    org: "Vijay Shree Complex and Resort",
    badge: "Freelance",
    description:
      "Designed and structured the core resort web presence, crafting responsive service showcase layouts, room preview pages, and interactive UI elements with HTML5, CSS3, and JavaScript.",
  },
  {
    period: "May 2024 – August 2024",
    role: "Frontend Developer Intern",
    org: "Cognify Tech",
    badge: "Internship",
    description:
      "Collaborated on frontend development tasks, translating wireframes into clean, accessible web pages and implementing mobile-friendly styles with semantic HTML, CSS, and basic DOM scripting.",
  },
];

export const achievementsData = [
  {
    logo: "/assets/gssoc.png",
    icon: "⚡",
    title: "GirlsScript Summer of Code",
    org: "Open Source Contribution",
    detail:
      "Contributed to open-source software repositories during the nationwide program, collaborating with project maintainers via Git/GitHub to resolve codebase issues and implement feature enhancements.",
    date: "May 2026",
  },
  {
    logo: "/assets/arcade.png",
    icon: "☁️",
    title: "Google Cloud Arcade",
    org: "Trooper Tier",
    detail:
      "Attained the Trooper Tier milestone by completing hands-on Google Cloud challenge labs and skill badges covering core cloud infrastructure, security, and computing services.",
    date: "2025",
  },
];

export const certificationsData = [
  {
    issuer: "Cisco",
    name: "Networking Basics",
    date: "2026",
    badge: "Verified Certificate",
    description:
      "Fundamental principles of computer networks, covering IP addressing, network protocols, subnetting, TCP/IP & OSI architecture, and basic router/switch operations.",
  },
  {
    issuer: "Thrive(s)UP × Mandsaur University",
    name: "Java: OOPJ",
    date: "2025",
    badge: "Verified Certificate",
    description:
      "Object-Oriented Programming in Java, emphasizing core OOP principles including encapsulation, inheritance, polymorphism, abstraction, and class hierarchies.",
  },
  {
    issuer: "Udemy",
    name: "Git & GitHub: The Practical Guide",
    date: "June 2025",
    badge: "Verified Certificate",
    description:
      "Hands-on distributed version control workflows, branching and merging strategies, pull requests, resolving merge conflicts, and team collaboration via GitHub.",
  },
  {
    issuer: "Coursera",
    name: "Introduction to Generative AI",
    date: "2025",
    badge: "Verified Certificate",
    description:
      "Core fundamentals of generative artificial intelligence, large language models (LLMs), attention mechanisms, prompting techniques, and real-world AI applications.",
  },
  {
    issuer: "Infosys",
    name: "Python Foundation",
    date: "2024",
    badge: "Verified Certificate",
    description:
      "Comprehensive Python programming foundation, including built-in data types, control flow structures, custom functions, modular scripting, and standard libraries.",
  },
  {
    issuer: "Infosys",
    name: "Basics of Python",
    date: "2024",
    badge: "Verified Certificate",
    description:
      "Foundational programming logic in Python, covering variables, operators, conditional statements, iterative loops, lists, dictionaries, and error handling.",
  },
];

export const marqueeItems = [
  "React.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Networking Basics — Cisco",
  "Java: OOPJ — Thrive(s)UP",
  "Google Cloud Arcade — Trooper Tier",
  "GirlsScript Summer of Code",
  "Introduction to Generative AI",
  "Git & GitHub — Udemy",
  "Python Foundation — Infosys",
  "Basics of Python — Infosys",
  "JavaScript ES6+",
  "Tailwind CSS",
  "REST APIs",
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
