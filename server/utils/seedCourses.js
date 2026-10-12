require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const User     = require('../models/User');
const Course   = require('../models/Course');

const coursesData = [
  {
    "_id": "course-web-dev",
    "title": "Full-Stack Web Development Bootcamp",
    "category": "Web Development",
    "level": "All Levels",
    "duration": "14 weeks",
    "description": "Master modern web development from fundamentals to full-stack production deployment with HTML, CSS, JavaScript, React, Node.js, and databases.",
    "coverImage": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Brad Traversy",
      "email": "brad@eduflow.io"
    },
    "prerequisites": [
      "Basic computer usage",
      "A web browser and code editor (VS Code recommended)"
    ],
    "learningOutcomes": [
      "Build responsive, mobile-first websites with HTML5 & modern CSS3",
      "Write modular ES6+ JavaScript and integrate asynchronous REST APIs",
      "Develop reactive Single Page Applications using React.js and Hooks",
      "Architect scalable backends using Node.js, Express, and databases",
      "Implement authentication, web security, and automated CI/CD deployments"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Web Fundamentals & Responsive Design",
        "duration": "3 weeks",
        "topics": [
          "How the Web Works & HTTP",
          "HTML5 Semantic Elements",
          "CSS3 Layouts (Flexbox & Grid)",
          "Mobile-First Responsive Design"
        ]
      },
      {
        "moduleTitle": "Module 2: Modern JavaScript & Asynchronous Programming",
        "duration": "3 weeks",
        "topics": [
          "JavaScript Syntax & DOM Manipulation",
          "ES6+ Features & Destructuring",
          "Promises, Async/Await & Fetch API",
          "Git & GitHub Workflows"
        ]
      },
      {
        "moduleTitle": "Module 3: Frontend SPAs with React.js",
        "duration": "4 weeks",
        "topics": [
          "React Components & JSX",
          "State Management & Custom Hooks",
          "Routing with React Router v6",
          "Form Handling & API Integration"
        ]
      },
      {
        "moduleTitle": "Module 4: Full-Stack Integration, Security & Deployment",
        "duration": "4 weeks",
        "topics": [
          "Node.js & Express REST APIs",
          "Database Integration & Auth",
          "Web Security (OWASP) & Testing",
          "CI/CD Pipelines & Cloud Deployment"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Learn how the web works, HTML5, CSS3, responsive design, and JavaScript DOM manipulation.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "How the Web Works",
            "description": "Understand DNS lookup, HTTP requests/responses, browsers, and client-server architecture.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 2,
            "title": "HTML Fundamentals",
            "description": "Semantic structure, headings, lists, tables, accessible forms, and multimedia elements.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "CSS Fundamentals",
            "description": "Selectors, specificity, cascade, colors, typography, and the box model (margin, padding, border).",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "Responsive Web Design",
            "description": "Mobile-first design principles, media queries, flexible units, and viewport configurations.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "JavaScript Basics",
            "description": "Variables (let/const), data types, operators, conditionals, loops, and functions.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 6,
            "title": "DOM Manipulation",
            "description": "Selecting elements, listening to click/submit events, dynamically updating HTML content.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 7,
            "title": "Git and GitHub Basics",
            "description": "Initializing git repositories, staging, committing, branching, and pushing code to GitHub.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 8,
            "title": "Build a Personal Portfolio Website",
            "description": "Assemble your skills to design, build, and publish an accessible personal portfolio.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Web Development In 2026 - A Practical Guide",
            "url": "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
            "channel": "Traversy Media",
            "level": "Beginner",
            "description": "Comprehensive roadmap and practical guide for web development from scratch.",
            "type": "Video"
          },
          {
            "title": "HTML & CSS Full Course - Beginner to Pro",
            "url": "https://www.youtube.com/watch?v=G3e-cpL7ofc",
            "channel": "SuperSimpleDev",
            "level": "Beginner",
            "description": "Step-by-step complete introductory course covering all HTML & CSS fundamentals.",
            "type": "Video"
          },
          {
            "title": "JavaScript Programming - Full Course",
            "url": "https://www.youtube.com/watch?v=jS4aFq5-91M",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Complete beginner-friendly hands-on JavaScript tutorial.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "MDN: Getting Started with the Web",
            "url": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
            "description": "Official Mozilla Developer Network guide to core web technologies.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "Full-Stack Developer Roadmap",
            "url": "https://roadmap.sh/full-stack",
            "description": "Interactive community roadmap covering modern developer milestones.",
            "type": "Guide",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the difference between client-side and server-side processing?",
            "answer": "Client-side processing executes in the user's web browser (rendering HTML, handling UI events with JavaScript), while server-side processing executes on a remote web server (database queries, business logic, authentication).",
            "solution": "Client-side: Handled by browser (HTML/CSS/JS). Server-side: Handled by server (Node.js/Python/PHP + Databases). Client requests resources via HTTP, server processes and responds.",
            "difficulty": "Beginner",
            "topic": "Web Architecture"
          },
          {
            "question": "Why is responsive web design important and how do media queries work?",
            "answer": "Responsive design ensures websites look and function well across mobile, tablet, and desktop screens. CSS media queries apply styles conditionally based on screen width (@media (min-width: 768px)).",
            "solution": "Use meta viewport tag <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> and CSS @media rules to apply layout adjustments across viewport breakpoints.",
            "difficulty": "Beginner",
            "topic": "Responsive Design"
          }
        ],
        "projects": [
          {
            "title": "Personal Responsive Portfolio Website",
            "description": "Build and deploy a mobile-friendly portfolio showcasing your bio, skills, project links, and contact form.",
            "difficulty": "Beginner",
            "techStack": [
              "HTML5",
              "CSS3",
              "JavaScript",
              "Git"
            ],
            "features": [
              "Mobile hamburger navigation menu",
              "Interactive project card gallery",
              "Client-side contact form validation",
              "Published live on GitHub Pages or Vercel"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Advanced JavaScript, ES6+, Promises, React.js components, state management, API integration, and full-stack connectivity.",
        "prerequisites": [
          "HTML, CSS, and basic JavaScript"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Advanced JavaScript",
            "description": "Execution context, call stack, closures, prototypes, and lexical scoping.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "ES6+ Features",
            "description": "Arrow functions, destructuring, spread/rest operators, template literals, and ES modules.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Asynchronous JavaScript",
            "description": "Event loop, callback queue, Promises, async/await, and error handling with try/catch.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "API Integration",
            "description": "Fetch API, Axios, HTTP request headers, query parameters, and RESTful response handling.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 5,
            "title": "React.js Fundamentals",
            "description": "Virtual DOM, JSX syntax, component composition, and unidirectional data flow.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 6,
            "title": "React Components and Hooks",
            "description": "useState, useEffect, useRef, useMemo, useCallback, and custom hooks.",
            "duration": "8 hours"
          },
          {
            "stepNumber": 7,
            "title": "Routing and State Management",
            "description": "Client-side routing with React Router v6, Context API, and state stores.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 8,
            "title": "Form Validation",
            "description": "Controlled form components, React Hook Form, and Zod/Yup schema validation.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 9,
            "title": "Frontend and Backend Integration",
            "description": "Connecting React client to Express REST APIs, handling CORS, and auth tokens.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 10,
            "title": "Build a Full-Stack Project",
            "description": "Develop a complete full-stack web application with authenticated database CRUD.",
            "duration": "12 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Full Stack Web Development Course (MERN Stack)",
            "url": "https://www.youtube.com/watch?v=7CqJlxBYj-M",
            "channel": "freeCodeCamp.org",
            "level": "Intermediate",
            "description": "Build full-stack applications with MongoDB, Express, React, and Node.js.",
            "type": "Video"
          },
          {
            "title": "React JS Full Course 2026",
            "url": "https://www.youtube.com/watch?v=bMknfKXIFA8",
            "channel": "freeCodeCamp.org",
            "level": "Intermediate",
            "description": "Comprehensive React course with components, hooks, and single-page routing.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "React.dev Official Documentation",
            "url": "https://react.dev/learn",
            "description": "Official documentation and interactive tutorials for modern React.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "REST API Best Practices",
            "url": "https://restfulapi.net/",
            "description": "Standard conventions for endpoint design, status codes, and JSON payloads.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "How does the JavaScript Event Loop coordinate the call stack, microtask queue, and callback queue?",
            "answer": "Synchronous code runs on the call stack. When it is empty, the event loop drains microtasks (Promise callbacks, queueMicrotask) before processing the next macrotask (setTimeout, I/O).",
            "solution": "1. Call stack executes synchronous code.\n2. Microtask queue (Promises) is completely emptied before any macrotask.\n3. Macrotask queue (setTimeout, setInterval) processes one task at a time, followed by rendering.",
            "difficulty": "Intermediate",
            "topic": "Asynchronous JavaScript"
          },
          {
            "question": "Why should state in React never be mutated directly, and how does reconciliation work?",
            "answer": "React relies on shallow reference equality checks. Directly mutating state bypasses re-rendering triggers and causes stale UI bugs. Reconciliation uses virtual DOM diffing to update only changed nodes.",
            "solution": "Always use state setters: setCount(prev => prev + 1) or setState({ ...state, key: value }). React compares new Virtual DOM with previous snapshot to compute minimal real DOM operations.",
            "difficulty": "Intermediate",
            "topic": "React State"
          }
        ],
        "projects": [
          {
            "title": "Full-Stack Task & Project Management App",
            "description": "Build an authenticated full-stack Kanban/task management portal with React, Express, MongoDB, and JWT authentication.",
            "difficulty": "Intermediate",
            "techStack": [
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "JWT"
            ],
            "features": [
              "JWT token authentication with protected routes",
              "Real-time task status update (Pending, In Progress, Completed)",
              "Filter and search by project and priority",
              "Responsive mobile-friendly dashboard interface"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Enterprise full-stack engineering: React architecture, TypeScript, security, performance, CI/CD, and scalable deployments.",
        "prerequisites": [
          "Intermediate React and Node.js knowledge"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Advanced React Architecture",
            "description": "Compound components, render props, HOCs, code splitting with React.lazy and Suspense.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "TypeScript Fundamentals",
            "description": "Generics, union types, interfaces, utility types, and strict type safety across client and server.",
            "duration": "8 hours"
          },
          {
            "stepNumber": 3,
            "title": "Performance Optimization",
            "description": "Lighthouse audits, memoization (useMemo/React.memo), virtualization, and bundle analysis.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "Web Security Fundamentals",
            "description": "Mitigating OWASP Top 10: XSS, CSRF tokens, Content Security Policy (CSP), SQL injection, and rate limiting.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 5,
            "title": "Testing and Debugging",
            "description": "Unit testing with Vitest/Jest, React Testing Library, mock service workers, and end-to-end Cypress/Playwright.",
            "duration": "8 hours"
          },
          {
            "stepNumber": 6,
            "title": "Accessibility and SEO",
            "description": "WCAG 2.1 AA compliance, ARIA landmarks, SSR/SSG with Next.js, and structured JSON-LD schema.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 7,
            "title": "Deployment and CI/CD",
            "description": "Automated GitHub Actions pipelines, Docker containerization, staging vs production environments.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 8,
            "title": "Production-Ready Application Architecture",
            "description": "Clean architecture, repository pattern, domain separation, logging (Winston/Pino), and Redis caching.",
            "duration": "8 hours"
          },
          {
            "stepNumber": 9,
            "title": "Build and Deploy a Complete Web Application",
            "description": "Deploy a high-availability, fully tested, secure web application with cloud monitoring.",
            "duration": "12 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Full Stack TypeScript & Production Architecture",
            "url": "https://www.youtube.com/watch?v=ZVnjOPwW4ZA",
            "channel": "freeCodeCamp.org",
            "level": "Advanced",
            "description": "Modern production architecture using TypeScript, Next.js, and serverless backends.",
            "type": "Video"
          },
          {
            "title": "Web Security & OWASP Top 10 for Developers",
            "url": "https://www.youtube.com/watch?v=3XGj3q_5O38",
            "channel": "Fireship",
            "level": "Advanced",
            "description": "Practical breakdown of common vulnerabilities and mitigation techniques.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Web.dev Core Web Vitals & Optimization",
            "url": "https://web.dev/learn",
            "description": "Google guidelines for measuring and optimizing real-world user experience.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "OWASP Web Security Testing Guide",
            "url": "https://owasp.org/www-project-web-security-testing-guide/",
            "description": "Comprehensive guide for testing the security of web applications.",
            "type": "Guide",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What are Core Web Vitals (LCP, INP, CLS) and what techniques optimize them?",
            "answer": "LCP (Largest Contentful Paint, loading speed), INP (Interaction to Next Paint, responsiveness), CLS (Cumulative Layout Shift, visual stability). Optimize with image optimization, critical CSS inlining, code splitting, and pre-allocated media dimensions.",
            "solution": "LCP: Preload critical fonts/images, server-side render, CDN caching.\nINP: Defer heavy tasks, avoid long tasks blocking main thread.\nCLS: Set explicit width/height on images and dynamic embeds.",
            "difficulty": "Advanced",
            "topic": "Performance Optimization"
          },
          {
            "question": "How do you secure JWT stored on the client side against XSS and CSRF attacks?",
            "answer": "Store access tokens in memory and refresh tokens in HttpOnly, Secure, SameSite=Strict cookies to protect against script access (XSS) and cross-site forgery (CSRF).",
            "solution": "1. Store access token in memory (React state/closure).\n2. Store refresh token in HttpOnly cookie.\n3. Validate CSRF headers on mutation endpoints.\n4. Short token expiry (15 mins) with silent refresh.",
            "difficulty": "Advanced",
            "topic": "Web Security"
          }
        ],
        "projects": [
          {
            "title": "Enterprise E-Commerce SaaS Platform",
            "description": "Build and deploy a scalable production-ready web application with automated CI/CD and payment processing.",
            "difficulty": "Advanced",
            "techStack": [
              "React",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "Docker",
              "GitHub Actions"
            ],
            "features": [
              "Type-safe frontend and backend APIs",
              "Stripe checkout integration with webhook verification",
              "Docker containerized development and production setup",
              "Automated GitHub Actions CI/CD pipeline with unit & integration tests"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-frontend-dev",
    "title": "Modern Frontend Development: Zero to Hero",
    "category": "Frontend Development",
    "level": "All Levels",
    "duration": "12 weeks",
    "description": "Master modern frontend engineering: responsive UI layouts, ES6+ JavaScript, React architecture, TypeScript, state management, and performance optimization.",
    "coverImage": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Dan Abramov",
      "email": "dan@eduflow.io"
    },
    "prerequisites": [
      "Basic computer literacy",
      "A modern web browser and VS Code"
    ],
    "learningOutcomes": [
      "Design pixel-perfect responsive layouts using CSS Flexbox and 2D CSS Grid",
      "Write clean, modern ES6+ JavaScript and consume asynchronous REST APIs",
      "Architect robust Single Page Applications with React 18, Hooks, and Router",
      "Incorporate TypeScript for end-to-end type safety and compile-time correctness",
      "Optimize web performance, Core Web Vitals, accessibility, and automated tests"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Responsive Layouts & CSS Mastery",
        "duration": "3 weeks",
        "topics": [
          "HTML5 Semantics",
          "Flexbox Alignment",
          "CSS Grid Systems",
          "Responsive Breakpoints & Media Queries"
        ]
      },
      {
        "moduleTitle": "Module 2: JavaScript Mastery & Async APIs",
        "duration": "3 weeks",
        "topics": [
          "DOM Manipulation",
          "ES6+ Features",
          "Promises & Async/Await",
          "Fetch API & JSON Processing"
        ]
      },
      {
        "moduleTitle": "Module 3: React.js Component Architecture",
        "duration": "3 weeks",
        "topics": [
          "Components & Props",
          "React State & Hooks",
          "React Router v6",
          "Form Validation & Context"
        ]
      },
      {
        "moduleTitle": "Module 4: Advanced Architecture & Production",
        "duration": "3 weeks",
        "topics": [
          "TypeScript Integration",
          "State Management (Zustand/Redux)",
          "Testing with Vitest/RTL",
          "Performance & Accessibility (WCAG)"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Master HTML, CSS, Flexbox, CSS Grid, responsive design, JavaScript fundamentals, DOM manipulation, and Git.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "HTML Foundations",
            "description": "Semantic tags, document outline, links, media, and form controls.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "CSS Styling & Cascade",
            "description": "Selectors, specificity, typography, colors, and the CSS box model.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Flexbox Layouts",
            "description": "Flex containers, direction, justify-content, align-items, and flex-wrap.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "CSS Grid Layouts",
            "description": "Two-dimensional grid tracks, fr units, grid-template-areas, and auto-fit.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Responsive Design",
            "description": "Mobile-first workflows, media queries, clamp() fluid typography, and viewports.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 6,
            "title": "JavaScript Fundamentals",
            "description": "Data types, variables, conditionals, loops, functions, and arrays.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 7,
            "title": "DOM Manipulation",
            "description": "Selecting elements, adding event listeners, dynamic style manipulation.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 8,
            "title": "Git and GitHub",
            "description": "Version control workflows, commit history, branching, and pushing to remotes.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 9,
            "title": "Build a Responsive Website",
            "description": "Build and deploy a responsive product landing page with mobile hamburger nav.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Frontend Web Development Bootcamp Course",
            "url": "https://www.youtube.com/watch?v=zJSY8tbf_ys",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Complete step-by-step introduction to frontend development and responsive design.",
            "type": "Video"
          },
          {
            "title": "CSS Flexbox & Grid Masterclass",
            "url": "https://www.youtube.com/watch?v=JJSoEo8JSnc",
            "channel": "Kevin Powell",
            "level": "Beginner",
            "description": "In-depth visual guide to mastering CSS layout systems.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "MDN Frontend Web Developer Path",
            "url": "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer",
            "description": "Official Mozilla Developer Network comprehensive curriculum.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "CSS-Tricks Flexbox & Grid Guides",
            "url": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
            "description": "Definitive visual cheat sheets for CSS Flexbox and 2D Grid.",
            "type": "CheatSheet",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "When should you choose CSS Grid over Flexbox for a layout?",
            "answer": "Use Flexbox for one-dimensional layouts (a single row or column of items) and CSS Grid for two-dimensional layouts where alignment across both rows and columns is required.",
            "solution": "Flexbox = 1D content-first flow. CSS Grid = 2D layout-first structure with precise row/column control.",
            "difficulty": "Beginner",
            "topic": "CSS Layouts"
          },
          {
            "question": "What is event delegation in JavaScript and why is it useful?",
            "answer": "Event delegation attaches a single event listener to a parent element to manage events for all existing and dynamically added child elements via event bubbling, conserving memory.",
            "solution": "Listen on parent: parent.addEventListener(\"click\", (e) => { if (e.target.matches(\".child\")) { ... } }); avoids attaching hundreds of individual listeners.",
            "difficulty": "Beginner",
            "topic": "DOM Manipulation"
          }
        ],
        "projects": [
          {
            "title": "Responsive Product Showcase Landing Page",
            "description": "Build a mobile-first responsive landing page with sticky navbar, hero section, features grid, pricing cards, and interactive FAQ accordion.",
            "difficulty": "Beginner",
            "techStack": [
              "HTML5",
              "CSS Grid",
              "Flexbox",
              "JavaScript"
            ],
            "features": [
              "Mobile-first responsive layout",
              "CSS Grid feature matrix",
              "Interactive FAQ accordion using vanilla JS",
              "Fully compliant with W3C validation"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Advanced JavaScript, ES6+, Promises, async/await, React.js components, hooks, routing, and API integration.",
        "prerequisites": [
          "HTML5, CSS3, and JavaScript basics"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Advanced JavaScript & Prototypes",
            "description": "Prototypes, prototype chain, \"this\" binding, closures, and lexical scope.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "ES6+ Features & Syntax",
            "description": "Destructuring, rest/spread, template strings, default parameters, and ES modules.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Promises and Async/Await",
            "description": "Promise states, chaining, Promise.all, async/await syntax, and error handling.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Fetch API & REST Integrations",
            "description": "GET/POST requests, JSON serialization, headers, and HTTP status codes.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "React.js Foundations",
            "description": "JSX syntax, components, props validation, and virtual DOM reconciliation.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 6,
            "title": "Components, Props, and State",
            "description": "Managing local component state with useState, props drilling vs composition.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 7,
            "title": "React Hooks Mastery",
            "description": "useEffect lifecycle management, useRef for DOM nodes, and custom reusable hooks.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 8,
            "title": "React Router v6",
            "description": "Browser router, route parameters, nested routes, protected routes, and programmatic navigation.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 9,
            "title": "Form Handling & Validation",
            "description": "Controlled inputs, form submission handling, and validation error messages.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 10,
            "title": "API Integration in React",
            "description": "Fetching data inside useEffect, loading states, error boundaries, and debounce.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 11,
            "title": "Build a React Project",
            "description": "Develop and deploy an interactive analytics and finance dashboard.",
            "duration": "10 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "React 18 Full Course - Complete Guide",
            "url": "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
            "channel": "Traversy Media",
            "level": "Intermediate",
            "description": "Hands-on React course with components, hooks, router, and context.",
            "type": "Video"
          },
          {
            "title": "Async JavaScript: Promises, Async/Await & Fetch",
            "url": "https://www.youtube.com/watch?v=PoRJizFvM7s",
            "channel": "freeCodeCamp.org",
            "level": "Intermediate",
            "description": "Deep dive into asynchronous JavaScript and network request patterns.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "React.dev Official Documentation",
            "url": "https://react.dev/learn",
            "description": "The official interactive learning guide from the React core team.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "JavaScript.info: The Modern JavaScript Tutorial",
            "url": "https://javascript.info/",
            "description": "In-depth reference on ES6+, closures, prototypes, and asynchronous execution.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the purpose of useEffect dependency array in React?",
            "answer": "The dependency array instructs React when to re-execute the effect. If empty ([]), it runs once on mount. If containing variables ([a, b]), it re-runs when any dependency value changes by shallow equality.",
            "solution": "No array: runs after every render.\nEmpty []: runs once on mount/unmount.\nWith dependencies [foo]: re-runs when foo changes.",
            "difficulty": "Intermediate",
            "topic": "React Hooks"
          },
          {
            "question": "What is the difference between Promise.all and Promise.allSettled?",
            "answer": "Promise.all rejects immediately as soon as any single promise rejects (fail-fast), whereas Promise.allSettled waits for all promises to settle regardless of whether they fulfilled or rejected.",
            "solution": "Use Promise.all when all results are strictly interdependent. Use Promise.allSettled when independent outcomes should all be inspected.",
            "difficulty": "Intermediate",
            "topic": "Async JavaScript"
          }
        ],
        "projects": [
          {
            "title": "Interactive Analytics & Finance Dashboard",
            "description": "Build a responsive multi-page dashboard featuring live chart visualizations, filtering, search, and external API data.",
            "difficulty": "Intermediate",
            "techStack": [
              "React",
              "React Router",
              "Recharts",
              "Fetch API",
              "CSS Modules"
            ],
            "features": [
              "Multi-page navigation with React Router",
              "Interactive financial charts with Recharts",
              "Dynamic search filter with debounced input",
              "Dark/light theme toggle saved to localStorage"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Advanced React patterns, TypeScript, state management, performance optimization, testing, accessibility, and production architecture.",
        "prerequisites": [
          "Solid React 18 knowledge and intermediate JavaScript"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Advanced React Patterns",
            "description": "Compound components, render props, higher-order components, and context selectors.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "TypeScript for Frontend",
            "description": "Props interfaces, generic components, Discriminated Unions, and strict type safety.",
            "duration": "8 hours"
          },
          {
            "stepNumber": 3,
            "title": "State Management at Scale",
            "description": "Zustand, Redux Toolkit, React Query (TanStack Query) for server state caching.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 4,
            "title": "Performance Optimization",
            "description": "React.memo, useMemo, useCallback, virtualization (TanStack Virtual), and bundle splitting.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 5,
            "title": "Lazy Loading & Code Splitting",
            "description": "Route-based and component-based code splitting using React.lazy and Suspense.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 6,
            "title": "Frontend Testing",
            "description": "Unit testing with Vitest/Jest, component tests with React Testing Library, and MSW mocking.",
            "duration": "8 hours"
          },
          {
            "stepNumber": 7,
            "title": "Web Accessibility (a11y)",
            "description": "ARIA attributes, keyboard navigation, focus trap in modals, and automated axe-core audits.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 8,
            "title": "Security Best Practices",
            "description": "Sanitizing user inputs (DOMPurify), CSP headers, preventing XSS, and safe iframe embeds.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 9,
            "title": "Frontend Architecture",
            "description": "Atomic design, feature-sliced design, monorepos, and design system token distribution.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 10,
            "title": "Build a Production-Ready Application",
            "description": "Deliver a production-grade multi-tenant collaborative workspace.",
            "duration": "12 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Advanced React Patterns & Performance Tuning",
            "url": "https://www.youtube.com/watch?v=HYKZXg7_tQY",
            "channel": "Jack Herrington",
            "level": "Advanced",
            "description": "Deep architectural dive into compound components, state stores, and rendering performance.",
            "type": "Video"
          },
          {
            "title": "TypeScript Full Course for Beginners to Advanced",
            "url": "https://www.youtube.com/watch?v=BwuLxPH8IDs",
            "channel": "freeCodeCamp.org",
            "level": "Advanced",
            "description": "Comprehensive TypeScript course covering interfaces, generics, and React integration.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "TypeScript Handbook Official Documentation",
            "url": "https://www.typescriptlang.org/docs/handbook/intro.html",
            "description": "Official reference guide for type definitions, interfaces, and generics.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Kent C. Dodds: React Testing Library Principles",
            "url": "https://testing-library.com/docs/react-testing-library/intro/",
            "description": "Best practices for writing maintainable, user-centric frontend tests.",
            "type": "Guide",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "When does useMemo improve performance and when does it hurt performance?",
            "answer": "useMemo improves performance only when computing an expensive value (e.g. filtering 10,000 items) or maintaining referential stability for downstream memoized components. Overusing it on trivial operations adds memory overhead and unnecessary comparison cycles.",
            "solution": "Profile with React DevTools Profiler before wrapping calculations. Never use it for simple arithmetic or short array mapping.",
            "difficulty": "Advanced",
            "topic": "React Performance"
          },
          {
            "question": "What is a Discriminated Union in TypeScript and how does it prevent state bugs in React?",
            "answer": "A Discriminated Union is a type composition where multiple interfaces share a common literal property (the discriminant), enabling TypeScript to narrow types with 100% compile-time exhaustiveness.",
            "solution": "type State = { status: \"loading\" } | { status: \"success\", data: T } | { status: \"error\", error: Error }; prevents rendering data when status is \"loading\".",
            "difficulty": "Advanced",
            "topic": "TypeScript"
          }
        ],
        "projects": [
          {
            "title": "Multi-Tenant Collaborative Kanban Workspace",
            "description": "Build an enterprise-grade collaborative task application featuring drag-and-drop boards, optimistic updates, and end-to-end TypeScript.",
            "difficulty": "Advanced",
            "techStack": [
              "React",
              "TypeScript",
              "Zustand",
              "TailwindCSS",
              "Vitest",
              "RTL"
            ],
            "features": [
              "Type-safe state store with Zustand",
              "Drag-and-drop column and card organization",
              "100% unit and component test coverage with Vitest & RTL",
              "Automated accessibility compliance check with axe-core"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-backend-dev",
    "title": "Scalable Backend Engineering & Architecture",
    "category": "Backend Development",
    "level": "All Levels",
    "duration": "12 weeks",
    "description": "Build robust, production-grade backend systems: Node.js, Express, REST APIs, database indexing, caching, authentication, and microservice architectures.",
    "coverImage": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Hussein Nasser",
      "email": "hussein@eduflow.io"
    },
    "prerequisites": [
      "Basic JavaScript syntax",
      "Terminal/command line basics"
    ],
    "learningOutcomes": [
      "Architect production RESTful APIs using Node.js and Express",
      "Design normalized relational databases and flexible NoSQL schemas",
      "Implement secure user authentication with JWT and bcrypt password hashing",
      "Optimize query performance using indexes, connection pooling, and Redis caching",
      "Deploy containerized backend microservices with automated testing and CI/CD"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Server Foundations & Node.js Core",
        "duration": "3 weeks",
        "topics": [
          "Client-Server Model",
          "Node.js Event-Driven Architecture",
          "npm & Module System",
          "Express.js Routing & Middleware"
        ]
      },
      {
        "moduleTitle": "Module 2: REST APIs & Database Integration",
        "duration": "3 weeks",
        "topics": [
          "REST API Design",
          "MongoDB & Mongoose Schemas",
          "SQL Fundamentals & Relations",
          "Input Validation & Error Handling"
        ]
      },
      {
        "moduleTitle": "Module 3: Security & Authentication",
        "duration": "3 weeks",
        "topics": [
          "Password Hashing with bcrypt",
          "JWT Tokens & Refresh Flow",
          "CORS, Helmet & Rate Limiting",
          "Automated API Testing with Supertest"
        ]
      },
      {
        "moduleTitle": "Module 4: Performance, Caching & Deployment",
        "duration": "3 weeks",
        "topics": [
          "Database Indexing & Explain Plans",
          "Redis Caching & Queue Workers",
          "Docker Containers & Cloud Deployment",
          "CI/CD Pipelines & Monitoring"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Introduction to backend engineering, client-server models, HTTP/HTTPS, Node.js fundamentals, npm, Express.js basics, REST APIs, and database basics.",
        "prerequisites": [
          "Basic JavaScript syntax"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "What Is Backend Development?",
            "description": "Server responsibilities, business logic, persistence layers, and API communication.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 2,
            "title": "Client-Server Architecture",
            "description": "Request-response cycles, IP addresses, ports, DNS resolution, and TCP/IP basics.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "HTTP and HTTPS",
            "description": "Methods (GET, POST, PUT, DELETE), headers, status codes (2xx, 4xx, 5xx), and SSL/TLS encryption.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "JavaScript for Backend Development",
            "description": "Node.js runtime, V8 engine, file system (fs), and path modules.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Node.js Fundamentals",
            "description": "Event loop, non-blocking I/O, streams, buffers, and event emitters.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 6,
            "title": "npm and Package Management",
            "description": "package.json, dependencies, semantic versioning, and running scripts.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 7,
            "title": "Express.js Basics",
            "description": "Setting up an Express application, basic route handlers, and request/response objects.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 8,
            "title": "REST API Fundamentals",
            "description": "Resource-oriented URIs, HTTP verbs mapping to actions, and JSON formatting.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 9,
            "title": "Basic CRUD Operations",
            "description": "Creating, reading, updating, and deleting records in memory with Express.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 10,
            "title": "Introduction to Databases",
            "description": "Understanding relational (SQL) vs document (NoSQL) storage models.",
            "duration": "4 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Node.js & Express.js - Full Course for Beginners",
            "url": "https://www.youtube.com/watch?v=Oe421EPjeBE",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Learn backend development with Node.js and Express from the ground up.",
            "type": "Video"
          },
          {
            "title": "REST API Concepts and Examples",
            "url": "https://www.youtube.com/watch?v=lsMQRaeKNDk",
            "channel": "Web Dev Simplified",
            "level": "Beginner",
            "description": "Crystal-clear explanation of REST architectural principles and HTTP verbs.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Node.js Official Documentation",
            "url": "https://nodejs.org/en/docs",
            "description": "Comprehensive API reference for the Node.js runtime.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "Express.js Getting Started Guide",
            "url": "https://expressjs.com/en/starter/installing.html",
            "description": "Official fast, unopinionated, minimalist web framework guide.",
            "type": "Documentation",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Why is Node.js called \"single-threaded and non-blocking\"?",
            "answer": "Node.js executes JavaScript code in a single thread via the V8 engine, but offloads asynchronous I/O operations (file system, network calls) to the operating system or libuv thread pool, enabling high concurrency without blocking the main thread.",
            "solution": "Main thread processes event loop. Heavy I/O is delegated to libuv worker threads. Callbacks notify the event loop when I/O completes.",
            "difficulty": "Beginner",
            "topic": "Node.js Core"
          },
          {
            "question": "What is the semantic difference between PUT and PATCH HTTP methods?",
            "answer": "PUT replaces the entire resource representation with the provided payload. PATCH applies partial modifications to specific fields of the existing resource.",
            "solution": "PUT: Full update (missing fields are reset or deleted). PATCH: Partial update (only specified fields are modified).",
            "difficulty": "Beginner",
            "topic": "HTTP Standards"
          }
        ],
        "projects": [
          {
            "title": "Bookstore & Catalog REST API",
            "description": "Build an Express.js REST API providing complete CRUD endpoints for an online bookstore catalog with JSON persistence.",
            "difficulty": "Beginner",
            "techStack": [
              "Node.js",
              "Express",
              "JSON",
              "Postman"
            ],
            "features": [
              "Clean resource endpoints (/api/books)",
              "Request body validation for title and price",
              "Structured error responses with HTTP status codes",
              "Postman collection for automated testing"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "REST API development, Express middleware, MongoDB & Mongoose, SQL fundamentals, JWT authentication, validation, error handling, and API testing.",
        "prerequisites": [
          "Node.js basics and basic database concepts"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "REST API Development",
            "description": "Structuring scalable route hierarchies, controllers, and service layers.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "Express Middleware",
            "description": "Built-in, third-party (cors, helmet, morgan), and custom request middleware.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "MongoDB and Mongoose",
            "description": "Schema definition, types, validation, virtuals, and aggregation pipelines.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 4,
            "title": "SQL Fundamentals",
            "description": "Relational tables, foreign keys, inner/outer joins, and ACID transactions.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 5,
            "title": "Authentication and Authorization",
            "description": "Password hashing with bcrypt and role-based access control (RBAC).",
            "duration": "6 hours"
          },
          {
            "stepNumber": 6,
            "title": "JWT Fundamentals",
            "description": "Signing, verifying, and decoding JSON Web Tokens with expiry management.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 7,
            "title": "Input Validation",
            "description": "Sanitizing and validating payloads with Joi or Zod schema validators.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 8,
            "title": "Centralized Error Handling",
            "description": "Global error-handling middleware, custom AppError classes, and async handlers.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 9,
            "title": "API Testing",
            "description": "Automated integration testing of endpoints using Jest and Supertest.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 10,
            "title": "Frontend and Backend Integration",
            "description": "Connecting client applications, handling CORS credentials, and file uploads.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 11,
            "title": "Build a Complete CRUD Application",
            "description": "Develop a complete authenticated social feed API with image uploads.",
            "duration": "12 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Node.js, Express, MongoDB & JWT Tutorial",
            "url": "https://www.youtube.com/watch?v=-0exw-9YJBo",
            "channel": "Traversy Media",
            "level": "Intermediate",
            "description": "Complete authentication system with JWT, protected routes, and MongoDB.",
            "type": "Video"
          },
          {
            "title": "Postman Tutorial for API Testing",
            "url": "https://www.youtube.com/watch?v=VywxIQ2ZXw4",
            "channel": "freeCodeCamp.org",
            "level": "Intermediate",
            "description": "Automate endpoint validation, environment variables, and testing scripts.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Mongoose Official Documentation",
            "url": "https://mongoosejs.com/docs/guide.html",
            "description": "Comprehensive guide to schemas, models, queries, and middleware in Mongoose.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "JWT.io Introduction to JSON Web Tokens",
            "url": "https://jwt.io/introduction",
            "description": "Official standard specification and visual debugger for JWT.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Why should passwords never be stored in plain text, and how does bcrypt prevent attacks?",
            "answer": "Storing plain text leaks user credentials on any database breach. bcrypt uses a one-way cryptographic hash with an automatically generated salt and adjustable cost factor (work factor) to defend against rainbow table and brute-force attacks.",
            "solution": "bcrypt.hash(password, saltRounds) generates salted hash. bcrypt.compare(plain, hash) safely verifies without decrypting.",
            "difficulty": "Intermediate",
            "topic": "Authentication & Security"
          },
          {
            "question": "What is the role of next(err) in Express middleware?",
            "answer": "Passing an argument to next() signals an error to Express, causing it to bypass all regular remaining route handlers and jump straight to the designated error-handling middleware (functions with 4 parameters: err, req, res, next).",
            "solution": "app.use((err, req, res, next) => { res.status(err.status || 500).json({ error: err.message }); });",
            "difficulty": "Intermediate",
            "topic": "Express Middleware"
          }
        ],
        "projects": [
          {
            "title": "Authenticated Social Feed API with Media Uploads",
            "description": "Build an Express and MongoDB REST API with user registration, JWT authentication, post creation, comments, and Multer file uploads.",
            "difficulty": "Intermediate",
            "techStack": [
              "Node.js",
              "Express",
              "MongoDB",
              "JWT",
              "Multer",
              "Supertest"
            ],
            "features": [
              "User signup and login with hashed passwords",
              "Role-scoped route protection (user, admin)",
              "Multipart image upload with Multer and disk storage",
              "Automated integration test suite with Jest and Supertest"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Backend architecture, database indexing, query optimization, API security, rate limiting, caching with Redis, CI/CD, background jobs, and scalability.",
        "prerequisites": [
          "Solid REST API development and database experience"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Backend Architecture",
            "description": "Layered architecture, Clean Architecture, Dependency Injection, and Repository pattern.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 2,
            "title": "Database Indexing & Query Optimization",
            "description": "B-tree vs Hash indexes, compound indexes, explain plans, and query performance tuning.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 3,
            "title": "API Security & Hardening",
            "description": "Preventing NoSQL injection, timing attacks, helmet HTTP headers, and CORS security.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "Rate Limiting & DDoS Defense",
            "description": "Token bucket and sliding window rate limiting algorithms using Redis stores.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Caching Fundamentals with Redis",
            "description": "Cache-aside, write-through strategies, cache invalidation, and TTL expiration.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 6,
            "title": "Logging and Monitoring",
            "description": "Structured JSON logging with Winston/Pino, correlation IDs, and Prometheus metrics.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 7,
            "title": "Automated Testing at Scale",
            "description": "Unit tests, database integration test containers, and load testing with k6.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 8,
            "title": "Background Jobs & Message Queues",
            "description": "Asynchronous task processing with BullMQ/RabbitMQ for emails and reports.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 9,
            "title": "Deployment & Containerization",
            "description": "Writing multi-stage Dockerfiles, Docker Compose, and health-check endpoints.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 10,
            "title": "CI/CD Pipelines",
            "description": "Automated test execution, linting, Docker image push, and zero-downtime deployment.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 11,
            "title": "Scalability and Performance",
            "description": "Horizontal scaling, stateless sessions, load balancers (NGINX), and database read replicas.",
            "duration": "8 hours"
          },
          {
            "stepNumber": 12,
            "title": "Build a Production Backend Project",
            "description": "Architect and deploy a high-throughput URL shortener and analytics engine.",
            "duration": "14 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Backend Engineering Course: Architecture & Scaling",
            "url": "https://www.youtube.com/watch?v=yox7N7aWjT4",
            "channel": "Hussein Nasser",
            "level": "Advanced",
            "description": "Deep architectural dive into protocols, database pooling, proxies, and scaling.",
            "type": "Video"
          },
          {
            "title": "Redis Crash Course - High-Speed Caching",
            "url": "https://www.youtube.com/watch?v=jgpVdJB2sKQ",
            "channel": "Traversy Media",
            "level": "Advanced",
            "description": "In-memory caching patterns, TTL expirations, and Redis data structures.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "High Performance Browser & Backend Networking",
            "url": "https://hpbn.co/",
            "description": "Definitive engineering guide by Ilya Grigorik on network latency and TCP/HTTP.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Redis Official Documentation",
            "url": "https://redis.io/docs/",
            "description": "Official guide on commands, data persistence, and caching architectures.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the \"Cache Stampede\" problem and how do you mitigate it?",
            "answer": "Cache Stampede occurs when a high-traffic cached key expires, causing thousands of concurrent requests to simultaneously hit the database to recompute the value. Mitigate using mutual exclusion locks (mutex) or probabilistic early expiration (XFetch).",
            "solution": "1. Mutex locking: First request acquires lock to compute; others wait or receive stale data.\n2. Probabilistic early expiration: Background job recomputes key before hard TTL.\n3. Cache warming during off-peak.",
            "difficulty": "Advanced",
            "topic": "Caching Architecture"
          },
          {
            "question": "How do compound indexes work in MongoDB and why does key order matter (ESR Rule)?",
            "answer": "Compound indexes index multiple fields together. Query performance relies on the ESR rule: Equality fields first, Sort fields second, and Range fields last. Queries can only utilize index prefixes from left to right.",
            "solution": "Index { status: 1, createdAt: -1, age: 1 } satisfies find({ status: \"active\" }).sort({ createdAt: -1 }), but cannot optimize queries skipping the \"status\" prefix.",
            "difficulty": "Advanced",
            "topic": "Database Indexing"
          }
        ],
        "projects": [
          {
            "title": "High-Throughput URL Shortener & Analytics Engine",
            "description": "Develop a distributed backend URL shortener with sub-millisecond Redis caching, sliding-window rate limiting, and async BullMQ analytics processing.",
            "difficulty": "Advanced",
            "techStack": [
              "Node.js",
              "Express",
              "PostgreSQL",
              "Redis",
              "BullMQ",
              "Docker"
            ],
            "features": [
              "Base62 shortcode generation with unique constraint guarantees",
              "Cache-aside Redis layer providing sub-5ms redirection response times",
              "Sliding-window IP rate limiting preventing abuse",
              "Asynchronous analytics worker queue recording clicks and user agents"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-html",
    "title": "HTML5 Semantic Architecture & Web Accessibility",
    "category": "HTML",
    "level": "All Levels",
    "duration": "4 weeks",
    "description": "Master HTML5 from basic tags and document hierarchies to semantic structure, accessible forms, audio/video media, OpenGraph SEO, and WCAG accessibility standards.",
    "coverImage": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Kevin Powell",
      "email": "kevin@eduflow.io"
    },
    "prerequisites": [
      "Basic computer literacy",
      "A text editor (VS Code recommended)"
    ],
    "learningOutcomes": [
      "Write clean, accessible, and semantic HTML5 documents",
      "Build complex interactive forms with client-side validation",
      "Incorporate audio, video, SVG, and responsive picture elements",
      "Achieve WCAG 2.1 compliance with ARIA landmarks and screen reader support",
      "Structure metadata for search engine optimization (SEO) and social sharing"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Document Structure & Core Tags",
        "duration": "1 week",
        "topics": [
          "Doctype & Document Anatomy",
          "Headings & Paragraphs",
          "Links & Anchor Navigation",
          "Lists & Tables"
        ]
      },
      {
        "moduleTitle": "Module 2: Semantic HTML5 Layouts",
        "duration": "1 week",
        "topics": [
          "Semantic Container Tags",
          "Header, Nav, Main, Footer",
          "Article vs Section vs Aside",
          "Figure & Figcaption"
        ]
      },
      {
        "moduleTitle": "Module 3: Forms & Multimedia Integration",
        "duration": "1 week",
        "topics": [
          "Form Inputs & Attributes",
          "Accessible Form Labels",
          "HTML5 Form Validation",
          "Video, Audio & Picture Tags"
        ]
      },
      {
        "moduleTitle": "Module 4: Accessibility, SEO & Web Components",
        "duration": "1 week",
        "topics": [
          "WCAG & Screen Readers",
          "ARIA Landmarks & Roles",
          "OpenGraph & JSON-LD SEO",
          "HTML Templates & Custom Elements"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Introduction to HTML syntax, document structure, headings, paragraphs, lists, links, images, and basic tables.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "HTML Document Anatomy",
            "description": "Doctype, html, head, title, meta viewport, and body tags.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "Text Formatting & Headings",
            "description": "h1-h6 hierarchy, p, strong, em, blockquote, and span tags.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Hyperlinks and Navigation",
            "description": "Anchor tags, absolute vs relative paths, target=\"_blank\", and rel=\"noopener\".",
            "duration": "3 hours"
          },
          {
            "stepNumber": 4,
            "title": "Lists and Hierarchies",
            "description": "Unordered (ul), ordered (ol), and description (dl) lists.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 5,
            "title": "Images and Media",
            "description": "Image tag, src, alt attributes for accessibility, width, and height.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 6,
            "title": "Basic HTML Tables",
            "description": "table, thead, tbody, tr, th, and td table markup.",
            "duration": "3 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "HTML Full Course - Build a Website Tutorial",
            "url": "https://www.youtube.com/watch?v=kUMe1FH4CHE",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Complete 4-hour introduction to semantic HTML tags and best practices.",
            "type": "Video"
          },
          {
            "title": "HTML Tutorial for Beginners: 30 Minutes Crash Course",
            "url": "https://www.youtube.com/watch?v=UB1O30fR-EE",
            "channel": "Traversy Media",
            "level": "Beginner",
            "description": "Quick, clear walk-through of essential HTML markup.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "MDN Web Docs: HTML Basics",
            "url": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
            "description": "Official Mozilla Developer Network guide to semantic HTML tags.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "HTML Cheat Sheet",
            "url": "https://htmlcheatsheet.com/",
            "description": "Interactive reference guide for tags, attributes, and structural elements.",
            "type": "CheatSheet",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Why is the \"alt\" attribute on <img> tags mandatory for good HTML practice?",
            "answer": "The \"alt\" attribute provides alternative text for screen readers used by visually impaired learners and displays when the image fails to load, ensuring accessibility and SEO compliance.",
            "solution": "Always supply concise descriptive alt text: <img src=\"chart.png\" alt=\"Quarterly sales growth line chart\"> or alt=\"\" for decorative images.",
            "difficulty": "Beginner",
            "topic": "Accessibility"
          },
          {
            "question": "What is the purpose of the <meta name=\"viewport\"> tag in HTML?",
            "answer": "It tells mobile browsers to scale the webpage to the device's physical screen width rather than rendering a desktop view at 980px, enabling mobile-first responsive design.",
            "solution": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
            "difficulty": "Beginner",
            "topic": "Responsive Meta"
          }
        ],
        "projects": [
          {
            "title": "Structured Academic & Professional Resume",
            "description": "Build an accessible, well-structured online curriculum vitae (resume) using clean semantic HTML5 markup.",
            "difficulty": "Beginner",
            "techStack": [
              "HTML5"
            ],
            "features": [
              "Proper h1-h3 heading hierarchy",
              "Organized education and experience tables",
              "Clickable contact anchors (mailto and tel)",
              "W3C HTML validator 100% compliant"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "HTML5 semantic layouts (main, nav, article, section), accessible forms, input types, client-side validation, and responsive media elements.",
        "prerequisites": [
          "Basic HTML knowledge"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "HTML5 Semantic Elements",
            "description": "header, nav, main, article, section, aside, footer, and details/summary.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "Accessible Forms",
            "description": "form, label (for/id binding), fieldset, legend, and input types (email, tel, date).",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "HTML5 Form Validation",
            "description": "required, pattern, min, max, minlength, and custom validity constraints.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 4,
            "title": "Audio and Video Embeds",
            "description": "video and audio tags, controls, autoplay policies, subtitles with track.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Responsive Picture Element",
            "description": "picture, source (media queries), srcset, and sizes for high-DPI displays.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 6,
            "title": "Dialog and Popover APIs",
            "description": "Native HTML5 dialog tag with showModal() and native popovers.",
            "duration": "3 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "HTML Forms Tutorial - Beginner to Pro",
            "url": "https://www.youtube.com/watch?v=fNcJuPIZ2WE",
            "channel": "SuperSimpleDev",
            "level": "Intermediate",
            "description": "Comprehensive guide to inputs, labels, validation, and form submission.",
            "type": "Video"
          },
          {
            "title": "HTML5 Semantic Elements: Why and How to Use Them",
            "url": "https://www.youtube.com/watch?v=kGW8Al_cga4",
            "channel": "Kevin Powell",
            "level": "Intermediate",
            "description": "Deep dive into picking the right semantic HTML container for every layout.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "MDN Web Docs: HTML Forms Guide",
            "url": "https://developer.mozilla.org/en-US/docs/Learn/Forms",
            "description": "Comprehensive guide to building, styling, and validating web forms.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "HTML5 Semantic Specification by W3C",
            "url": "https://www.w3.org/TR/html52/semantics.html",
            "description": "Official standard definitions of semantic tags and their content models.",
            "type": "Documentation",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Why is connecting <label for=\"xyz\"> to <input id=\"xyz\"> critical for accessibility?",
            "answer": "Clicking the label focuses the connected input (increasing click target area), and screen readers announce the label text when the input receives keyboard focus.",
            "solution": "Always bind using for and matching id, or nest <label>Name <input ...></label>.",
            "difficulty": "Intermediate",
            "topic": "Form Accessibility"
          },
          {
            "question": "When should you choose <article> versus <section>?",
            "answer": "<article> represents self-contained content that could be distributed or syndicated independently (e.g. blog post, product card, forum comment). <section> groups related content within a document, typically having a heading.",
            "solution": "<article> = standalone reusable piece. <section> = thematic chapter or group inside an article or page.",
            "difficulty": "Intermediate",
            "topic": "HTML5 Semantics"
          }
        ],
        "projects": [
          {
            "title": "Accessible Multi-Step Customer Survey Portal",
            "description": "Design a comprehensive multi-step survey and registration form using semantic HTML5, fieldsets, and native validation.",
            "difficulty": "Intermediate",
            "techStack": [
              "HTML5",
              "CSS"
            ],
            "features": [
              "Fieldset grouping for personal info and feedback",
              "Strict HTML5 pattern and required validation",
              "Native datepickers and range sliders",
              "100% accessible keyboard focus order"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Web accessibility (WCAG 2.1, ARIA landmarks, roles, live regions), SEO meta protocols, Web Components, and microdata schema.",
        "prerequisites": [
          "HTML5 semantic and form familiarity"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "WCAG 2.1 Principles (POUR)",
            "description": "Perceivable, Operable, Understandable, and Robust accessibility standards.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "ARIA Roles, States, and Properties",
            "description": "role, aria-expanded, aria-hidden, aria-live, and when NOT to use ARIA.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "SEO Meta & OpenGraph Protocols",
            "description": "Canonical links, robots meta, OpenGraph cards for Facebook/Twitter, and favicon sets.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 4,
            "title": "Structured Data with Schema.org & JSON-LD",
            "description": "Rich search snippets for courses, articles, organizations, and breadcrumbs.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Web Components & Shadow DOM",
            "description": "Custom Elements, template, slot, and encapsulated Shadow DOM architectures.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 6,
            "title": "Enterprise Design System Markup",
            "description": "Building accessible, reusable semantic primitives for enterprise web applications.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Web Accessibility (a11y) Full Course",
            "url": "https://www.youtube.com/watch?v=20SHvU2PKsM",
            "channel": "freeCodeCamp.org",
            "level": "Advanced",
            "description": "Master screen readers, keyboard focus traps, and ARIA attributes.",
            "type": "Video"
          },
          {
            "title": "Web Components Crash Course",
            "url": "https://www.youtube.com/watch?v=PCWaFLy3VUo",
            "channel": "Traversy Media",
            "level": "Advanced",
            "description": "Custom elements, Shadow DOM, and HTML templates without frameworks.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "W3C WAI-ARIA Authoring Practices Guide (APG)",
            "url": "https://www.w3.org/WAI/ARIA/apg/",
            "description": "Definitive patterns for accessible accordions, modals, tabs, and menus.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Schema.org Course & Article Markup",
            "url": "https://schema.org/Course",
            "description": "Official JSON-LD schema specification for search engines.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the First Rule of ARIA use according to W3C?",
            "answer": "If you can use a native HTML element or attribute with the semantics and behavior you require already built-in, do that instead of re-purposing an element and adding ARIA.",
            "solution": "Use <button> instead of <div role=\"button\" tabindex=\"0\">. Native elements provide built-in keyboard events and accessibility.",
            "difficulty": "Advanced",
            "topic": "W3C ARIA Standards"
          },
          {
            "question": "What is the difference between aria-live=\"polite\" and aria-live=\"assertive\"?",
            "answer": "aria-live=\"polite\" waits until the screen reader finishes speaking before announcing dynamic updates. aria-live=\"assertive\" interrupts whatever the screen reader is currently saying immediately (used for critical alerts).",
            "solution": "Polite: For search results count, status updates. Assertive: For immediate error alerts, timeout warnings.",
            "difficulty": "Advanced",
            "topic": "ARIA Live Regions"
          }
        ],
        "projects": [
          {
            "title": "Accessible Enterprise Design System Primitives",
            "description": "Create a framework-agnostic component library using HTML Web Components with accessible modals, tabs, and alerts.",
            "difficulty": "Advanced",
            "techStack": [
              "HTML5",
              "Web Components",
              "Shadow DOM",
              "ARIA"
            ],
            "features": [
              "WCAG 2.1 AA keyboard focus management in modal dialogs",
              "Custom HTML tags (<eduflow-modal>, <eduflow-tabs>)",
              "Dynamic JSON-LD schema generation for search engine indexing",
              "Zero dependencies pure web platform implementation"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-css",
    "title": "CSS3 Mastery: Modern Layouts, Animations & Architecture",
    "category": "CSS",
    "level": "All Levels",
    "duration": "6 weeks",
    "description": "Deep dive into modern CSS: Cascade, Flexbox, 2D CSS Grid, responsive design, fluid typography, animations, container queries, and scalable CSS architectures.",
    "coverImage": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Kevin Powell",
      "email": "kevin@eduflow.io"
    },
    "prerequisites": [
      "Basic HTML knowledge",
      "A code editor (VS Code recommended)"
    ],
    "learningOutcomes": [
      "Master the CSS cascade, specificity hierarchy, and inheritance models",
      "Build complex responsive layouts with CSS Flexbox and 2D CSS Grid",
      "Implement fluid responsive typography and spacing using clamp() and min/max",
      "Create smooth 60fps GPU-accelerated keyframe transitions and animations",
      "Leverage modern container queries, subgrid, and modern pseudo-classes (:has)"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: The Cascade, Box Model & Typography",
        "duration": "1 week",
        "topics": [
          "Cascade Layers & Specificity",
          "Box Sizing & Margins",
          "Modern Units (rem, em, ch, dvh)",
          "Typography & Web Fonts"
        ]
      },
      {
        "moduleTitle": "Module 2: Layout Systems: Flexbox & CSS Grid",
        "duration": "2 weeks",
        "topics": [
          "Flexbox Axes & Alignment",
          "CSS Grid 2D Positioning",
          "Auto-Fit vs Auto-Fill",
          "Subgrid & Complex Track Sizing"
        ]
      },
      {
        "moduleTitle": "Module 3: Responsive UI & CSS Variables",
        "duration": "1.5 weeks",
        "topics": [
          "Mobile-First Media Queries",
          "Container Queries (@container)",
          "CSS Custom Properties & Theming",
          "Fluid Design with clamp()"
        ]
      },
      {
        "moduleTitle": "Module 4: Modern Selectors, Animations & Performance",
        "duration": "1.5 weeks",
        "topics": [
          ":has() & Parent Selectors",
          "Keyframe Animations",
          "GPU Acceleration (transform/opacity)",
          "CSS Architecture (BEM/CUBE)"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Introduction to CSS syntax, selectors, cascade, specificity, box model, colors, typography, and backgrounds.",
        "prerequisites": [
          "HTML basics"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "CSS Syntax and Connecting Styles",
            "description": "Internal vs external stylesheets, inline styles, and element selectors.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "Selectors & Specificity Hierarchy",
            "description": "Element, class, ID, descendant, child, and pseudo-class selectors.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "The CSS Box Model",
            "description": "Content box vs border-box, margins, padding, borders, and margin collapsing.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Units and Sizing",
            "description": "Absolute (px) vs relative units (%, rem, em, vw, vh).",
            "duration": "3 hours"
          },
          {
            "stepNumber": 5,
            "title": "Colors and Backgrounds",
            "description": "Hex, RGB, HSL, alpha channels, gradients, and background-size/position.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 6,
            "title": "Typography and Text Styling",
            "description": "Font families, font-size, line-height, text-align, and Google Fonts integration.",
            "duration": "3 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "CSS Tutorial for Beginners - Full Course",
            "url": "https://www.youtube.com/watch?v=1PnVor36_40",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Complete step-by-step CSS foundations course.",
            "type": "Video"
          },
          {
            "title": "Learn CSS in 20 Minutes",
            "url": "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
            "channel": "Web Dev Simplified",
            "level": "Beginner",
            "description": "Fast, clear breakdown of CSS styling fundamentals.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "MDN Web Docs: CSS First Steps",
            "url": "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps",
            "description": "Mozilla Developer Network beginner guide to CSS.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "CSS Box Model Visualizer",
            "url": "https://css-tricks.com/the-css-box-model/",
            "description": "Definitive visual guide to margins, borders, and padding.",
            "type": "Guide",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Calculate the specificity of the selector: div.card#featured a:hover",
            "answer": "Specificity: 1 ID (#featured) + 2 Classes/Pseudos (.card, :hover) + 2 Elements (div, a) = (1, 2, 2) or 122 points.",
            "solution": "IDs = 100, Classes/Attributes/Pseudos = 10, Elements/Pseudos = 1. Selector has 1 ID (#featured), 1 class (.card), 1 pseudo-class (:hover), and 2 elements (div, a).",
            "difficulty": "Beginner",
            "topic": "CSS Specificity"
          },
          {
            "question": "What causes vertical margin collapsing in CSS?",
            "answer": "When top and bottom margins of adjacent block-level elements touch, they collapse into a single margin equal to the largest of the two margins rather than adding together.",
            "solution": "Margin collapsing occurs only on vertical block margins (not padding, nor horizontal margins, nor flex/grid children).",
            "difficulty": "Beginner",
            "topic": "Box Model"
          }
        ],
        "projects": [
          {
            "title": "Responsive Recipe & Profile Card",
            "description": "Style an elegant recipe card component with typography, custom borders, and subtle box shadows.",
            "difficulty": "Beginner",
            "techStack": [
              "HTML5",
              "CSS3"
            ],
            "features": [
              "Border-box layout sizing",
              "Custom color palette using HSL",
              "Card hover state elevation",
              "Google Fonts typography integration"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Flexbox layouts, CSS Grid systems, responsive breakpoints, fluid clamp() typography, CSS variables, and transitions.",
        "prerequisites": [
          "CSS box model and selectors"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "CSS Flexbox Layouts",
            "description": "Main axis vs cross axis, justify-content, align-items, flex-grow, and flex-shrink.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "CSS Grid 2D Layouts",
            "description": "grid-template-columns, fr units, grid-template-areas, gap, and align-content.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 3,
            "title": "Responsive Design & Media Queries",
            "description": "Breakpoints for mobile, tablet, desktop, and orientation queries.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Fluid Typography & clamp()",
            "description": "Fluid font-sizing: clamp(1rem, 2.5vw, 2.5rem) without stepped media queries.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 5,
            "title": "CSS Custom Properties (Variables)",
            "description": "Declaring :root variables, scoping, runtime modification, and dark mode theming.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 6,
            "title": "Transitions and Transforms",
            "description": "transition properties, timing functions (cubic-bezier), scale, rotate, and translate.",
            "duration": "4 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "CSS Flexbox Tutorial - Complete Guide",
            "url": "https://www.youtube.com/watch?v=JJSoEo8JSnc",
            "channel": "Kevin Powell",
            "level": "Intermediate",
            "description": "Visual and in-depth guide to understanding Flexbox positioning deeply.",
            "type": "Video"
          },
          {
            "title": "CSS Grid Crash Course",
            "url": "https://www.youtube.com/watch?v=0xMQfnTU6oo",
            "channel": "Traversy Media",
            "level": "Intermediate",
            "description": "Comprehensive overview of 2-dimensional grid layouts in CSS.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "CSS-Tricks: Complete Guide to Flexbox",
            "url": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
            "description": "The definitive visual handbook by CSS-Tricks.",
            "type": "Guide",
            "level": "Intermediate"
          },
          {
            "title": "CSS-Tricks: Complete Guide to CSS Grid",
            "url": "https://css-tricks.com/snippets/css/complete-guide-grid/",
            "description": "Complete visual cheatsheet for grid containers and items.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the difference between repeat(auto-fill, ...) and repeat(auto-fit, ...) in CSS Grid?",
            "answer": "auto-fill creates as many tracks as possible even if empty. auto-fit creates tracks and then collapses empty tracks to 0px, allowing filled items to stretch across the full available container width.",
            "solution": "auto-fit collapses empty tracks so items expand to fill remaining space; auto-fill reserves empty track space.",
            "difficulty": "Intermediate",
            "topic": "CSS Grid"
          },
          {
            "question": "How do you create a system dark mode theme using CSS custom properties?",
            "answer": "Declare light colors in :root and override custom properties inside an @media (prefers-color-scheme: dark) media query.",
            "solution": ":root { --bg: #ffffff; --text: #0f172a; } @media (prefers-color-scheme: dark) { :root { --bg: #0f172a; --text: #ffffff; } }",
            "difficulty": "Intermediate",
            "topic": "Theming"
          }
        ],
        "projects": [
          {
            "title": "Responsive E-Commerce Product Catalog",
            "description": "Build an auto-fitting multi-column product showcase with interactive hover elevation, filter sidebar, and dark mode theme toggle.",
            "difficulty": "Intermediate",
            "techStack": [
              "HTML5",
              "CSS Grid",
              "Flexbox",
              "CSS Variables"
            ],
            "features": [
              "auto-fit responsive product card grid",
              "CSS custom properties dark mode theme toggle",
              "Smooth card image hover scale transform",
              "Pure CSS responsive off-canvas filter drawer"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Keyframe animations, GPU acceleration, container queries, subgrid, modern pseudo-classes (:has), BEM architecture, and rendering performance.",
        "prerequisites": [
          "Flexbox and CSS Grid experience"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Hardware-Accelerated Animations",
            "description": "transform, opacity, will-change, and preventing layout thrashing and repaints.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "CSS Container Queries (@container)",
            "description": "Component-driven styling based on parent container width instead of viewport width.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "CSS Subgrid",
            "description": "Inheriting parent grid tracks across nested child elements for unified alignment.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "The :has() Parent Selector & Pseudo-Classes",
            "description": ":has(), :is(), :where(), and styling parent elements based on child state.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Scalable CSS Architecture (BEM & CUBE CSS)",
            "description": "Block-Element-Modifier naming, utility classes, and component encapsulation.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 6,
            "title": "CSS Rendering Engine Optimization",
            "description": "Containment property (contain), content-visibility: auto, and reducing paint times.",
            "duration": "5 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Modern CSS Features You Need in 2026",
            "url": "https://www.youtube.com/watch?v=2nff1jXwU7A",
            "channel": "Kevin Powell",
            "level": "Advanced",
            "description": "Practical breakdown of container queries, :has() selector, and CSS subgrid.",
            "type": "Video"
          },
          {
            "title": "High-Performance CSS Animations",
            "url": "https://www.youtube.com/watch?v=hy00Qk1jM40",
            "channel": "Google Chrome Developers",
            "level": "Advanced",
            "description": "Techniques for building silky-smooth 60fps animations without dropped frames.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "MDN Web Docs: CSS Container Queries",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
            "description": "Official guide on container contexts and responsive component architecture.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Web.dev: The Parent Selector :has()",
            "url": "https://web.dev/has-m105/",
            "description": "Google guide on conditional styling with the modern CSS :has() selector.",
            "type": "Guide",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Why does animating \"transform: translateY(-10px)\" perform better than animating \"top: -10px\"?",
            "answer": "Animating \"top\" forces the browser to recalculate layout (reflow) and repaint every pixel. \"transform\" runs directly on the GPU compositor thread without triggering layout or repaint, maintaining smooth 60fps.",
            "solution": "Compositor-only properties: transform and opacity. Always animate these for high performance.",
            "difficulty": "Advanced",
            "topic": "Performance"
          },
          {
            "question": "How do CSS Container Queries differ from traditional Media Queries?",
            "answer": "Media queries respond only to the global browser viewport width. Container queries respond to the specific width of the component's parent container, enabling truly modular responsive components.",
            "solution": ".parent { container-type: inline-size; } @container (min-width: 400px) { .card { display: flex; } }",
            "difficulty": "Advanced",
            "topic": "Container Queries"
          }
        ],
        "projects": [
          {
            "title": "Modern Animated UI Dashboard with Container Queries",
            "description": "Develop an enterprise dashboard with modular cards that adapt their layout based on container width, featuring GPU-accelerated keyframe animations.",
            "difficulty": "Advanced",
            "techStack": [
              "HTML5",
              "CSS Container Queries",
              "Subgrid",
              "CSS Animations"
            ],
            "features": [
              "Container queries on dashboard widgets",
              "CSS subgrid card header and footer alignment",
              "Silky-smooth keyframe animations using transform & opacity",
              ":has() selector form validation state styling"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-dsa",
    "title": "Data Structures & Algorithms: Complete Mastery",
    "category": "Data Structures & Algorithms",
    "level": "All Levels",
    "duration": "14 weeks",
    "description": "Master algorithmic problem solving from time complexity, arrays, strings, and sorting to dynamic programming, graphs, segment trees, and interview excellence.",
    "coverImage": "https://images.unsplash.com/photo-1516116211227-bbc7914e6b64?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Abdul Bari",
      "email": "abdulbari@eduflow.io"
    },
    "prerequisites": [
      "Basic syntax of one programming language (C++, Java, or Python)"
    ],
    "learningOutcomes": [
      "Analyze algorithm efficiency using Big-O, Big-Omega, and Big-Theta notation",
      "Master linear and non-linear data structures: Linked Lists, Stacks, Queues, Trees, Graphs",
      "Implement foundational and advanced sorting and searching algorithms",
      "Solve complex optimization problems using Dynamic Programming and Greedy methods",
      "Excel in technical coding interviews and competitive programming contests"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Complexity Analysis & Elementary Structures",
        "duration": "3 weeks",
        "topics": [
          "Big O Notation & Master Theorem",
          "Arrays & Strings",
          "Searching (Linear, Binary)",
          "Elementary Sorting (Bubble, Selection, Insertion)",
          "Recursion Fundamentals"
        ]
      },
      {
        "moduleTitle": "Module 2: Core Data Structures & Divide & Conquer",
        "duration": "4 weeks",
        "topics": [
          "Linked Lists (Singly, Doubly)",
          "Stacks, Queues & Monotonic Deques",
          "Hash Tables & Collision Resolution",
          "Trees, BST & Heaps",
          "Merge Sort & Quick Sort"
        ]
      },
      {
        "moduleTitle": "Module 3: Algorithmic Paradigms & Graphs",
        "duration": "4 weeks",
        "topics": [
          "Two-Pointer & Sliding Window",
          "Greedy Algorithms",
          "Backtracking (N-Queens, Sudoku)",
          "Graph BFS & DFS",
          "Intermediate LeetCode Problems"
        ]
      },
      {
        "moduleTitle": "Module 4: Advanced Structures & Dynamic Programming",
        "duration": "3 weeks",
        "topics": [
          "Advanced Trees (Tries, AVL)",
          "Shortest Paths (Dijkstra, Bellman-Ford)",
          "Dynamic Programming (1D, 2D, Knapsack)",
          "Segment Trees & Fenwick Trees",
          "Disjoint Set Union (DSU)"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Programming fundamentals, time/space complexity, Big O, arrays, strings, linear/binary search, elementary sorting, recursion, and basic problem solving.",
        "prerequisites": [
          "Basic programming syntax in any language"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Programming Fundamentals",
            "description": "Variables, loops, conditionals, memory layout of arrays, and pointers/references.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "Time and Space Complexity",
            "description": "Counting operations, worst-case, average-case, and best-case analysis.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Big O Notation",
            "description": "Asymptotic notation: O(1), O(log n), O(n), O(n log n), O(n^2), and O(2^n).",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Arrays",
            "description": "Static vs dynamic arrays, memory addresses, element insertion, deletion, and rotation.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Strings",
            "description": "Character encoding (ASCII/Unicode), immutability, reversal, palindromes, and substrings.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 6,
            "title": "Basic Searching",
            "description": "Understanding search spaces, indexed lookups, and unsorted vs sorted lists.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 7,
            "title": "Linear Search",
            "description": "Iterating sequentially through collections, edge cases, and O(n) complexity.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 8,
            "title": "Binary Search",
            "description": "Divide-and-conquer search on sorted arrays, lower/upper bounds, and O(log n) efficiency.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 9,
            "title": "Basic Sorting Introduction",
            "description": "In-place vs out-of-place sorting, stable vs unstable algorithms.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 10,
            "title": "Bubble Sort",
            "description": "Adjacent swapping, pass optimization with boolean flags, and O(n^2) analysis.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 11,
            "title": "Selection Sort",
            "description": "Finding minimum element per pass, swap counts, and O(n^2) performance.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 12,
            "title": "Insertion Sort",
            "description": "Building sorted sub-arrays, shifting elements, and O(n) best-case on nearly sorted data.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 13,
            "title": "Recursion Fundamentals",
            "description": "Call stack anatomy, base conditions, recurrence relations, and recursion tree visualization.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 14,
            "title": "Basic Problem-Solving Exercises",
            "description": "Hands-on practice solving elementary array, string, and math problems.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Data Structures and Algorithms - Beginner Course",
            "url": "https://www.youtube.com/watch?v=8hly31xKli0",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Comprehensive introduction to Big O, arrays, and binary search.",
            "type": "Video"
          },
          {
            "title": "Abdul Bari: Algorithms Analysis & Big O",
            "url": "https://www.youtube.com/watch?v=9TlHvipP5yA",
            "channel": "Abdul Bari",
            "level": "Beginner",
            "description": "Masterclass explanation of asymptotic notation and recurrence relations.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Big-O Cheat Sheet",
            "url": "https://www.bigocheatsheet.com/",
            "description": "Visual charts for time and space complexities of all major data structures and algorithms.",
            "type": "CheatSheet",
            "level": "Beginner"
          },
          {
            "title": "GeeksforGeeks: DSA Fundamentals Guide",
            "url": "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
            "description": "Topic-by-topic reference notes and code examples.",
            "type": "Guide",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the time complexity of Binary Search and why must the input be sorted?",
            "answer": "Time complexity is O(log n). It repeatedly divides the search space in half. The array must be sorted so comparing with the middle element reliably eliminates one entire half of remaining elements.",
            "solution": "Low = 0, High = n - 1. Mid = low + (high - low) / 2. If target == arr[mid], return mid. If target < arr[mid], high = mid - 1; else low = mid + 1.",
            "difficulty": "Beginner",
            "topic": "Binary Search"
          },
          {
            "question": "What is the space complexity of a recursive function that makes n nested calls?",
            "answer": "O(n) auxiliary space on the call stack, because each recursive call allocates a stack frame storing local variables and return address until the base condition is reached.",
            "solution": "Recursion call stack depth = n. Stack frames consume O(1) each => Total O(n) space.",
            "difficulty": "Beginner",
            "topic": "Recursion"
          }
        ],
        "projects": [
          {
            "title": "Sorting Algorithm Visualizer",
            "description": "Build an interactive web-based sorting visualizer animating Bubble Sort, Selection Sort, and Insertion Sort comparisons in real time.",
            "difficulty": "Beginner",
            "techStack": [
              "HTML5",
              "CSS3",
              "JavaScript"
            ],
            "features": [
              "Generate randomized bar arrays",
              "Step-by-step visual swap animations",
              "Speed control slider and comparisons counter",
              "Time complexity display for chosen algorithm"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Linked lists, stacks, queues, hash tables, trees, BST, heaps, merge/quick sort, two-pointer, sliding window, greedy, backtracking, graphs, BFS/DFS.",
        "prerequisites": [
          "Arrays, Big O notation, and basic recursion"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Linked Lists",
            "description": "Singly, doubly, and circular linked lists, node insertion, deletion, and fast/slow pointer reversal.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "Stacks",
            "description": "LIFO principle, array/linked-list implementations, parenthesization validation, and monotonic stacks.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Queues",
            "description": "FIFO principle, circular queues, deques, and priority queue interfaces.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Hash Tables",
            "description": "Hash functions, load factor, collision resolution (chaining vs open addressing), and O(1) lookups.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 5,
            "title": "Trees",
            "description": "Tree terminology: root, leaf, height, depth, subtree, and recursive properties.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 6,
            "title": "Binary Trees",
            "description": "Full, complete, perfect trees, and traversals: Pre-order, In-order, Post-order, and Level-order.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 7,
            "title": "Binary Search Trees (BST)",
            "description": "BST invariant, search, insert, delete node, LCA, and validation.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 8,
            "title": "Heaps and Priority Queues",
            "description": "Min-heap, max-heap, heapify algorithm, and heapsort in O(n log n).",
            "duration": "6 hours"
          },
          {
            "stepNumber": 9,
            "title": "Merge Sort",
            "description": "Divide-and-conquer splitting, recursive merging, stability, and O(n log n) proof.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 10,
            "title": "Quick Sort",
            "description": "Partitioning schemes (Lomuto vs Hoare), pivot selection, and randomized quicksort.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 11,
            "title": "Two-Pointer Technique",
            "description": "Opposite-direction and same-direction pointers for sorted pair sums and container problems.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 12,
            "title": "Sliding Window",
            "description": "Fixed and variable length windows for maximum subarray and substring problems.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 13,
            "title": "Greedy Algorithms",
            "description": "Greedy choice property, optimal substructure, activity selection, and fractional knapsack.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 14,
            "title": "Backtracking",
            "description": "State-space tree exploration, pruning, N-Queens problem, and Sudoku solver.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 15,
            "title": "Graph Fundamentals",
            "description": "Adjacency matrix vs adjacency list, directed/undirected, and weighted edges.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 16,
            "title": "BFS and DFS",
            "description": "Breadth-First Search (queue) and Depth-First Search (stack/recursion) traversals and cycle detection.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 17,
            "title": "Intermediate Coding Problems",
            "description": "Solving 50+ classic LeetCode medium questions across trees, graphs, and pointers.",
            "duration": "12 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Binary Tree Algorithms - Full Course",
            "url": "https://www.youtube.com/watch?v=fAAZixBzIAI",
            "channel": "freeCodeCamp.org",
            "level": "Intermediate",
            "description": "Comprehensive guide to binary tree traversals, BSTs, and recursive tree problems.",
            "type": "Video"
          },
          {
            "title": "Graph Theory Full Course",
            "url": "https://www.youtube.com/watch?v=09_LlHjoEiY",
            "channel": "freeCodeCamp.org",
            "level": "Intermediate",
            "description": "In-depth graph representations, BFS, DFS, and topological sort by William Fiset.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "NeetCode 150 Practice Roadmap",
            "url": "https://neetcode.io/practice",
            "description": "Curated list of standard coding interview patterns with video solutions.",
            "type": "Guide",
            "level": "Intermediate"
          },
          {
            "title": "Algorithms by Robert Sedgewick (Princeton)",
            "url": "https://algs4.cs.princeton.edu/home/",
            "description": "Authoritative computer science reference for data structures and sorting.",
            "type": "Documentation",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "How do you detect a cycle in a Singly Linked List using Floyd's Cycle Detection algorithm?",
            "answer": "Use two pointers (slow moving 1 step, fast moving 2 steps). If there is a cycle, the fast pointer will eventually catch up and meet the slow pointer inside the loop. If fast reaches null, no cycle exists.",
            "solution": "Slow = head, Fast = head. While (fast && fast.next) { slow = slow.next; fast = fast.next.next; if (slow == fast) return true; } Return false. O(n) time, O(1) space.",
            "difficulty": "Intermediate",
            "topic": "Linked Lists"
          },
          {
            "question": "What is the difference between BFS and DFS and what underlying data structures do they utilize?",
            "answer": "BFS explores neighbor nodes layer by layer using a Queue (FIFO). DFS explores as deep as possible down a branch before backtracking using a Stack (or the recursive call stack).",
            "solution": "BFS: Queue, finds shortest path on unweighted graphs. DFS: Stack/Recursion, topological sorting, connected components.",
            "difficulty": "Intermediate",
            "topic": "Graphs"
          }
        ],
        "projects": [
          {
            "title": "Interactive Maze & Pathfinding Grid Visualizer",
            "description": "Build a graphical pathfinding visualizer running BFS and DFS algorithms on a 2D grid with user-drawn wall obstacles.",
            "difficulty": "Intermediate",
            "techStack": [
              "JavaScript",
              "HTML5 Canvas",
              "CSS3"
            ],
            "features": [
              "Draggable start and target nodes",
              "Real-time BFS vs DFS search exploration animation",
              "Shortest path highlight on goal arrival",
              "Clear grid and random maze generation"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Advanced trees, tries, Dijkstra, MST, dynamic programming, segment trees, Fenwick trees, DSU, shortest paths, and hard interview problems.",
        "prerequisites": [
          "Intermediate trees, graphs, and recursion"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Advanced Trees (AVL & Red-Black)",
            "description": "Self-balancing binary search trees, tree rotations, and guaranteed O(log n) operations.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 2,
            "title": "Tries (Prefix Trees)",
            "description": "Trie node representation, insert, search, prefix matching, and word dictionary lookups.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 3,
            "title": "Advanced Graph Algorithms",
            "description": "Topological sorting (Kahn's algorithm), strongly connected components (Kosaraju, Tarjan).",
            "duration": "7 hours"
          },
          {
            "stepNumber": 4,
            "title": "Dijkstra's Algorithm",
            "description": "Single-source shortest path on non-negative weighted graphs with priority queue in O((V + E) log V).",
            "duration": "7 hours"
          },
          {
            "stepNumber": 5,
            "title": "Minimum Spanning Trees (MST)",
            "description": "Kruskal's algorithm (with DSU) and Prim's algorithm for minimum connection weight.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 6,
            "title": "Dynamic Programming Fundamentals",
            "description": "Overlapping subproblems, optimal substructure, memoization (top-down), and tabulation (bottom-up).",
            "duration": "8 hours"
          },
          {
            "stepNumber": 7,
            "title": "1D & 2D Dynamic Programming",
            "description": "Fibonacci, climbing stairs, house robber, 0/1 Knapsack, and Longest Common Subsequence (LCS).",
            "duration": "9 hours"
          },
          {
            "stepNumber": 8,
            "title": "Advanced Recursion & Partition DP",
            "description": "Matrix chain multiplication, palindrome partitioning, and bitmask DP.",
            "duration": "8 hours"
          },
          {
            "stepNumber": 9,
            "title": "Segment Trees",
            "description": "Range query data structure with point updates and range sum/min queries in O(log n).",
            "duration": "7 hours"
          },
          {
            "stepNumber": 10,
            "title": "Fenwick Trees (Binary Indexed Tree)",
            "description": "Compact array-based structure for prefix sums and point updates in O(log n).",
            "duration": "6 hours"
          },
          {
            "stepNumber": 11,
            "title": "Disjoint Set Union (DSU / Union-Find)",
            "description": "Path compression and union by rank/size achieving near O(1) amortized inverse Ackermann time.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 12,
            "title": "All-Pairs & Negative Shortest Paths",
            "description": "Bellman-Ford algorithm (detecting negative cycles) and Floyd-Warshall O(V^3) algorithm.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 13,
            "title": "Advanced Complexity Analysis",
            "description": "Amortized analysis (aggregate method, accounting method, potential method).",
            "duration": "5 hours"
          },
          {
            "stepNumber": 14,
            "title": "Competitive Programming Techniques",
            "description": "Bit manipulation tricks, binary lifting for LCA, and fast I/O.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 15,
            "title": "Interview-Level Problem Solving",
            "description": "Mastering LeetCode Hard problems for FAANG/top-tier engineering rounds.",
            "duration": "14 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Dynamic Programming - Learn to Solve Any DP Problem",
            "url": "https://www.youtube.com/watch?v=oBt53YbR9Kk",
            "channel": "freeCodeCamp.org",
            "level": "Advanced",
            "description": "Complete 5-hour breakdown of 1D, 2D, and grid DP patterns.",
            "type": "Video"
          },
          {
            "title": "Dijkstra's Shortest Path Algorithm by William Fiset",
            "url": "https://www.youtube.com/watch?v=pSqmA2U50C8",
            "channel": "WilliamFiset",
            "level": "Advanced",
            "description": "Visual explanation and code implementation of Dijkstra using priority queues.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "CP-Algorithms: Competitive Programming Reference",
            "url": "https://cp-algorithms.com/",
            "description": "Definitive community handbook on segment trees, string algorithms, and graphs.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Stanford CS166: Advanced Data Structures Notes",
            "url": "https://web.stanford.edu/class/cs166/",
            "description": "In-depth lecture notes on Fenwick trees, Tries, and Range Minimum Queries.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Describe the 0/1 Knapsack problem and state its DP state recurrence relation.",
            "answer": "Given items with weights w[i] and values v[i], maximize total value within capacity W. Recurrence: dp[i][w] = max(dp[i-1][w], v[i] + dp[i-1][w - w[i]]) if w >= w[i], else dp[i-1][w]. Time complexity O(N*W), pseudo-polynomial.",
            "solution": "dp[w] = max(dp[w], v[i] + dp[w - w[i]]) iterating backwards from W down to w[i] optimizes space to O(W).",
            "difficulty": "Advanced",
            "topic": "Dynamic Programming"
          },
          {
            "question": "Why does Disjoint Set Union (DSU) achieve near O(1) time complexity per operation?",
            "answer": "Combining Path Compression (pointing every traversed node directly to the root) with Union by Rank (attaching smaller tree under deeper tree) ensures the tree depth grows slower than any standard function, bounded by the inverse Ackermann function α(n) ≤ 4 for all practical universe values.",
            "solution": "Find(i): if (parent[i] != i) parent[i] = find(parent[i]); return parent[i]; achieves O(α(N)) amortized time.",
            "difficulty": "Advanced",
            "topic": "Disjoint Set Union"
          }
        ],
        "projects": [
          {
            "title": "High-Performance Autocomplete & Search Engine",
            "description": "Build an ultra-fast search suggestion engine using a Trie with frequency counters and a Disjoint Set Union component for connected query clustering.",
            "difficulty": "Advanced",
            "techStack": [
              "C++",
              "Python",
              "Data Structures"
            ],
            "features": [
              "Trie insertion and prefix traversal in O(L) time where L = word length",
              "Top-K frequent completions ranking using Min-Heaps",
              "Memory-optimized Trie nodes with unicode support",
              "Sub-millisecond query response benchmarking"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-machine-learning",
    "title": "Machine Learning Engineering: From Fundamentals to MLOps",
    "category": "Machine Learning",
    "level": "All Levels",
    "duration": "12 weeks",
    "description": "Complete Machine Learning engineering: math foundations, data preprocessing, regression, classification, ensemble models, neural networks, and MLOps deployment.",
    "coverImage": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Andrew Ng",
      "email": "andrew@eduflow.io"
    },
    "prerequisites": [
      "Basic Python programming syntax",
      "High school algebra and calculus basics"
    ],
    "learningOutcomes": [
      "Understand supervised and unsupervised machine learning principles",
      "Manipulate and clean structured data using NumPy and Pandas",
      "Train regression and classification models using Scikit-Learn",
      "Apply feature engineering, cross-validation, and hyperparameter tuning",
      "Build ensemble models (Random Forest, XGBoost) and neural networks",
      "Deploy production ML APIs with FastAPI, Docker, and MLOps monitoring"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Foundations of ML & Python for Data",
        "duration": "3 weeks",
        "topics": [
          "Types of ML & Problem Formulation",
          "NumPy Arrays & Pandas DataFrames",
          "Data Cleaning & Exploratory Visualization",
          "Linear & Logistic Regression"
        ]
      },
      {
        "moduleTitle": "Module 2: Feature Engineering & Core Algorithms",
        "duration": "3 weeks",
        "topics": [
          "Data Preprocessing & Scaling",
          "Decision Trees & Random Forests",
          "K-Nearest Neighbors & Support Vector Machines",
          "Clustering with K-Means"
        ]
      },
      {
        "moduleTitle": "Module 3: Model Evaluation, Ensembles & Deep Learning",
        "duration": "3 weeks",
        "topics": [
          "Overfitting, Bias-Variance & Cross-Validation",
          "Ensemble Learning & XGBoost",
          "Dimensionality Reduction (PCA)",
          "Neural Networks & Deep Learning Basics"
        ]
      },
      {
        "moduleTitle": "Module 4: Deployment & MLOps Pipelines",
        "duration": "3 weeks",
        "topics": [
          "Model Explainability (SHAP/LIME)",
          "FastAPI Model Serving",
          "Docker Containerization",
          "MLOps Drift Monitoring & Pipelines"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Introduction to AI/ML, ML types, Python data libraries (NumPy, Pandas), data cleaning, visualization, statistics, linear algebra, and linear/logistic regression.",
        "prerequisites": [
          "Python basics"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Introduction to AI and Machine Learning",
            "description": "Difference between traditional rule-based programming and machine learning from data.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 2,
            "title": "Types of Machine Learning",
            "description": "Supervised learning (labeled data), Unsupervised learning (patterns), and Reinforcement learning.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Python Fundamentals for Data",
            "description": "List comprehensions, functions, lambda expressions, and environment setup (Jupyter).",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "NumPy Essentials",
            "description": "N-dimensional arrays, vectorization, indexing, slicing, and broadcasting operations.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Pandas DataFrames",
            "description": "Series, DataFrames, reading CSV/Excel, filtering, selecting, and basic column operations.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 6,
            "title": "Data Cleaning",
            "description": "Detecting missing values (isnull), dropping vs imputing, and removing duplicate records.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 7,
            "title": "Data Visualization",
            "description": "Creating histograms, scatter plots, and box plots with Matplotlib and Seaborn.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 8,
            "title": "Basic Statistics for ML",
            "description": "Mean, median, mode, variance, standard deviation, and normal distributions.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 9,
            "title": "Probability Fundamentals",
            "description": "Conditional probability, Bayes theorem basics, independent events, and distributions.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 10,
            "title": "Introduction to Linear Algebra",
            "description": "Vectors, matrix multiplication, dot products, and geometric representations.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 11,
            "title": "Training and Testing Data",
            "description": "Train-test split ratio (80/20), random state, and preventing data leakage.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 12,
            "title": "Introduction to Scikit-learn",
            "description": "The fit(), transform(), and predict() API design pattern in Scikit-learn.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 13,
            "title": "Linear Regression",
            "description": "Cost function (Mean Squared Error), slope/intercept, and gradient descent intuition.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 14,
            "title": "Logistic Regression",
            "description": "Sigmoid function, binary classification, decision boundary, and log loss.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 15,
            "title": "Build a Simple Prediction Model",
            "description": "End-to-end implementation of a real estate price predictor using Scikit-learn.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Machine Learning for Everybody - Full Course",
            "url": "https://www.youtube.com/watch?v=i_LwzRVP7bg",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Complete introductory course on ML algorithms, features, and model training.",
            "type": "Video"
          },
          {
            "title": "StatQuest: Linear Regression Clearly Explained",
            "url": "https://www.youtube.com/watch?v=7ArmBVF2dCs",
            "channel": "StatQuest with Josh Starmer",
            "level": "Beginner",
            "description": "Crystal-clear visual breakdown of linear regression and R-squared calculation.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Scikit-learn: Getting Started with Machine Learning",
            "url": "https://scikit-learn.org/stable/getting_started.html",
            "description": "Official introductory tutorial covering estimators and model evaluation.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "Google Machine Learning Crash Course: Foundations",
            "url": "https://developers.google.com/machine-learning/crash-course",
            "description": "Interactive course with best practices for training models and framing problems.",
            "type": "Guide",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the fundamental difference between Linear Regression and Logistic Regression?",
            "answer": "Linear Regression predicts a continuous numerical output value (e.g. price, temperature) using a linear equation. Logistic Regression predicts a discrete categorical probability between 0 and 1 using a Sigmoid function for classification (e.g. spam or not spam).",
            "solution": "Linear Regression: Y = mX + b (Range: -infinity to +infinity). Logistic Regression: P = 1 / (1 + e^(-z)) (Range: 0 to 1).",
            "difficulty": "Beginner",
            "topic": "Supervised Learning"
          },
          {
            "question": "Why must we split data into training and test sets rather than evaluating on all data?",
            "answer": "Evaluating on the training data causes models to appear artificially accurate because they may memorize noise (overfitting). A separate test set evaluates generalizability on unseen data.",
            "solution": "from sklearn.model_selection import train_test_split; X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42);",
            "difficulty": "Beginner",
            "topic": "Model Validation"
          }
        ],
        "projects": [
          {
            "title": "Housing Price Prediction Model",
            "description": "Build and evaluate a Linear Regression model predicting home prices using the California Housing dataset with Scikit-learn.",
            "difficulty": "Beginner",
            "techStack": [
              "Python",
              "Pandas",
              "NumPy",
              "Scikit-Learn",
              "Matplotlib"
            ],
            "features": [
              "Exploratory data analysis of housing features and correlations",
              "Handling missing data and standardizing feature scales",
              "Model training using LinearRegression() from scikit-learn",
              "Evaluation using Mean Absolute Error (MAE) and R2 score"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Feature engineering, preprocessing, classification algorithms, decision trees, random forests, KNN, SVM, K-Means clustering, evaluation metrics, and hyperparameter tuning.",
        "prerequisites": [
          "NumPy, Pandas, and basic linear regression"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Feature Engineering",
            "description": "Creating domain features, polynomial terms, date extraction, and interaction features.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Data Preprocessing",
            "description": "StandardScaler, MinMaxScaler, and RobustScaler for numerical standardization.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Categorical Data Handling",
            "description": "One-Hot Encoding, Label Encoding, Target Encoding, and dummy variables.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Classification Algorithms Overview",
            "description": "Supervised classification metrics, decision surfaces, and multi-class schemes.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Decision Trees",
            "description": "Gini Impurity, Information Gain, Entropy, tree depth, and pruning.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 6,
            "title": "Random Forest",
            "description": "Bagging principle, bootstrap sampling, random feature sub-selection, and out-of-bag error.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 7,
            "title": "K-Nearest Neighbors (KNN)",
            "description": "Distance metrics (Euclidean, Manhattan), choosing optimal k, and curse of dimensionality.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 8,
            "title": "Support Vector Machines (SVM)",
            "description": "Maximum margin hyperplane, support vectors, soft margin (C parameter), and kernels (RBF).",
            "duration": "6 hours"
          },
          {
            "stepNumber": 9,
            "title": "Clustering Fundamentals",
            "description": "Unsupervised learning concepts, distance metrics, and intra-cluster cohesion.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 10,
            "title": "K-Means Algorithm",
            "description": "Centroid initialization (K-Means++), iteration steps, and the Elbow Method for k.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 11,
            "title": "Model Evaluation Metrics",
            "description": "Confusion Matrix, Precision, Recall, F1-Score, ROC curve, and AUC score.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 12,
            "title": "Cross-Validation",
            "description": "K-Fold, Stratified K-Fold cross-validation, and leave-one-out validation.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 13,
            "title": "Overfitting and Underfitting",
            "description": "High Bias vs High Variance, learning curves, and regularization (L1 Lasso, L2 Ridge).",
            "duration": "5 hours"
          },
          {
            "stepNumber": 14,
            "title": "Hyperparameter Tuning",
            "description": "GridSearchCV vs RandomizedSearchCV, cross-validated search spaces.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 15,
            "title": "Feature Selection Techniques",
            "description": "Correlation filtering, Recursive Feature Elimination (RFE), and tree feature importances.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 16,
            "title": "Build an End-to-End ML Project",
            "description": "Develop a complete customer churn prediction system with full preprocessing pipeline.",
            "duration": "10 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "StatQuest: Random Forests Clearly Explained",
            "url": "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ",
            "channel": "StatQuest with Josh Starmer",
            "level": "Intermediate",
            "description": "Masterclass on decision trees, bagging, and random forest ensembles.",
            "type": "Video"
          },
          {
            "title": "StatQuest: ROC and AUC Curves Clearly Explained",
            "url": "https://www.youtube.com/watch?v=4jRBRDbJemM",
            "channel": "StatQuest with Josh Starmer",
            "level": "Intermediate",
            "description": "Visual explanation of sensitivity, specificity, and ROC curves.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Scikit-learn Supervised Learning User Guide",
            "url": "https://scikit-learn.org/stable/supervised_learning.html",
            "description": "Authoritative documentation on trees, forests, SVMs, and linear models.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "Kaggle Learn: Feature Engineering Micro-Course",
            "url": "https://www.kaggle.com/learn/feature-engineering",
            "description": "Hands-on practical guide to transforming raw data into high-signal features.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the trade-off between Precision and Recall, and when do you prioritize Recall?",
            "answer": "Precision measures of all predicted positives, how many were correct. Recall measures of all actual positives, how many were detected. Prioritize Recall when missing a positive is costly (e.g. cancer diagnosis, fraud detection).",
            "solution": "Precision = TP / (TP + FP). Recall = TP / (TP + FN). High Recall minimizes False Negatives.",
            "difficulty": "Intermediate",
            "topic": "Evaluation Metrics"
          },
          {
            "question": "How does a Random Forest prevent overfitting compared to a single Decision Tree?",
            "answer": "A single deep decision tree easily memorizes training noise. Random Forest averages predictions across hundreds of independent trees trained on bootstrap samples with random feature subsets, dramatically reducing variance without increasing bias.",
            "solution": "Bagging reduces variance: Var(Average) = Var(Single) / N for uncorrelated estimators.",
            "difficulty": "Intermediate",
            "topic": "Ensemble Learning"
          }
        ],
        "projects": [
          {
            "title": "End-to-End Customer Churn Prediction Engine",
            "description": "Build and tune a classification pipeline predicting customer churn with One-Hot encoding, Random Forest, and hyperparameter tuning.",
            "difficulty": "Intermediate",
            "techStack": [
              "Python",
              "Scikit-Learn",
              "Pandas",
              "Seaborn"
            ],
            "features": [
              "Scikit-learn ColumnTransformer for mixed numeric/categorical features",
              "Stratified 5-Fold Cross-Validation handling class imbalance",
              "Hyperparameter tuning with RandomizedSearchCV",
              "ROC-AUC curve plotting and feature importance extraction"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Ensemble learning, Gradient Boosting, XGBoost, PCA, neural networks, deep learning basics, PyTorch, model explainability (SHAP), FastAPI serving, and MLOps.",
        "prerequisites": [
          "Intermediate ML algorithms and Python proficiency"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Ensemble Learning Theory",
            "description": "Bagging, Boosting, Stacking, and Voting classifiers comparison.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Gradient Boosting (GBM)",
            "description": "Gradient descent in function space, residual learning, shrinkage, and tree building.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 3,
            "title": "XGBoost Fundamentals",
            "description": "Second-order Taylor expansion loss, regularization term, and column sub-sampling.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "Dimensionality Reduction",
            "description": "Curse of dimensionality, distance distortion in high dimensions, and projection.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Principal Component Analysis (PCA)",
            "description": "Covariance matrix, eigenvalues, eigenvectors, explained variance ratio, and t-SNE.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 6,
            "title": "Neural Network Fundamentals",
            "description": "Perceptron, activation functions (ReLU, Sigmoid, Softmax), forward pass, and backpropagation.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 7,
            "title": "Deep Learning Introduction",
            "description": "Multi-layer Perceptrons (MLP), vanishing gradient problem, and optimizers (Adam, RMSProp).",
            "duration": "7 hours"
          },
          {
            "stepNumber": 8,
            "title": "PyTorch Fundamentals",
            "description": "Tensors, autograd, nn.Module, loss functions, optimizer step, and training loops.",
            "duration": "8 hours"
          },
          {
            "stepNumber": 9,
            "title": "Model Interpretability (SHAP & LIME)",
            "description": "Feature attribution with Shapley values, global vs local explainability for stakeholders.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 10,
            "title": "Model Deployment with FastAPI",
            "description": "Serializing models (joblib/pickle), REST inference endpoints, request schemas with Pydantic.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 11,
            "title": "ML Pipelines in Production",
            "description": "End-to-end repeatable sklearn Pipelines, artifacts versioning, and reproducibility.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 12,
            "title": "Data and Model Drift",
            "description": "Concept drift, covariate shift, Kolmogorov-Smirnov statistical tests, and monitoring.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 13,
            "title": "Monitoring and Evaluation",
            "description": "Latency monitoring, throughput, prediction logging, and automated retraining triggers.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 14,
            "title": "MLOps Fundamentals",
            "description": "MLflow experiment tracking, model registry, CI/CD for machine learning, and Dockerizing models.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 15,
            "title": "Build and Deploy an End-to-End ML Application",
            "description": "Deploy a containerized credit risk classification service with FastAPI and SHAP.",
            "duration": "12 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "StatQuest: XGBoost Clearly Explained",
            "url": "https://www.youtube.com/watch?v=OtD8wVdUHyA",
            "channel": "StatQuest with Josh Starmer",
            "level": "Advanced",
            "description": "Complete intuitive walk-through of the mathematics and mechanics behind XGBoost.",
            "type": "Video"
          },
          {
            "title": "PyTorch for Deep Learning Bootcamp",
            "url": "https://www.youtube.com/watch?v=V_xro1bcAuA",
            "channel": "freeCodeCamp.org",
            "level": "Advanced",
            "description": "Comprehensive guide to building neural networks, tensors, and models in PyTorch.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "PyTorch Official Documentation & Tutorials",
            "url": "https://pytorch.org/tutorials/",
            "description": "The official guides and recipes for PyTorch neural network engineering.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "SHAP (SHapley Additive exPlanations) Documentation",
            "url": "https://shap.readthedocs.io/en/latest/",
            "description": "Game-theoretic approach to explain the output of any machine learning model.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "How does Gradient Boosting differ from Random Forest?",
            "answer": "Random Forest builds trees independently in parallel using bootstrap samples and averages their outputs (reducing variance). Gradient Boosting builds trees sequentially, where each new tree is trained to correct the residual errors made by preceding trees (reducing bias).",
            "solution": "Random Forest = Parallel independent trees (Bagging). Gradient Boosting = Sequential error-correcting trees (Boosting).",
            "difficulty": "Advanced",
            "topic": "Ensemble Learning"
          },
          {
            "question": "What are SHAP values and why are they superior to basic feature importances in Random Forests?",
            "answer": "Basic tree feature importances (e.g. MDI) are biased toward high-cardinality features and do not tell the direction of impact. SHAP values are rooted in cooperative game theory, providing both positive/negative magnitude and local explanation for individual predictions.",
            "solution": "SHAP computes marginal contribution of feature across all possible feature subsets, satisfying efficiency and symmetry properties.",
            "difficulty": "Advanced",
            "topic": "Model Explainability"
          }
        ],
        "projects": [
          {
            "title": "Production Credit Risk Scoring Engine & MLOps API",
            "description": "Train an XGBoost credit risk classifier, generate SHAP feature explanations, and deploy as a Dockerized FastAPI service with input validation.",
            "difficulty": "Advanced",
            "techStack": [
              "Python",
              "XGBoost",
              "SHAP",
              "FastAPI",
              "Docker",
              "Pydantic"
            ],
            "features": [
              "Trained XGBoost model with class imbalance weight tuning",
              "FastAPI REST endpoint providing probability and credit decision",
              "SHAP waterfall plot generation explaining decision to applicants",
              "Multi-stage Docker container ready for cloud deployment"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-ai",
    "title": "Artificial Intelligence: Agents, Logic & Modern AI",
    "category": "Artificial Intelligence",
    "level": "All Levels",
    "duration": "10 weeks",
    "description": "Explore intelligent agents, heuristic search (A*), adversarial game playing (Minimax), logic reasoning, expert systems, and modern AI architectures.",
    "coverImage": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Dr. Stuart Russell",
      "email": "stuart@eduflow.io"
    },
    "prerequisites": [
      "Python fundamentals",
      "Basic discrete mathematics and logic"
    ],
    "learningOutcomes": [
      "Design rational intelligent agents for diverse environments",
      "Implement informed heuristic search algorithms including A* and Greedy Search",
      "Build adversarial game-playing engines using Minimax and Alpha-Beta Pruning",
      "Represent knowledge and reason using Propositional and First-Order Logic",
      "Understand modern reinforcement learning, transformers, and AI ethics"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Intelligent Agents & State-Space Search",
        "duration": "2.5 weeks",
        "topics": [
          "Agent Architectures (PEAS)",
          "Uninformed Search (BFS, DFS, UCS)",
          "Informed Search & Heuristics (A* Search)",
          "Admissibility & Consistency Proofs"
        ]
      },
      {
        "moduleTitle": "Module 2: Adversarial Search & Games",
        "duration": "2.5 weeks",
        "topics": [
          "Game Trees & Minimax",
          "Alpha-Beta Pruning Optimization",
          "Evaluation Functions",
          "Constraint Satisfaction Problems (CSP)"
        ]
      },
      {
        "moduleTitle": "Module 3: Knowledge Representation & Logic",
        "duration": "2.5 weeks",
        "topics": [
          "Propositional Logic & Inference",
          "First-Order Logic & Unification",
          "Resolution Refutation",
          "Forward & Backward Chaining"
        ]
      },
      {
        "moduleTitle": "Module 4: Probabilistic Reasoning & Modern AI",
        "duration": "2.5 weeks",
        "topics": [
          "Bayesian Networks",
          "Markov Decision Processes (MDP)",
          "Q-Learning Fundamentals",
          "Transformers, RAG & AI Alignment"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Introduction to AI fundamentals, intelligent agents, PEAS framework, state-space search, uninformed search, and informed A* heuristic search.",
        "prerequisites": [
          "Basic Python programming syntax"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Introduction to Artificial Intelligence",
            "description": "What is AI? History, Turing test, rational agents, and human-like vs rational thinking.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 2,
            "title": "Intelligent Agents and PEAS Framework",
            "description": "Performance measure, Environment, Actuators, Sensors, and agent types.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Environment Characteristics",
            "description": "Fully vs partially observable, deterministic vs stochastic, static vs dynamic environments.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 4,
            "title": "State-Space Representation",
            "description": "Defining initial state, actions, transition model, goal test, and path cost.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Uninformed Search Algorithms",
            "description": "Breadth-First Search, Depth-First Search, Depth-Limited, and Iterative Deepening.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 6,
            "title": "Informed (Heuristic) Search & A*",
            "description": "Greedy Best-First search, A* algorithm (f(n) = g(n) + h(n)), and admissible heuristics.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Artificial Intelligence - Full University Course (MIT 6.034)",
            "url": "https://www.youtube.com/watch?v=TjZ3CasnyOU",
            "channel": "MIT OpenCourseWare",
            "level": "Beginner",
            "description": "Classic MIT lecture on search trees, heuristics, and intelligent problem solving.",
            "type": "Video"
          },
          {
            "title": "A* Pathfinding Algorithm Tutorial",
            "url": "https://www.youtube.com/watch?v=-L-WgKMFuhE",
            "channel": "Sebastian Lague",
            "level": "Beginner",
            "description": "Clear visual demonstration and coding implementation of the A* search algorithm.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "UC Berkeley CS188: Introduction to Artificial Intelligence Notes",
            "url": "https://inst.eecs.berkeley.edu/~cs188/",
            "description": "Legendary course notes and Pacman project assignments on search and agents.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "Russell & Norvig: AI - A Modern Approach Notes",
            "url": "http://aima.cs.berkeley.edu/",
            "description": "Comprehensive guide based on the world's most popular AI textbook.",
            "type": "Guide",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What makes a heuristic \"admissible\" in A* search, and what does it guarantee?",
            "answer": "A heuristic h(n) is admissible if it never overestimates the true cost to reach the goal from node n (h(n) <= h*(n)). When h(n) is admissible, tree-search A* is guaranteed to return the optimal (shortest/lowest cost) path.",
            "solution": "h(n) <= actual cost. For Euclidean/Manhattan distance, straight-line distance is always <= actual path length.",
            "difficulty": "Beginner",
            "topic": "Heuristic Search"
          },
          {
            "question": "What is the PEAS framework for specifying an intelligent agent?",
            "answer": "PEAS stands for: Performance measure (criteria for success), Environment (external context), Actuators (mechanisms agent uses to act), Sensors (inputs agent perceives).",
            "solution": "Example Autonomous Car: P=Safety/Speed, E=Roads/Traffic, A=Steering/Brakes, S=Cameras/Lidar.",
            "difficulty": "Beginner",
            "topic": "Intelligent Agents"
          }
        ],
        "projects": [
          {
            "title": "Maze Pathfinding AI Agent with A* Search",
            "description": "Build a grid-based maze pathfinding agent comparing BFS, DFS, and A* search with Manhattan distance heuristic.",
            "difficulty": "Beginner",
            "techStack": [
              "Python",
              "Pygame / Matplotlib"
            ],
            "features": [
              "Interactive grid maze creation with obstacles",
              "Real-time visual node expansion exploration counter",
              "Optimal shortest path reconstruction",
              "Comparison of explored node counts between BFS, DFS, and A*"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Adversarial game search, Minimax, Alpha-Beta pruning, constraint satisfaction problems, propositional logic, and inference engines.",
        "prerequisites": [
          "A* search and basic graph concepts"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Adversarial Search & Game Theory",
            "description": "Zero-sum games, complete information, game trees, and utility values.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Minimax Algorithm",
            "description": "Recursive minimax value calculation, depth limits, and static evaluation functions.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 3,
            "title": "Alpha-Beta Pruning",
            "description": "Pruning irrelevant branches without affecting minimax outcome, best-case O(b^(d/2)).",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "Constraint Satisfaction Problems (CSP)",
            "description": "Variables, domains, constraints, backtracking search, forward checking, and AC-3.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 5,
            "title": "Propositional Logic and Knowledge Bases",
            "description": "Syntax, semantics, truth tables, entailment, validity, and satisfiability.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 6,
            "title": "Inference in Propositional Logic",
            "description": "Modus Ponens, Resolution refutation, Horn clauses, and forward/backward chaining.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Minimax and Alpha-Beta Pruning by Computerphile",
            "url": "https://www.youtube.com/watch?v=l-hh51ncgDI",
            "channel": "Computerphile",
            "level": "Intermediate",
            "description": "Intuitive visual explanation of game trees and pruning unnecessary states.",
            "type": "Video"
          },
          {
            "title": "Constraint Satisfaction Problems (CSP) Tutorial",
            "url": "https://www.youtube.com/watch?v=lcrJk4r7hso",
            "channel": "MIT OpenCourseWare",
            "level": "Intermediate",
            "description": "Solving constraint networks using backtracking and constraint propagation.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Stanford CS221: Artificial Intelligence Principles",
            "url": "https://stanford-cs221.github.io/",
            "description": "Lecture slides on game playing, CSP, and logic reasoning.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "AIMA Python: Reference Implementations",
            "url": "https://github.com/aimacode/aima-python",
            "description": "Clean Python implementations of algorithms from Artificial Intelligence: A Modern Approach.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "How does Alpha-Beta pruning reduce the search space in a two-player game tree?",
            "answer": "Alpha tracks the best value the MAX player can guarantee; Beta tracks the best value the MIN player can guarantee. If at any node, alpha >= beta, the current branch cannot influence the final decision and is pruned immediately.",
            "solution": "Prunes when beta <= alpha. In best move ordering, effective branching factor decreases from b to sqrt(b).",
            "difficulty": "Intermediate",
            "topic": "Adversarial Search"
          },
          {
            "question": "What is the Arc Consistency (AC-3) algorithm in Constraint Satisfaction Problems?",
            "answer": "AC-3 eliminates values from variable domains that cannot participate in any valid solution. An arc (Xi, Xj) is consistent if for every value in Xi's domain, there is at least one allowable value in Xj's domain.",
            "solution": "AC-3 runs before backtracking to prune domains, drastically reducing the search tree size.",
            "difficulty": "Intermediate",
            "topic": "CSP"
          }
        ],
        "projects": [
          {
            "title": "Smart Connect-4 / Chess Game Engine",
            "description": "Develop an intelligent adversarial game engine playing Connect-4 or Chess using Minimax with Alpha-Beta pruning and custom board evaluation.",
            "difficulty": "Intermediate",
            "techStack": [
              "Python",
              "Minimax",
              "Alpha-Beta"
            ],
            "features": [
              "Depth-limited Minimax recursive decision engine",
              "Alpha-Beta pruning branch optimization",
              "Position evaluation heuristic function (center control, threat detection)",
              "Interactive terminal/GUI gameplay vs human player"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Markov decision processes, reinforcement learning (Q-Learning), deep Q-networks (DQN), transformer architectures, RAG, and AI safety.",
        "prerequisites": [
          "Probability, linear algebra, and intermediate AI algorithms"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Markov Decision Processes (MDP)",
            "description": "States, actions, transition probabilities, rewards, discount factor (gamma), and Bellman equation.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "Value Iteration and Policy Iteration",
            "description": "Solving MDPs dynamically for optimal policies (pi*).",
            "duration": "6 hours"
          },
          {
            "stepNumber": 3,
            "title": "Reinforcement Learning: Q-Learning",
            "description": "Model-free temporal difference learning, Q-table updates, and epsilon-greedy exploration.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 4,
            "title": "Deep Q-Networks (DQN)",
            "description": "Approximating Q-functions with neural networks, experience replay buffer, and target networks.",
            "duration": "8 hours"
          },
          {
            "stepNumber": 5,
            "title": "Natural Language Processing & Transformers",
            "description": "Attention mechanisms, self-attention, multi-head attention, and transformer encoders/decoders.",
            "duration": "8 hours"
          },
          {
            "stepNumber": 6,
            "title": "Retrieval-Augmented Generation (RAG) & Ethics",
            "description": "Vector databases, semantic embeddings, document retrieval, hallucinations, and AI safety.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Andrej Karpathy: Neural Networks - Zero to Hero",
            "url": "https://www.youtube.com/watch?v=VMj-3S1tku0",
            "channel": "Andrej Karpathy",
            "level": "Advanced",
            "description": "Build micrograd, language models, and transformers from scratch.",
            "type": "Video"
          },
          {
            "title": "DeepMind x UCL: Reinforcement Learning Lecture Series",
            "url": "https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ",
            "channel": "DeepMind",
            "level": "Advanced",
            "description": "Comprehensive theoretical foundations of RL by DeepMind researchers.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Sutton & Barto: Reinforcement Learning Book",
            "url": "http://incompleteideas.net/book/the-book-2nd.html",
            "description": "The definitive textbook on reinforcement learning theory and algorithms.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Hugging Face NLP Course: Transformers & Vector Search",
            "url": "https://huggingface.co/learn/nlp-course",
            "description": "Official hands-on guide to modern transformer models and semantic embeddings.",
            "type": "Guide",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "State the Bellman Equation for the optimal action-value function Q*(s, a).",
            "answer": "Q*(s, a) = R(s, a) + gamma * sum(P(s' | s, a) * max_a' Q*(s', a')). It states that the value of taking action a in state s is the immediate reward plus the discounted expected future return from the best subsequent action.",
            "solution": "Q*(s,a) = E[R + gamma * max_a' Q*(s', a')]. Basis of value iteration and Q-learning.",
            "difficulty": "Advanced",
            "topic": "Reinforcement Learning"
          },
          {
            "question": "What problem does the Self-Attention mechanism solve in Transformers compared to Recurrent Neural Networks (RNNs)?",
            "answer": "RNNs process tokens sequentially (preventing GPU parallelization) and suffer from vanishing gradients over long sequences. Self-Attention calculates direct attention weights between all token pairs simultaneously in O(1) sequential steps, capturing long-range dependencies efficiently.",
            "solution": "Attention(Q, K, V) = softmax(Q * K^T / sqrt(d_k)) * V computes parallel contextual representations.",
            "difficulty": "Advanced",
            "topic": "Transformers"
          }
        ],
        "projects": [
          {
            "title": "Retrieval-Augmented Generation (RAG) AI Knowledge Assistant",
            "description": "Build an end-to-end RAG system embedding technical documents into a vector store and querying a language model with cited context.",
            "difficulty": "Advanced",
            "techStack": [
              "Python",
              "ChromaDB / FAISS",
              "LangChain",
              "OpenAI / HuggingFace"
            ],
            "features": [
              "Document chunking and dense vector embedding generation",
              "Cosine similarity search retrieving top-K relevant passages",
              "Prompt templating injecting retrieved context into LLM",
              "Evaluation of retrieval accuracy and hallucination reduction"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-data-science",
    "title": "Data Science & Advanced Analytics Masterclass",
    "category": "Data Science",
    "level": "All Levels",
    "duration": "10 weeks",
    "description": "Transform raw data into actionable insights: statistical analysis, Pandas, data visualization, hypothesis testing, time series, and Big Data analytics.",
    "coverImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Dr. Wes McKinney",
      "email": "wes@eduflow.io"
    },
    "prerequisites": [
      "Basic Python programming syntax"
    ],
    "learningOutcomes": [
      "Clean, aggregate, and reshape complex datasets with NumPy and Pandas",
      "Generate publication-quality interactive charts with Seaborn and Plotly",
      "Perform rigorous statistical hypothesis tests (t-test, ANOVA, Chi-Square)",
      "Forecast trends using ARIMA time series models",
      "Process distributed Big Data with PySpark and build interactive Streamlit dashboards"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Python for Data Analysis & Ingestion",
        "duration": "2 weeks",
        "topics": [
          "NumPy Vectorization",
          "Pandas Series & DataFrames",
          "Data Cleaning & Outlier Detection",
          "Exploratory Data Analysis (EDA)"
        ]
      },
      {
        "moduleTitle": "Module 2: Visual Storytelling & Statistical Testing",
        "duration": "3 weeks",
        "topics": [
          "Matplotlib & Seaborn",
          "Plotly Interactive Visualizations",
          "Hypothesis Testing (t-tests, ANOVA)",
          "Correlation & Regression Analysis"
        ]
      },
      {
        "moduleTitle": "Module 3: Time Series & Advanced Analytics",
        "duration": "2.5 weeks",
        "topics": [
          "Time Series Decompositions",
          "ARIMA & Prophet Forecasting",
          "Feature Store Architecture",
          "A/B Testing Experimentation"
        ]
      },
      {
        "moduleTitle": "Module 4: Big Data & Executive Dashboarding",
        "duration": "2.5 weeks",
        "topics": [
          "PySpark DataFrames & SQL",
          "Distributed Aggregations",
          "Streamlit Interactive Apps",
          "Data Storytelling & Reporting"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Introduction to data science methodology, NumPy vectorization, Pandas DataFrames, data cleaning, and exploratory visualization.",
        "prerequisites": [
          "Python basics"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Data Science Methodology",
            "description": "Problem definition, data collection, cleaning, EDA, modeling, and communication.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 2,
            "title": "NumPy Array Manipulation",
            "description": "Array broadcasting, linear algebra operations, filtering, and statistical functions.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Pandas Data Wrangling",
            "description": "Reading CSV/JSON files, Series and DataFrames, index manipulation, and descriptive stats.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Data Cleaning Essentials",
            "description": "Imputing missing data, removing duplicates, and data type conversions.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Exploratory Data Analysis (EDA)",
            "description": "Understanding distributions, identifying anomalies, and computing summary metrics.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 6,
            "title": "Data Visualization with Matplotlib",
            "description": "Line charts, scatter plots, bar charts, subplots, and formatting titles/labels.",
            "duration": "4 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Data Analysis with Python Course",
            "url": "https://www.youtube.com/watch?v=r-uOLxNrNk8",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Comprehensive introduction to NumPy, Pandas, and exploratory data analysis.",
            "type": "Video"
          },
          {
            "title": "Python Pandas Tutorial by Keith Galli",
            "url": "https://www.youtube.com/watch?v=vmEHCJofslg",
            "channel": "Keith Galli",
            "level": "Beginner",
            "description": "Hands-on practical walk-through of loading, filtering, and analyzing real data.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Python Data Science Handbook",
            "url": "https://jakevdp.github.io/PythonDataScienceHandbook/",
            "description": "Free online textbook covering IPython, NumPy, Pandas, and Matplotlib by Jake VanderPlas.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "Pandas Official Cheat Sheet",
            "url": "https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf",
            "description": "Visual two-page summary of core Pandas operations.",
            "type": "CheatSheet",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the difference between loc and iloc in Pandas?",
            "answer": "loc selects rows and columns based on label index names. iloc selects rows and columns strictly based on integer position indices (0, 1, 2...).",
            "solution": "df.loc[df[\"age\"] > 25, [\"name\", \"salary\"]] vs df.iloc[0:5, 0:2]",
            "difficulty": "Beginner",
            "topic": "Pandas Indexing"
          },
          {
            "question": "What is the purpose of exploratory data analysis (EDA)?",
            "answer": "EDA analyzes datasets to summarize main statistical characteristics, discover patterns, detect anomalies/outliers, test hypotheses, and verify assumptions using summary statistics and graphical plots.",
            "solution": "Use df.describe(), df.info(), correlation heatmaps, and boxplots to explore data before modeling.",
            "difficulty": "Beginner",
            "topic": "EDA"
          }
        ],
        "projects": [
          {
            "title": "Global Sales & Customer Demographics EDA",
            "description": "Perform an end-to-end exploratory data analysis on an enterprise retail sales dataset to discover seasonal buying trends.",
            "difficulty": "Beginner",
            "techStack": [
              "Python",
              "Pandas",
              "Matplotlib",
              "Jupyter"
            ],
            "features": [
              "Clean null values and format currency and timestamp columns",
              "Aggregate monthly revenue and top product categories",
              "Visualize customer distribution by geographic region",
              "Export summarized business insights report"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Advanced Pandas, Seaborn, interactive Plotly charts, statistical hypothesis testing (t-tests, ANOVA, Chi-Square), and regression analysis.",
        "prerequisites": [
          "Pandas basics and introductory statistics"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Advanced Pandas Operations",
            "description": "Multi-indexing, groupby aggregations, pivot tables, and cross-tabulations.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Statistical Seaborn Visualizations",
            "description": "KDE plots, pair plots, violin plots, and correlation heatmaps.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Interactive Plotly Dashboards",
            "description": "Interactive zoomable scatter, choropleth geo maps, and hover tooltips.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Statistical Hypothesis Testing",
            "description": "Null hypothesis formulation, p-values, alpha levels, and significance testing.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Parametric & Non-Parametric Tests",
            "description": "Student's t-tests (paired/unpaired), ANOVA F-test, and Chi-Square test of independence.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 6,
            "title": "A/B Testing Foundations",
            "description": "Control vs treatment groups, sample size determination, statistical power, and p-hacking risks.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Corey Schafer: Pandas Groupby & Aggregations",
            "url": "https://www.youtube.com/watch?v=txMdrV1Ut64",
            "channel": "Corey Schafer",
            "level": "Intermediate",
            "description": "In-depth tutorial on aggregating data and analyzing subsets with Pandas.",
            "type": "Video"
          },
          {
            "title": "StatQuest: Hypothesis Testing and p-values",
            "url": "https://www.youtube.com/watch?v=0oc49DyA3hU",
            "channel": "StatQuest with Josh Starmer",
            "level": "Intermediate",
            "description": "Clear visual introduction to null hypotheses, p-values, and significance.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Scipy Statistical Functions Documentation",
            "url": "https://docs.scipy.org/doc/scipy/reference/stats.html",
            "description": "Official reference for t-tests, ANOVA, and distribution testing.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "Think Stats: Probability and Statistics for Programmers",
            "url": "https://greenteapress.com/wp/think-stats-2e/",
            "description": "Free computational guide to statistics using Python.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What does a p-value of 0.03 mean in an A/B test with a significance threshold of alpha = 0.05?",
            "answer": "Assuming the null hypothesis is true (there is no real difference between groups), there is a 3% probability of observing results as extreme as those measured. Because p (0.03) < alpha (0.05), we reject the null hypothesis and conclude the difference is statistically significant.",
            "solution": "Reject H0 when p-value < alpha. The treatment group demonstrated a statistically significant lift.",
            "difficulty": "Intermediate",
            "topic": "Hypothesis Testing"
          },
          {
            "question": "When should you use ANOVA instead of multiple t-tests?",
            "answer": "Use ANOVA when comparing the means of 3 or more groups. Running multiple pairwise t-tests compounds the family-wise error rate (Type I error probability increases with each additional test).",
            "solution": "ANOVA computes a single F-statistic to verify if at least one group mean differs, followed by post-hoc Tukey tests.",
            "difficulty": "Intermediate",
            "topic": "ANOVA"
          }
        ],
        "projects": [
          {
            "title": "E-Commerce A/B Test Statistical Analysis Dashboard",
            "description": "Conduct a complete statistical analysis of an e-commerce website redesign A/B test determining conversion lift and revenue impact.",
            "difficulty": "Intermediate",
            "techStack": [
              "Python",
              "Scipy",
              "Pandas",
              "Plotly",
              "Seaborn"
            ],
            "features": [
              "Calculation of conversion rates for Control and Variant cohorts",
              "Two-sample Z-test and Chi-Square test of independence",
              "Interactive conversion confidence interval charts using Plotly",
              "Executive summary report with actionable go/no-go recommendation"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Time series forecasting (ARIMA, Prophet), Big Data processing with PySpark, SQL data warehousing, and interactive Streamlit web apps.",
        "prerequisites": [
          "Intermediate data analysis and statistics"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Time Series Decompositions",
            "description": "Trend, seasonality, residual components, and stationarity tests (ADF test).",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Time Series Forecasting (ARIMA & SARIMA)",
            "description": "Autoregressive (AR), Moving Average (MA), differencing, and AIC parameter selection.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 3,
            "title": "Modern Forecasting with Prophet",
            "description": "Handling holiday effects, changepoint detection, and uncertainty intervals.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Big Data Processing with PySpark",
            "description": "Resilient Distributed Datasets (RDDs), Spark DataFrames, lazy evaluation, and catalyst optimizer.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 5,
            "title": "Distributed SQL & Feature Stores",
            "description": "Complex analytical window functions, CTEs, and enterprise feature stores.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 6,
            "title": "Interactive Dashboard Apps with Streamlit",
            "description": "Building and deploying web data apps with interactive sliders, caching, and charts.",
            "duration": "7 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Time Series Forecasting with Python - Full Course",
            "url": "https://www.youtube.com/watch?v=e8Yw4alG16Q",
            "channel": "freeCodeCamp.org",
            "level": "Advanced",
            "description": "Complete practical course on ARIMA, SARIMA, and time series modeling in Python.",
            "type": "Video"
          },
          {
            "title": "Apache Spark with Python (PySpark) Tutorial",
            "url": "https://www.youtube.com/watch?v=_C8kWso4ebw",
            "channel": "freeCodeCamp.org",
            "level": "Advanced",
            "description": "Master distributed big data processing, dataframes, and Spark SQL.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Apache Spark Official PySpark Documentation",
            "url": "https://spark.apache.org/docs/latest/api/python/",
            "description": "Official reference for PySpark DataFrames and distributed queries.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Streamlit Documentation: Data App Building",
            "url": "https://docs.streamlit.io/",
            "description": "Fastest way to build and share data applications in pure Python.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Why must time series data be stationary before applying ARIMA models, and how do we test stationarity?",
            "answer": "ARIMA assumes the mean, variance, and autocorrelation structure are constant over time. Non-stationary data has trends or seasonality that cause unstable model estimates. Test stationarity using the Augmented Dickey-Fuller (ADF) test; make stationary via differencing.",
            "solution": "from statsmodels.tsa.stattools import adfuller; if p-value < 0.05, data is stationary. Otherwise, apply differencing (d parameter in ARIMA).",
            "difficulty": "Advanced",
            "topic": "Time Series"
          },
          {
            "question": "What is lazy evaluation in Apache Spark and how does it optimize performance?",
            "answer": "Transformations in Spark (e.g. map, filter, select) do not execute immediately when called. Spark records them in a DAG (Directed Acyclic Graph) and compiles an optimized execution plan using the Catalyst optimizer only when an action (e.g. count, collect, write) is triggered.",
            "solution": "Lazy evaluation enables query optimization, predicate pushdown, and pipeline optimization across distributed nodes.",
            "difficulty": "Advanced",
            "topic": "PySpark & Big Data"
          }
        ],
        "projects": [
          {
            "title": "Real-time Stock Market Forecasting & Analytics Portal",
            "description": "Build a production interactive data science web application in Streamlit forecasting equity asset prices with ARIMA, interactive Plotly charts, and PySpark analysis.",
            "difficulty": "Advanced",
            "techStack": [
              "Python",
              "Streamlit",
              "Statsmodels",
              "Plotly",
              "PySpark"
            ],
            "features": [
              "Live financial data ingestion using yfinance",
              "Automated stationarity testing (ADF test) and differencing",
              "Interactive ARIMA/Prophet forecasting with confidence bands",
              "Live Streamlit dashboard deployed with interactive parameter sliders"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-software-engineering",
    "title": "Software Engineering: Design Patterns & Clean Architecture",
    "category": "Software Engineering",
    "level": "All Levels",
    "duration": "8 weeks",
    "description": "Master SDLC, Agile methodologies, UML architecture, SOLID principles, GoF design patterns, automated testing, and scalable clean architecture.",
    "coverImage": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Robert C. Martin",
      "email": "unclebob@eduflow.io"
    },
    "prerequisites": [
      "Basic object-oriented programming experience in Java, C++, or TypeScript"
    ],
    "learningOutcomes": [
      "Apply SDLC frameworks (Scrum, Kanban) and craft clear user stories",
      "Model complex systems using standard UML (Use Case, Class, Sequence) diagrams",
      "Write maintainable code applying the 5 SOLID object-oriented principles",
      "Implement classic Gang of Four (GoF) design patterns to solve recurring challenges",
      "Architect testable, decoupled systems following Clean Architecture and Domain-Driven Design"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: SDLC, Agile & Requirements Engineering",
        "duration": "2 weeks",
        "topics": [
          "Software Development Life Cycle Models",
          "Agile & Scrum Frameworks",
          "Requirements Engineering & User Stories",
          "UML Structural & Behavioral Modeling"
        ]
      },
      {
        "moduleTitle": "Module 2: SOLID Principles & Code Quality",
        "duration": "2 weeks",
        "topics": [
          "Single Responsibility & Open/Closed",
          "Liskov Substitution Principle",
          "Interface Segregation & Dependency Inversion",
          "Code Smells & Refactoring Patterns"
        ]
      },
      {
        "moduleTitle": "Module 3: Design Patterns (GoF)",
        "duration": "2 weeks",
        "topics": [
          "Creational: Singleton, Factory, Builder",
          "Structural: Adapter, Decorator, Facade",
          "Behavioral: Observer, Strategy, Command",
          "Unit Testing & TDD Principles"
        ]
      },
      {
        "moduleTitle": "Module 4: Enterprise Architecture & DevOps",
        "duration": "2 weeks",
        "topics": [
          "Clean Architecture & Hexagonal Ports",
          "Microservices vs Monolith Tradeoffs",
          "CI/CD Pipelines & Static Analysis",
          "SRE Fundamentals & Fault Tolerance"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Introduction to software engineering, SDLC models (Waterfall, Agile, Scrum), requirements analysis, user stories, and UML diagrams.",
        "prerequisites": [
          "Basic programming literacy"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Introduction to Software Engineering",
            "description": "Software crisis, engineering discipline vs ad-hoc coding, software quality attributes.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 2,
            "title": "SDLC Models",
            "description": "Waterfall model, V-Model, Iterative development, and Agile values.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Agile and Scrum Methodologies",
            "description": "Sprints, ceremonies (standups, planning, retrospectives), product backlogs, and user stories.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Requirements Engineering",
            "description": "Functional vs non-functional requirements, acceptance criteria, and edge-case discovery.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 5,
            "title": "UML Use Case & Class Diagrams",
            "description": "Actors, use cases, include/extend relationships, class attributes, methods, and associations.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 6,
            "title": "UML Sequence & Activity Diagrams",
            "description": "Message flows, lifelines, synchronous/asynchronous calls, and workflow control branching.",
            "duration": "4 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Agile & Scrum Full Course in 4 Hours",
            "url": "https://www.youtube.com/watch?v=2T86xAtR6Fo",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Complete breakdown of Scrum roles, artifacts, ceremonies, and agile delivery.",
            "type": "Video"
          },
          {
            "title": "UML Class Diagram Tutorial by Derek Banas",
            "url": "https://www.youtube.com/watch?v=3cmzqZzwNDM",
            "channel": "Derek Banas",
            "level": "Beginner",
            "description": "Visual explanation of classes, interfaces, inheritance, and association in UML.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "IEEE Guide to Software Engineering Body of Knowledge (SWEBOK)",
            "url": "https://www.computer.org/education/bodies-of-knowledge/software-engineering",
            "description": "Authoritative international standard for software engineering competencies.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "Scrum Guide by Ken Schwaber & Jeff Sutherland",
            "url": "https://scrumguides.org/scrum-guide.html",
            "description": "The official definition of the Scrum framework and ceremonies.",
            "type": "Guide",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the INVEST mnemonic for writing effective Agile user stories?",
            "answer": "INVEST stands for: Independent, Negotiable, Valuable, Estimable, Small, and Testable.",
            "solution": "Ensures user stories can be scheduled independently, delivered within a single sprint, and verified by automated or manual acceptance tests.",
            "difficulty": "Beginner",
            "topic": "Agile Requirements"
          },
          {
            "question": "What is the difference between Aggregation and Composition in UML Class Diagrams?",
            "answer": "Both represent \"has-a\" relationships. In Aggregation (open diamond), the child object can exist independently of the parent. In Composition (filled diamond), the child object cannot exist without the parent; destroying parent destroys child.",
            "solution": "Aggregation: University and Professors. Composition: House and Rooms.",
            "difficulty": "Beginner",
            "topic": "UML Modeling"
          }
        ],
        "projects": [
          {
            "title": "Software Requirements Specification (SRS) & UML Blueprints",
            "description": "Produce a complete professional SRS document and UML architecture blueprints for an enterprise hospital management portal.",
            "difficulty": "Beginner",
            "techStack": [
              "UML",
              "Markdown",
              "Mermaid.js"
            ],
            "features": [
              "Documented functional and non-functional requirements (NFRs)",
              "Use Case Diagram with 8+ actors and flows",
              "Complete Class Diagram with multiplicity and inheritance",
              "Sequence Diagram detailing user appointment booking"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "SOLID design principles in practice, classic GoF design patterns (Factory, Strategy, Observer, Decorator), unit testing, and TDD.",
        "prerequisites": [
          "Object-oriented programming (classes, inheritance, polymorphism)"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Single Responsibility Principle (SRP)",
            "description": "One reason to change, separating business logic from presentation and persistence.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "Open/Closed & Liskov Substitution (OCP & LSP)",
            "description": "Open for extension, closed for modification; subtype behavioral substitutability.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Interface Segregation & Dependency Inversion (ISP & DIP)",
            "description": "Lean role interfaces, depending on abstractions rather than concrete classes.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Creational Patterns (Factory, Singleton, Builder)",
            "description": "Decoupling object creation, managing single shared instances, and complex constructors.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 5,
            "title": "Structural Patterns (Adapter, Decorator, Facade)",
            "description": "Interface adaptation, dynamic behavior extension, and simplified subsystem entry points.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 6,
            "title": "Behavioral Patterns (Strategy, Observer, Command)",
            "description": "Interchangeable algorithms, publish-subscribe decoupling, and encapsulating requests.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Design Patterns in Object Oriented Programming",
            "url": "https://www.youtube.com/playlist?list=PLF206E906175C7E07",
            "channel": "Christopher Okhravi",
            "level": "Intermediate",
            "description": "The finest visual explanation of Head First Design Patterns and SOLID concepts.",
            "type": "Video"
          },
          {
            "title": "SOLID Principles in Code: Complete Guide",
            "url": "https://www.youtube.com/watch?v=rtmFCcjEgEw",
            "channel": "Derek Banas",
            "level": "Intermediate",
            "description": "Practical code examples demonstrating all five SOLID design rules.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Refactoring.Guru: Design Patterns Reference",
            "url": "https://refactoring.guru/design-patterns",
            "description": "Visual interactive catalog of all 22 Gang of Four design patterns with code.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "Martin Fowler: Catalog of Refactoring Patterns",
            "url": "https://refactoring.com/catalog/",
            "description": "Classic refactoring techniques for improving code structure safely.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Explain the Open/Closed Principle (OCP) with a concrete code example.",
            "answer": "Software entities should be open for extension but closed for modification. Rather than adding if/else or switch statements whenever a new payment method is added, define a PaymentStrategy interface so new payment types implement the interface without touching existing code.",
            "solution": "interface PaymentMethod { void pay(int amount); } class PayPal implements PaymentMethod ... class CreditCard implements PaymentMethod ... ShoppingCart takes PaymentMethod.",
            "difficulty": "Intermediate",
            "topic": "SOLID Principles"
          },
          {
            "question": "When should you choose the Strategy pattern over inheritance?",
            "answer": "Use Strategy when behavior needs to be swapped dynamically at runtime or when subclasses would duplicate behavior. Strategy favors object composition over class inheritance, preventing class explosion.",
            "solution": "Composition (has-a strategy) allows swapping strategies at runtime via setter methods.",
            "difficulty": "Intermediate",
            "topic": "Design Patterns"
          }
        ],
        "projects": [
          {
            "title": "Extensible Order Processing & Billing Engine",
            "description": "Build an extensible payment and notification engine applying Strategy, Factory, and Observer patterns with 100% unit test coverage.",
            "difficulty": "Intermediate",
            "techStack": [
              "Java / TypeScript",
              "Jest / JUnit",
              "Design Patterns"
            ],
            "features": [
              "Payment processor implementing Strategy pattern for multiple gateways",
              "Notification subsystem implementing Observer pattern for email/SMS",
              "Factory method for generating shipping carriers based on order weight",
              "Comprehensive unit test suite verifying zero OCP violations"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Clean Architecture, Domain-Driven Design (DDD), Microservices vs Monolith, event-driven architectures, CI/CD automation, and Site Reliability Engineering.",
        "prerequisites": [
          "Design patterns and enterprise backend architecture"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Clean Architecture & Onion Architecture",
            "description": "Entities, Use Cases, Interface Adapters, Frameworks, and the Dependency Rule.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "Domain-Driven Design (DDD)",
            "description": "Ubiquitous Language, Bounded Contexts, Aggregates, Value Objects, and Domain Events.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 3,
            "title": "Microservices Decomposition",
            "description": "Decomposing by business capability and subdomain, shared-nothing databases, and API gateways.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "Event-Driven Architectures",
            "description": "Event sourcing, CQRS (Command Query Responsibility Segregation), and Kafka messaging.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 5,
            "title": "CI/CD Pipeline Automation & Quality Gates",
            "description": "Trunk-based development, SonarQube static analysis, and automated release rollouts.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 6,
            "title": "Site Reliability Engineering (SRE) & Resilience",
            "description": "Circuit breakers (Hystrix/Resilience4j), bulkheads, SLOs/SLAs, and chaos testing.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Clean Code & Clean Architecture by Robert C. Martin",
            "url": "https://www.youtube.com/watch?v=2dKZ-dWaCiU",
            "channel": "NDC Conferences",
            "level": "Advanced",
            "description": "Keynote by Uncle Bob on structuring long-lived maintainable software systems.",
            "type": "Video"
          },
          {
            "title": "Microservices Architecture Design Patterns",
            "url": "https://www.youtube.com/watch?v=y8ONgKzXyBw",
            "channel": "Mark Richards",
            "level": "Advanced",
            "description": "Architectural tradeoffs of distributed services, databases, and event sagas.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Martin Fowler: Microservices Architecture Guide",
            "url": "https://martinfowler.com/articles/microservices.html",
            "description": "Foundational architectural essay defining microservices principles and boundaries.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Google SRE Book: How Google Runs Production Systems",
            "url": "https://sre.google/sre-book/table-of-contents/",
            "description": "Free definitive book on reliability, error budgets, and operational engineering.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the Dependency Rule in Clean Architecture?",
            "answer": "Source code dependencies must point only inward toward higher-level policies. Outer layers (UI, Database, Web Frameworks) depend on inner layers (Use Cases, Domain Entities). Inner layers know nothing about outer layers.",
            "solution": "Domain Entities know nothing about Use Cases. Use Cases know nothing about Express/SQL. Invert dependencies using interfaces.",
            "difficulty": "Advanced",
            "topic": "Clean Architecture"
          },
          {
            "question": "How does the Circuit Breaker pattern prevent cascading failures in distributed systems?",
            "answer": "When downstream service failures exceed a threshold, the circuit breaker trips OPEN, immediately failing subsequent requests without calling the failing service. After a timeout, it transitions to HALF-OPEN to test recovery before closing.",
            "solution": "States: CLOSED (normal), OPEN (fast-fail, protects downstream), HALF-OPEN (testing trial requests).",
            "difficulty": "Advanced",
            "topic": "System Resilience"
          }
        ],
        "projects": [
          {
            "title": "Distributed Event-Driven Order Processing Architecture",
            "description": "Architect and deploy a distributed order fulfillment system with Clean Architecture, Domain Events, and Docker Compose.",
            "difficulty": "Advanced",
            "techStack": [
              "TypeScript / Node.js",
              "Clean Architecture",
              "Docker Compose",
              "Jest"
            ],
            "features": [
              "Decoupled core domain entities with zero framework dependencies",
              "Event publisher and subscriber communication between order and inventory modules",
              "Resilience circuit breaker pattern implementation on external payment calls",
              "Docker Compose configuration for multi-service local environment"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-javascript",
    "title": "Modern JavaScript from Fundamentals to Mastery",
    "category": "JavaScript",
    "level": "All Levels",
    "duration": "8 weeks",
    "description": "Master the language of the web: ES6+ syntax, closures, event loop, asynchronous promises/async-await, DOM manipulation, and OOP.",
    "coverImage": "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Jonas Schmedtmann",
      "email": "jonas@eduflow.io"
    },
    "prerequisites": [
      "Basic HTML and CSS knowledge"
    ],
    "learningOutcomes": [
      "Understand execution context, call stack, scope chain, and closures",
      "Master modern ES6+ destructuring, spread, arrow functions, and modules",
      "Work with Asynchronous JS: Promises, async/await, and Fetch API",
      "Build dynamic browser applications using the DOM API and events"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: JavaScript Foundations",
        "duration": "2 weeks",
        "topics": [
          "Variables (let, const)",
          "Data types & type coercion",
          "Functions & arrow functions",
          "Arrays & Objects"
        ]
      },
      {
        "moduleTitle": "Module 2: DOM Manipulation & Events",
        "duration": "2 weeks",
        "topics": [
          "Document query selectors",
          "Event listeners & event bubbling",
          "DOM traversal",
          "Form handling"
        ]
      },
      {
        "moduleTitle": "Module 3: Advanced Under the Hood",
        "duration": "2 weeks",
        "topics": [
          "Execution context & call stack",
          "Hoisting & temporal dead zone",
          "Closures & lexical scope",
          "this keyword binding"
        ]
      },
      {
        "moduleTitle": "Module 4: Asynchronous JavaScript",
        "duration": "2 weeks",
        "topics": [
          "Event Loop & microtask queue",
          "Promises & Promise.all",
          "Async / Await pattern",
          "Fetch API & error handling"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Core syntax, variables, control flow, functions, and fundamental data structures.",
        "prerequisites": [
          "Basic computer knowledge"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Variables & Data Types",
            "description": "Primitives (string, number, boolean, null, undefined) vs references.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 2,
            "title": "Control Flow & Logic",
            "description": "if/else, switch cases, ternary operators, and logical operators.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Functions & Scope",
            "description": "Function declarations, expressions, arrow functions, and parameter defaults.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Arrays & Common Methods",
            "description": "push, pop, shift, map, filter, reduce, find, and forEach.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Interactive Counter / Todo App",
            "description": "Manipulate DOM elements using getElementById and addEventListener.",
            "duration": "5 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "JavaScript Tutorial for Beginners: Full Course in 8 Hours",
            "url": "https://www.youtube.com/watch?v=PkZNo7MFNFg",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Complete zero-to-hero introduction to JavaScript concepts.",
            "type": "Video"
          },
          {
            "title": "JavaScript Crash Course for Beginners",
            "url": "https://www.youtube.com/watch?v=hdI2bqOjy3c",
            "channel": "Traversy Media",
            "level": "Beginner",
            "description": "Rapid, practical introduction to variables, DOM, and functions.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "MDN JavaScript Guide",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            "description": "The official web standard documentation for JavaScript.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "JavaScript.info - The Modern JavaScript Tutorial",
            "url": "https://javascript.info/",
            "description": "In-depth, beautifully explained chapter-by-chapter tutorials.",
            "type": "Notes",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the difference between == and ===?",
            "answer": "== checks equality with type coercion (e.g. 5 == \"5\" is true), whereas === checks strict equality without type conversion (e.g. 5 === \"5\" is false).",
            "difficulty": "Beginner",
            "topic": "Operators"
          },
          {
            "question": "What are the primitive data types in JavaScript?",
            "answer": "String, Number, BigInt, Boolean, Undefined, Symbol, and Null.",
            "difficulty": "Beginner",
            "topic": "Data Types"
          }
        ],
        "projects": [
          {
            "title": "Interactive Task Manager",
            "description": "Create a browser-based Todo list with local storage persistence and filter status.",
            "difficulty": "Beginner",
            "techStack": [
              "HTML5",
              "CSS3",
              "JavaScript"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Object-Oriented JavaScript, Prototype inheritance, Closures, and Async/Await with Fetch API.",
        "prerequisites": [
          "Basic JavaScript syntax and DOM manipulation"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "ES6+ Modern Syntax",
            "description": "Destructuring, rest/spread operators, template literals, and optional chaining.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "Closures & Scoping",
            "description": "Lexical scoping, function factories, memoization, and data privacy.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Prototypes & Classes",
            "description": "Prototype chain, Object.create, ES6 class syntax, inheritance, and static methods.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Promises & Async/Await",
            "description": "Handling API responses, error rejection handling, and concurrent requests.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Weather Dashboard Project",
            "description": "Fetch weather data from public REST APIs and render dynamic cards.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Async/Await & Promises in JavaScript",
            "url": "https://www.youtube.com/watch?v=PoRJizFvM7s",
            "channel": "Traversy Media",
            "level": "Intermediate",
            "description": "Detailed explanation of asynchronous callbacks, promises, and async/await.",
            "type": "Video"
          },
          {
            "title": "JavaScript Pro Tips - Code This, NOT That",
            "url": "https://www.youtube.com/watch?v=Mus_vwhTCq0",
            "channel": "Fireship",
            "level": "Intermediate",
            "description": "Cleaner, faster, modern JavaScript design patterns.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "ES6 Features Overview & Cheatsheet",
            "url": "https://devhints.io/es6",
            "description": "Quick syntax reference for modern JavaScript additions.",
            "type": "CheatSheet",
            "level": "Intermediate"
          },
          {
            "title": "MDN Fetch API Documentation",
            "url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            "description": "Official guide to making HTTP requests using the Fetch API.",
            "type": "Documentation",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Explain what a closure is and provide a practical use-case.",
            "answer": "A closure is a function bundled together with references to its surrounding lexical state, allowing it to remember variables from its outer scope even after the outer function has returned. A practical use case is creating private variables in module patterns.",
            "difficulty": "Intermediate",
            "topic": "Closures"
          },
          {
            "question": "What is the purpose of Promise.all()?",
            "answer": "Promise.all() takes an iterable of promises and returns a single Promise that fulfills when all of the input promises fulfill, or rejects if any promise rejects.",
            "difficulty": "Intermediate",
            "topic": "Promises"
          }
        ],
        "projects": [
          {
            "title": "Real-Time Crypto & Stock Tracker",
            "description": "Fetch live pricing data from external WebSocket/REST API and display interactive chart filters.",
            "difficulty": "Intermediate",
            "techStack": [
              "JavaScript ES6+",
              "Fetch API",
              "HTML5/CSS3"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "V8 Engine internals, Memory profiling, Event Loop mechanics, Design Patterns, and Web Workers.",
        "prerequisites": [
          "Solid intermediate JavaScript skills and asynchronous programming"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Event Loop & Concurrency Model",
            "description": "Call Stack, Web APIs, Microtask Queue (Promises), and Macrotask Queue (setTimeout).",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Memory Management & Garbage Collection",
            "description": "Mark-and-sweep algorithm, memory leaks prevention, and Chrome DevTools Heap Snapshots.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "JavaScript Design Patterns",
            "description": "Singleton, Observer / PubSub, Factory, Module, and Proxy patterns.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "Multi-Threading with Web Workers",
            "description": "Offloading heavy computations off the main UI thread via Web Workers and postMessage.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Custom Reactive State Library Project",
            "description": "Build a mini Redux / Vue-like reactivity engine using JavaScript Proxies.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "What the heck is the event loop anyway?",
            "url": "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
            "channel": "JSConf (Philip Roberts)",
            "level": "Advanced",
            "description": "The legendary talk explaining JavaScript concurrency and the Event Loop.",
            "type": "Video"
          },
          {
            "title": "JavaScript V8 Engine Explained",
            "url": "https://www.youtube.com/watch?v=xckH5x33NXo",
            "channel": "Hussein Nasser",
            "level": "Advanced",
            "description": "How V8 parses, compiles, optimizes (JIT), and executes JavaScript code.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "V8 Engine Official Architecture Docs",
            "url": "https://v8.dev/docs",
            "description": "Internal mechanics of the V8 JavaScript and WebAssembly engine.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "JavaScript Design Patterns (Patterns.dev)",
            "url": "https://www.patterns.dev/vanilla",
            "description": "Free comprehensive guide to architectural patterns in modern JavaScript.",
            "type": "Notes",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Why does Promise.then execute before setTimeout(..., 0)?",
            "answer": "Promise callbacks are queued in the Microtask Queue, which is drained completely at the end of each task before the Event Loop yields to the Macrotask Queue where setTimeout callbacks reside.",
            "difficulty": "Advanced",
            "topic": "Event Loop"
          },
          {
            "question": "How do JavaScript Proxies enable two-way data reactivity?",
            "answer": "Proxies intercept operations on target objects (e.g. get, set) via traps, allowing automatic notification and DOM re-rendering whenever properties are updated.",
            "difficulty": "Advanced",
            "topic": "Proxies"
          }
        ],
        "projects": [
          {
            "title": "Custom Reactive State Store (Mini-Redux)",
            "description": "Build an event-driven global state management library with time-travel debugging and subscription listeners.",
            "difficulty": "Advanced",
            "techStack": [
              "JavaScript ES6+",
              "Proxy API",
              "Observer Pattern"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-react",
    "title": "Complete React 18+ Developer: Zero to Mastery",
    "category": "React.js",
    "level": "All Levels",
    "duration": "10 weeks",
    "description": "Learn modern React with Hooks, Custom Hooks, Context API, Redux Toolkit, React Router 7, Vite, and performance optimization.",
    "coverImage": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Dan Abramov & Team",
      "email": "dan@eduflow.io"
    },
    "prerequisites": [
      "HTML5, CSS3, and modern JavaScript (ES6+)"
    ],
    "learningOutcomes": [
      "Build reusable UI components with JSX and modular CSS",
      "Master essential Hooks (useState, useEffect, useRef, useMemo, useCallback)",
      "Manage global state with React Context and Redux Toolkit",
      "Integrate client-side routing and REST API data fetching"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Components & JSX",
        "duration": "2 weeks",
        "topics": [
          "Declarative UI paradigm",
          "JSX syntax rules",
          "Props and unidirectional data flow",
          "Conditional rendering & lists"
        ]
      },
      {
        "moduleTitle": "Module 2: State & Core Hooks",
        "duration": "3 weeks",
        "topics": [
          "useState mechanics",
          "useEffect lifecycle & dependency arrays",
          "useRef for DOM and persist values",
          "Form inputs & controlled components"
        ]
      },
      {
        "moduleTitle": "Module 3: Routing & Global State",
        "duration": "3 weeks",
        "topics": [
          "React Router DOM v6/v7",
          "Context API & custom providers",
          "Redux Toolkit (store, slice, dispatch)",
          "Data fetching with Axios/TanStack Query"
        ]
      },
      {
        "moduleTitle": "Module 4: Performance & Production",
        "duration": "2 weeks",
        "topics": [
          "React.memo, useMemo, useCallback",
          "Code splitting & lazy loading",
          "Custom hook architecture",
          "Deployment & CI/CD"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "JSX, Functional Components, Props, and useState hook.",
        "prerequisites": [
          "HTML, CSS, and basic JavaScript"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Vite & React Setup",
            "description": "Scaffolding modern React applications with Vite build tool.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "JSX & Component Tree",
            "description": "Writing JSX, nesting components, and passing props.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "useState Hook",
            "description": "Managing local component state and handling button click events.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Lists & Keys",
            "description": "Rendering dynamic arrays with .map() and utilizing unique keys.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 5,
            "title": "Expense Tracker Project",
            "description": "Build an interactive budget app with category filtering and balance calculations.",
            "duration": "5 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "React Course - Beginner's Tutorial for React JavaScript Library",
            "url": "https://www.youtube.com/watch?v=bMknfKXIFA8",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "12-hour comprehensive introductory tutorial on modern React.",
            "type": "Video"
          },
          {
            "title": "React JS Crash Course",
            "url": "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
            "channel": "Traversy Media",
            "level": "Beginner",
            "description": "Quick, high-impact crash course on React components, state, and props.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Official React Documentation (react.dev)",
            "url": "https://react.dev/learn",
            "description": "The new official interactive documentation and tutorials for React.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "React Cheat Sheet for Beginners",
            "url": "https://devhints.io/react",
            "description": "Handy syntax summary for components, props, and hooks.",
            "type": "CheatSheet",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Why must React state never be mutated directly?",
            "answer": "React relies on reference equality checks (immutability) to know when state changes and trigger a UI re-render. Mutating state directly bypasses this mechanism.",
            "difficulty": "Beginner",
            "topic": "State"
          },
          {
            "question": "What is the significance of the \"key\" prop in React lists?",
            "answer": "The key prop helps React identify which items have changed, been added, or been removed, optimizing the virtual DOM reconciliation process.",
            "difficulty": "Beginner",
            "topic": "JSX"
          }
        ],
        "projects": [
          {
            "title": "Personal Habit & Task Tracker",
            "description": "A sleek productivity dashboard with streak tracking and local state persistence.",
            "difficulty": "Beginner",
            "techStack": [
              "React 18",
              "Vite",
              "CSS3"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Advanced Hooks, Custom Hooks, React Router, Context API, and API integration.",
        "prerequisites": [
          "Basic React component and useState understanding"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "useEffect Lifecycle Mastery",
            "description": "Side effects, cleaning up subscriptions, and handling race conditions.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "useRef and DOM Interaction",
            "description": "Focus management, tracking previous state, and storing mutable values.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Context API & Compound Components",
            "description": "Avoiding prop drilling by creating lightweight global state contexts.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Custom React Hooks",
            "description": "Extracting reusable business logic (e.g. useFetch, useLocalStorage, useDebounce).",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "E-Commerce Storefront Project",
            "description": "Full multi-page app with cart state, product search, and checkout flow.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "React Hooks Explained Simply",
            "url": "https://www.youtube.com/watch?v=TNhaISOUy6Q",
            "channel": "Web Dev Simplified",
            "level": "Intermediate",
            "description": "Visual, clear breakdown of all React hooks with practical code examples.",
            "type": "Video"
          },
          {
            "title": "React Router v6 / v7 In-Depth",
            "url": "https://www.youtube.com/watch?v=SMq1IQRweDc",
            "channel": "The Net Ninja",
            "level": "Intermediate",
            "description": "Routing, nested routes, loaders, actions, and protected route patterns.",
            "type": "Playlist"
          }
        ],
        "notesResources": [
          {
            "title": "React Router Official Documentation",
            "url": "https://reactrouter.com/",
            "description": "Official reference for route layout, loaders, and navigation.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "useHooks - Easy to understand React hook recipes",
            "url": "https://usehooks.com/",
            "description": "Curated collection of modern custom React hook patterns.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "When does the cleanup function in useEffect execute?",
            "answer": "It executes right before the component unmounts, and also before running the effect on subsequent re-renders if dependencies changed.",
            "difficulty": "Intermediate",
            "topic": "Hooks"
          },
          {
            "question": "What is the main difference between useMemo and useCallback?",
            "answer": "useMemo memoizes the resulting value of a calculation function, whereas useCallback memoizes the function definition itself to prevent unnecessary child re-renders.",
            "difficulty": "Intermediate",
            "topic": "Optimization"
          }
        ],
        "projects": [
          {
            "title": "Collaborative Kanban Board",
            "description": "Trello-style drag-and-drop task board with column state, modal previews, and search filters.",
            "difficulty": "Intermediate",
            "techStack": [
              "React 18",
              "React Router",
              "Context API",
              "Lucide Icons"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Fiber architecture, Concurrent Mode, Virtual DOM reconciliation, Redux Toolkit, and performance tuning.",
        "prerequisites": [
          "Proficiency with React Hooks and component composition"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "React Fiber Architecture",
            "description": "Reconciliation algorithm, priority-based cooperative scheduling, and work units.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Concurrent Features in React 18",
            "description": "useTransition, useDeferredValue, and Suspense for asynchronous data streaming.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Redux Toolkit & RTK Query",
            "description": "Normalized entity state, automated caching, invalidation, and async thunks.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "React Profiler & Performance Optimization",
            "description": "Eliminating wasted renders, virtualization (react-window), and dynamic bundle splitting.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Production Enterprise SaaS Application",
            "description": "Real-time collaborative workspace with role-based auth, caching, and analytics.",
            "duration": "10 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "React Under The Hood: Fiber & Reconciliation",
            "url": "https://www.youtube.com/watch?v=7YhdqIR2Yzo",
            "channel": "Avelx",
            "level": "Advanced",
            "description": "Deep technical explanation of how React builds and updates the Fiber tree.",
            "type": "Video"
          },
          {
            "title": "Redux Toolkit Full Tutorial - RTK Query",
            "url": "https://www.youtube.com/watch?v=NqzdVN2tyvQ",
            "channel": "Dave Gray",
            "level": "Advanced",
            "description": "Enterprise state management with Redux Toolkit and automated RTK Query caching.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Redux Toolkit Official Documentation",
            "url": "https://redux-toolkit.js.org/",
            "description": "The standard and opinionated approach to writing modern Redux logic.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "React 18 Architecture: Deep Dive",
            "url": "https://github.com/reactwg/react-18/discussions",
            "description": "Official working group discussions on transitions and server components.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "How does React Fiber differ from the older stack reconciler?",
            "answer": "The stack reconciler was synchronous and recursive, blocking the main thread during large updates. Fiber breaks work into incremental units, allowing pausing, aborting, and prioritization of user interactions.",
            "difficulty": "Advanced",
            "topic": "Architecture"
          },
          {
            "question": "What is the purpose of the useTransition hook?",
            "answer": "It marks state updates as non-urgent transitions, keeping the user interface responsive by letting urgent updates (like typing in an input) interrupt them.",
            "difficulty": "Advanced",
            "topic": "Concurrent React"
          }
        ],
        "projects": [
          {
            "title": "Real-Time Streaming Analytics Studio",
            "description": "High-frequency charting dashboard with virtualized infinite tables, dark mode, and optimistic caching.",
            "difficulty": "Advanced",
            "techStack": [
              "React 18",
              "Redux Toolkit",
              "RTK Query",
              "Tailwind/CSS"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-node-express",
    "title": "Node.js & Express.js Backend Architecture",
    "category": "Node.js and Express.js",
    "level": "All Levels",
    "duration": "8 weeks",
    "description": "Build enterprise RESTful APIs, authentication with JWT, middleware pipelines, file uploads, error handling, and MongoDB integration.",
    "coverImage": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Dr. Brad Traversy",
      "email": "brad@eduflow.io"
    },
    "prerequisites": [
      "Proficiency in modern JavaScript (ES6+, Promises, async/await)"
    ],
    "learningOutcomes": [
      "Understand Node.js asynchronous architecture and libuv event loop",
      "Architect robust REST APIs using Express routes, controllers, and middleware",
      "Implement JWT token authentication with bcrypt password hashing",
      "Integrate MongoDB using Mongoose with validation and relationships"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Node.js Internals & Core Modules",
        "duration": "2 weeks",
        "topics": [
          "Node.js runtime & V8/libuv",
          "CommonJS vs ES Modules",
          "File system (fs) and Path modules",
          "Streams, Buffers, and Events"
        ]
      },
      {
        "moduleTitle": "Module 2: Express Server & REST Routing",
        "duration": "2 weeks",
        "topics": [
          "Express app setup",
          "Middleware pipeline design",
          "Route controllers separation",
          "HTTP request/response lifecycle"
        ]
      },
      {
        "moduleTitle": "Module 3: Authentication & Data Security",
        "duration": "2 weeks",
        "topics": [
          "User registration & bcryptjs hashing",
          "JSON Web Tokens (JWT) creation & verification",
          "Protected route middleware",
          "CORS, helmet, and rate limiting"
        ]
      },
      {
        "moduleTitle": "Module 4: File Uploads & Database Integration",
        "duration": "2 weeks",
        "topics": [
          "Multer multipart/form-data upload",
          "Mongoose schema design & relationships",
          "Global error handling middleware",
          "API testing with Postman"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Node.js runtime, NPM ecosystem, simple HTTP servers, and basic Express routes.",
        "prerequisites": [
          "Basic JavaScript knowledge"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Node.js Fundamentals",
            "description": "Installing Node, running scripts, and managing package.json dependencies with npm.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "Core Node Modules",
            "description": "Working with fs (file system), path, and os built-in modules.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Express App Basics",
            "description": "Creating an Express instance, listening on ports, and defining GET/POST routes.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Route Parameters & Query Strings",
            "description": "Extracting req.params, req.query, and sending JSON responses.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 5,
            "title": "Mini Notes REST API",
            "description": "Build an in-memory CRUD REST API for managing notes and tasks.",
            "duration": "5 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Node.js and Express.js - Full Course for Beginners",
            "url": "https://www.youtube.com/watch?v=Oe421EPjeBE",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "8-hour complete overview of Node and Express development.",
            "type": "Video"
          },
          {
            "title": "Node.js Crash Course",
            "url": "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
            "channel": "Traversy Media",
            "level": "Beginner",
            "description": "Quick-start crash course covering Node.js fundamental APIs.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Official Node.js Documentation",
            "url": "https://nodejs.org/en/docs/",
            "description": "Official API documentation for Node.js modules and runtimes.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "Express.js Getting Started Guide",
            "url": "https://expressjs.com/en/starter/installing.html",
            "description": "Official guide to starting Express web applications.",
            "type": "Documentation",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the role of the package.json file?",
            "answer": "It records project metadata, scripts, and tracks installed dependencies and development packages required by the application.",
            "difficulty": "Beginner",
            "topic": "NPM"
          },
          {
            "question": "What is Express middleware?",
            "answer": "A function that has access to the request object (req), response object (res), and the next middleware function in the application’s request-response cycle.",
            "difficulty": "Beginner",
            "topic": "Express"
          }
        ],
        "projects": [
          {
            "title": "Book Catalog REST API",
            "description": "Build a structured REST API to add, search, update, and remove books with JSON responses.",
            "difficulty": "Beginner",
            "techStack": [
              "Node.js",
              "Express",
              "JavaScript"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Authentication with JWT, Mongoose schemas, Multer uploads, and centralized error handling.",
        "prerequisites": [
          "Basic Express server knowledge and async/await"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "MongoDB & Mongoose Modeling",
            "description": "Connecting to MongoDB, creating schemas, data validation, and timestamps.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "User Auth with Password Hashing",
            "description": "Salting and hashing passwords with bcrypt before saving to the database.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "JWT Token Security Pipeline",
            "description": "Generating bearer tokens, verifying signatures, and protecting private routes.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Multipart Uploads with Multer",
            "description": "Handling file uploads, MIME type validation, and storing files on disk.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Full Auth & Course Backend API",
            "description": "Build a secure backend service with role-based access for students and faculty.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "JWT Authentication Tutorial in Node.js",
            "url": "https://www.youtube.com/watch?v=mbsmsi7l3r4",
            "channel": "Web Dev Simplified",
            "level": "Intermediate",
            "description": "How JSON Web Tokens authenticate users securely without sessions.",
            "type": "Video"
          },
          {
            "title": "Node.js & MongoDB API Tutorial with Express",
            "url": "https://www.youtube.com/watch?v=-0exw-9YJBo",
            "channel": "Traversy Media",
            "level": "Intermediate",
            "description": "Full guide to building a RESTful backend with Mongoose ODM.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Mongoose Official Documentation",
            "url": "https://mongoosejs.com/docs/guide.html",
            "description": "Complete reference for MongoDB object modeling in Node.js.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "JWT.io Introduction to JSON Web Tokens",
            "url": "https://jwt.io/introduction",
            "description": "Detailed architecture guide for header, payload, and signature tokens.",
            "type": "Documentation",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Why should passwords never be stored in plain text?",
            "answer": "If the database is compromised, plaintext passwords expose users immediately. Salting and hashing with bcrypt adds cryptographic protection that resists rainbow table attacks.",
            "difficulty": "Intermediate",
            "topic": "Security"
          },
          {
            "question": "How do you structure an Express error handling middleware?",
            "answer": "Define a middleware function with 4 arguments: (err, req, res, next). Express identifies this signature as an error handler.",
            "difficulty": "Intermediate",
            "topic": "Middleware"
          }
        ],
        "projects": [
          {
            "title": "Secure Multi-Role User Management API",
            "description": "API featuring signup, login, password reset, JWT verification, and student/faculty permissions.",
            "difficulty": "Intermediate",
            "techStack": [
              "Node.js",
              "Express",
              "JWT",
              "Bcrypt",
              "MongoDB"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Microservices architecture, Cluster module, Redis caching, Streams, and WebSockets with Socket.IO.",
        "prerequisites": [
          "Proficient in Express REST API design and database modeling"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Node.js Event Loop & Thread Pool Internals",
            "description": "Libuv thread pool sizing (UV_THREADPOOL_SIZE), timers, poll, and check phases.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "High Performance Streams & Backpressure",
            "description": "Readable, Writable, Transform streams, pipe(), and handling memory exhaustion.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Clustering & Process Management",
            "description": "Utilizing all CPU cores using the Cluster module and PM2 production manager.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "High-Speed Caching with Redis",
            "description": "Cache-aside pattern, TTL expiration, and session storage offloading.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Scalable Real-Time WebSocket Server",
            "description": "Bi-directional live event streaming with Socket.IO and Redis adapter.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Node.js Streams & Pipelines Complete Guide",
            "url": "https://www.youtube.com/watch?v=E3tTzxYIBE8",
            "channel": "freeCodeCamp.org",
            "level": "Advanced",
            "description": "In-depth guide to memory-efficient streaming and processing large files.",
            "type": "Video"
          },
          {
            "title": "Redis Crash Course - In-Memory Cache for Node.js",
            "url": "https://www.youtube.com/watch?v=jgpVdJB2sKQ",
            "channel": "Traversy Media",
            "level": "Advanced",
            "description": "Boosting REST API performance using Redis memory caching.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Node.js Stream API Reference",
            "url": "https://nodejs.org/api/stream.html",
            "description": "Official guide to stream architectures, backpressure, and pipeline utilities.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Socket.IO Architecture Documentation",
            "url": "https://socket.io/docs/v4/",
            "description": "Real-time bidirectional event-based communication framework.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is stream backpressure in Node.js?",
            "answer": "Backpressure occurs when data is read faster than the consumer can write it. Node streams handle this by pausing the readable stream when write buffers are full until a drain event fires.",
            "difficulty": "Advanced",
            "topic": "Streams"
          },
          {
            "question": "How does Node.js leverage the libuv thread pool?",
            "answer": "While JavaScript runs on a single thread, libuv delegates blocking operations like file I/O, DNS lookups, and crypto hashing to background worker threads in its thread pool.",
            "difficulty": "Advanced",
            "topic": "Libuv"
          }
        ],
        "projects": [
          {
            "title": "High-Throughput File Processing & Streaming Gateway",
            "description": "Transform large multi-gigabyte files with chunked streams, rate limiting, and Redis token bucket algorithms.",
            "difficulty": "Advanced",
            "techStack": [
              "Node.js",
              "Express",
              "Redis",
              "Streams",
              "Socket.IO"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-python",
    "title": "Python Programming: From Beginner to Advanced",
    "category": "Python Programming",
    "level": "All Levels",
    "duration": "10 weeks",
    "description": "Learn modern Python: syntax, OOP, list comprehensions, decorators, generators, file handling, and data structures for automation and software development.",
    "coverImage": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Corey Schafer",
      "email": "corey@eduflow.io"
    },
    "prerequisites": [
      "No prior programming experience required"
    ],
    "learningOutcomes": [
      "Write clean, idiomatic Python code adhering to PEP 8 standards",
      "Master Object-Oriented Programming (classes, inheritance, polymorphism)",
      "Use advanced Python features: decorators, generators, and context managers",
      "Handle exceptions, read/write files, and manipulate data with built-in libraries"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Python Basics & Data Structures",
        "duration": "2 weeks",
        "topics": [
          "Python interpreter & virtual environments",
          "Strings, integers, floats, booleans",
          "Lists, tuples, sets, dictionaries",
          "Loops, conditionals, and comprehensions"
        ]
      },
      {
        "moduleTitle": "Module 2: Functions & Functional Tools",
        "duration": "2 weeks",
        "topics": [
          "Function arguments (*args, **kwargs)",
          "Lambda functions, map, filter",
          "Scope & global/nonlocal keywords",
          "Recursion fundamentals"
        ]
      },
      {
        "moduleTitle": "Module 3: Object-Oriented Python",
        "duration": "3 weeks",
        "topics": [
          "Classes, __init__, and self",
          "Inheritance, super(), and multiple inheritance",
          "Dunder (magic) methods",
          "Property decorators (@property)"
        ]
      },
      {
        "moduleTitle": "Module 4: Advanced Features & Metaprogramming",
        "duration": "3 weeks",
        "topics": [
          "Decorators with arguments",
          "Generators & yield keyword",
          "Context managers (__enter__, __exit__)",
          "Multithreading and multiprocessing"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Variables, loops, conditions, functions, and standard data types.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Python Syntax & REPL",
            "description": "Running Python scripts, variables, math operations, and string formatting (f-strings).",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "Lists, Tuples & Dicts",
            "description": "Index slicing, dictionary keys, set operations, and tuple immutability.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Control Flow",
            "description": "if/elif/else statements, for loops, while loops, and enumerate().",
            "duration": "3 hours"
          },
          {
            "stepNumber": 4,
            "title": "Functions & Modules",
            "description": "Writing def functions, return values, default parameters, and importing math/random.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Quiz & Password Generator Project",
            "description": "Build an automated secure password generator with customizable requirements.",
            "duration": "4 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Python for Beginners - Full Course [Programming Tutorial]",
            "url": "https://www.youtube.com/watch?v=eWRfhZUzrAc",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Complete 6-hour introductory course covering core Python syntax.",
            "type": "Video"
          },
          {
            "title": "Python Tutorial for Beginners [Full Course]",
            "url": "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
            "channel": "Programming with Mosh",
            "level": "Beginner",
            "description": "Beginner-friendly breakdown of Python concepts and development workflows.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Official Python Tutorial",
            "url": "https://docs.python.org/3/tutorial/",
            "description": "The official tutorial by the Python Software Foundation.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "Real Python - Python Basics",
            "url": "https://realpython.com/",
            "description": "High quality written tutorials, guides, and practical quizzes.",
            "type": "Notes",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the difference between a list and a tuple in Python?",
            "answer": "Lists are mutable (can be changed after creation using append/pop), while tuples are immutable and defined with parentheses.",
            "difficulty": "Beginner",
            "topic": "Data Types"
          },
          {
            "question": "What is a list comprehension?",
            "answer": "A concise way to create lists using [expression for item in iterable if condition].",
            "difficulty": "Beginner",
            "topic": "Syntax"
          }
        ],
        "projects": [
          {
            "title": "Student Grade & Record Manager",
            "description": "CLI application to record, calculate grade averages, and output student reports.",
            "difficulty": "Beginner",
            "techStack": [
              "Python 3"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Object-Oriented Programming, Exception Handling, File I/O, and Virtual Environments.",
        "prerequisites": [
          "Python basics (loops, functions, lists, dictionaries)"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Object-Oriented Programming",
            "description": "Classes, instance variables, methods, classmethods, and staticmethods.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Inheritance & Polymorphism",
            "description": "Subclasses, method overriding, super() call, and abstract base classes.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "File Handling & JSON",
            "description": "Using with open() context managers, CSV manipulation, and JSON parsing.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 4,
            "title": "Custom Exception Handling",
            "description": "try/except/finally blocks, raising exceptions, and custom exception classes.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Library Management System",
            "description": "OOP-based system for book loans, member registration, and overdue fees.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Python OOP Tutorials - Working with Classes",
            "url": "https://www.youtube.com/watch?v=ZDa-Z5JzLYM",
            "channel": "Corey Schafer",
            "level": "Intermediate",
            "description": "The premier video series on classes, inheritance, dunder methods, and decorators.",
            "type": "Playlist"
          },
          {
            "title": "Intermediate Python Programming Course",
            "url": "https://www.youtube.com/watch?v=HGOBQPFzWKo",
            "channel": "freeCodeCamp.org",
            "level": "Intermediate",
            "description": "6-hour deep dive into logging, collections, decorators, and generators.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Python Decorators Guide - Real Python",
            "url": "https://realpython.com/primer-on-python-decorators/",
            "description": "Comprehensive guide to functional decorators and closure wrapping.",
            "type": "Guide",
            "level": "Intermediate"
          },
          {
            "title": "PEP 8 – Style Guide for Python Code",
            "url": "https://peps.python.org/pep-0008/",
            "description": "The official style guide and naming conventions for Python.",
            "type": "Documentation",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the purpose of the __init__ method in a class?",
            "answer": "__init__ is the constructor method in Python called automatically when a new instance of the class is created to initialize its attributes.",
            "difficulty": "Intermediate",
            "topic": "OOP"
          },
          {
            "question": "What is a Python decorator?",
            "answer": "A decorator is a function that takes another function as an argument, extends its behavior without modifying it, and returns the modified function.",
            "difficulty": "Intermediate",
            "topic": "Decorators"
          }
        ],
        "projects": [
          {
            "title": "Bank Account Management Engine",
            "description": "Robust OOP system with transaction logs, custom overdraft exceptions, and JSON file persistence.",
            "difficulty": "Intermediate",
            "techStack": [
              "Python 3",
              "OOP",
              "JSON"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Generators, Context Managers, Metaclasses, Concurrency (asyncio, multiprocessing), and Cython.",
        "prerequisites": [
          "Solid intermediate OOP and Python fundamentals"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Generators & Memory Efficiency",
            "description": "yield expressions, generator pipelines, and infinite data streaming.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "Custom Context Managers",
            "description": "Creating context managers with __enter__/__exit__ and contextlib.contextmanager.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Asynchronous Python with Asyncio",
            "description": "async/await syntax, event loop, tasks, coroutines, and aiohttp.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "Multiprocessing vs Multithreading",
            "description": "GIL (Global Interpreter Lock) constraints, concurrent.futures, and CPU-bound parallel processing.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "High-Performance Web Scraper & Data Pipeline",
            "description": "Asynchronously scrape thousands of web pages and stream results into structured storage.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Asyncio in Python - Full Tutorial",
            "url": "https://www.youtube.com/watch?v=t5Bo1Je9EmE",
            "channel": "ArjanCodes",
            "level": "Advanced",
            "description": "Practical guide to asynchronous coroutines and non-blocking I/O in Python.",
            "type": "Video"
          },
          {
            "title": "Python GIL (Global Interpreter Lock) Explained",
            "url": "https://www.youtube.com/watch?v=mGepfFp-yB8",
            "channel": "mCoding",
            "level": "Advanced",
            "description": "Technical analysis of GIL constraints and how to bypass them with multiprocessing.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Python asyncio Official Documentation",
            "url": "https://docs.python.org/3/library/asyncio.html",
            "description": "Complete reference for writing concurrent code using async/await syntax.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Python Fluent Python Companion Reference",
            "url": "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/",
            "description": "Deep dive into Python data models, descriptors, and metaprogramming.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the Global Interpreter Lock (GIL) in CPython?",
            "answer": "The GIL is a mutex that prevents multiple native threads from executing Python bytecodes at once, ensuring thread safety in memory management but limiting CPU-bound speedup across multiple cores.",
            "difficulty": "Advanced",
            "topic": "Concurrency"
          },
          {
            "question": "How does a generator function save memory compared to returning a list?",
            "answer": "A generator evaluates items lazily on demand using the yield keyword rather than calculating and holding all items simultaneously in RAM.",
            "difficulty": "Advanced",
            "topic": "Generators"
          }
        ],
        "projects": [
          {
            "title": "Asynchronous Network Traffic & Performance Monitor",
            "description": "Concurrent monitoring tool that pings endpoints asynchronously, aggregates latency metrics, and writes stream reports.",
            "difficulty": "Advanced",
            "techStack": [
              "Python 3",
              "Asyncio",
              "Aiohttp",
              "Multiprocessing"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-java",
    "title": "Core Java & Advanced Object-Oriented Architecture",
    "category": "Java Programming",
    "level": "All Levels",
    "duration": "10 weeks",
    "description": "Master Java 17/21 from fundamentals through Collections Framework, Multithreading, Generics, Stream API, and Spring Boot foundations.",
    "coverImage": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Prof. Tim Buchalka",
      "email": "tim@eduflow.io"
    },
    "prerequisites": [
      "Basic problem-solving skills"
    ],
    "learningOutcomes": [
      "Master Java syntax, JVM architecture, garbage collection, and data types",
      "Architect robust systems using encapsulation, inheritance, interfaces, and polymorphism",
      "Leverage Java Collections (List, Set, Map) and Generics effectively",
      "Write functional code with Java 8+ Lambdas, Streams, and Optional"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Java Syntax & JVM Mechanics",
        "duration": "2 weeks",
        "topics": [
          "JDK, JRE, and JVM breakdown",
          "Primitive types & wrappers",
          "Control flow statements",
          "Methods and method overloading"
        ]
      },
      {
        "moduleTitle": "Module 2: Object-Oriented Programming (OOP)",
        "duration": "3 weeks",
        "topics": [
          "Constructors & this keyword",
          "Inheritance & super keyword",
          "Abstract classes vs Interfaces",
          "Package management & access modifiers"
        ]
      },
      {
        "moduleTitle": "Module 3: Collections Framework & Generics",
        "duration": "3 weeks",
        "topics": [
          "ArrayList vs LinkedList",
          "HashSet, TreeSet, HashMap, TreeMap",
          "Generic classes & wildcard bounds",
          "Comparable vs Comparator interfaces"
        ]
      },
      {
        "moduleTitle": "Module 4: Modern Java, Streams & Concurrency",
        "duration": "2 weeks",
        "topics": [
          "Lambda expressions & functional interfaces",
          "Stream API operations (map, filter, collect)",
          "Threads, Runnable, and synchronization",
          "Modern record classes & pattern matching"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Java fundamentals, variables, loops, arrays, methods, and simple class design.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Java Development Kit (JDK)",
            "description": "Setting up Java JDK 21, IntelliJ IDEA / VS Code, and writing Hello World.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "Data Types & Operators",
            "description": "int, double, char, boolean, String, arithmetic and relational operators.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Control Flow Statements",
            "description": "if/else if, switch expressions, while loops, and for-each loops.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 4,
            "title": "Arrays & Methods",
            "description": "Array declaration, iteration, parameter passing, and return types.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Student Management CLI App",
            "description": "Build an interactive console application to track student scores and attendance.",
            "duration": "5 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Java Tutorial for Beginners [2026 Edition]",
            "url": "https://www.youtube.com/watch?v=eIrMbAQSU34",
            "channel": "Programming with Mosh",
            "level": "Beginner",
            "description": "Clear 2.5-hour complete overview of Java fundamentals.",
            "type": "Video"
          },
          {
            "title": "Java Full Course for Beginners in 9 Hours",
            "url": "https://www.youtube.com/watch?v=xk4_1vDrzzo",
            "channel": "Bro Code",
            "level": "Beginner",
            "description": "Comprehensive foundational walkthrough covering every core Java concept.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Oracle Java Documentation",
            "url": "https://docs.oracle.com/en/java/",
            "description": "The official language specification and API docs from Oracle.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "W3Schools Java Tutorial",
            "url": "https://www.w3schools.com/java/",
            "description": "Interactive easy-to-follow introductory Java examples.",
            "type": "Notes",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the role of the Java Virtual Machine (JVM)?",
            "answer": "The JVM executes compiled Java bytecode (.class files) into native machine code, providing platform independence (\"Write Once, Run Anywhere\").",
            "difficulty": "Beginner",
            "topic": "JVM"
          },
          {
            "question": "What is the difference between String and StringBuilder?",
            "answer": "String objects are immutable in Java (a new object is created on change), whereas StringBuilder is mutable and allows modifying text without creating new objects in memory.",
            "difficulty": "Beginner",
            "topic": "Strings"
          }
        ],
        "projects": [
          {
            "title": "ATM Banking Terminal Simulator",
            "description": "Console application supporting account creation, PIN validation, deposits, and withdrawals.",
            "difficulty": "Beginner",
            "techStack": [
              "Java 17/21"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Inheritance, Abstract Classes, Interfaces, Exception Handling, and the Collections Framework.",
        "prerequisites": [
          "Basic Java syntax and methods"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "OOP Deep Dive",
            "description": "Encapsulation, inheritance, super(), and runtime polymorphism (overriding).",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Abstract Classes vs Interfaces",
            "description": "Default and static interface methods, contract-driven architecture.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Collections Framework",
            "description": "List (ArrayList), Set (HashSet), Map (HashMap), and sorting with Comparator.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "Exception Handling & File I/O",
            "description": "Checked vs unchecked exceptions, try-with-resources, and Scanner/BufferedWriter.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Inventory Management System",
            "description": "Create a multi-class inventory system storing stock levels in HashMaps with disk persistence.",
            "duration": "7 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Java Collections Framework Complete Tutorial",
            "url": "https://www.youtube.com/watch?v=rzA7UJ-hQn4",
            "channel": "Telusko",
            "level": "Intermediate",
            "description": "Detailed breakdown of List, Set, Map, and iterator algorithms.",
            "type": "Video"
          },
          {
            "title": "Java OOP Full Course - Object-Oriented Programming",
            "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
            "channel": "freeCodeCamp.org",
            "level": "Intermediate",
            "description": "In-depth exploration of core object-oriented principles in Java.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Java Collections Cheat Sheet",
            "url": "https://devhints.io/java",
            "description": "Quick syntax cheatsheet for maps, lists, sets, and iterators.",
            "type": "CheatSheet",
            "level": "Intermediate"
          },
          {
            "title": "Baeldung - Guide to Java Collections",
            "url": "https://www.baeldung.com/java-collections",
            "description": "Industry-standard guides on time complexity and internal mechanics of Java collections.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "How does HashMap store key-value pairs internally?",
            "answer": "HashMap uses an array of buckets/nodes. It hashes the key to determine the bucket index. If multiple keys hash to the same bucket (collision), they are linked as a LinkedList (or red-black tree if bucket size exceeds 8).",
            "difficulty": "Intermediate",
            "topic": "Collections"
          },
          {
            "question": "What is the difference between checked and unchecked exceptions?",
            "answer": "Checked exceptions (subclasses of Exception excluding RuntimeException) are checked at compile time and must be handled using try-catch or throws. Unchecked exceptions (subclasses of RuntimeException) occur at runtime.",
            "difficulty": "Intermediate",
            "topic": "Exceptions"
          }
        ],
        "projects": [
          {
            "title": "Hospital Patient Scheduling System",
            "description": "Manage appointments, doctors, and patient medical queues using PriorityQueues and HashMaps.",
            "difficulty": "Intermediate",
            "techStack": [
              "Java 21",
              "Collections Framework",
              "OOP"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Java Streams API, Multithreading, Concurrency Utilities, Garbage Collection Tuning, and Memory Model.",
        "prerequisites": [
          "Proficiency with Java OOP and Collections"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Java Stream API & Lambdas",
            "description": "Functional programming with map, filter, reduce, flatMap, and collectors.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Multithreading & Synchronization",
            "description": "Thread lifecycle, synchronized blocks, wait/notify, and volatile keyword.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 3,
            "title": "java.util.concurrent Package",
            "description": "ExecutorService, ThreadPools, CountDownLatch, and ConcurrentHashMap.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "JVM Internals & Garbage Collection",
            "description": "Heap memory spaces (Eden, Survivor, Tenured), G1/ZGC garbage collectors.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Multi-Threaded Web Crawler Project",
            "description": "High-speed concurrent web crawler utilizing thread pools and thread-safe queues.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Java Streams Tutorial - Master Functional Streams",
            "url": "https://www.youtube.com/watch?v=t1-YZ6bF-g0",
            "channel": "Amigoscode",
            "level": "Advanced",
            "description": "Complete hands-on masterclass on Java 8+ Streams and functional interfaces.",
            "type": "Video"
          },
          {
            "title": "Java Multithreading & Concurrency Masterclass",
            "url": "https://www.youtube.com/watch?v=L953ZwqS0Wc",
            "channel": "Defog Tech",
            "level": "Advanced",
            "description": "Deep dive into thread safety, volatile variables, and atomic operations.",
            "type": "Playlist"
          }
        ],
        "notesResources": [
          {
            "title": "Java Concurrency in Practice Reference Guide",
            "url": "https://jcip.net/",
            "description": "The timeless standard on writing thread-safe concurrent Java software.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Oracle Guide to JVM Garbage Collection",
            "url": "https://docs.oracle.com/en/java/javase/21/gctuning/",
            "description": "Official guide to tuning garbage collection algorithms in high-throughput apps.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What does the volatile keyword guarantee in Java?",
            "answer": "It guarantees visibility: reads and writes to a volatile variable go directly to main memory rather than being cached in a CPU core register, ensuring all threads see the most up-to-date value.",
            "difficulty": "Advanced",
            "topic": "Concurrency"
          },
          {
            "question": "Explain how the ForkJoinPool works in parallel streams.",
            "answer": "ForkJoinPool uses a work-stealing algorithm where idle worker threads steal tasks from the deques of busy threads, optimizing multicore throughput when executing parallel streams.",
            "difficulty": "Advanced",
            "topic": "Streams"
          }
        ],
        "projects": [
          {
            "title": "High-Throughput Order Matching Engine",
            "description": "Real-time financial order book matching buy and sell orders with thread-safe lock-free data structures.",
            "difficulty": "Advanced",
            "techStack": [
              "Java 21",
              "Concurrency Utilities",
              "Streams API"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-c-lang",
    "title": "C Programming & Systems Fundamentals",
    "category": "C Programming",
    "level": "All Levels",
    "duration": "8 weeks",
    "description": "Learn foundational C programming: memory addresses, pointer arithmetic, dynamic memory allocation (malloc/free), structs, and low-level systems programming.",
    "coverImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Prof. David J. Malan",
      "email": "malan@eduflow.io"
    },
    "prerequisites": [
      "Basic logical thinking"
    ],
    "learningOutcomes": [
      "Understand how programs execute directly against hardware and memory",
      "Master pointers, dereferencing, pointer arithmetic, and double pointers",
      "Allocate and free heap memory safely without memory leaks or segmentation faults",
      "Build custom data structures (linked lists, stacks) in pure C"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: C Syntax & Fundamentals",
        "duration": "2 weeks",
        "topics": [
          "Compilation pipeline (preprocess, compile, assemble, link)",
          "Data types, sizes, format specifiers",
          "Loops and conditions",
          "Functions and scope"
        ]
      },
      {
        "moduleTitle": "Module 2: Pointers & Memory Mechanics",
        "duration": "2 weeks",
        "topics": [
          "Addresses (&) and dereferencing (*)",
          "Pointers and arrays relationship",
          "Pointer arithmetic",
          "Passing by reference"
        ]
      },
      {
        "moduleTitle": "Module 3: Dynamic Memory & Structures",
        "duration": "2 weeks",
        "topics": [
          "Heap vs Stack memory",
          "malloc, calloc, realloc, and free",
          "structs and typedef",
          "Arrow operator (->) and unions"
        ]
      },
      {
        "moduleTitle": "Module 4: Systems & Data Structures",
        "duration": "2 weeks",
        "topics": [
          "File I/O (fopen, fread, fwrite)",
          "Linked lists implementation",
          "Function pointers",
          "Debugging with GDB & Valgrind"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Variables, loops, functions, basic arrays, and compilation with GCC.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "GCC Compiler Setup",
            "description": "Setting up GCC/Clang, writing first program, and compiling with gcc main.c -o app.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "Variables & Format Specifiers",
            "description": "int, float, double, char, printf, and scanf syntax.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Loops & Conditionals",
            "description": "for, while, do-while, if-else, and switch statements.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 4,
            "title": "Arrays & Strings",
            "description": "One-dimensional arrays, 2D arrays, and null-terminated string buffers.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Matrix Calculator CLI Project",
            "description": "Compute matrix addition, subtraction, and multiplication.",
            "duration": "4 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "C Programming Tutorial for Beginners",
            "url": "https://www.youtube.com/watch?v=KJgsSFOSQv0",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "3.5-hour complete introductory walkthrough to C language.",
            "type": "Video"
          },
          {
            "title": "C Programming Full Course",
            "url": "https://www.youtube.com/watch?v=87SH2Cn0s9A",
            "channel": "Bro Code",
            "level": "Beginner",
            "description": "Comprehensive guide covering variables, math, strings, and loops in C.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "CS50 Manual Pages for C",
            "url": "https://manual.cs50.io/",
            "description": "Clean, beginner-friendly manual pages for C standard library functions.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "Learn-C.org Interactive Tutorial",
            "url": "https://www.learn-c.org/",
            "description": "Browser-based interactive exercises for learning C.",
            "type": "Notes",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the purpose of the null character ('\\0') in C strings?",
            "answer": "C does not have a built-in string data type; it uses arrays of characters. The '\\0' character marks the end of the string buffer.",
            "difficulty": "Beginner",
            "topic": "Strings"
          },
          {
            "question": "What does the & operator do when placed before a variable name?",
            "answer": "The & (address-of) operator retrieves the memory address where the variable is stored in RAM.",
            "difficulty": "Beginner",
            "topic": "Pointers"
          }
        ],
        "projects": [
          {
            "title": "Simple Text Encryption Utility",
            "description": "CLI program implementing Caesar cipher and Vigenere cipher for text files.",
            "difficulty": "Beginner",
            "techStack": [
              "C",
              "GCC"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Pointers, Pointer Arithmetic, Dynamic Memory Allocation (malloc), and Structs.",
        "prerequisites": [
          "Basic C variables, loops, arrays, and functions"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Pointers Deep Dive",
            "description": "Pointer variables, dereferencing, and pointer-to-pointer (**ptr).",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "Pointer Arithmetic",
            "description": "Traversing arrays with *(ptr + i) and understanding element offsets.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Dynamic Memory (malloc & free)",
            "description": "Allocating heap buffers, checking for NULL returns, and freeing memory.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Custom Structs & Typedef",
            "description": "Defining complex structures, nested structs, and using the -> operator.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Singly Linked List Implementation",
            "description": "Write an end-to-end linked list with insertion, deletion, and reverse operations.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Pointers in C / C++ [Full Course]",
            "url": "https://www.youtube.com/watch?v=zuegQmMdy8M",
            "channel": "freeCodeCamp.org (mycodeschool)",
            "level": "Intermediate",
            "description": "The absolute best classic guide to mastering pointers and memory.",
            "type": "Video"
          },
          {
            "title": "Dynamic Memory Allocation in C (malloc, calloc, realloc, free)",
            "url": "https://www.youtube.com/watch?v=udrgnxW5i0E",
            "channel": "Neso Academy",
            "level": "Intermediate",
            "description": "Clear step-by-step memory visualization tutorial.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Stanford CS Education Library - Pointers and Memory",
            "url": "http://cslibrary.stanford.edu/102/",
            "description": "Legendary Stanford handout explaining memory models and pointers.",
            "type": "Guide",
            "level": "Intermediate"
          },
          {
            "title": "C Reference Cheat Sheet",
            "url": "https://devhints.io/c",
            "description": "Concise reference for structs, file modes, and pointer syntax.",
            "type": "CheatSheet",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What happens if you malloc() memory but forget to call free()?",
            "answer": "A memory leak occurs: the memory remains allocated and unavailable until the process exits, degrading system performance.",
            "difficulty": "Intermediate",
            "topic": "Memory"
          },
          {
            "question": "What is a segmentation fault?",
            "answer": "A hardware error raised when a program attempts to access a restricted memory address (such as dereferencing a NULL or wild pointer).",
            "difficulty": "Intermediate",
            "topic": "Pointers"
          }
        ],
        "projects": [
          {
            "title": "Dynamic Student Database System",
            "description": "Dynamically allocated record system supporting searching, sorting, and binary file save/load.",
            "difficulty": "Intermediate",
            "techStack": [
              "C",
              "Dynamic Memory",
              "File I/O"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Function Pointers, Bitwise Operations, Memory Leak Detection with Valgrind, and Custom Memory Allocators.",
        "prerequisites": [
          "Proficient in pointers, malloc, and linked lists in C"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Function Pointers & Callbacks",
            "description": "Declaring function pointers, passing callbacks to qsort, and event dispatchers.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "Bitwise Operators & Bit Manipulation",
            "description": "Bitmasks, shifts (<<, >>), flags, setting/clearing bits, and bitfields.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Debugging with GDB & Valgrind",
            "description": "Inspecting stack traces, breakpoints, detecting memory leaks and out-of-bounds reads.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Low-Level File I/O & Buffers",
            "description": "POSIX read/write system calls, file descriptors, and custom buffer management.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Custom Memory Allocator (Mini-malloc)",
            "description": "Implement a memory pool allocator using sbrk or mmap with a free-list.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Valgrind Tutorial: Detecting Memory Leaks & Errors",
            "url": "https://www.youtube.com/watch?v=bb1bTJrk4l4",
            "channel": "Jacob Sorber",
            "level": "Advanced",
            "description": "Hands-on guide to finding memory leaks and buffer overruns in C.",
            "type": "Video"
          },
          {
            "title": "How to Write a Custom Memory Allocator in C",
            "url": "https://www.youtube.com/watch?v=sZ8GJ1TiMdk",
            "channel": "Dan Sakamoto",
            "level": "Advanced",
            "description": "Building your own malloc and free from raw heap blocks.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "GNU C Reference Manual",
            "url": "https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html",
            "description": "Definitive reference for the GNU C compiler and standard extensions.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Valgrind User Manual",
            "url": "https://valgrind.org/docs/manual/quick-start.html",
            "description": "Official guide to profiling memory and thread bugs.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "How do function pointers enable polymorphism in C?",
            "answer": "A struct can contain function pointer members. Different instances can point to different implementation functions, mimicking object-oriented method dispatch.",
            "difficulty": "Advanced",
            "topic": "Architecture"
          },
          {
            "question": "What is the purpose of the volatile keyword in C systems programming?",
            "answer": "It tells the compiler that a variable can be changed unexpectedly (e.g. by hardware or interrupt routine), preventing the compiler from optimizing out repeated reads from memory.",
            "difficulty": "Advanced",
            "topic": "Systems"
          }
        ],
        "projects": [
          {
            "title": "Custom Slab Memory Pool Allocator",
            "description": "A fast fixed-size chunk memory allocator preventing heap fragmentation in embedded systems.",
            "difficulty": "Advanced",
            "techStack": [
              "C",
              "Low-Level Memory",
              "Valgrind"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-cpp",
    "title": "Modern C++ (C++17/20) & Software Engineering",
    "category": "C++ Programming",
    "level": "All Levels",
    "duration": "10 weeks",
    "description": "Master Modern C++: STL containers and algorithms, RAII, smart pointers, move semantics, template metaprogramming, and high-performance engineering.",
    "coverImage": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Bjarne Stroustrup (Honorary)",
      "email": "bjarne@eduflow.io"
    },
    "prerequisites": [
      "Basic programming fundamentals or C knowledge"
    ],
    "learningOutcomes": [
      "Master the Standard Template Library (vector, map, unordered_map, sort)",
      "Apply RAII and Smart Pointers (unique_ptr, shared_ptr) for automatic memory safety",
      "Understand rvalue references, std::move, and modern move semantics",
      "Write generic template classes and modern C++ algorithms"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: C++ Core & OOP Foundations",
        "duration": "2 weeks",
        "topics": [
          "iostream, namespaces, references vs pointers",
          "Classes, access specifiers, constructors",
          "Const correctness",
          "Operator overloading"
        ]
      },
      {
        "moduleTitle": "Module 2: The Standard Template Library (STL)",
        "duration": "3 weeks",
        "topics": [
          "std::vector, std::deque, std::list",
          "std::map vs std::unordered_map",
          "STL Algorithms (sort, binary_search, transform)",
          "Iterators & lambda expressions"
        ]
      },
      {
        "moduleTitle": "Module 3: Modern Memory Safety & RAII",
        "duration": "3 weeks",
        "topics": [
          "RAII design philosophy",
          "std::unique_ptr and ownership",
          "std::shared_ptr and std::weak_ptr",
          "Rule of 3 and Rule of 5"
        ]
      },
      {
        "moduleTitle": "Module 4: Advanced Modern C++ Features",
        "duration": "2 weeks",
        "topics": [
          "Lvalues vs Rvalues and std::move",
          "Template functions and classes",
          "Concepts & constexpr in C++20",
          "Multi-threading with std::jthread"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Syntax, references, classes, basic STL vector and string usage.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "C++ Intro & Cin/Cout",
            "description": "Hello world, streams, basic types, and compiling with g++ -std=c++20.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "References vs Pointers",
            "description": "Pass-by-value, pass-by-reference (&), and const reference parameters.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Basic Classes & Structs",
            "description": "Encapsulating data, public/private members, and member functions.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "std::string & std::vector",
            "description": "Dynamic arrays with vector, push_back, size, and range-based for loops.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Console Banking System Project",
            "description": "Manage accounts and transaction records using classes and vectors.",
            "duration": "5 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "C++ Tutorial for Beginners - Full Course",
            "url": "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "4-hour structured introduction to C++ syntax and object-oriented basics.",
            "type": "Video"
          },
          {
            "title": "How to C++: Getting Started",
            "url": "https://www.youtube.com/watch?v=18c3MTX0PK0",
            "channel": "The Cherno",
            "level": "Beginner",
            "description": "The absolute gold-standard modern C++ series by a game engine developer.",
            "type": "Playlist"
          }
        ],
        "notesResources": [
          {
            "title": "cppreference.com - Standard C++ Reference",
            "url": "https://en.cppreference.com/w/",
            "description": "The official wiki for C++ language syntax and standard libraries.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "LearnCpp.com - Free Online Tutorials",
            "url": "https://www.learncpp.com/",
            "description": "The best comprehensive, up-to-date textbook on modern C++.",
            "type": "Notes",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the advantage of passing parameters by const reference (const T&)?",
            "answer": "It avoids copying large objects while guaranteeing that the function cannot modify the caller's original value.",
            "difficulty": "Beginner",
            "topic": "References"
          },
          {
            "question": "What is a namespace in C++?",
            "answer": "A declarative region providing a scope to the identifiers inside it, preventing naming conflicts across different libraries.",
            "difficulty": "Beginner",
            "topic": "Syntax"
          }
        ],
        "projects": [
          {
            "title": "Vehicle Fleet Management System",
            "description": "OOP system managing cars, trucks, and motorcycles with polymorphic methods.",
            "difficulty": "Beginner",
            "techStack": [
              "C++17",
              "STL Vector"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Standard Template Library (STL), Operator Overloading, Smart Pointers, and RAII.",
        "prerequisites": [
          "Basic C++ classes, vectors, and functions"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "STL Containers Mastery",
            "description": "vector, set, multiset, map, unordered_map, and priority_queue.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Operator Overloading",
            "description": "Overloading +, ==, <, and friend << streaming operators.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "RAII & Smart Pointers",
            "description": "unique_ptr (exclusive ownership) and shared_ptr/weak_ptr (shared ownership).",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "STL Algorithms & Lambdas",
            "description": "std::sort with custom lambda predicates, std::find_if, std::accumulate.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Custom Vector Container Project",
            "description": "Re-implement a dynamic array with template support and automatic memory doubling.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Smart Pointers in C++ (unique_ptr, shared_ptr, weak_ptr)",
            "url": "https://www.youtube.com/watch?v=UOB7-B2MfwA",
            "channel": "The Cherno",
            "level": "Intermediate",
            "description": "Visual explanation of smart pointers and zero-leak memory management.",
            "type": "Video"
          },
          {
            "title": "STL in C++ - Complete Playlist",
            "url": "https://www.youtube.com/watch?v=zBxCMtpyKA3",
            "channel": "Luv",
            "level": "Intermediate",
            "description": "Deep dive into competitive programming STL containers and algorithms.",
            "type": "Playlist"
          }
        ],
        "notesResources": [
          {
            "title": "C++ Core Guidelines (Bjarne Stroustrup & Herb Sutter)",
            "url": "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines",
            "description": "Definitive best practices for modern C++ development.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "Modern C++ Features Cheatsheet",
            "url": "https://github.com/AnthonyCalandra/modern-cpp-features",
            "description": "Concise summary of additions from C++11 through C++20.",
            "type": "CheatSheet",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is RAII (Resource Acquisition Is Initialization)?",
            "answer": "A programming idiom where resources (memory, file handles, sockets) are tied to object lifetime: acquired in the constructor and automatically released in the destructor.",
            "difficulty": "Intermediate",
            "topic": "RAII"
          },
          {
            "question": "When should you use std::unique_ptr instead of std::shared_ptr?",
            "answer": "Prefer std::unique_ptr by default because it has zero overhead compared to raw pointers and expresses unambiguous single ownership.",
            "difficulty": "Intermediate",
            "topic": "Memory"
          }
        ],
        "projects": [
          {
            "title": "Matrix Math Engine with Operator Overloading",
            "description": "High-performance matrix class with custom overloaded +, *, and << print operators.",
            "difficulty": "Intermediate",
            "techStack": [
              "C++17",
              "Operator Overloading",
              "RAII"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Move Semantics, Perfect Forwarding, Template Metaprogramming, C++20 Concepts, and Threading.",
        "prerequisites": [
          "Strong understanding of C++ STL, classes, and smart pointers"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Move Semantics & Rvalues",
            "description": "rvalue references (&&), std::move, std::forward, move constructors and assignments.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "Rule of 5 and Rule of 0",
            "description": "Correctly implementing copy/move constructors, copy/move assignments, and destructors.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Template Metaprogramming",
            "description": "Variadic templates, SFINAE, constexpr functions, and compile-time calculations.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "C++20 Concepts & Coroutines",
            "description": "Constraining templates with requires clauses and standard concepts.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "High-Performance Thread Pool Library",
            "description": "Implement an asynchronous task thread pool using std::mutex and std::condition_variable.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Move Semantics in C++",
            "url": "https://www.youtube.com/watch?v=ehM4xUObMB4",
            "channel": "The Cherno",
            "level": "Advanced",
            "description": "Crystal-clear explanation of rvalues, move constructors, and performance gains.",
            "type": "Video"
          },
          {
            "title": "C++ Multithreading & Concurrency Tutorial",
            "url": "https://www.youtube.com/watch?v=3aqxaZvxrTQ",
            "channel": "Bo Qian",
            "level": "Advanced",
            "description": "In-depth series covering mutexes, lock guards, condition variables, and futures.",
            "type": "Playlist"
          }
        ],
        "notesResources": [
          {
            "title": "Modern C++ Concurrency in Action Reference",
            "url": "https://www.manning.com/books/c-plus-plus-concurrency-in-action-second-edition",
            "description": "Industry authority on multithreaded and parallel modern C++.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Compiler Explorer (godbolt.org)",
            "url": "https://godbolt.org/",
            "description": "Interactive web tool to inspect assembly generated by C++ compilers.",
            "type": "Guide",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What does std::move actually do to an object?",
            "answer": "std::move does not move anything at runtime; it merely performs an unconditional cast of its argument to an rvalue reference, enabling the move constructor to be invoked.",
            "difficulty": "Advanced",
            "topic": "Move Semantics"
          },
          {
            "question": "What problem do C++20 Concepts solve?",
            "answer": "They provide compile-time predicates to constrain template arguments, improving compiler error messages and replacing cumbersome SFINAE tricks.",
            "difficulty": "Advanced",
            "topic": "Concepts"
          }
        ],
        "projects": [
          {
            "title": "Asynchronous Lock-Free Circular Ring Buffer",
            "description": "Ultra-low latency single-producer single-consumer ring buffer using atomic operations for financial trading.",
            "difficulty": "Advanced",
            "techStack": [
              "C++20",
              "Atomic",
              "Multithreading"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-dbms",
    "title": "Database Management Systems & Relational Architecture",
    "category": "Database Management Systems",
    "level": "All Levels",
    "duration": "8 weeks",
    "description": "Learn database theory: ER modeling, relational algebra, normal forms (1NF to BCNF), ACID transactions, concurrency control, and indexing mechanics.",
    "coverImage": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Gate Smashers Team",
      "email": "gatesmashers@eduflow.io"
    },
    "prerequisites": [
      "Basic computer science fundamentals"
    ],
    "learningOutcomes": [
      "Design relational schemas with Entity-Relationship (ER) diagrams",
      "Normalize database schemas to eliminate anomalies (1NF, 2NF, 3NF, BCNF)",
      "Understand ACID properties, transaction schedules, and conflict serializability",
      "Master B-Tree and B+ Tree indexing mechanics and lock-based concurrency"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Architecture & ER Modeling",
        "duration": "2 weeks",
        "topics": [
          "3-schema architecture (Physical, Conceptual, External)",
          "Entity, attributes, and relationships",
          "Weak entity sets and mapping ER to tables",
          "Relational algebra operations"
        ]
      },
      {
        "moduleTitle": "Module 2: Functional Dependencies & Normalization",
        "duration": "2 weeks",
        "topics": [
          "Functional dependency closure & candidate keys",
          "1NF, 2NF, and 3NF normal forms",
          "Boyce-Codd Normal Form (BCNF)",
          "Lossless join & dependency preservation"
        ]
      },
      {
        "moduleTitle": "Module 3: Transactions & Concurrency Control",
        "duration": "2 weeks",
        "topics": [
          "ACID properties explained",
          "Serial vs Concurrent schedules",
          "Conflict and view serializability",
          "Two-Phase Locking (2PL) & Deadlock prevention"
        ]
      },
      {
        "moduleTitle": "Module 4: Storage, Indexing & Recovery",
        "duration": "2 weeks",
        "topics": [
          "File organization & hashing",
          "B-Trees and B+ Trees indexing",
          "Log-based recovery & checkpointing",
          "Query optimization basics"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Database models, 3-schema architecture, and Entity-Relationship diagrams.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Introduction to Databases",
            "description": "File systems vs DBMS, data independence, and DBMS architecture.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "ER Diagram Modeling",
            "description": "Entities, cardinalities (1:1, 1:N, M:N), primary keys, and foreign keys.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Relational Model Basics",
            "description": "Tuples, relations, domains, schemas, and integrity constraints.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 4,
            "title": "Relational Algebra",
            "description": "Selection (σ), Projection (π), Cartesian product (×), and Natural join (⋈).",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "College Database Design Project",
            "description": "Design a normalized ER model for a university grading and course portal.",
            "duration": "4 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "DBMS Full Course for Beginners",
            "url": "https://www.youtube.com/watch?v=kBdlM6hNDAE",
            "channel": "Gate Smashers",
            "level": "Beginner",
            "description": "The absolute best university and GATE-focused conceptual lectures on DBMS.",
            "type": "Playlist"
          },
          {
            "title": "Database Design Course - Learn how to design a relational database",
            "url": "https://www.youtube.com/watch?v=ztHopE5Wnpc",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Practical guide to entity design and relational modeling.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "GeeksforGeeks DBMS Notes",
            "url": "https://www.geeksforgeeks.org/dbms/",
            "description": "Complete topic-by-topic revision notes for exams and interviews.",
            "type": "Notes",
            "level": "Beginner"
          },
          {
            "title": "TutorialsPoint DBMS Architecture",
            "url": "https://www.tutorialspoint.com/dbms/index.htm",
            "description": "Step-by-step illustrated reference on relational models.",
            "type": "Guide",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the difference between physical and logical data independence?",
            "answer": "Logical data independence is the ability to change the conceptual schema without altering external views. Physical data independence is the ability to change physical storage structures without altering the conceptual schema.",
            "difficulty": "Beginner",
            "topic": "Architecture"
          },
          {
            "question": "What is a foreign key?",
            "answer": "A field in one table that uniquely identifies a row of another table, enforcing referential integrity between the two relations.",
            "difficulty": "Beginner",
            "topic": "Constraints"
          }
        ],
        "projects": [
          {
            "title": "E-Commerce Schema & ER Diagram Design",
            "description": "Design complete ER diagram and table schemas for users, products, orders, and payments with keys.",
            "difficulty": "Beginner",
            "techStack": [
              "ER Modeling",
              "Relational Schemas"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Functional dependencies, Normalization (1NF to BCNF), and ACID transactions.",
        "prerequisites": [
          "Basic relational model and schema knowledge"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Functional Dependencies (FD)",
            "description": "Finding closures (X+), Armstrong's axioms, and finding all candidate keys.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Normalization (1NF, 2NF, 3NF)",
            "description": "Eliminating insertion, deletion, and update anomalies step-by-step.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 3,
            "title": "BCNF & Decompositions",
            "description": "Boyce-Codd Normal Form, testing for lossless join and dependency preservation.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Transaction Processing & ACID",
            "description": "Atomicity, Consistency, Isolation, Durability, and transaction states.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Hospital Database Normalization",
            "description": "Take an unnormalized denormalized table and decompose into 3NF/BCNF relations.",
            "duration": "5 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Normalization in DBMS (1NF, 2NF, 3NF, BCNF)",
            "url": "https://www.youtube.com/watch?v=5hs5R_XqT58",
            "channel": "Gate Smashers",
            "level": "Intermediate",
            "description": "World-class visual explanation of solving normalization problems.",
            "type": "Playlist"
          },
          {
            "title": "Transactions and Concurrency in DBMS",
            "url": "https://www.youtube.com/watch?v=UqQ_dG7qM70",
            "channel": "Knowledge Gate",
            "level": "Intermediate",
            "description": "Clear breakdown of conflict serializability and precedence graphs.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Database Normalization Guide - Stanford CS",
            "url": "https://web.stanford.edu/class/cs145/",
            "description": "Academic lecture slides on dependency theory and BCNF proofs.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "DBMS Cheat Sheet for Technical Interviews",
            "url": "https://devhints.io/dbms",
            "description": "Quick review of normal forms and ACID transaction definitions.",
            "type": "CheatSheet",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "When is a relation in 3NF versus BCNF?",
            "answer": "A relation is in 3NF if for every functional dependency X -> Y, X is a superkey OR Y is a prime attribute. It is in BCNF if for every non-trivial X -> Y, X MUST be a superkey.",
            "difficulty": "Intermediate",
            "topic": "Normalization"
          },
          {
            "question": "What is a dirty read problem in transactions?",
            "answer": "A dirty read occurs when Transaction A reads data modified by Transaction B before Transaction B commits; if Transaction B rolls back, Transaction A worked with invalid data.",
            "difficulty": "Intermediate",
            "topic": "Transactions"
          }
        ],
        "projects": [
          {
            "title": "Automated Schema Normalizer Tool",
            "description": "Script that accepts attributes and functional dependencies, outputs all candidate keys and normal form level.",
            "difficulty": "Intermediate",
            "techStack": [
              "Python / Java",
              "DBMS Theory"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Concurrency Control (2PL), Deadlocks, B+ Tree Indexing, and Log Recovery.",
        "prerequisites": [
          "Proficiency with functional dependencies and ACID properties"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Conflict Serializability & Graphs",
            "description": "Precedence graphs (serialization graphs) and testing cycle freedom.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Two-Phase Locking (Strict & Rigorous 2PL)",
            "description": "Growing phase, shrinking phase, cascading aborts prevention, and lock conversion.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Deadlock Handling",
            "description": "Wait-for graphs, Wait-Die and Wound-Wait timestamp prevention schemes.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "B+ Tree Indexing Internal Mechanics",
            "description": "Insertion, splitting nodes, deletion, borrowing keys, and disk I/O calculations.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 5,
            "title": "Log-Based Recovery & ARIES Algorithm",
            "description": "Write-Ahead Logging (WAL), checkpoints, undo/redo passes after crash.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "B Tree and B+ Tree Indexing in DBMS",
            "url": "https://www.youtube.com/watch?v=aZjYr87r1b8",
            "channel": "Abdul Bari",
            "level": "Advanced",
            "description": "The absolute clearest visual breakdown of B-Tree and B+ Tree operations.",
            "type": "Video"
          },
          {
            "title": "Concurrency Control & 2-Phase Locking (2PL)",
            "url": "https://www.youtube.com/watch?v=qX0xWqK6098",
            "channel": "Gate Smashers",
            "level": "Advanced",
            "description": "Comprehensive guide to strict 2PL, conservative 2PL, and phantom reads.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "CMU 15-445: Database Systems (Andy Pavlo)",
            "url": "https://15445.courses.cs.cmu.edu/",
            "description": "Carnegie Mellon University's world-renowned systems database course.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "PostgreSQL Internals: Storage & Indexing",
            "url": "https://www.postgresql.org/docs/current/indexes-types.html",
            "description": "How real-world enterprise databases implement B-Trees and WAL logs.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Why are B+ Trees preferred over B-Trees for database indexing?",
            "answer": "In a B+ Tree, internal nodes only store keys (enabling higher fanout and shallower trees), while all data pointers reside in leaf nodes that are linked sequentially, making range queries exceptionally fast.",
            "difficulty": "Advanced",
            "topic": "Indexing"
          },
          {
            "question": "What does the Write-Ahead Logging (WAL) protocol guarantee?",
            "answer": "WAL guarantees that log records describing a change must be written to non-volatile storage before the actual modified data page is flushed to disk, ensuring atomicity and durability upon crashes.",
            "difficulty": "Advanced",
            "topic": "Recovery"
          }
        ],
        "projects": [
          {
            "title": "B+ Tree Index Simulation Engine",
            "description": "Implement an in-memory B+ Tree with node splits, merges, and range scan queries.",
            "difficulty": "Advanced",
            "techStack": [
              "C++ / Java / Python",
              "Data Structures",
              "Indexing"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-sql-mysql",
    "title": "SQL & MySQL Database Administration & Query Mastery",
    "category": "SQL and MySQL",
    "level": "All Levels",
    "duration": "8 weeks",
    "description": "Master relational data queries: SELECT, JOINs, aggregations, subqueries, Common Table Expressions (CTEs), window functions, indexes, and stored procedures in MySQL.",
    "coverImage": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Mosh Hamedani",
      "email": "mosh@eduflow.io"
    },
    "prerequisites": [
      "Basic computer literacy"
    ],
    "learningOutcomes": [
      "Write complex multi-table SQL queries using INNER, LEFT, RIGHT, and FULL JOINs",
      "Aggregate and group metrics using GROUP BY, HAVING, and aggregate functions",
      "Master advanced SQL: CTEs, Subqueries, and Analytic Window Functions (RANK, ROW_NUMBER)",
      "Optimize query execution plans using EXPLAIN and composite indexes"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Basic Queries & Filtering",
        "duration": "2 weeks",
        "topics": [
          "SELECT, DISTINCT, WHERE, ORDER BY",
          "LIKE, IN, BETWEEN, IS NULL operators",
          "LIMIT and OFFSET pagination",
          "INSERT, UPDATE, DELETE (DML)"
        ]
      },
      {
        "moduleTitle": "Module 2: Joins & Aggregations",
        "duration": "2 weeks",
        "topics": [
          "INNER JOIN vs OUTER JOINs",
          "Self joins and cross joins",
          "COUNT, SUM, AVG, MIN, MAX",
          "GROUP BY and HAVING filter clauses"
        ]
      },
      {
        "moduleTitle": "Module 3: Advanced SQL Analytics",
        "duration": "2 weeks",
        "topics": [
          "Subqueries (correlated vs non-correlated)",
          "Common Table Expressions (WITH clause)",
          "Window Functions (ROW_NUMBER, RANK, DENSE_RANK)",
          "LEAD and LAG time series analytics"
        ]
      },
      {
        "moduleTitle": "Module 4: Indexes, Optimization & Procedures",
        "duration": "2 weeks",
        "topics": [
          "Primary vs Secondary B-Tree indexes",
          "EXPLAIN query plans analysis",
          "Stored procedures & triggers",
          "Transactions & savepoints"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "CRUD operations, SELECT statements, WHERE clauses, and simple table creation.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "MySQL & Workbench Setup",
            "description": "Installing MySQL server, connecting via workbench, and exploring sample databases.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "SELECT & WHERE Clauses",
            "description": "Retrieving columns, filtering with AND/OR/NOT, and sorting with ORDER BY.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Table Creation & DDL",
            "description": "CREATE TABLE, ALTER TABLE, DROP, and data types (INT, VARCHAR, DATE).",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "DML (Insert, Update, Delete)",
            "description": "Safely inserting records, updating with WHERE conditions, and transactions.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 5,
            "title": "Library Catalog Database Project",
            "description": "Build a relational schema for a bookstore with authors and books.",
            "duration": "4 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "SQL Tutorial - Full Database Course for Beginners",
            "url": "https://www.youtube.com/watch?v=HXV3zeQKqGY",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "4-hour standard introduction to SQL syntax and table operations.",
            "type": "Video"
          },
          {
            "title": "MySQL Tutorial for Beginners [Full Course]",
            "url": "https://www.youtube.com/watch?v=7S_tz1z_5bA",
            "channel": "Programming with Mosh",
            "level": "Beginner",
            "description": "Comprehensive practical guide from basic queries to relationships.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "MySQL 8.0 Reference Manual",
            "url": "https://dev.mysql.com/doc/refman/8.0/en/",
            "description": "Official developer manual from Oracle MySQL.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "SQL Cheat Sheet (DataCamp / OverAPI)",
            "url": "https://overapi.com/sql",
            "description": "Quick syntax cheatsheet for all common SQL statements.",
            "type": "CheatSheet",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the difference between WHERE and HAVING clauses?",
            "answer": "WHERE filters individual rows before any grouping occurs; HAVING filters grouped aggregated results created by GROUP BY.",
            "difficulty": "Beginner",
            "topic": "Queries"
          },
          {
            "question": "What is the result of an INNER JOIN versus a LEFT JOIN?",
            "answer": "An INNER JOIN returns only rows with matches in both tables. A LEFT JOIN returns all rows from the left table and matched rows from the right table (with NULLs where no match exists).",
            "difficulty": "Beginner",
            "topic": "Joins"
          }
        ],
        "projects": [
          {
            "title": "Retail Order Management Database",
            "description": "Create and populate normalized tables for customers, products, and orders with constraints.",
            "difficulty": "Beginner",
            "techStack": [
              "MySQL",
              "SQL DDL/DML"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Multi-table JOINs, GROUP BY aggregations, Subqueries, and Views.",
        "prerequisites": [
          "Basic SQL SELECT and table creation"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Multi-Table Joins Mastery",
            "description": "Joining 3+ tables, aliasing, self-joins, and handling NULL matches.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Aggregation & GROUP BY",
            "description": "Calculating revenue totals, user counts, and filtering with HAVING.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Subqueries & CTEs",
            "description": "Correlated subqueries, EXISTS vs IN, and writing readable CTEs with WITH.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Database Views & Constraints",
            "description": "Creating reusable VIEWs, UNIQUE, and CHECK constraints.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Sales Analytics Dashboard Queries",
            "description": "Write analytical queries finding top 5 customers by sales, churn rates, and monthly growth.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "SQL Joins Explained (Visual Diagram)",
            "url": "https://www.youtube.com/watch?v=0OQJDd3Pt38",
            "channel": "Web Dev Simplified",
            "level": "Intermediate",
            "description": "Clean visual breakdown of all SQL join variations.",
            "type": "Video"
          },
          {
            "title": "Intermediate SQL Tutorial: Subqueries & CTEs",
            "url": "https://www.youtube.com/watch?v=bEb34UStxHk",
            "channel": "Alex The Analyst",
            "level": "Intermediate",
            "description": "Hands-on practical walkthrough on real-world business datasets.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Mode Analytics SQL Tutorial",
            "url": "https://mode.com/sql-tutorial/",
            "description": "Industry-standard training resource for intermediate business analytics SQL.",
            "type": "Guide",
            "level": "Intermediate"
          },
          {
            "title": "MySQL Joins Visual Cheatsheet",
            "url": "https://devhints.io/mysql",
            "description": "Quick visual cheatsheet for join conditions and aggregate formulas.",
            "type": "CheatSheet",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is a correlated subquery and how does it differ from a regular subquery?",
            "answer": "A regular subquery executes once independently. A correlated subquery references columns from the outer query and must execute once for every candidate row evaluated by the outer query.",
            "difficulty": "Intermediate",
            "topic": "Subqueries"
          },
          {
            "question": "Why are Common Table Expressions (CTEs) preferred over nested subqueries?",
            "answer": "CTEs make complex SQL readable and maintainable by breaking queries into modular named temporary result sets, and can also perform recursive operations.",
            "difficulty": "Intermediate",
            "topic": "CTEs"
          }
        ],
        "projects": [
          {
            "title": "E-Commerce Business Intelligence Query Suite",
            "description": "A collection of production queries computing user retention, average order values, and inventory alerts.",
            "difficulty": "Intermediate",
            "techStack": [
              "MySQL",
              "Joins",
              "CTEs",
              "Aggregations"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Window Functions, EXPLAIN query optimization, Indexing strategies, and Stored Procedures.",
        "prerequisites": [
          "Proficient in SQL Joins, CTEs, and Group By"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Window Functions (OVER, PARTITION BY)",
            "description": "ROW_NUMBER(), RANK(), DENSE_RANK(), and cumulative SUM() over partitions.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "Lead, Lag & Value Analytics",
            "description": "Calculating month-over-month differences using LEAD() and LAG() without self-joins.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Query Optimization with EXPLAIN",
            "description": "Analyzing type (ALL vs ref vs range), rows examined, and avoiding temporary files.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "B-Tree & Composite Indexes",
            "description": "Leftmost prefix rule for composite indexes, covering indexes, and index cardinality.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Stored Procedures & Triggers",
            "description": "Writing transactional stored procedures with parameters and error handlers.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "SQL Window Functions Full Tutorial",
            "url": "https://www.youtube.com/watch?v=Ww71knvhQ-s",
            "channel": "Alex The Analyst",
            "level": "Advanced",
            "description": "Complete practical guide to ROW_NUMBER, RANK, DENSE_RANK, and PARTITION BY.",
            "type": "Video"
          },
          {
            "title": "Database Indexing & Query Optimization (MySQL)",
            "url": "https://www.youtube.com/watch?v=HubezKbFL7E",
            "channel": "Hussein Nasser",
            "level": "Advanced",
            "description": "Deep dive into B-Tree indexes, table scans, and how the query planner thinks.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Use The Index, Luke! - SQL Indexing Guide",
            "url": "https://use-the-index-luke.com/",
            "description": "The premier global reference on relational database indexing and performance.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "MySQL EXPLAIN Syntax Reference",
            "url": "https://dev.mysql.com/doc/refman/8.0/en/explain-output.html",
            "description": "Official reference for decoding EXPLAIN query optimization plans.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the difference between RANK() and DENSE_RANK() in SQL?",
            "answer": "RANK() leaves gaps in ranking values when there are ties (e.g. 1, 2, 2, 4), whereas DENSE_RANK() does not skip rank values (e.g. 1, 2, 2, 3).",
            "difficulty": "Advanced",
            "topic": "Window Functions"
          },
          {
            "question": "What is a covering index in MySQL?",
            "answer": "An index that contains all the columns required by the query (both in WHERE and SELECT). The database can fulfill the query entirely from the index without reading the actual table data rows.",
            "difficulty": "Advanced",
            "topic": "Indexing"
          }
        ],
        "projects": [
          {
            "title": "High-Volume Financial Ledger with Stored Procedures",
            "description": "Stored procedures implementing money transfers between accounts with atomic row locking and audit logs.",
            "difficulty": "Advanced",
            "techStack": [
              "MySQL 8.0",
              "Window Functions",
              "Stored Procedures",
              "Indexes"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-mongodb",
    "title": "MongoDB & NoSQL Document Architecture",
    "category": "MongoDB",
    "level": "All Levels",
    "duration": "8 weeks",
    "description": "Learn NoSQL document databases: BSON data models, CRUD operations, Aggregation Framework, compound indexing, and Mongoose schema design.",
    "coverImage": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "MongoDB University Team",
      "email": "mongodb@eduflow.io"
    },
    "prerequisites": [
      "Basic JavaScript and JSON knowledge"
    ],
    "learningOutcomes": [
      "Design scalable NoSQL document models (Embedding vs Referencing)",
      "Perform complex queries with comparison, logical, array, and regex operators",
      "Build multi-stage data pipelines using the MongoDB Aggregation Framework",
      "Optimize database queries with compound indexes and explain() plans"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Document Model & CRUD Operations",
        "duration": "2 weeks",
        "topics": [
          "JSON vs BSON documents",
          "MongoDB Compass & mongosh CLI",
          "insertOne, insertMany, find, findOne",
          "Update operators ($set, $inc, $push, $pull)"
        ]
      },
      {
        "moduleTitle": "Module 2: Schema Design Patterns",
        "duration": "2 weeks",
        "topics": [
          "Embedding vs Referencing trade-offs",
          "1:1, 1:N, and N:N data relationships",
          "Subset pattern & bucket pattern",
          "Mongoose schema validators & virtuals"
        ]
      },
      {
        "moduleTitle": "Module 3: Aggregation Framework Mastery",
        "duration": "2 weeks",
        "topics": [
          "$match, $project, and $group stages",
          "$unwind for flattening arrays",
          "$lookup for joining collections",
          "$sort, $limit, and $facet pagination"
        ]
      },
      {
        "moduleTitle": "Module 4: Indexing, Scaling & Production",
        "duration": "2 weeks",
        "topics": [
          "Single field & compound indexes",
          "TTL and Text search indexes",
          "Query execution plans (executionStats)",
          "Replica sets & sharding architecture"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "BSON format, Compass GUI, mongosh shell, and basic CRUD operations.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "MongoDB Setup & mongosh",
            "description": "Installing MongoDB Community Server, connecting via Compass and mongosh.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "Create & Read Documents",
            "description": "insertOne, insertMany, find with equality and comparison filters ($gt, $lt, $in).",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Updating Documents",
            "description": "updateOne, updateMany, and operators: $set, $unset, $inc, $push, and $pull.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Deleting & Projection",
            "description": "deleteOne, deleteMany, and projection ({ name: 1, _id: 0 }).",
            "duration": "3 hours"
          },
          {
            "stepNumber": 5,
            "title": "Product Catalog CLI App",
            "description": "Build an inventory store CLI adding and querying product documents.",
            "duration": "4 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "MongoDB Tutorial for Beginners",
            "url": "https://www.youtube.com/watch?v=ofme2o29ngU",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Complete 2-hour introduction to MongoDB document fundamentals.",
            "type": "Video"
          },
          {
            "title": "MongoDB Crash Course",
            "url": "https://www.youtube.com/watch?v=-56x56UppqQ",
            "channel": "Traversy Media",
            "level": "Beginner",
            "description": "Quick-start guide to MongoDB commands, operators, and schemas.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Official MongoDB Documentation",
            "url": "https://www.mongodb.com/docs/",
            "description": "The official documentation for MongoDB Server and drivers.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "MongoDB Query Operators Cheat Sheet",
            "url": "https://devhints.io/mongodb",
            "description": "Quick reference for $gt, $in, $set, $push, and $regex syntax.",
            "type": "CheatSheet",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is BSON and how does it differ from standard JSON?",
            "answer": "BSON is a binary representation of JSON documents that supports additional data types (such as Date, ObjectId, and raw binary) and is optimized for fast traversal and storage.",
            "difficulty": "Beginner",
            "topic": "BSON"
          },
          {
            "question": "What does the $push operator do in an update command?",
            "answer": "The $push operator appends a specified value to an array field within a document.",
            "difficulty": "Beginner",
            "topic": "Updates"
          }
        ],
        "projects": [
          {
            "title": "User Profile & Preferences Database",
            "description": "Store structured user profile documents with nested settings and tags in MongoDB.",
            "difficulty": "Beginner",
            "techStack": [
              "MongoDB",
              "mongosh"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Mongoose ODM, Schema validation, Relationships, and basic Aggregations.",
        "prerequisites": [
          "Basic MongoDB CRUD operations and Node.js"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Mongoose ODM Modeling",
            "description": "Defining schemas, types, required flags, default values, and timestamps.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "Embedding vs Referencing",
            "description": "Deciding between subdocuments vs ObjectId population (ref: \"User\").",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Mongoose Middleware & Virtuals",
            "description": "pre(\"save\") password hashing hooks, post hooks, and virtual getters.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Intro to Aggregation Pipelines",
            "description": "Using $match, $group, and $sum to compute revenue summaries.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Blog & Comments Backend Store",
            "description": "Build an article platform with embedded tags and referenced author profiles.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Mongoose Crash Course",
            "url": "https://www.youtube.com/watch?v=DZBGEExL2eE",
            "channel": "Web Dev Simplified",
            "level": "Intermediate",
            "description": "Clear guide to Mongoose schemas, queries, validation, and populate.",
            "type": "Video"
          },
          {
            "title": "MongoDB Aggregation Framework Tutorial",
            "url": "https://www.youtube.com/watch?v=vx1C8eyiq4s",
            "channel": "freeCodeCamp.org",
            "level": "Intermediate",
            "description": "Comprehensive guide to building multi-stage data aggregation pipelines.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Mongoose Official Guide",
            "url": "https://mongoosejs.com/docs/guide.html",
            "description": "Official reference for Mongoose schema creation and queries.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "MongoDB Data Modeling Patterns",
            "url": "https://www.mongodb.com/developer/products/mongodb/schema-design-anti-patterns/",
            "description": "Official guide on schema design patterns and anti-patterns.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "When should you embed documents versus referencing them by ObjectId?",
            "answer": "Embed when data is accessed together, has a 1-to-few relationship, and doesn't grow unboundedly. Reference when data has high update frequency, is 1-to-many/many-to-many, or needs to be queried independently.",
            "difficulty": "Intermediate",
            "topic": "Schema Design"
          },
          {
            "question": "What is the purpose of Mongoose virtual properties?",
            "answer": "Virtuals are document properties that can be gotten and set but are not persisted to the MongoDB database (e.g. fullName from firstName + lastName).",
            "difficulty": "Intermediate",
            "topic": "Mongoose"
          }
        ],
        "projects": [
          {
            "title": "Course Enrolment & Review Hub Schema",
            "description": "Full schema with courses, faculty references, embedded ratings, and enrolment arrays.",
            "difficulty": "Intermediate",
            "techStack": [
              "MongoDB",
              "Mongoose",
              "Node.js"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Complex Aggregations ($lookup, $facet), Compound Indexes, Performance Tuning, and Sharding.",
        "prerequisites": [
          "Proficient in Mongoose schemas and basic aggregation"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Advanced Aggregation Pipelines",
            "description": "$lookup with sub-pipelines, $unwind, $facet for multi-dimensional reporting.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "Compound Indexes & ESR Rule",
            "description": "Equality, Sort, Range rule for compound indexes, covering index queries.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Query Profiler & explain(\"executionStats\")",
            "description": "Analyzing IXSCAN vs COLLSCAN, keysExamined vs docsExamined ratios.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Transactions & Write Concerns",
            "description": "Multi-document ACID transactions, readConcern, writeConcern: \"majority\".",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Large-Scale E-Commerce Analytics Pipeline",
            "description": "Aggregating millions of orders to compute customer lifetime value and product affinity.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "MongoDB Indexing & Performance Optimization",
            "url": "https://www.youtube.com/watch?v=FwPmsVbMmH4",
            "channel": "Hussein Nasser",
            "level": "Advanced",
            "description": "Deep architectural analysis of B-Tree indexes in WiredTiger engine.",
            "type": "Video"
          },
          {
            "title": "Mastering MongoDB Aggregation Framework",
            "url": "https://www.youtube.com/watch?v=Kk6Er0c7srU",
            "channel": "Hitesh Choudhary (Chai aur Code)",
            "level": "Advanced",
            "description": "Production aggregation pipeline walkthrough on real complex schemas.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "MongoDB Aggregation Pipeline Stages",
            "url": "https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/",
            "description": "Official reference for all pipeline operators and expressions.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "WiredTiger Storage Engine Internals",
            "url": "https://source.wiredtiger.com/develop/index.html",
            "description": "Architecture of cache, write-ahead logging, and block managers.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the ESR rule for creating compound indexes?",
            "answer": "Equality, Sort, Range: Place fields queried with Equality first, followed by fields used for Sorting, and finally fields queried with Range filters.",
            "difficulty": "Advanced",
            "topic": "Indexing"
          },
          {
            "question": "What does the $lookup stage do in an aggregation pipeline?",
            "answer": "It performs a left outer join to an unsharded collection in the same database to filter in documents from the \"joined\" collection for processing.",
            "difficulty": "Advanced",
            "topic": "Aggregation"
          }
        ],
        "projects": [
          {
            "title": "Real-Time Multi-Facet Analytics Dashboard",
            "description": "High-speed aggregation pipeline returning faceted metric cards, breakdowns, and trend graphs in a single query.",
            "difficulty": "Advanced",
            "techStack": [
              "MongoDB 7.0",
              "Aggregation Pipelines",
              "Compound Indexes"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-git-github",
    "title": "Git & GitHub: Professional Version Control & Collaboration",
    "category": "Git and GitHub",
    "level": "All Levels",
    "duration": "6 weeks",
    "description": "Master version control: commits, branching, merging, merge conflicts, interactive rebasing, stash, cherry-pick, pull requests, and GitHub Actions CI/CD.",
    "coverImage": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Kunal Kushwaha",
      "email": "kunal@eduflow.io"
    },
    "prerequisites": [
      "Basic terminal command line usage"
    ],
    "learningOutcomes": [
      "Understand Git internal object architecture (blobs, trees, commits)",
      "Manage branches, pull requests, and resolve merge conflicts with confidence",
      "Leverage powerful tools: git rebase -i, cherry-pick, stash, bisect, and reflog",
      "Automate testing and deployment pipelines using GitHub Actions"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Version Control Basics",
        "duration": "1 week",
        "topics": [
          "Working directory, Staging area, Git repository",
          "git init, status, add, commit",
          "git log and diff inspection",
          "Writing clean commit messages"
        ]
      },
      {
        "moduleTitle": "Module 2: Branching & Collaboration",
        "duration": "2 weeks",
        "topics": [
          "git branch, checkout, and switch",
          "Fast-forward vs 3-way merge",
          "Resolving merge conflicts",
          "git remote, push, fetch, and pull"
        ]
      },
      {
        "moduleTitle": "Module 3: Advanced Git Tools",
        "duration": "2 weeks",
        "topics": [
          "git stash and stash pop",
          "git cherry-pick for selective commits",
          "Interactive rebase (git rebase -i)",
          "Time travel with git reflog and reset"
        ]
      },
      {
        "moduleTitle": "Module 4: GitHub Workflows & CI/CD",
        "duration": "1 week",
        "topics": [
          "Forks, Pull Requests, and code reviews",
          "Branch protection rules",
          "GitHub Actions workflow YAML",
          "Releasing versions with semantic tagging"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Git setup, repository initialization, commits, and pushing to GitHub.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Git Installation & Configuration",
            "description": "Configuring user.name, user.email, and default branch (main).",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "The Three Trees",
            "description": "Understanding working directory, staging index, and commit history.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Basic Commands",
            "description": "git init, git add ., git commit -m \"...\", and git log --oneline.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 4,
            "title": "Connecting to GitHub",
            "description": "SSH key setup, creating remote repositories, and git push -u origin main.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 5,
            "title": "First Open Source Repository Project",
            "description": "Create and publish a documentation repository on GitHub with Markdown.",
            "duration": "3 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Git and GitHub for Beginners - Crash Course",
            "url": "https://www.youtube.com/watch?v=RGOj5yH7evk",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Complete zero-to-hero introduction to version control.",
            "type": "Video"
          },
          {
            "title": "Complete Git and GitHub Tutorial for Beginners",
            "url": "https://www.youtube.com/watch?v=apGV9Kg7ics",
            "channel": "Kunal Kushwaha",
            "level": "Beginner",
            "description": "Step-by-step friendly walkthrough of Git commands and GitHub workflow.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Pro Git Book (Official Free Book)",
            "url": "https://git-scm.com/book/en/v2",
            "description": "The official comprehensive textbook written by Scott Chacon.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "GitHub Git Cheat Sheet",
            "url": "https://education.github.com/git-cheat-sheet-education.pdf",
            "description": "Official reference card with the most commonly used commands.",
            "type": "CheatSheet",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the staging area in Git?",
            "answer": "An intermediate area where changes are formatted and prepared before being committed into the permanent repository history.",
            "difficulty": "Beginner",
            "topic": "Basics"
          },
          {
            "question": "What is the difference between git fetch and git pull?",
            "answer": "git fetch downloads commits from the remote repository without integrating them; git pull performs git fetch followed immediately by a git merge into your current branch.",
            "difficulty": "Beginner",
            "topic": "Remotes"
          }
        ],
        "projects": [
          {
            "title": "Personal GitHub Profile Portfolio",
            "description": "Create and customize a README repository on GitHub with badges and stats.",
            "difficulty": "Beginner",
            "techStack": [
              "Git",
              "GitHub",
              "Markdown"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Branching strategies, Merge Conflict resolution, Stash, and Pull Request workflows.",
        "prerequisites": [
          "Basic git commit and push knowledge"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Feature Branch Workflows",
            "description": "Creating branches (git switch -c feature/xyz), committing, and merging.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "Resolving Merge Conflicts",
            "description": "Understanding conflict markers (<<<<<<<, =======, >>>>>>>) and VS Code diff tools.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Git Stash for Temporary Work",
            "description": "Stashing uncommitted changes, applying, popping, and dropping stashes.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 4,
            "title": "GitHub Pull Requests & Code Review",
            "description": "Opening PRs, resolving feedback comments, and squash-and-merge.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Collaborative Team Simulation",
            "description": "Simulate a multi-developer feature release with merge conflict resolution.",
            "duration": "5 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Git Branching and Merging Explained",
            "url": "https://www.youtube.com/watch?v=e2IbNHi4uCI",
            "channel": "Traversy Media",
            "level": "Intermediate",
            "description": "Practical guide to managing branches, merges, and conflicts.",
            "type": "Video"
          },
          {
            "title": "Learn Git Branching (Visual Tutorial)",
            "url": "https://www.youtube.com/watch?v=Uszj_k0DGsg",
            "channel": "Fireship",
            "level": "Intermediate",
            "description": "Fast, visual overview of branching, rebasing, and cherry-picking.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Learn Git Branching Interactive Game",
            "url": "https://learngitbranching.js.org/",
            "description": "The most popular interactive visual sandbox for mastering Git branching.",
            "type": "Guide",
            "level": "Intermediate"
          },
          {
            "title": "Atlassian Git Branching Tutorials",
            "url": "https://www.atlassian.com/git/tutorials/using-branches",
            "description": "Industry guide on Gitflow, feature branches, and pull requests.",
            "type": "Documentation",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What causes a merge conflict in Git?",
            "answer": "A conflict occurs when two branches modify the same line in a file in different ways, or when a file was deleted in one branch and edited in another.",
            "difficulty": "Intermediate",
            "topic": "Merging"
          },
          {
            "question": "What is git cherry-pick used for?",
            "answer": "It applies the changes introduced by one or more specific commits from another branch onto your current working branch.",
            "difficulty": "Intermediate",
            "topic": "Branches"
          }
        ],
        "projects": [
          {
            "title": "Team Gitflow Project Setup",
            "description": "Configure a project repository with main, develop, and feature branch guidelines with PR templates.",
            "difficulty": "Intermediate",
            "techStack": [
              "Git",
              "GitHub"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Interactive Rebasing, Git Reflog, Bisect, Internals, and GitHub Actions CI/CD.",
        "prerequisites": [
          "Proficient in branching, merging, and PR workflows"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Interactive Rebasing (git rebase -i)",
            "description": "Squashing messy commits, rewording, dropping, and creating clean PR histories.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Emergency Recovery with Git Reflog",
            "description": "Recovering lost commits, deleted branches, and reversing bad resets.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Bug Hunting with Git Bisect",
            "description": "Automating binary search across commit history to locate breaking regressions.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Git Under the Hood: Object Store",
            "description": "Inspecting .git folder: blobs, trees, commit objects, and SHA-1 hashes.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Automated CI/CD with GitHub Actions",
            "description": "Write automated workflows testing code and deploying build artifacts on every push.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Advanced Git: Interactive Rebase, Bisect, Reflog",
            "url": "https://www.youtube.com/watch?v=qsTthZi23VE",
            "channel": "freeCodeCamp.org",
            "level": "Advanced",
            "description": "Masterclass on professional-grade Git commands and troubleshooting.",
            "type": "Video"
          },
          {
            "title": "GitHub Actions Tutorial - Basic to Advanced CI/CD",
            "url": "https://www.youtube.com/watch?v=R8_veQiYBjI",
            "channel": "TechWorld with Nana",
            "level": "Advanced",
            "description": "Complete step-by-step guide to writing GitHub Action pipelines.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "GitHub Actions Official Documentation",
            "url": "https://docs.github.com/en/actions",
            "description": "Official reference for workflow syntax, runners, and triggers.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Git Internals - Chapter 10 of Pro Git",
            "url": "https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain",
            "description": "In-depth exploration of Git's internal DAG and content-addressable storage.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the Golden Rule of Git Rebasing?",
            "answer": "Never rebase a public branch that has been pushed and shared with other developers, as rebasing rewrites commit SHA hashes and diverges histories.",
            "difficulty": "Advanced",
            "topic": "Rebase"
          },
          {
            "question": "How can git reflog save you after accidentally running git reset --hard?",
            "answer": "reflog records every single change to HEAD (including resets). You can find the commit SHA where you were before the reset and run git reset --hard <sha> to restore everything.",
            "difficulty": "Advanced",
            "topic": "Reflog"
          }
        ],
        "projects": [
          {
            "title": "Complete Automated CI/CD Pipeline",
            "description": "Configure GitHub Actions to lint code, run automated tests, and deploy on push to main branch.",
            "difficulty": "Advanced",
            "techStack": [
              "GitHub Actions",
              "YAML",
              "Git"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-computer-networks",
    "title": "Computer Networks & Internet Protocol Architecture",
    "category": "Computer Networks",
    "level": "All Levels",
    "duration": "10 weeks",
    "description": "Learn network engineering: OSI 7-layer model, TCP/IP stack, IP addressing, subnetting (CIDR), routing protocols (OSPF, BGP), DNS, and HTTP/HTTPS.",
    "coverImage": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Gate Smashers & Neso Academy",
      "email": "networks@eduflow.io"
    },
    "prerequisites": [
      "Basic computer architecture understanding"
    ],
    "learningOutcomes": [
      "Master the OSI 7-Layer model and TCP/IP protocol suite encapsulation",
      "Calculate IPv4 subnets, network masks, broadcast addresses, and CIDR prefixes",
      "Understand TCP 3-way handshake, flow control, congestion control, and UDP",
      "Explore Application Layer protocols: DNS, HTTP/1.1, HTTP/2, HTTPS, and TLS"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Network Fundamentals & OSI Model",
        "duration": "2 weeks",
        "topics": [
          "Network topologies & transmission media",
          "OSI 7 Layers vs TCP/IP model",
          "Data encapsulation & decapsulation",
          "Circuit switching vs Packet switching"
        ]
      },
      {
        "moduleTitle": "Module 2: Data Link Layer & Addressing",
        "duration": "2 weeks",
        "topics": [
          "Framing and error detection (CRC, Parity, Checksum)",
          "Flow control (Stop & Wait, Go-Back-N, Selective Repeat)",
          "MAC addresses & ARP protocol",
          "Ethernet and CSMA/CD"
        ]
      },
      {
        "moduleTitle": "Module 3: Network Layer & IPv4/IPv6",
        "duration": "3 weeks",
        "topics": [
          "IPv4 packet format & fragmentation",
          "Classful addressing & CIDR subnetting",
          "Routing algorithms (Distance Vector, Link State)",
          "NAT, DHCP, and ICMP protocols"
        ]
      },
      {
        "moduleTitle": "Module 4: Transport & Application Layers",
        "duration": "3 weeks",
        "topics": [
          "TCP vs UDP architecture",
          "TCP 3-way handshake & connection termination",
          "TCP sliding window & congestion control",
          "DNS resolution, HTTP/HTTPS, and SSL/TLS"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Network topologies, OSI 7-layer model, and basic IP addressing.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Network Basics",
            "description": "LAN, WAN, topologies (Star, Mesh, Bus), and bandwidth vs latency.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "OSI 7-Layer Model",
            "description": "Physical, Data Link, Network, Transport, Session, Presentation, Application layers.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "TCP/IP Model & Encapsulation",
            "description": "How data travels down the stack adding headers at each stage.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 4,
            "title": "IP Address Introduction",
            "description": "IPv4 format, private vs public IP addresses, and default gateways.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 5,
            "title": "Packet Tracer Network Project",
            "description": "Build a simulated 2-router local network using Cisco Packet Tracer.",
            "duration": "5 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Computer Networking Course - Full Tutorial for Beginners",
            "url": "https://www.youtube.com/watch?v=IPvYjXCsTg8",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Complete foundational lecture covering all basic networking concepts.",
            "type": "Video"
          },
          {
            "title": "Computer Networks Playlist",
            "url": "https://www.youtube.com/watch?v=JFF2vJaN0Cw",
            "channel": "Gate Smashers",
            "level": "Beginner",
            "description": "The absolute best exam and interview preparation videos for networks.",
            "type": "Playlist"
          }
        ],
        "notesResources": [
          {
            "title": "GeeksforGeeks Computer Network Tutorials",
            "url": "https://www.geeksforgeeks.org/computer-network-tutorials/",
            "description": "Complete study and revision notes for every layer and protocol.",
            "type": "Notes",
            "level": "Beginner"
          },
          {
            "title": "OSI Model Summary Sheet",
            "url": "https://devhints.io/network",
            "description": "Quick summary of all 7 layers, protocol names, and PDU data units.",
            "type": "CheatSheet",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the difference between a Hub, a Switch, and a Router?",
            "answer": "A Hub operates at Layer 1 (Physical) and broadcasts to all ports. A Switch operates at Layer 2 (Data Link) and forwards frames using MAC addresses. A Router operates at Layer 3 (Network) and routes packets between networks using IP addresses.",
            "difficulty": "Beginner",
            "topic": "Hardware"
          },
          {
            "question": "What protocol resolves an IP address to a physical MAC address?",
            "answer": "Address Resolution Protocol (ARP).",
            "difficulty": "Beginner",
            "topic": "Data Link Layer"
          }
        ],
        "projects": [
          {
            "title": "Network Packet Sniffing & Ping Analyzer",
            "description": "Capture ICMP and DNS packets using Wireshark and examine packet headers.",
            "difficulty": "Beginner",
            "techStack": [
              "Wireshark",
              "Networking"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "IPv4 Subnetting (CIDR), Routing algorithms, TCP Handshake, and Flow Control.",
        "prerequisites": [
          "OSI model and basic IP address understanding"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Subnetting & CIDR Mastery",
            "description": "Calculating subnet masks, usable hosts, network IDs, and broadcast IDs for /24, /26, /29.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "Sliding Window Protocols",
            "description": "Stop & Wait ARQ, Go-Back-N, and Selective Repeat window efficiency math.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Routing Protocols",
            "description": "Distance Vector (Bellman-Ford / RIP) vs Link State (Dijkstra / OSPF).",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "TCP Connection Mechanics",
            "description": "SYN, SYN-ACK, ACK 3-way handshake, FIN teardown, and sequence numbers.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Subnetting Calculator Tool Project",
            "description": "Build a CLI or web tool that calculates all subnets for any given IP and CIDR prefix.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Subnetting Mastery - Learn Subnetting Fast",
            "url": "https://www.youtube.com/watch?v=s_Ntt6eTn94",
            "channel": "Practical Networking",
            "level": "Intermediate",
            "description": "The clearest step-by-step tutorial series on IPv4 subnetting on YouTube.",
            "type": "Playlist"
          },
          {
            "title": "TCP 3-Way Handshake & Connection Termination",
            "url": "https://www.youtube.com/watch?v=bW_kWXeqbPE",
            "channel": "Neso Academy",
            "level": "Intermediate",
            "description": "Visual explanation of TCP sequence and acknowledgement numbers.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Subnetting Cheat Sheet Reference",
            "url": "https://www.freecodecamp.org/news/subnet-cheat-sheet-24-25-26-27-28-29-cidr-ip-address-masks/",
            "description": "Quick calculation chart for host counts and netmasks.",
            "type": "CheatSheet",
            "level": "Intermediate"
          },
          {
            "title": "RFC 793 - Transmission Control Protocol Specification",
            "url": "https://datatracker.ietf.org/doc/html/rfc793",
            "description": "The official IETF standard defining the TCP protocol.",
            "type": "Documentation",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "Given 192.168.1.0/26, how many usable host addresses are available per subnet?",
            "answer": "/26 leaves 32 - 26 = 6 bits for hosts. 2^6 = 64 addresses. Subtract 2 (network and broadcast) = 62 usable hosts.",
            "difficulty": "Intermediate",
            "topic": "Subnetting"
          },
          {
            "question": "Why does TCP use a 3-way handshake rather than a 2-way handshake?",
            "answer": "A 3-way handshake is necessary so both client and server can synchronize their starting sequence numbers and confirm that both sides can transmit and receive data.",
            "difficulty": "Intermediate",
            "topic": "TCP"
          }
        ],
        "projects": [
          {
            "title": "Custom Subnet & CIDR Allocation Calculator",
            "description": "Program that partitions an enterprise network into variable-length subnets (VLSM).",
            "difficulty": "Intermediate",
            "techStack": [
              "Python / JavaScript",
              "Networking"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "TCP Congestion Control, TLS 1.3 Cryptography, BGP Routing, and HTTP/3 QUIC.",
        "prerequisites": [
          "Solid knowledge of TCP, IP subnetting, and routing protocols"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "TCP Congestion Control",
            "description": "Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 2,
            "title": "SSL/TLS 1.3 Handshake",
            "description": "Asymmetric vs Symmetric encryption, Certificate Authorities, and Diffie-Hellman key exchange.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 3,
            "title": "Border Gateway Protocol (BGP)",
            "description": "Autonomous Systems (AS), eBGP vs iBGP, and Internet core routing policies.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "HTTP Evolution (HTTP/1.1 to HTTP/3 QUIC)",
            "description": "Head-of-line blocking, multiplexing in HTTP/2, and UDP-based QUIC protocol.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Raw Socket Packet Analyzer Project",
            "description": "Implement a raw socket packet sniffer parsing IP, TCP, and UDP headers in C/Python.",
            "duration": "8 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "How TLS 1.3 Works - A Technical Overview",
            "url": "https://www.youtube.com/watch?v=17XW_7p0k7Q",
            "channel": "F5 DevCentral",
            "level": "Advanced",
            "description": "Technical walkthrough of modern encrypted web traffic handshakes.",
            "type": "Video"
          },
          {
            "title": "HTTP/3 and QUIC: The Next-Gen Internet Protocol",
            "url": "https://www.youtube.com/watch?v=481W_Zl5iRs",
            "channel": "Hussein Nasser",
            "level": "Advanced",
            "description": "Why the web moved from TCP to UDP-based QUIC for HTTP/3.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "RFC 8446 - The Transport Layer Security (TLS) Protocol 1.3",
            "url": "https://datatracker.ietf.org/doc/html/rfc8446",
            "description": "Official internet standard defining modern web encryption.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Cloudflare Learning: How Does the Internet Work?",
            "url": "https://www.cloudflare.com/learning/",
            "description": "Outstanding architectural articles on DNS, BGP, CDN, and DDoS defense.",
            "type": "Guide",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is head-of-line (HOL) blocking in HTTP/1.1 and how did HTTP/2 solve it?",
            "answer": "In HTTP/1.1, a single TCP connection could only process one request at a time; if the first request stalled, all others behind it were blocked. HTTP/2 solved this by multiplexing multiple independent request streams over a single TCP connection.",
            "difficulty": "Advanced",
            "topic": "HTTP"
          },
          {
            "question": "How does Diffie-Hellman key exchange establish a shared secret over an insecure channel?",
            "answer": "Both parties agree on public base and modulus numbers, generate private secrets, exchange public calculated keys, and combine them mathematically to arrive at the identical shared symmetric key without transmitting the secret itself.",
            "difficulty": "Advanced",
            "topic": "Cryptography"
          }
        ],
        "projects": [
          {
            "title": "Lightweight Multi-Threaded HTTP/1.1 Web Server in C/Python",
            "description": "Build an HTTP web server from raw sockets supporting concurrent connections, MIME types, and 200/404 responses.",
            "difficulty": "Advanced",
            "techStack": [
              "C / Python",
              "Sockets",
              "HTTP/1.1",
              "Multithreading"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-operating-systems",
    "title": "Operating Systems & Kernel Architecture",
    "category": "Operating Systems",
    "level": "All Levels",
    "duration": "10 weeks",
    "description": "Learn operating system internals: processes, threads, CPU scheduling algorithms, synchronization (semaphores, mutexes), deadlocks, virtual memory, and page replacement.",
    "coverImage": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Prof. Sanchit Jain",
      "email": "sanchit@eduflow.io"
    },
    "prerequisites": [
      "Basic computer organization and C programming basics"
    ],
    "learningOutcomes": [
      "Understand system calls, dual-mode execution (User vs Kernel mode), and interrupt handling",
      "Analyze CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority)",
      "Solve race conditions using Peterson's algorithm, semaphores, and mutexes",
      "Master Virtual Memory, paging, TLB, page faults, and replacement algorithms (FIFO, LRU)"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: OS Structures & Process Concept",
        "duration": "2 weeks",
        "topics": [
          "Kernel vs User mode (Ring 0 vs Ring 3)",
          "System calls & trap instructions",
          "Process Control Block (PCB) & state transitions",
          "fork(), exec(), and wait() system calls"
        ]
      },
      {
        "moduleTitle": "Module 2: CPU Scheduling Algorithms",
        "duration": "2 weeks",
        "topics": [
          "Preemptive vs Non-preemptive scheduling",
          "FCFS, SJF, and Shortest Remaining Time First (SRTF)",
          "Round Robin (time quantum trade-offs)",
          "Priority scheduling & multi-level feedback queues"
        ]
      },
      {
        "moduleTitle": "Module 3: Process Synchronization & Deadlocks",
        "duration": "3 weeks",
        "topics": [
          "Critical section problem & race conditions",
          "Peterson's solution & test-and-set hardware",
          "Semaphores (binary & counting) and Mutexes",
          "Banker's algorithm for Deadlock avoidance"
        ]
      },
      {
        "moduleTitle": "Module 4: Memory Management & Paging",
        "duration": "3 weeks",
        "topics": [
          "Logical vs physical address binding",
          "Paging, Page Tables, and TLB cache",
          "Virtual Memory & Page Fault handling",
          "Page replacement algorithms (FIFO, Optimal, LRU)"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "OS role, kernel structures, processes, threads, and system calls.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "What is an Operating System?",
            "description": "Resource management, user interface, and kernel vs application software.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "Dual Mode Operation",
            "description": "User mode vs Kernel mode, privileged instructions, and hardware interrupts.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Process vs Thread",
            "description": "Address spaces, process states (Ready, Running, Waiting), and PCB.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Process Creation in Linux",
            "description": "Writing C programs using fork(), getpid(), and wait().",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Simple Command Shell in C",
            "description": "Build a basic interactive command-line shell executing programs with fork and exec.",
            "duration": "5 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Operating Systems Full Course",
            "url": "https://www.youtube.com/watch?v=vBURTt97EkA",
            "channel": "Gate Smashers",
            "level": "Beginner",
            "description": "The absolute standard comprehensive video series covering all OS concepts.",
            "type": "Playlist"
          },
          {
            "title": "Operating Systems Course - Introduction & Core Concepts",
            "url": "https://www.youtube.com/watch?v=26QPDBe-NB8",
            "channel": "Neso Academy",
            "level": "Beginner",
            "description": "Clear animated lectures explaining memory and process states.",
            "type": "Playlist"
          }
        ],
        "notesResources": [
          {
            "title": "Operating System Concepts (Silberschatz Dinosaur Book) Summary",
            "url": "https://os-book.com/",
            "description": "Official lecture slide summaries of the premier global OS textbook.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "GeeksforGeeks Operating Systems Archive",
            "url": "https://www.geeksforgeeks.org/operating-systems/",
            "description": "Complete study guide for university exams and tech interviews.",
            "type": "Notes",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the difference between a process and a thread?",
            "answer": "A process is an executing program with its own dedicated memory address space, whereas a thread is a lightweight execution unit inside a process that shares code, data, and resources with peer threads.",
            "difficulty": "Beginner",
            "topic": "Processes"
          },
          {
            "question": "What happens during a context switch?",
            "answer": "The OS saves the state (CPU registers, program counter) of the currently running process to its PCB and restores the saved state of the next scheduled process.",
            "difficulty": "Beginner",
            "topic": "Processes"
          }
        ],
        "projects": [
          {
            "title": "Unix Mini-Shell Implementation",
            "description": "A CLI shell program that reads user input, forks child processes, and executes system commands.",
            "difficulty": "Beginner",
            "techStack": [
              "C",
              "Linux System Calls",
              "fork/exec"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "CPU Scheduling Algorithms, Critical Section Problem, and Classical Synchronization.",
        "prerequisites": [
          "Basic process concepts and C programming"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "CPU Scheduling Math",
            "description": "Calculating Average Waiting Time and Turnaround Time for FCFS, SJF, and Round Robin.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Critical Section & Race Conditions",
            "description": "Mutual exclusion, progress, and bounded waiting requirements.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Semaphores & Mutexes",
            "description": "wait() / P() and signal() / V() operations, binary vs counting semaphores.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Classical IPC Problems",
            "description": "Producer-Consumer (bounded buffer), Reader-Writer, and Dining Philosophers.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 5,
            "title": "CPU Scheduler Simulator Project",
            "description": "Program simulating FCFS, SJF, and Round Robin scheduling with Gantt chart output.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "CPU Scheduling Algorithms with Solved Examples",
            "url": "https://www.youtube.com/watch?v=ewabbflrnqU",
            "channel": "Gate Smashers",
            "level": "Intermediate",
            "description": "Solving Round Robin, SRTF, and priority scheduling step-by-step.",
            "type": "Video"
          },
          {
            "title": "Process Synchronization & Semaphores Explained",
            "url": "https://www.youtube.com/watch?v=phxK68f6y4Q",
            "channel": "Neso Academy",
            "level": "Intermediate",
            "description": "Deep dive into race conditions, critical sections, and semaphores.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "OSTEP - Operating Systems: Three Easy Pieces (Free Book)",
            "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/",
            "description": "Widely praised, modern, open-access operating systems textbook.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "OS Scheduling Algorithms Cheat Sheet",
            "url": "https://devhints.io/os",
            "description": "Quick formulas for turnaround time, waiting time, and completion time.",
            "type": "CheatSheet",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What are the four necessary conditions for a Deadlock to occur?",
            "answer": "1. Mutual Exclusion 2. Hold and Wait 3. No Preemption 4. Circular Wait.",
            "difficulty": "Intermediate",
            "topic": "Deadlocks"
          },
          {
            "question": "What is the priority inversion problem and how is it solved?",
            "answer": "A low-priority thread holding a lock blocks a high-priority thread while an intermediate thread preempts the low-priority one. It is solved using Priority Inheritance (elevating the lock-holder's priority temporarily).",
            "difficulty": "Intermediate",
            "topic": "Synchronization"
          }
        ],
        "projects": [
          {
            "title": "Multi-Threaded Producer-Consumer Simulator",
            "description": "Implement thread-safe circular buffer synchronization with POSIX semaphores and mutexes in C.",
            "difficulty": "Intermediate",
            "techStack": [
              "C",
              "pthreads",
              "Semaphores",
              "Mutex"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Virtual Memory, Paging, TLB, Page Replacement (LRU), and Deadlock Avoidance (Banker's Algorithm).",
        "prerequisites": [
          "Proficient in scheduling and synchronization"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Deadlock Avoidance & Banker's Algorithm",
            "description": "Safe vs Unsafe states, Resource Allocation Graphs, and Banker's safety algorithm.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Virtual Memory & Paging Mechanics",
            "description": "Page tables, Frame allocation, Page size trade-offs, and Multi-level paging.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 3,
            "title": "Translation Lookaside Buffer (TLB)",
            "description": "Effective Memory Access Time (EMAT) calculations with TLB hit ratios.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Page Replacement Algorithms",
            "description": "FIFO, Belady's Anomaly, Optimal replacement, and Least Recently Used (LRU).",
            "duration": "6 hours"
          },
          {
            "stepNumber": 5,
            "title": "Virtual Memory Page Replacement Simulator",
            "description": "Build a simulator comparing FIFO, LRU, and Optimal page replacement hit rates.",
            "duration": "7 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Virtual Memory and Paging in Operating Systems",
            "url": "https://www.youtube.com/watch?v=2qukyPqLi0g",
            "channel": "Gate Smashers",
            "level": "Advanced",
            "description": "Step-by-step mathematical breakdown of page tables and address translation.",
            "type": "Video"
          },
          {
            "title": "Banker's Algorithm for Deadlock Avoidance",
            "url": "https://www.youtube.com/watch?v=7gMLNiEl3tU",
            "channel": "Neso Academy",
            "level": "Advanced",
            "description": "Numerical example calculating safe sequences and resource requests.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Linux Kernel Virtual Memory Documentation",
            "url": "https://www.kernel.org/doc/html/latest/admin-guide/mm/concepts.html",
            "description": "Official documentation on physical and virtual memory management in Linux.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "MIT 6.S081: Operating System Engineering Course",
            "url": "https://pdos.csail.mit.edu/6.828/2023/",
            "description": "MIT course building and exploring the xv6 teaching operating system.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is Belady's Anomaly in page replacement?",
            "answer": "Belady's Anomaly is the phenomenon where increasing the number of allocated memory page frames causes an increase in the number of page faults (observable in the FIFO algorithm).",
            "difficulty": "Advanced",
            "topic": "Paging"
          },
          {
            "question": "What is thrashing in an operating system?",
            "answer": "Thrashing occurs when a computer's virtual memory subsystem is in a constant state of paging (swapping pages between RAM and disk), spending more time servicing page faults than executing instructions.",
            "difficulty": "Advanced",
            "topic": "Virtual Memory"
          }
        ],
        "projects": [
          {
            "title": "LRU Cache & Virtual Memory Paging Simulator",
            "description": "Simulate virtual memory address translation, TLB hits/misses, and LRU page eviction on access traces.",
            "difficulty": "Advanced",
            "techStack": [
              "C++ / Python",
              "LRU Cache",
              "Paging"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-cybersecurity",
    "title": "Cybersecurity Fundamentals & Network Defense",
    "category": "Cybersecurity Fundamentals",
    "level": "All Levels",
    "duration": "8 weeks",
    "description": "Learn cyber defense: ethical hacking fundamentals, OWASP Top 10 web vulnerabilities, cryptography, penetration testing, and security hardening.",
    "coverImage": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "The Cyber Mentor",
      "email": "tcm@eduflow.io"
    },
    "prerequisites": [
      "Basic networking and Linux command line familiarity"
    ],
    "learningOutcomes": [
      "Understand the CIA Triad (Confidentiality, Integrity, Availability) and attack vectors",
      "Identify and remediate OWASP Top 10 vulnerabilities (SQL Injection, XSS, CSRF)",
      "Master cryptographic fundamentals (hashing, public-key encryption, certificates)",
      "Conduct ethical reconnaissance and vulnerability scanning using standard tools"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Security Fundamentals & Threat Landscape",
        "duration": "2 weeks",
        "topics": [
          "CIA Triad & Defense-in-depth",
          "Threat actors, malware types, and phishing vectors",
          "Linux security & permission auditing",
          "Virtual labs setup (Kali Linux & Metasploitable)"
        ]
      },
      {
        "moduleTitle": "Module 2: Network Security & Scanning",
        "duration": "2 weeks",
        "topics": [
          "Port scanning with Nmap",
          "Traffic analysis with Wireshark",
          "Firewalls, IDS/IPS, and DMZ architectures",
          "Wireless network vulnerabilities"
        ]
      },
      {
        "moduleTitle": "Module 3: Web Application Security (OWASP Top 10)",
        "duration": "2 weeks",
        "topics": [
          "SQL Injection (SQLi) exploitation & prepared statements",
          "Cross-Site Scripting (XSS: Stored, Reflected, DOM)",
          "Cross-Site Request Forgery (CSRF)",
          "Broken Object Level Authorization (BOLA)"
        ]
      },
      {
        "moduleTitle": "Module 4: Cryptography & Defense Operations",
        "duration": "2 weeks",
        "topics": [
          "Hashing (SHA-256) vs Encryption (AES, RSA)",
          "PKI, SSL/TLS, and Certificate revocation",
          "Incident response lifecycle & log analysis",
          "Security hardening best practices"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Cybersecurity principles, CIA triad, password security, and Linux basics.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Core Principles of Security",
            "description": "Confidentiality, Integrity, Availability, and Authentication vs Authorization.",
            "duration": "2 hours"
          },
          {
            "stepNumber": 2,
            "title": "Common Cyber Threats",
            "description": "Phishing, Ransomware, Trojan, Social Engineering, and Man-in-the-Middle attacks.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 3,
            "title": "Linux Terminal for Security",
            "description": "File permissions (chmod, chown), user accounts, and process inspection.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Password Security & 2FA",
            "description": "Entropy, hashing algorithms, salting, and multi-factor authentication protocols.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 5,
            "title": "Network Vulnerability Audit Project",
            "description": "Audit local machine services and ports to identify open insecure endpoints.",
            "duration": "4 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Cyber Security Full Course for Beginners",
            "url": "https://www.youtube.com/watch?v=U_P23uqUAtQ",
            "channel": "freeCodeCamp.org",
            "level": "Beginner",
            "description": "Complete 11-hour zero-to-hero introductory course to cybersecurity.",
            "type": "Video"
          },
          {
            "title": "Introduction to Cybersecurity - Practical Ethical Hacking",
            "url": "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
            "channel": "The Cyber Mentor",
            "level": "Beginner",
            "description": "Friendly introduction to ethical hacking career pathways and tools.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "NIST Cybersecurity Framework",
            "url": "https://www.nist.gov/cyberframework",
            "description": "The official federal cybersecurity framework and guidelines.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "Cybersecurity Concepts Cheat Sheet",
            "url": "https://devhints.io/security",
            "description": "Quick guide to encryption algorithms, ports, and terms.",
            "type": "CheatSheet",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is the difference between encryption and hashing?",
            "answer": "Encryption is a two-way function where ciphertext can be decrypted back to plaintext with a key. Hashing is a one-way mathematical function that produces a fixed-size digest that cannot be reversed.",
            "difficulty": "Beginner",
            "topic": "Cryptography"
          },
          {
            "question": "What is Phishing?",
            "answer": "A social engineering attack where attackers impersonate reputable entities via email or messages to trick victims into revealing sensitive credentials or downloading malware.",
            "difficulty": "Beginner",
            "topic": "Threats"
          }
        ],
        "projects": [
          {
            "title": "Security Audit & Password Strength Checker",
            "description": "Build an entropy-based password analyzer evaluating resistance to dictionary attacks.",
            "difficulty": "Beginner",
            "techStack": [
              "Python / JavaScript",
              "Security"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "OWASP Top 10, Port scanning with Nmap, and SQL Injection prevention.",
        "prerequisites": [
          "Basic networking and web application understanding"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Network Reconnaissance with Nmap",
            "description": "TCP SYN scans (-sS), service version detection (-sV), and OS fingerprinting.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "SQL Injection (SQLi) In-Depth",
            "description": "Classic SQLi, Union-based, Error-based, and defense using Parameterized queries.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Cross-Site Scripting (XSS)",
            "description": "Stored vs Reflected XSS, cookie theft, and defense using Content Security Policy (CSP).",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Authentication Vulnerabilities",
            "description": "JWT signature bypass, brute force mitigation, and session fixation.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "DVWA (Damn Vulnerable Web App) Lab",
            "description": "Identify and exploit vulnerabilities safely inside an isolated practice sandbox.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "OWASP Top 10 Web Vulnerabilities Explained",
            "url": "https://www.youtube.com/watch?v=XhI2mO12oQY",
            "channel": "NetworkChuck",
            "level": "Intermediate",
            "description": "Fun, visual explanation of the top web security vulnerabilities.",
            "type": "Video"
          },
          {
            "title": "Nmap Tutorial - Complete Network Scanning Guide",
            "url": "https://www.youtube.com/watch?v=4t4kBkMsDbQ",
            "channel": "HackerSploit",
            "level": "Intermediate",
            "description": "Complete practical walkthrough of port scanning with Nmap.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "OWASP Top 10 Official Documentation",
            "url": "https://owasp.org/www-project-top-ten/",
            "description": "The definitive standard awareness document for web application security.",
            "type": "Documentation",
            "level": "Intermediate"
          },
          {
            "title": "PortSwigger Web Security Academy",
            "url": "https://portswigger.net/web-security",
            "description": "Free interactive labs and world-class documentation on web security.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "How do Parameterized Queries (Prepared Statements) prevent SQL Injection?",
            "answer": "They separate SQL code from user-supplied data. The database compiles the query structure first, treating user input purely as literal parameter values rather than executable code.",
            "difficulty": "Intermediate",
            "topic": "OWASP"
          },
          {
            "question": "What is a Cross-Site Request Forgery (CSRF) attack and how is it mitigated?",
            "answer": "CSRF tricks an authenticated victim into executing unwanted actions on a trusted site. It is prevented using anti-CSRF tokens and SameSite cookie attributes.",
            "difficulty": "Intermediate",
            "topic": "OWASP"
          }
        ],
        "projects": [
          {
            "title": "Vulnerability Scanner & Header Auditor",
            "description": "Script auditing a target domain for missing security headers (CSP, HSTS, X-Frame-Options).",
            "difficulty": "Intermediate",
            "techStack": [
              "Python",
              "Requests",
              "HTTP Security"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "Penetration Testing, Buffer Overflows, Cryptanalysis, and Incident Response.",
        "prerequisites": [
          "Proficient in web security and network protocols"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Binary Exploitation & Buffer Overflows",
            "description": "Stack memory layout, instruction pointer (EIP) overwrite, and shellcode injection.",
            "duration": "7 hours"
          },
          {
            "stepNumber": 2,
            "title": "Public Key Cryptography & PKI",
            "description": "RSA mathematical foundations, elliptic curve cryptography (ECC), and key exchange.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 3,
            "title": "Active Directory & Enterprise Defense",
            "description": "Kerberos authentication, tickets (TGT/TGS), and lateral movement detection.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 4,
            "title": "Security Operations & Incident Response",
            "description": "SIEM log aggregation, threat hunting, and the MITRE ATT&CK matrix.",
            "duration": "6 hours"
          },
          {
            "stepNumber": 5,
            "title": "Complete Penetration Test & Remediation Report",
            "description": "Perform ethical penetration test on a vulnerable machine and write an executive audit report.",
            "duration": "10 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Buffer Overflow Tutorial - Binary Exploitation",
            "url": "https://www.youtube.com/watch?v=1S0aBV-Waeo",
            "channel": "LiveOverflow",
            "level": "Advanced",
            "description": "Exceptional deep visual dive into low-level memory exploitation.",
            "type": "Video"
          },
          {
            "title": "MITRE ATT&CK Framework Explained",
            "url": "https://www.youtube.com/watch?v=l_8_gXzL9h0",
            "channel": "John Hammond",
            "level": "Advanced",
            "description": "Practical walkthrough of threat actor tactics, techniques, and procedures (TTPs).",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "MITRE ATT&CK Matrix for Enterprise",
            "url": "https://attack.mitre.org/",
            "description": "Globally accessible knowledge base of adversary tactics and techniques.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "Cisco Security Incident Handling Guide",
            "url": "https://www.cisco.com/c/en/us/products/security/incident-response.html",
            "description": "Industry incident response life cycle and forensic processes.",
            "type": "Documentation",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "What is Address Space Layout Randomization (ASLR)?",
            "answer": "A computer security defense technique that randomizes memory locations of key program areas (stack, heap, libraries) to prevent attackers from reliably jumping to target exploit code in memory.",
            "difficulty": "Advanced",
            "topic": "Exploitation"
          },
          {
            "question": "How does Elliptic Curve Cryptography (ECC) compare to RSA in terms of key size?",
            "answer": "ECC provides equivalent cryptographic security with dramatically smaller key lengths (e.g. a 256-bit ECC key offers comparable security to a 3072-bit RSA key), reducing computation and bandwidth.",
            "difficulty": "Advanced",
            "topic": "Cryptography"
          }
        ],
        "projects": [
          {
            "title": "Enterprise Threat Detection & SIEM Rule Engine",
            "description": "Analyze server access and authentication logs in real-time to alert on brute force and anomaly spikes.",
            "difficulty": "Advanced",
            "techStack": [
              "Python",
              "Log Parsing",
              "Regex",
              "SIEM"
            ]
          }
        ]
      }
    }
  },
  {
    "_id": "course-aptitude-interview",
    "title": "Aptitude, Logical Reasoning & Interview Preparation",
    "category": "Aptitude and Interview Preparation",
    "level": "All Levels",
    "duration": "6 weeks",
    "description": "Prepare for campus placements and technical interviews: Quantitative Aptitude, Logical Reasoning, Verbal Ability, Resume crafting, and Mock Interview strategies.",
    "coverImage": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60",
    "faculty": {
      "name": "Placement Mentors Team",
      "email": "mentors@eduflow.io"
    },
    "prerequisites": [
      "Basic high-school arithmetic and logical thinking"
    ],
    "learningOutcomes": [
      "Solve quantitative questions: Time & Work, Speed & Distance, Percentages, and Probability",
      "Master logical reasoning: Puzzles, Blood Relations, Syllogisms, and Coding-Decoding",
      "Ace verbal ability: Reading comprehension, sentence correction, and vocabulary",
      "Prepare technical and behavioral interview responses using the STAR method"
    ],
    "curriculum": [
      {
        "moduleTitle": "Module 1: Quantitative Aptitude Foundations",
        "duration": "2 weeks",
        "topics": [
          "Numbers, HCF & LCM shortcuts",
          "Percentages, Profit & Loss formulas",
          "Ratios, Proportions, and Averages",
          "Time & Work, Pipes & Cisterns"
        ]
      },
      {
        "moduleTitle": "Module 2: Advanced Quantitative Math",
        "duration": "2 weeks",
        "topics": [
          "Time, Speed & Distance, Trains & Boats",
          "Simple & Compound Interest calculations",
          "Permutations, Combinations & Probability",
          "Data Interpretation (Bar, Pie, Table charts)"
        ]
      },
      {
        "moduleTitle": "Module 3: Logical & Analytical Reasoning",
        "duration": "1 week",
        "topics": [
          "Blood Relations and Family Trees",
          "Seating Arrangement (Circular & Linear)",
          "Syllogisms and Venn diagrams",
          "Direction Sense and Clocks & Calendars"
        ]
      },
      {
        "moduleTitle": "Module 4: Technical & HR Interview Mastery",
        "duration": "1 week",
        "topics": [
          "Resume formatting & ATS optimization",
          "Behavioral questions (STAR method)",
          "Explaining projects clearly to recruiters",
          "Salary negotiation and asking good questions"
        ]
      }
    ],
    "levelsData": {
      "Beginner": {
        "description": "Basic arithmetic, percentages, ratios, and number systems.",
        "prerequisites": [
          "None. Beginners welcome!"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Fast Mental Math & Tricks",
            "description": "Squaring shortcuts, percentage fractions (1/6 = 16.66%), and rapid multiplication.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 2,
            "title": "Percentages & Profit/Loss",
            "description": "Cost price, selling price, marked price, and discount calculations.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 3,
            "title": "Ratios, Proportions & Averages",
            "description": "Weighted averages, mixture allegations, and age problem equations.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 4,
            "title": "Basic Number Systems",
            "description": "Divisibility rules, unit digit calculation, and remainders theorem.",
            "duration": "3 hours"
          },
          {
            "stepNumber": 5,
            "title": "Daily Aptitude Quiz Practice",
            "description": "Solve 50 curated placement aptitude questions under timed conditions.",
            "duration": "4 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Aptitude Made Easy - Complete Quantitative Course",
            "url": "https://www.youtube.com/watch?v=0w8eH3F8rBs",
            "channel": "Freshersworld.com",
            "level": "Beginner",
            "description": "Top shortcuts for campus recruitment tests and placements.",
            "type": "Playlist"
          },
          {
            "title": "Quantitative Aptitude Shortcuts for Placements",
            "url": "https://www.youtube.com/watch?v=5V_l1jH0Rqk",
            "channel": "CareerRide",
            "level": "Beginner",
            "description": "Friendly step-by-step solved examples on percentages and profit/loss.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "IndiaBIX Quantitative Aptitude Questions",
            "url": "https://www.indiabix.com/aptitude/questions-and-answers/",
            "description": "The most popular practice test bank with step-by-step solutions.",
            "type": "Documentation",
            "level": "Beginner"
          },
          {
            "title": "Aptitude Formulas Cheat Sheet",
            "url": "https://devhints.io/aptitude",
            "description": "All core placement arithmetic formulas on a single page.",
            "type": "CheatSheet",
            "level": "Beginner"
          }
        ],
        "practiceQuestions": [
          {
            "question": "A person sells an article for ₹840 making a profit of 20%. What was the cost price?",
            "answer": "Cost Price = Selling Price / (1 + Profit%) = 840 / 1.2 = ₹700.",
            "difficulty": "Beginner",
            "topic": "Profit and Loss"
          },
          {
            "question": "If A completes a work in 10 days and B in 15 days, in how many days will they finish working together?",
            "answer": "Combined work per day = (1/10 + 1/15) = 5/30 = 1/6. Together they finish in 6 days.",
            "difficulty": "Beginner",
            "topic": "Time and Work"
          }
        ],
        "projects": [
          {
            "title": "Timed Aptitude Quiz Portal",
            "description": "Interactive quiz application with countdown timer, score tally, and detailed answer explanations.",
            "difficulty": "Beginner",
            "techStack": [
              "HTML/CSS/JS",
              "Quiz Engine"
            ]
          }
        ]
      },
      "Intermediate": {
        "description": "Time & Work, Speed & Distance, Probability, and Logical Reasoning Puzzles.",
        "prerequisites": [
          "Basic percentages and arithmetic"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "Time, Speed & Distance",
            "description": "Relative speed of trains, river stream speed (upstream/downstream).",
            "duration": "5 hours"
          },
          {
            "stepNumber": 2,
            "title": "Permutations & Combinations",
            "description": "nPr, nCr, word rearrangements with duplicate letters, and seating orders.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Probability Mastery",
            "description": "Dice, cards, coins, conditional probability, and independent events.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "Seating Arrangements & Puzzles",
            "description": "Circular seating facing center/outwards, floor puzzle arrangements.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 5,
            "title": "Timed Placement Mock Exam",
            "description": "Full-length 60-question comprehensive mock placement assessment.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "Logical Reasoning Full Course for Placements",
            "url": "https://www.youtube.com/watch?v=W_ZpP1bKj9s",
            "channel": "CareerRide",
            "level": "Intermediate",
            "description": "Clear lessons on seating arrangements, blood relations, and syllogisms.",
            "type": "Playlist"
          },
          {
            "title": "Probability and Permutations Masterclass",
            "url": "https://www.youtube.com/watch?v=XqQTXW7Xf1M",
            "channel": "Feel Free to Learn",
            "level": "Intermediate",
            "description": "Shortcuts and clarity for probability and combination questions.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "GeeksforGeeks Placement Preparation Hub",
            "url": "https://www.geeksforgeeks.org/placements-gq/",
            "description": "Curated company-wise placement papers and aptitude question sets.",
            "type": "Guide",
            "level": "Intermediate"
          },
          {
            "title": "Logical Reasoning Formulas & Strategies",
            "url": "https://www.indiabix.com/logical-reasoning/questions-and-answers/",
            "description": "Practice banks covering blood relations, direction sense, and coding.",
            "type": "Guide",
            "level": "Intermediate"
          }
        ],
        "practiceQuestions": [
          {
            "question": "A train 150m long is travelling at 54 km/h. How many seconds will it take to cross a pole?",
            "answer": "Speed in m/s = 54 * (5/18) = 15 m/s. Time = Distance / Speed = 150 / 15 = 10 seconds.",
            "difficulty": "Intermediate",
            "topic": "Time and Distance"
          },
          {
            "question": "Two dice are rolled simultaneously. What is the probability that the sum of the numbers is 8?",
            "answer": "Favorable pairs: (2,6), (3,5), (4,4), (5,3), (6,2) = 5 outcomes. Total possible outcomes = 36. Probability = 5/36.",
            "difficulty": "Intermediate",
            "topic": "Probability"
          }
        ],
        "projects": [
          {
            "title": "Company Aptitude Practice Simulator",
            "description": "Simulate TCS/Infosys/Wipro pattern aptitude round with sectional time limits.",
            "difficulty": "Intermediate",
            "techStack": [
              "React",
              "JavaScript",
              "CSS"
            ]
          }
        ]
      },
      "Advanced": {
        "description": "STAR Method, Behavioral Interviewing, Technical System Explanations, and Resume Optimization.",
        "prerequisites": [
          "Proficient in aptitude test fundamentals"
        ],
        "roadmap": [
          {
            "stepNumber": 1,
            "title": "ATS Resume Architecture",
            "description": "Writing action-oriented bullet points: \"Accomplished [X], measured by [Y], by doing [Z]\".",
            "duration": "4 hours"
          },
          {
            "stepNumber": 2,
            "title": "STAR Method for Behavioral Rounds",
            "description": "Structuring Situation, Task, Action, Result answers for leadership and conflict queries.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 3,
            "title": "Explaining Projects to Technical Panels",
            "description": "Architecture diagrams, explaining trade-offs, scalability, and handling tough questions.",
            "duration": "5 hours"
          },
          {
            "stepNumber": 4,
            "title": "HR Round & Salary Negotiation",
            "description": "Handling weaknesses, gaps, long-term goals, and professional salary discussions.",
            "duration": "4 hours"
          },
          {
            "stepNumber": 5,
            "title": "Full Technical Mock Interview",
            "description": "Practice complete 45-minute live behavioral and problem-solving interview simulation.",
            "duration": "6 hours"
          }
        ],
        "youtubeResources": [
          {
            "title": "How to Ace Your Coding & Technical Interview",
            "url": "https://www.youtube.com/watch?v=1qw5ITr3k9E",
            "channel": "Clément Mihailescu",
            "level": "Advanced",
            "description": "Practical behavioral and technical communication tips from an ex-Google engineer.",
            "type": "Video"
          },
          {
            "title": "Tell Me About Yourself - Best Answer Example",
            "url": "https://www.youtube.com/watch?v=es7Xplbhuao",
            "channel": "Self Made Millennial",
            "level": "Advanced",
            "description": "How to structure an impressive, concise elevator pitch to recruiters.",
            "type": "Video"
          }
        ],
        "notesResources": [
          {
            "title": "Tech Interview Handbook - Behavioral Questions",
            "url": "https://www.techinterviewhandbook.org/behavioral-interview/",
            "description": "The premier free handbook for preparing software engineer interviews.",
            "type": "Documentation",
            "level": "Advanced"
          },
          {
            "title": "STAR Method Guide - Harvard Career Services",
            "url": "https://careerservices.fas.harvard.edu/",
            "description": "Official Harvard guidance on effective behavioral response framing.",
            "type": "Guide",
            "level": "Advanced"
          }
        ],
        "practiceQuestions": [
          {
            "question": "How do you answer: \"Tell me about a time you faced a technical conflict with a team member\"?",
            "answer": "Use STAR: Outline the project context (Situation), the differing approaches (Task), how you evaluated data/benchmarks objectively and held a respectful conversation (Action), and the successful delivery outcome (Result).",
            "difficulty": "Advanced",
            "topic": "Behavioral"
          },
          {
            "question": "What is the most effective way to explain your project in a technical interview?",
            "answer": "Start with high-level purpose (problem solved and users), explain the architecture stack, detail the hardest technical challenge you solved, and finish with measurable performance metrics.",
            "difficulty": "Advanced",
            "topic": "Communication"
          }
        ],
        "projects": [
          {
            "title": "Interactive Resume & Project Showcase Portfolio",
            "description": "Build an ATS-optimized, interactive developer portfolio showcasing technical projects, GitHub metrics, and live demos.",
            "difficulty": "Advanced",
            "techStack": [
              "React",
              "CSS",
              "Portfolio Design"
            ]
          }
        ]
      }
    }
  }
];

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

    console.log(`✅ Seeding complete! Successfully added/updated ${coursesData.length} core subject courses across all categories.`);
    process.exit(0);
  } catch (err) {
    console.error(`❌ Seeding failed: ${err.message}`);
    process.exit(1);
  }
};

seedDB();
