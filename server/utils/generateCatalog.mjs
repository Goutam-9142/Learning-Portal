import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { courseFrontendDev } from './catalogCoursesData.mjs';
import { courseBackendDev, courseHtml, courseCss } from './catalogCoursesDataPart2.mjs';
import {
  courseDsa,
  courseMachineLearning,
  courseDataScience,
  courseAi,
  courseSoftwareEngineering
} from './catalogCoursesDataPart3.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const portalPath = path.resolve(__dirname, '../../client/src/data/portalCourses.js');
const portalModule = await import(`file://${portalPath}`);
const rawExistingCourses = portalModule.PORTAL_COURSES || [];

export const ALL_CATEGORIES = [
  { id: 'web-dev', name: 'Web Development', icon: 'Globe', desc: 'Full-stack web application development from client to server.', color: '#4f46e5' },
  { id: 'frontend', name: 'Frontend Development', icon: 'Layout', desc: 'Modern user interfaces, responsive design, and browser engineering.', color: '#0891b2' },
  { id: 'backend', name: 'Backend Development', icon: 'Server', desc: 'Server architectures, REST APIs, microservices, and databases.', color: '#16a34a' },
  { id: 'html', name: 'HTML', icon: 'FileCode', desc: 'Semantic HTML5 structure, accessible forms, and document hierarchies.', color: '#ea580c' },
  { id: 'css', name: 'CSS', icon: 'Sparkles', desc: 'Modern CSS3 layout systems, Flexbox, Grid, and fluid animations.', color: '#0284c7' },
  { id: 'javascript', name: 'JavaScript', icon: 'Code', desc: 'Modern ES6+ JavaScript, asynchronous programming, and engine internals.', color: '#eab308' },
  { id: 'react', name: 'React.js', icon: 'Atom', desc: 'Component architecture, state management, hooks, and single-page apps.', color: '#0284c7' },
  { id: 'node-express', name: 'Node.js and Express.js', icon: 'Cpu', desc: 'Scalable backend services, middleware, and event-driven architectures.', color: '#15803d' },
  { id: 'python', name: 'Python Programming', icon: 'Terminal', desc: 'Python syntax, object-oriented design, automation, and data libraries.', color: '#3b82f6' },
  { id: 'java', name: 'Java Programming', icon: 'Coffee', desc: 'Core Java, OOP principles, collections framework, and JVM fundamentals.', color: '#b91c1c' },
  { id: 'c-lang', name: 'C Programming', icon: 'Binary', desc: 'Foundational programming, pointer arithmetic, memory management, and systems.', color: '#6366f1' },
  { id: 'cpp', name: 'C++ Programming', icon: 'Braces', desc: 'Modern C++, STL, template metaprogramming, and high-performance computing.', color: '#4338ca' },
  { id: 'dsa', name: 'Data Structures & Algorithms', icon: 'Network', desc: 'Arrays, trees, graphs, dynamic programming, and interview algorithm mastery.', color: '#7c3aed' },
  { id: 'ml', name: 'Machine Learning', icon: 'TrendingUp', desc: 'Supervised and unsupervised models, scikit-learn, feature engineering, and MLOps.', color: '#9333ea' },
  { id: 'ai', name: 'Artificial Intelligence', icon: 'Sparkles', desc: 'Intelligent agents, heuristic search, logic inference, and modern AI architectures.', color: '#8b5cf6' },
  { id: 'data-science', name: 'Data Science', icon: 'PieChart', desc: 'Data cleaning, EDA, visualization with Pandas, Matplotlib, and statistics.', color: '#0d9488' },
  { id: 'dbms', name: 'Database Management Systems', icon: 'Database', desc: 'Relational design, normalization, ACID properties, and transaction indexing.', color: '#059669' },
  { id: 'sql-mysql', name: 'SQL and MySQL', icon: 'Layers', desc: 'Relational queries, complex joins, subqueries, stored procedures, and triggers.', color: '#0284c7' },
  { id: 'mongodb', name: 'MongoDB', icon: 'HardDrive', desc: 'NoSQL document databases, aggregation pipelines, indexing, and Mongoose ODM.', color: '#16a34a' },
  { id: 'git-github', name: 'Git and GitHub', icon: 'GitBranch', desc: 'Version control, branching workflows, pull requests, and CI/CD pipelines.', color: '#f97316' },
  { id: 'cn', name: 'Computer Networks', icon: 'Share2', desc: 'OSI 7 layers, TCP/IP suite, routing protocols, DNS, and network security.', color: '#2563eb' },
  { id: 'os', name: 'Operating Systems', icon: 'Laptop', desc: 'Processes, threads, CPU scheduling, virtual memory, paging, and deadlocks.', color: '#475569' },
  { id: 'software-eng', name: 'Software Engineering', icon: 'FolderGit2', desc: 'Agile methodologies, SDLC, design patterns, testing, and clean architecture.', color: '#0284c7' },
  { id: 'cybersecurity', name: 'Cybersecurity Fundamentals', icon: 'Shield', desc: 'Network defense, cryptography, ethical hacking, OWASP Top 10, and security.', color: '#dc2626' },
  { id: 'aptitude-interview', name: 'Aptitude and Interview Preparation', icon: 'Award', desc: 'Quantitative aptitude, logical reasoning, verbal ability, and coding interviews.', color: '#d97706' },
];

// Defined in generateCatalog earlier:
const courseWebDev = {
  _id: 'course-web-dev',
  title: 'Full-Stack Web Development Bootcamp',
  category: 'Web Development',
  level: 'All Levels',
  duration: '14 weeks',
  description: 'Master modern web development from fundamentals to full-stack production deployment with HTML, CSS, JavaScript, React, Node.js, and databases.',
  coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
  faculty: { name: 'Brad Traversy', email: 'brad@eduflow.io' },
  prerequisites: ['Basic computer usage', 'A web browser and code editor (VS Code recommended)'],
  learningOutcomes: [
    'Build responsive, mobile-first websites with HTML5 & modern CSS3',
    'Write modular ES6+ JavaScript and integrate asynchronous REST APIs',
    'Develop reactive Single Page Applications using React.js and Hooks',
    'Architect scalable backends using Node.js, Express, and databases',
    'Implement authentication, web security, and automated CI/CD deployments',
  ],
  curriculum: [
    { moduleTitle: 'Module 1: Web Fundamentals & Responsive Design', duration: '3 weeks', topics: ['How the Web Works & HTTP', 'HTML5 Semantic Elements', 'CSS3 Layouts (Flexbox & Grid)', 'Mobile-First Responsive Design'] },
    { moduleTitle: 'Module 2: Modern JavaScript & Asynchronous Programming', duration: '3 weeks', topics: ['JavaScript Syntax & DOM Manipulation', 'ES6+ Features & Destructuring', 'Promises, Async/Await & Fetch API', 'Git & GitHub Workflows'] },
    { moduleTitle: 'Module 3: Frontend SPAs with React.js', duration: '4 weeks', topics: ['React Components & JSX', 'State Management & Custom Hooks', 'Routing with React Router v6', 'Form Handling & API Integration'] },
    { moduleTitle: 'Module 4: Full-Stack Integration, Security & Deployment', duration: '4 weeks', topics: ['Node.js & Express REST APIs', 'Database Integration & Auth', 'Web Security (OWASP) & Testing', 'CI/CD Pipelines & Cloud Deployment'] },
  ],
  levelsData: {
    Beginner: {
      description: 'Learn how the web works, HTML5, CSS3, responsive design, and JavaScript DOM manipulation.',
      prerequisites: ['None. Beginners welcome!'],
      roadmap: [
        { stepNumber: 1, title: 'How the Web Works', description: 'Understand DNS lookup, HTTP requests/responses, browsers, and client-server architecture.', duration: '3 hours' },
        { stepNumber: 2, title: 'HTML Fundamentals', description: 'Semantic structure, headings, lists, tables, accessible forms, and multimedia elements.', duration: '5 hours' },
        { stepNumber: 3, title: 'CSS Fundamentals', description: 'Selectors, specificity, cascade, colors, typography, and the box model (margin, padding, border).', duration: '6 hours' },
        { stepNumber: 4, title: 'Responsive Web Design', description: 'Mobile-first design principles, media queries, flexible units, and viewport configurations.', duration: '5 hours' },
        { stepNumber: 5, title: 'JavaScript Basics', description: 'Variables (let/const), data types, operators, conditionals, loops, and functions.', duration: '6 hours' },
        { stepNumber: 6, title: 'DOM Manipulation', description: 'Selecting elements, listening to click/submit events, dynamically updating HTML content.', duration: '6 hours' },
        { stepNumber: 7, title: 'Git and GitHub Basics', description: 'Initializing git repositories, staging, committing, branching, and pushing code to GitHub.', duration: '4 hours' },
        { stepNumber: 8, title: 'Build a Personal Portfolio Website', description: 'Assemble your skills to design, build, and publish an accessible personal portfolio.', duration: '8 hours' },
      ],
      youtubeResources: [
        { title: 'Web Development In 2026 - A Practical Guide', url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8', channel: 'Traversy Media', level: 'Beginner', description: 'Comprehensive roadmap and practical guide for web development from scratch.', type: 'Video' },
        { title: 'HTML & CSS Full Course - Beginner to Pro', url: 'https://www.youtube.com/watch?v=G3e-cpL7ofc', channel: 'SuperSimpleDev', level: 'Beginner', description: 'Step-by-step complete introductory course covering all HTML & CSS fundamentals.', type: 'Video' },
        { title: 'JavaScript Programming - Full Course', url: 'https://www.youtube.com/watch?v=jS4aFq5-91M', channel: 'freeCodeCamp.org', level: 'Beginner', description: 'Complete beginner-friendly hands-on JavaScript tutorial.', type: 'Video' },
      ],
      notesResources: [
        { title: 'MDN: Getting Started with the Web', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web', description: 'Official Mozilla Developer Network guide to core web technologies.', type: 'Documentation', level: 'Beginner' },
        { title: 'Full-Stack Developer Roadmap', url: 'https://roadmap.sh/full-stack', description: 'Interactive community roadmap covering modern developer milestones.', type: 'Guide', level: 'Beginner' },
      ],
      practiceQuestions: [
        { question: 'What is the difference between client-side and server-side processing?', answer: 'Client-side processing executes in the user\'s web browser (rendering HTML, handling UI events with JavaScript), while server-side processing executes on a remote web server (database queries, business logic, authentication).', solution: 'Client-side: Handled by browser (HTML/CSS/JS). Server-side: Handled by server (Node.js/Python/PHP + Databases). Client requests resources via HTTP, server processes and responds.', difficulty: 'Beginner', topic: 'Web Architecture' },
        { question: 'Why is responsive web design important and how do media queries work?', answer: 'Responsive design ensures websites look and function well across mobile, tablet, and desktop screens. CSS media queries apply styles conditionally based on screen width (@media (min-width: 768px)).', solution: 'Use meta viewport tag <meta name="viewport" content="width=device-width, initial-scale=1.0"> and CSS @media rules to apply layout adjustments across viewport breakpoints.', difficulty: 'Beginner', topic: 'Responsive Design' },
      ],
      projects: [
        { title: 'Personal Responsive Portfolio Website', description: 'Build and deploy a mobile-friendly portfolio showcasing your bio, skills, project links, and contact form.', difficulty: 'Beginner', techStack: ['HTML5', 'CSS3', 'JavaScript', 'Git'], features: ['Mobile hamburger navigation menu', 'Interactive project card gallery', 'Client-side contact form validation', 'Published live on GitHub Pages or Vercel'] },
      ],
    },
    Intermediate: {
      description: 'Advanced JavaScript, ES6+, Promises, React.js components, state management, API integration, and full-stack connectivity.',
      prerequisites: ['HTML, CSS, and basic JavaScript'],
      roadmap: [
        { stepNumber: 1, title: 'Advanced JavaScript', description: 'Execution context, call stack, closures, prototypes, and lexical scoping.', duration: '6 hours' },
        { stepNumber: 2, title: 'ES6+ Features', description: 'Arrow functions, destructuring, spread/rest operators, template literals, and ES modules.', duration: '5 hours' },
        { stepNumber: 3, title: 'Asynchronous JavaScript', description: 'Event loop, callback queue, Promises, async/await, and error handling with try/catch.', duration: '6 hours' },
        { stepNumber: 4, title: 'API Integration', description: 'Fetch API, Axios, HTTP request headers, query parameters, and RESTful response handling.', duration: '6 hours' },
        { stepNumber: 5, title: 'React.js Fundamentals', description: 'Virtual DOM, JSX syntax, component composition, and unidirectional data flow.', duration: '6 hours' },
        { stepNumber: 6, title: 'React Components and Hooks', description: 'useState, useEffect, useRef, useMemo, useCallback, and custom hooks.', duration: '8 hours' },
        { stepNumber: 7, title: 'Routing and State Management', description: 'Client-side routing with React Router v6, Context API, and state stores.', duration: '6 hours' },
        { stepNumber: 8, title: 'Form Validation', description: 'Controlled form components, React Hook Form, and Zod/Yup schema validation.', duration: '5 hours' },
        { stepNumber: 9, title: 'Frontend and Backend Integration', description: 'Connecting React client to Express REST APIs, handling CORS, and auth tokens.', duration: '6 hours' },
        { stepNumber: 10, title: 'Build a Full-Stack Project', description: 'Develop a complete full-stack web application with authenticated database CRUD.', duration: '12 hours' },
      ],
      youtubeResources: [
        { title: 'Full Stack Web Development Course (MERN Stack)', url: 'https://www.youtube.com/watch?v=7CqJlxBYj-M', channel: 'freeCodeCamp.org', level: 'Intermediate', description: 'Build full-stack applications with MongoDB, Express, React, and Node.js.', type: 'Video' },
        { title: 'React JS Full Course 2026', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', channel: 'freeCodeCamp.org', level: 'Intermediate', description: 'Comprehensive React course with components, hooks, and single-page routing.', type: 'Video' },
      ],
      notesResources: [
        { title: 'React.dev Official Documentation', url: 'https://react.dev/learn', description: 'Official documentation and interactive tutorials for modern React.', type: 'Documentation', level: 'Intermediate' },
        { title: 'REST API Best Practices', url: 'https://restfulapi.net/', description: 'Standard conventions for endpoint design, status codes, and JSON payloads.', type: 'Guide', level: 'Intermediate' },
      ],
      practiceQuestions: [
        { question: 'How does the JavaScript Event Loop coordinate the call stack, microtask queue, and callback queue?', answer: 'Synchronous code runs on the call stack. When it is empty, the event loop drains microtasks (Promise callbacks, queueMicrotask) before processing the next macrotask (setTimeout, I/O).', solution: '1. Call stack executes synchronous code.\n2. Microtask queue (Promises) is completely emptied before any macrotask.\n3. Macrotask queue (setTimeout, setInterval) processes one task at a time, followed by rendering.', difficulty: 'Intermediate', topic: 'Asynchronous JavaScript' },
        { question: 'Why should state in React never be mutated directly, and how does reconciliation work?', answer: 'React relies on shallow reference equality checks. Directly mutating state bypasses re-rendering triggers and causes stale UI bugs. Reconciliation uses virtual DOM diffing to update only changed nodes.', solution: 'Always use state setters: setCount(prev => prev + 1) or setState({ ...state, key: value }). React compares new Virtual DOM with previous snapshot to compute minimal real DOM operations.', difficulty: 'Intermediate', topic: 'React State' },
      ],
      projects: [
        { title: 'Full-Stack Task & Project Management App', description: 'Build an authenticated full-stack Kanban/task management portal with React, Express, MongoDB, and JWT authentication.', difficulty: 'Intermediate', techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'], features: ['JWT token authentication with protected routes', 'Real-time task status update (Pending, In Progress, Completed)', 'Filter and search by project and priority', 'Responsive mobile-friendly dashboard interface'] },
      ],
    },
    Advanced: {
      description: 'Enterprise full-stack engineering: React architecture, TypeScript, security, performance, CI/CD, and scalable deployments.',
      prerequisites: ['Intermediate React and Node.js knowledge'],
      roadmap: [
        { stepNumber: 1, title: 'Advanced React Architecture', description: 'Compound components, render props, HOCs, code splitting with React.lazy and Suspense.', duration: '6 hours' },
        { stepNumber: 2, title: 'TypeScript Fundamentals', description: 'Generics, union types, interfaces, utility types, and strict type safety across client and server.', duration: '8 hours' },
        { stepNumber: 3, title: 'Performance Optimization', description: 'Lighthouse audits, memoization (useMemo/React.memo), virtualization, and bundle analysis.', duration: '6 hours' },
        { stepNumber: 4, title: 'Web Security Fundamentals', description: 'Mitigating OWASP Top 10: XSS, CSRF tokens, Content Security Policy (CSP), SQL injection, and rate limiting.', duration: '6 hours' },
        { stepNumber: 5, title: 'Testing and Debugging', description: 'Unit testing with Vitest/Jest, React Testing Library, mock service workers, and end-to-end Cypress/Playwright.', duration: '8 hours' },
        { stepNumber: 6, title: 'Accessibility and SEO', description: 'WCAG 2.1 AA compliance, ARIA landmarks, SSR/SSG with Next.js, and structured JSON-LD schema.', duration: '6 hours' },
        { stepNumber: 7, title: 'Deployment and CI/CD', description: 'Automated GitHub Actions pipelines, Docker containerization, staging vs production environments.', duration: '6 hours' },
        { stepNumber: 8, title: 'Production-Ready Application Architecture', description: 'Clean architecture, repository pattern, domain separation, logging (Winston/Pino), and Redis caching.', duration: '8 hours' },
        { stepNumber: 9, title: 'Build and Deploy a Complete Web Application', description: 'Deploy a high-availability, fully tested, secure web application with cloud monitoring.', duration: '12 hours' },
      ],
      youtubeResources: [
        { title: 'Full Stack TypeScript & Production Architecture', url: 'https://www.youtube.com/watch?v=ZVnjOPwW4ZA', channel: 'freeCodeCamp.org', level: 'Advanced', description: 'Modern production architecture using TypeScript, Next.js, and serverless backends.', type: 'Video' },
        { title: 'Web Security & OWASP Top 10 for Developers', url: 'https://www.youtube.com/watch?v=3XGj3q_5O38', channel: 'Fireship', level: 'Advanced', description: 'Practical breakdown of common vulnerabilities and mitigation techniques.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Web.dev Core Web Vitals & Optimization', url: 'https://web.dev/learn', description: 'Google guidelines for measuring and optimizing real-world user experience.', type: 'Documentation', level: 'Advanced' },
        { title: 'OWASP Web Security Testing Guide', url: 'https://owasp.org/www-project-web-security-testing-guide/', description: 'Comprehensive guide for testing the security of web applications.', type: 'Guide', level: 'Advanced' },
      ],
      practiceQuestions: [
        { question: 'What are Core Web Vitals (LCP, INP, CLS) and what techniques optimize them?', answer: 'LCP (Largest Contentful Paint, loading speed), INP (Interaction to Next Paint, responsiveness), CLS (Cumulative Layout Shift, visual stability). Optimize with image optimization, critical CSS inlining, code splitting, and pre-allocated media dimensions.', solution: 'LCP: Preload critical fonts/images, server-side render, CDN caching.\nINP: Defer heavy tasks, avoid long tasks blocking main thread.\nCLS: Set explicit width/height on images and dynamic embeds.', difficulty: 'Advanced', topic: 'Performance Optimization' },
        { question: 'How do you secure JWT stored on the client side against XSS and CSRF attacks?', answer: 'Store access tokens in memory and refresh tokens in HttpOnly, Secure, SameSite=Strict cookies to protect against script access (XSS) and cross-site forgery (CSRF).', solution: '1. Store access token in memory (React state/closure).\n2. Store refresh token in HttpOnly cookie.\n3. Validate CSRF headers on mutation endpoints.\n4. Short token expiry (15 mins) with silent refresh.', difficulty: 'Advanced', topic: 'Web Security' },
      ],
      projects: [
        { title: 'Enterprise E-Commerce SaaS Platform', description: 'Build and deploy a scalable production-ready web application with automated CI/CD and payment processing.', difficulty: 'Advanced', techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'GitHub Actions'], features: ['Type-safe frontend and backend APIs', 'Stripe checkout integration with webhook verification', 'Docker containerized development and production setup', 'Automated GitHub Actions CI/CD pipeline with unit & integration tests'] },
      ],
    },
  },
};

// Filter out old combined versions that are replaced with dedicated subjects
const preservedExisting = rawExistingCourses.filter(c =>
  c._id !== 'course-html-css' &&
  c._id !== 'course-dsa' &&
  c._id !== 'course-ai-ml' &&
  c.title !== 'Full-Stack Web Development Bootcamp' &&
  c.title !== 'Modern Frontend Development: Zero to Hero' &&
  c.title !== 'Scalable Backend Engineering & Architecture' &&
  c.title !== 'HTML5 Semantic Architecture & Web Accessibility' &&
  c.title !== 'CSS3 Mastery: Modern Layouts, Animations & Architecture' &&
  c.title !== 'Data Structures & Algorithms: Complete Mastery' &&
  c.title !== 'Machine Learning Engineering: From Fundamentals to MLOps' &&
  c.title !== 'Artificial Intelligence: Agents, Logic & Modern AI' &&
  c.title !== 'Data Science & Advanced Analytics Masterclass' &&
  c.title !== 'Software Engineering: Design Patterns & Clean Architecture'
);

// Map of 10 new/upgraded courses
const newCoursesList = [
  courseWebDev,
  courseFrontendDev,
  courseBackendDev,
  courseHtml,
  courseCss,
  courseDsa,
  courseMachineLearning,
  courseAi,
  courseDataScience,
  courseSoftwareEngineering
];

// Combine all courses and deduplicate by title
const combinedRaw = [
  ...newCoursesList,
  ...preservedExisting
];

const seenTitles = new Set();
const ALL_COURSES = [];
for (const c of combinedRaw) {
  if (!seenTitles.has(c.title)) {
    seenTitles.add(c.title);
    ALL_COURSES.push(c);
  }
}

console.log(`Assembled exactly ${ALL_COURSES.length} courses across ${ALL_CATEGORIES.length} categories.`);

// Validation check
for (const cat of ALL_CATEGORIES) {
  const match = ALL_COURSES.find(c => c.category === cat.name || (c.relatedCategories && c.relatedCategories.includes(cat.name)));
  if (!match) {
    console.warn(`WARNING: Category "${cat.name}" has no matching course!`);
  } else {
    console.log(`OK: Category "${cat.name}" -> Course: "${match.title}"`);
  }
}

// Write client/src/data/portalCourses.js
const portalOutput = `/**
 * ═══════════════════════════════════════════════════════════════════════════
 * EduFlow Learning Portal — Master Course Catalog & Category Repository
 * Comprehensive learning content with:
 *  - 25 Structured Categories
 *  - 25 Dedicated Engineering & Computer Science Courses
 *  - 3 Learning Levels per Subject (Beginner, Intermediate, Advanced)
 *  - Verified Educational YouTube Tutorials & Playlists
 *  - PDF Notes & Official Documentation References
 *  - Interactive Step-by-Step Roadmaps
 *  - Practice Questions & Real-World Projects
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const ALL_CATEGORIES = ${JSON.stringify(ALL_CATEGORIES, null, 2)};

export const PORTAL_COURSES = ${JSON.stringify(ALL_COURSES, null, 2)};
`;

fs.writeFileSync(portalPath, portalOutput, 'utf8');
console.log(`✅ Updated ${portalPath} with ${ALL_COURSES.length} courses!`);

// Write server/utils/seedCourses.js
const seedCoursesPath = path.resolve(__dirname, 'seedCourses.js');
const seedOutput = `require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const User     = require('../models/User');
const Course   = require('../models/Course');

const coursesData = ${JSON.stringify(ALL_COURSES, null, 2)};

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/lms_db';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB for seeding...');

    // Find or create default faculty
    let faculty = await User.findOne({ role: 'faculty' });
    if (!faculty) {
      faculty = await User.create({
        name: 'Prof. Kevin Powell',
        email: 'faculty@eduflow.io',
        password: 'password123',
        role: 'faculty',
      });
      console.log('Created default faculty user: faculty@eduflow.io');
    }

    // Insert or update courses
    let addedCount = 0;
    for (const item of coursesData) {
      const { _id, ...courseFields } = item;
      const exists = await Course.findOne({ title: item.title });
      if (!exists) {
        await Course.create({
          ...courseFields,
          faculty: faculty._id,
        });
        addedCount++;
      } else {
        await Course.findByIdAndUpdate(exists._id, {
          ...courseFields,
          faculty: faculty._id,
        });
      }
    }

    console.log(\`✅ Seeding complete! Successfully added/updated \${coursesData.length} core subject courses across all categories.\`);
    process.exit(0);
  } catch (err) {
    console.error(\`❌ Seeding failed: \${err.message}\`);
    process.exit(1);
  }
};

seedDB();
`;

fs.writeFileSync(seedCoursesPath, seedOutput, 'utf8');
console.log(`✅ Updated ${seedCoursesPath} successfully!`);
