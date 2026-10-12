/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Catalog Part 2: Backend Development, HTML, and CSS
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const courseBackendDev = {
  _id: 'course-backend-dev',
  title: 'Scalable Backend Engineering & Architecture',
  category: 'Backend Development',
  level: 'All Levels',
  duration: '12 weeks',
  description: 'Build robust, production-grade backend systems: Node.js, Express, REST APIs, database indexing, caching, authentication, and microservice architectures.',
  coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60',
  faculty: { name: 'Hussein Nasser', email: 'hussein@eduflow.io' },
  prerequisites: ['Basic JavaScript syntax', 'Terminal/command line basics'],
  learningOutcomes: [
    'Architect production RESTful APIs using Node.js and Express',
    'Design normalized relational databases and flexible NoSQL schemas',
    'Implement secure user authentication with JWT and bcrypt password hashing',
    'Optimize query performance using indexes, connection pooling, and Redis caching',
    'Deploy containerized backend microservices with automated testing and CI/CD',
  ],
  curriculum: [
    { moduleTitle: 'Module 1: Server Foundations & Node.js Core', duration: '3 weeks', topics: ['Client-Server Model', 'Node.js Event-Driven Architecture', 'npm & Module System', 'Express.js Routing & Middleware'] },
    { moduleTitle: 'Module 2: REST APIs & Database Integration', duration: '3 weeks', topics: ['REST API Design', 'MongoDB & Mongoose Schemas', 'SQL Fundamentals & Relations', 'Input Validation & Error Handling'] },
    { moduleTitle: 'Module 3: Security & Authentication', duration: '3 weeks', topics: ['Password Hashing with bcrypt', 'JWT Tokens & Refresh Flow', 'CORS, Helmet & Rate Limiting', 'Automated API Testing with Supertest'] },
    { moduleTitle: 'Module 4: Performance, Caching & Deployment', duration: '3 weeks', topics: ['Database Indexing & Explain Plans', 'Redis Caching & Queue Workers', 'Docker Containers & Cloud Deployment', 'CI/CD Pipelines & Monitoring'] },
  ],
  levelsData: {
    Beginner: {
      description: 'Introduction to backend engineering, client-server models, HTTP/HTTPS, Node.js fundamentals, npm, Express.js basics, REST APIs, and database basics.',
      prerequisites: ['Basic JavaScript syntax'],
      roadmap: [
        { stepNumber: 1, title: 'What Is Backend Development?', description: 'Server responsibilities, business logic, persistence layers, and API communication.', duration: '3 hours' },
        { stepNumber: 2, title: 'Client-Server Architecture', description: 'Request-response cycles, IP addresses, ports, DNS resolution, and TCP/IP basics.', duration: '3 hours' },
        { stepNumber: 3, title: 'HTTP and HTTPS', description: 'Methods (GET, POST, PUT, DELETE), headers, status codes (2xx, 4xx, 5xx), and SSL/TLS encryption.', duration: '4 hours' },
        { stepNumber: 4, title: 'JavaScript for Backend Development', description: 'Node.js runtime, V8 engine, file system (fs), and path modules.', duration: '5 hours' },
        { stepNumber: 5, title: 'Node.js Fundamentals', description: 'Event loop, non-blocking I/O, streams, buffers, and event emitters.', duration: '5 hours' },
        { stepNumber: 6, title: 'npm and Package Management', description: 'package.json, dependencies, semantic versioning, and running scripts.', duration: '3 hours' },
        { stepNumber: 7, title: 'Express.js Basics', description: 'Setting up an Express application, basic route handlers, and request/response objects.', duration: '5 hours' },
        { stepNumber: 8, title: 'REST API Fundamentals', description: 'Resource-oriented URIs, HTTP verbs mapping to actions, and JSON formatting.', duration: '5 hours' },
        { stepNumber: 9, title: 'Basic CRUD Operations', description: 'Creating, reading, updating, and deleting records in memory with Express.', duration: '5 hours' },
        { stepNumber: 10, title: 'Introduction to Databases', description: 'Understanding relational (SQL) vs document (NoSQL) storage models.', duration: '4 hours' },
      ],
      youtubeResources: [
        { title: 'Node.js & Express.js - Full Course for Beginners', url: 'https://www.youtube.com/watch?v=Oe421EPjeBE', channel: 'freeCodeCamp.org', level: 'Beginner', description: 'Learn backend development with Node.js and Express from the ground up.', type: 'Video' },
        { title: 'REST API Concepts and Examples', url: 'https://www.youtube.com/watch?v=lsMQRaeKNDk', channel: 'Web Dev Simplified', level: 'Beginner', description: 'Crystal-clear explanation of REST architectural principles and HTTP verbs.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Node.js Official Documentation', url: 'https://nodejs.org/en/docs', description: 'Comprehensive API reference for the Node.js runtime.', type: 'Documentation', level: 'Beginner' },
        { title: 'Express.js Getting Started Guide', url: 'https://expressjs.com/en/starter/installing.html', description: 'Official fast, unopinionated, minimalist web framework guide.', type: 'Documentation', level: 'Beginner' },
      ],
      practiceQuestions: [
        { question: 'Why is Node.js called "single-threaded and non-blocking"?', answer: 'Node.js executes JavaScript code in a single thread via the V8 engine, but offloads asynchronous I/O operations (file system, network calls) to the operating system or libuv thread pool, enabling high concurrency without blocking the main thread.', solution: 'Main thread processes event loop. Heavy I/O is delegated to libuv worker threads. Callbacks notify the event loop when I/O completes.', difficulty: 'Beginner', topic: 'Node.js Core' },
        { question: 'What is the semantic difference between PUT and PATCH HTTP methods?', answer: 'PUT replaces the entire resource representation with the provided payload. PATCH applies partial modifications to specific fields of the existing resource.', solution: 'PUT: Full update (missing fields are reset or deleted). PATCH: Partial update (only specified fields are modified).', difficulty: 'Beginner', topic: 'HTTP Standards' },
      ],
      projects: [
        { title: 'Bookstore & Catalog REST API', description: 'Build an Express.js REST API providing complete CRUD endpoints for an online bookstore catalog with JSON persistence.', difficulty: 'Beginner', techStack: ['Node.js', 'Express', 'JSON', 'Postman'], features: ['Clean resource endpoints (/api/books)', 'Request body validation for title and price', 'Structured error responses with HTTP status codes', 'Postman collection for automated testing'] },
      ],
    },
    Intermediate: {
      description: 'REST API development, Express middleware, MongoDB & Mongoose, SQL fundamentals, JWT authentication, validation, error handling, and API testing.',
      prerequisites: ['Node.js basics and basic database concepts'],
      roadmap: [
        { stepNumber: 1, title: 'REST API Development', description: 'Structuring scalable route hierarchies, controllers, and service layers.', duration: '6 hours' },
        { stepNumber: 2, title: 'Express Middleware', description: 'Built-in, third-party (cors, helmet, morgan), and custom request middleware.', duration: '5 hours' },
        { stepNumber: 3, title: 'MongoDB and Mongoose', description: 'Schema definition, types, validation, virtuals, and aggregation pipelines.', duration: '7 hours' },
        { stepNumber: 4, title: 'SQL Fundamentals', description: 'Relational tables, foreign keys, inner/outer joins, and ACID transactions.', duration: '6 hours' },
        { stepNumber: 5, title: 'Authentication and Authorization', description: 'Password hashing with bcrypt and role-based access control (RBAC).', duration: '6 hours' },
        { stepNumber: 6, title: 'JWT Fundamentals', description: 'Signing, verifying, and decoding JSON Web Tokens with expiry management.', duration: '5 hours' },
        { stepNumber: 7, title: 'Input Validation', description: 'Sanitizing and validating payloads with Joi or Zod schema validators.', duration: '5 hours' },
        { stepNumber: 8, title: 'Centralized Error Handling', description: 'Global error-handling middleware, custom AppError classes, and async handlers.', duration: '5 hours' },
        { stepNumber: 9, title: 'API Testing', description: 'Automated integration testing of endpoints using Jest and Supertest.', duration: '6 hours' },
        { stepNumber: 10, title: 'Frontend and Backend Integration', description: 'Connecting client applications, handling CORS credentials, and file uploads.', duration: '6 hours' },
        { stepNumber: 11, title: 'Build a Complete CRUD Application', description: 'Develop a complete authenticated social feed API with image uploads.', duration: '12 hours' },
      ],
      youtubeResources: [
        { title: 'Node.js, Express, MongoDB & JWT Tutorial', url: 'https://www.youtube.com/watch?v=-0exw-9YJBo', channel: 'Traversy Media', level: 'Intermediate', description: 'Complete authentication system with JWT, protected routes, and MongoDB.', type: 'Video' },
        { title: 'Postman Tutorial for API Testing', url: 'https://www.youtube.com/watch?v=VywxIQ2ZXw4', channel: 'freeCodeCamp.org', level: 'Intermediate', description: 'Automate endpoint validation, environment variables, and testing scripts.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Mongoose Official Documentation', url: 'https://mongoosejs.com/docs/guide.html', description: 'Comprehensive guide to schemas, models, queries, and middleware in Mongoose.', type: 'Documentation', level: 'Intermediate' },
        { title: 'JWT.io Introduction to JSON Web Tokens', url: 'https://jwt.io/introduction', description: 'Official standard specification and visual debugger for JWT.', type: 'Guide', level: 'Intermediate' },
      ],
      practiceQuestions: [
        { question: 'Why should passwords never be stored in plain text, and how does bcrypt prevent attacks?', answer: 'Storing plain text leaks user credentials on any database breach. bcrypt uses a one-way cryptographic hash with an automatically generated salt and adjustable cost factor (work factor) to defend against rainbow table and brute-force attacks.', solution: 'bcrypt.hash(password, saltRounds) generates salted hash. bcrypt.compare(plain, hash) safely verifies without decrypting.', difficulty: 'Intermediate', topic: 'Authentication & Security' },
        { question: 'What is the role of next(err) in Express middleware?', answer: 'Passing an argument to next() signals an error to Express, causing it to bypass all regular remaining route handlers and jump straight to the designated error-handling middleware (functions with 4 parameters: err, req, res, next).', solution: 'app.use((err, req, res, next) => { res.status(err.status || 500).json({ error: err.message }); });', difficulty: 'Intermediate', topic: 'Express Middleware' },
      ],
      projects: [
        { title: 'Authenticated Social Feed API with Media Uploads', description: 'Build an Express and MongoDB REST API with user registration, JWT authentication, post creation, comments, and Multer file uploads.', difficulty: 'Intermediate', techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Multer', 'Supertest'], features: ['User signup and login with hashed passwords', 'Role-scoped route protection (user, admin)', 'Multipart image upload with Multer and disk storage', 'Automated integration test suite with Jest and Supertest'] },
      ],
    },
    Advanced: {
      description: 'Backend architecture, database indexing, query optimization, API security, rate limiting, caching with Redis, CI/CD, background jobs, and scalability.',
      prerequisites: ['Solid REST API development and database experience'],
      roadmap: [
        { stepNumber: 1, title: 'Backend Architecture', description: 'Layered architecture, Clean Architecture, Dependency Injection, and Repository pattern.', duration: '7 hours' },
        { stepNumber: 2, title: 'Database Indexing & Query Optimization', description: 'B-tree vs Hash indexes, compound indexes, explain plans, and query performance tuning.', duration: '7 hours' },
        { stepNumber: 3, title: 'API Security & Hardening', description: 'Preventing NoSQL injection, timing attacks, helmet HTTP headers, and CORS security.', duration: '6 hours' },
        { stepNumber: 4, title: 'Rate Limiting & DDoS Defense', description: 'Token bucket and sliding window rate limiting algorithms using Redis stores.', duration: '5 hours' },
        { stepNumber: 5, title: 'Caching Fundamentals with Redis', description: 'Cache-aside, write-through strategies, cache invalidation, and TTL expiration.', duration: '7 hours' },
        { stepNumber: 6, title: 'Logging and Monitoring', description: 'Structured JSON logging with Winston/Pino, correlation IDs, and Prometheus metrics.', duration: '6 hours' },
        { stepNumber: 7, title: 'Automated Testing at Scale', description: 'Unit tests, database integration test containers, and load testing with k6.', duration: '7 hours' },
        { stepNumber: 8, title: 'Background Jobs & Message Queues', description: 'Asynchronous task processing with BullMQ/RabbitMQ for emails and reports.', duration: '7 hours' },
        { stepNumber: 9, title: 'Deployment & Containerization', description: 'Writing multi-stage Dockerfiles, Docker Compose, and health-check endpoints.', duration: '6 hours' },
        { stepNumber: 10, title: 'CI/CD Pipelines', description: 'Automated test execution, linting, Docker image push, and zero-downtime deployment.', duration: '6 hours' },
        { stepNumber: 11, title: 'Scalability and Performance', description: 'Horizontal scaling, stateless sessions, load balancers (NGINX), and database read replicas.', duration: '8 hours' },
        { stepNumber: 12, title: 'Build a Production Backend Project', description: 'Architect and deploy a high-throughput URL shortener and analytics engine.', duration: '14 hours' },
      ],
      youtubeResources: [
        { title: 'Backend Engineering Course: Architecture & Scaling', url: 'https://www.youtube.com/watch?v=yox7N7aWjT4', channel: 'Hussein Nasser', level: 'Advanced', description: 'Deep architectural dive into protocols, database pooling, proxies, and scaling.', type: 'Video' },
        { title: 'Redis Crash Course - High-Speed Caching', url: 'https://www.youtube.com/watch?v=jgpVdJB2sKQ', channel: 'Traversy Media', level: 'Advanced', description: 'In-memory caching patterns, TTL expirations, and Redis data structures.', type: 'Video' },
      ],
      notesResources: [
        { title: 'High Performance Browser & Backend Networking', url: 'https://hpbn.co/', description: 'Definitive engineering guide by Ilya Grigorik on network latency and TCP/HTTP.', type: 'Documentation', level: 'Advanced' },
        { title: 'Redis Official Documentation', url: 'https://redis.io/docs/', description: 'Official guide on commands, data persistence, and caching architectures.', type: 'Documentation', level: 'Advanced' },
      ],
      practiceQuestions: [
        { question: 'What is the "Cache Stampede" problem and how do you mitigate it?', answer: 'Cache Stampede occurs when a high-traffic cached key expires, causing thousands of concurrent requests to simultaneously hit the database to recompute the value. Mitigate using mutual exclusion locks (mutex) or probabilistic early expiration (XFetch).', solution: '1. Mutex locking: First request acquires lock to compute; others wait or receive stale data.\n2. Probabilistic early expiration: Background job recomputes key before hard TTL.\n3. Cache warming during off-peak.', difficulty: 'Advanced', topic: 'Caching Architecture' },
        { question: 'How do compound indexes work in MongoDB and why does key order matter (ESR Rule)?', answer: 'Compound indexes index multiple fields together. Query performance relies on the ESR rule: Equality fields first, Sort fields second, and Range fields last. Queries can only utilize index prefixes from left to right.', solution: 'Index { status: 1, createdAt: -1, age: 1 } satisfies find({ status: "active" }).sort({ createdAt: -1 }), but cannot optimize queries skipping the "status" prefix.', difficulty: 'Advanced', topic: 'Database Indexing' },
      ],
      projects: [
        { title: 'High-Throughput URL Shortener & Analytics Engine', description: 'Develop a distributed backend URL shortener with sub-millisecond Redis caching, sliding-window rate limiting, and async BullMQ analytics processing.', difficulty: 'Advanced', techStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker'], features: ['Base62 shortcode generation with unique constraint guarantees', 'Cache-aside Redis layer providing sub-5ms redirection response times', 'Sliding-window IP rate limiting preventing abuse', 'Asynchronous analytics worker queue recording clicks and user agents'] },
      ],
    },
  },
};

export const courseHtml = {
  _id: 'course-html',
  title: 'HTML5 Semantic Architecture & Web Accessibility',
  category: 'HTML',
  level: 'All Levels',
  duration: '4 weeks',
  description: 'Master HTML5 from basic tags and document hierarchies to semantic structure, accessible forms, audio/video media, OpenGraph SEO, and WCAG accessibility standards.',
  coverImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60',
  faculty: { name: 'Kevin Powell', email: 'kevin@eduflow.io' },
  prerequisites: ['Basic computer literacy', 'A text editor (VS Code recommended)'],
  learningOutcomes: [
    'Write clean, accessible, and semantic HTML5 documents',
    'Build complex interactive forms with client-side validation',
    'Incorporate audio, video, SVG, and responsive picture elements',
    'Achieve WCAG 2.1 compliance with ARIA landmarks and screen reader support',
    'Structure metadata for search engine optimization (SEO) and social sharing',
  ],
  curriculum: [
    { moduleTitle: 'Module 1: Document Structure & Core Tags', duration: '1 week', topics: ['Doctype & Document Anatomy', 'Headings & Paragraphs', 'Links & Anchor Navigation', 'Lists & Tables'] },
    { moduleTitle: 'Module 2: Semantic HTML5 Layouts', duration: '1 week', topics: ['Semantic Container Tags', 'Header, Nav, Main, Footer', 'Article vs Section vs Aside', 'Figure & Figcaption'] },
    { moduleTitle: 'Module 3: Forms & Multimedia Integration', duration: '1 week', topics: ['Form Inputs & Attributes', 'Accessible Form Labels', 'HTML5 Form Validation', 'Video, Audio & Picture Tags'] },
    { moduleTitle: 'Module 4: Accessibility, SEO & Web Components', duration: '1 week', topics: ['WCAG & Screen Readers', 'ARIA Landmarks & Roles', 'OpenGraph & JSON-LD SEO', 'HTML Templates & Custom Elements'] },
  ],
  levelsData: {
    Beginner: {
      description: 'Introduction to HTML syntax, document structure, headings, paragraphs, lists, links, images, and basic tables.',
      prerequisites: ['None. Beginners welcome!'],
      roadmap: [
        { stepNumber: 1, title: 'HTML Document Anatomy', description: 'Doctype, html, head, title, meta viewport, and body tags.', duration: '2 hours' },
        { stepNumber: 2, title: 'Text Formatting & Headings', description: 'h1-h6 hierarchy, p, strong, em, blockquote, and span tags.', duration: '3 hours' },
        { stepNumber: 3, title: 'Hyperlinks and Navigation', description: 'Anchor tags, absolute vs relative paths, target="_blank", and rel="noopener".', duration: '3 hours' },
        { stepNumber: 4, title: 'Lists and Hierarchies', description: 'Unordered (ul), ordered (ol), and description (dl) lists.', duration: '2 hours' },
        { stepNumber: 5, title: 'Images and Media', description: 'Image tag, src, alt attributes for accessibility, width, and height.', duration: '3 hours' },
        { stepNumber: 6, title: 'Basic HTML Tables', description: 'table, thead, tbody, tr, th, and td table markup.', duration: '3 hours' },
      ],
      youtubeResources: [
        { title: 'HTML Full Course - Build a Website Tutorial', url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE', channel: 'freeCodeCamp.org', level: 'Beginner', description: 'Complete 4-hour introduction to semantic HTML tags and best practices.', type: 'Video' },
        { title: 'HTML Tutorial for Beginners: 30 Minutes Crash Course', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE', channel: 'Traversy Media', level: 'Beginner', description: 'Quick, clear walk-through of essential HTML markup.', type: 'Video' },
      ],
      notesResources: [
        { title: 'MDN Web Docs: HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics', description: 'Official Mozilla Developer Network guide to semantic HTML tags.', type: 'Documentation', level: 'Beginner' },
        { title: 'HTML Cheat Sheet', url: 'https://htmlcheatsheet.com/', description: 'Interactive reference guide for tags, attributes, and structural elements.', type: 'CheatSheet', level: 'Beginner' },
      ],
      practiceQuestions: [
        { question: 'Why is the "alt" attribute on <img> tags mandatory for good HTML practice?', answer: 'The "alt" attribute provides alternative text for screen readers used by visually impaired learners and displays when the image fails to load, ensuring accessibility and SEO compliance.', solution: 'Always supply concise descriptive alt text: <img src="chart.png" alt="Quarterly sales growth line chart"> or alt="" for decorative images.', difficulty: 'Beginner', topic: 'Accessibility' },
        { question: 'What is the purpose of the <meta name="viewport"> tag in HTML?', answer: 'It tells mobile browsers to scale the webpage to the device\'s physical screen width rather than rendering a desktop view at 980px, enabling mobile-first responsive design.', solution: '<meta name="viewport" content="width=device-width, initial-scale=1.0">', difficulty: 'Beginner', topic: 'Responsive Meta' },
      ],
      projects: [
        { title: 'Structured Academic & Professional Resume', description: 'Build an accessible, well-structured online curriculum vitae (resume) using clean semantic HTML5 markup.', difficulty: 'Beginner', techStack: ['HTML5'], features: ['Proper h1-h3 heading hierarchy', 'Organized education and experience tables', 'Clickable contact anchors (mailto and tel)', 'W3C HTML validator 100% compliant'] },
      ],
    },
    Intermediate: {
      description: 'HTML5 semantic layouts (main, nav, article, section), accessible forms, input types, client-side validation, and responsive media elements.',
      prerequisites: ['Basic HTML knowledge'],
      roadmap: [
        { stepNumber: 1, title: 'HTML5 Semantic Elements', description: 'header, nav, main, article, section, aside, footer, and details/summary.', duration: '4 hours' },
        { stepNumber: 2, title: 'Accessible Forms', description: 'form, label (for/id binding), fieldset, legend, and input types (email, tel, date).', duration: '4 hours' },
        { stepNumber: 3, title: 'HTML5 Form Validation', description: 'required, pattern, min, max, minlength, and custom validity constraints.', duration: '3 hours' },
        { stepNumber: 4, title: 'Audio and Video Embeds', description: 'video and audio tags, controls, autoplay policies, subtitles with track.', duration: '4 hours' },
        { stepNumber: 5, title: 'Responsive Picture Element', description: 'picture, source (media queries), srcset, and sizes for high-DPI displays.', duration: '3 hours' },
        { stepNumber: 6, title: 'Dialog and Popover APIs', description: 'Native HTML5 dialog tag with showModal() and native popovers.', duration: '3 hours' },
      ],
      youtubeResources: [
        { title: 'HTML Forms Tutorial - Beginner to Pro', url: 'https://www.youtube.com/watch?v=fNcJuPIZ2WE', channel: 'SuperSimpleDev', level: 'Intermediate', description: 'Comprehensive guide to inputs, labels, validation, and form submission.', type: 'Video' },
        { title: 'HTML5 Semantic Elements: Why and How to Use Them', url: 'https://www.youtube.com/watch?v=kGW8Al_cga4', channel: 'Kevin Powell', level: 'Intermediate', description: 'Deep dive into picking the right semantic HTML container for every layout.', type: 'Video' },
      ],
      notesResources: [
        { title: 'MDN Web Docs: HTML Forms Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms', description: 'Comprehensive guide to building, styling, and validating web forms.', type: 'Documentation', level: 'Intermediate' },
        { title: 'HTML5 Semantic Specification by W3C', url: 'https://www.w3.org/TR/html52/semantics.html', description: 'Official standard definitions of semantic tags and their content models.', type: 'Documentation', level: 'Intermediate' },
      ],
      practiceQuestions: [
        { question: 'Why is connecting <label for="xyz"> to <input id="xyz"> critical for accessibility?', answer: 'Clicking the label focuses the connected input (increasing click target area), and screen readers announce the label text when the input receives keyboard focus.', solution: 'Always bind using for and matching id, or nest <label>Name <input ...></label>.', difficulty: 'Intermediate', topic: 'Form Accessibility' },
        { question: 'When should you choose <article> versus <section>?', answer: '<article> represents self-contained content that could be distributed or syndicated independently (e.g. blog post, product card, forum comment). <section> groups related content within a document, typically having a heading.', solution: '<article> = standalone reusable piece. <section> = thematic chapter or group inside an article or page.', difficulty: 'Intermediate', topic: 'HTML5 Semantics' },
      ],
      projects: [
        { title: 'Accessible Multi-Step Customer Survey Portal', description: 'Design a comprehensive multi-step survey and registration form using semantic HTML5, fieldsets, and native validation.', difficulty: 'Intermediate', techStack: ['HTML5', 'CSS'], features: ['Fieldset grouping for personal info and feedback', 'Strict HTML5 pattern and required validation', 'Native datepickers and range sliders', '100% accessible keyboard focus order'] },
      ],
    },
    Advanced: {
      description: 'Web accessibility (WCAG 2.1, ARIA landmarks, roles, live regions), SEO meta protocols, Web Components, and microdata schema.',
      prerequisites: ['HTML5 semantic and form familiarity'],
      roadmap: [
        { stepNumber: 1, title: 'WCAG 2.1 Principles (POUR)', description: 'Perceivable, Operable, Understandable, and Robust accessibility standards.', duration: '4 hours' },
        { stepNumber: 2, title: 'ARIA Roles, States, and Properties', description: 'role, aria-expanded, aria-hidden, aria-live, and when NOT to use ARIA.', duration: '5 hours' },
        { stepNumber: 3, title: 'SEO Meta & OpenGraph Protocols', description: 'Canonical links, robots meta, OpenGraph cards for Facebook/Twitter, and favicon sets.', duration: '3 hours' },
        { stepNumber: 4, title: 'Structured Data with Schema.org & JSON-LD', description: 'Rich search snippets for courses, articles, organizations, and breadcrumbs.', duration: '4 hours' },
        { stepNumber: 5, title: 'Web Components & Shadow DOM', description: 'Custom Elements, template, slot, and encapsulated Shadow DOM architectures.', duration: '5 hours' },
        { stepNumber: 6, title: 'Enterprise Design System Markup', description: 'Building accessible, reusable semantic primitives for enterprise web applications.', duration: '6 hours' },
      ],
      youtubeResources: [
        { title: 'Web Accessibility (a11y) Full Course', url: 'https://www.youtube.com/watch?v=20SHvU2PKsM', channel: 'freeCodeCamp.org', level: 'Advanced', description: 'Master screen readers, keyboard focus traps, and ARIA attributes.', type: 'Video' },
        { title: 'Web Components Crash Course', url: 'https://www.youtube.com/watch?v=PCWaFLy3VUo', channel: 'Traversy Media', level: 'Advanced', description: 'Custom elements, Shadow DOM, and HTML templates without frameworks.', type: 'Video' },
      ],
      notesResources: [
        { title: 'W3C WAI-ARIA Authoring Practices Guide (APG)', url: 'https://www.w3.org/WAI/ARIA/apg/', description: 'Definitive patterns for accessible accordions, modals, tabs, and menus.', type: 'Documentation', level: 'Advanced' },
        { title: 'Schema.org Course & Article Markup', url: 'https://schema.org/Course', description: 'Official JSON-LD schema specification for search engines.', type: 'Documentation', level: 'Advanced' },
      ],
      practiceQuestions: [
        { question: 'What is the First Rule of ARIA use according to W3C?', answer: 'If you can use a native HTML element or attribute with the semantics and behavior you require already built-in, do that instead of re-purposing an element and adding ARIA.', solution: 'Use <button> instead of <div role="button" tabindex="0">. Native elements provide built-in keyboard events and accessibility.', difficulty: 'Advanced', topic: 'W3C ARIA Standards' },
        { question: 'What is the difference between aria-live="polite" and aria-live="assertive"?', answer: 'aria-live="polite" waits until the screen reader finishes speaking before announcing dynamic updates. aria-live="assertive" interrupts whatever the screen reader is currently saying immediately (used for critical alerts).', solution: 'Polite: For search results count, status updates. Assertive: For immediate error alerts, timeout warnings.', difficulty: 'Advanced', topic: 'ARIA Live Regions' },
      ],
      projects: [
        { title: 'Accessible Enterprise Design System Primitives', description: 'Create a framework-agnostic component library using HTML Web Components with accessible modals, tabs, and alerts.', difficulty: 'Advanced', techStack: ['HTML5', 'Web Components', 'Shadow DOM', 'ARIA'], features: ['WCAG 2.1 AA keyboard focus management in modal dialogs', 'Custom HTML tags (<eduflow-modal>, <eduflow-tabs>)', 'Dynamic JSON-LD schema generation for search engine indexing', 'Zero dependencies pure web platform implementation'] },
      ],
    },
  },
};

export const courseCss = {
  _id: 'course-css',
  title: 'CSS3 Mastery: Modern Layouts, Animations & Architecture',
  category: 'CSS',
  level: 'All Levels',
  duration: '6 weeks',
  description: 'Deep dive into modern CSS: Cascade, Flexbox, 2D CSS Grid, responsive design, fluid typography, animations, container queries, and scalable CSS architectures.',
  coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60',
  faculty: { name: 'Kevin Powell', email: 'kevin@eduflow.io' },
  prerequisites: ['Basic HTML knowledge', 'A code editor (VS Code recommended)'],
  learningOutcomes: [
    'Master the CSS cascade, specificity hierarchy, and inheritance models',
    'Build complex responsive layouts with CSS Flexbox and 2D CSS Grid',
    'Implement fluid responsive typography and spacing using clamp() and min/max',
    'Create smooth 60fps GPU-accelerated keyframe transitions and animations',
    'Leverage modern container queries, subgrid, and modern pseudo-classes (:has)',
  ],
  curriculum: [
    { moduleTitle: 'Module 1: The Cascade, Box Model & Typography', duration: '1 week', topics: ['Cascade Layers & Specificity', 'Box Sizing & Margins', 'Modern Units (rem, em, ch, dvh)', 'Typography & Web Fonts'] },
    { moduleTitle: 'Module 2: Layout Systems: Flexbox & CSS Grid', duration: '2 weeks', topics: ['Flexbox Axes & Alignment', 'CSS Grid 2D Positioning', 'Auto-Fit vs Auto-Fill', 'Subgrid & Complex Track Sizing'] },
    { moduleTitle: 'Module 3: Responsive UI & CSS Variables', duration: '1.5 weeks', topics: ['Mobile-First Media Queries', 'Container Queries (@container)', 'CSS Custom Properties & Theming', 'Fluid Design with clamp()'] },
    { moduleTitle: 'Module 4: Modern Selectors, Animations & Performance', duration: '1.5 weeks', topics: [':has() & Parent Selectors', 'Keyframe Animations', 'GPU Acceleration (transform/opacity)', 'CSS Architecture (BEM/CUBE)'] },
  ],
  levelsData: {
    Beginner: {
      description: 'Introduction to CSS syntax, selectors, cascade, specificity, box model, colors, typography, and backgrounds.',
      prerequisites: ['HTML basics'],
      roadmap: [
        { stepNumber: 1, title: 'CSS Syntax and Connecting Styles', description: 'Internal vs external stylesheets, inline styles, and element selectors.', duration: '2 hours' },
        { stepNumber: 2, title: 'Selectors & Specificity Hierarchy', description: 'Element, class, ID, descendant, child, and pseudo-class selectors.', duration: '3 hours' },
        { stepNumber: 3, title: 'The CSS Box Model', description: 'Content box vs border-box, margins, padding, borders, and margin collapsing.', duration: '4 hours' },
        { stepNumber: 4, title: 'Units and Sizing', description: 'Absolute (px) vs relative units (%, rem, em, vw, vh).', duration: '3 hours' },
        { stepNumber: 5, title: 'Colors and Backgrounds', description: 'Hex, RGB, HSL, alpha channels, gradients, and background-size/position.', duration: '3 hours' },
        { stepNumber: 6, title: 'Typography and Text Styling', description: 'Font families, font-size, line-height, text-align, and Google Fonts integration.', duration: '3 hours' },
      ],
      youtubeResources: [
        { title: 'CSS Tutorial for Beginners - Full Course', url: 'https://www.youtube.com/watch?v=1PnVor36_40', channel: 'freeCodeCamp.org', level: 'Beginner', description: 'Complete step-by-step CSS foundations course.', type: 'Video' },
        { title: 'Learn CSS in 20 Minutes', url: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc', channel: 'Web Dev Simplified', level: 'Beginner', description: 'Fast, clear breakdown of CSS styling fundamentals.', type: 'Video' },
      ],
      notesResources: [
        { title: 'MDN Web Docs: CSS First Steps', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps', description: 'Mozilla Developer Network beginner guide to CSS.', type: 'Documentation', level: 'Beginner' },
        { title: 'CSS Box Model Visualizer', url: 'https://css-tricks.com/the-css-box-model/', description: 'Definitive visual guide to margins, borders, and padding.', type: 'Guide', level: 'Beginner' },
      ],
      practiceQuestions: [
        { question: 'Calculate the specificity of the selector: div.card#featured a:hover', answer: 'Specificity: 1 ID (#featured) + 2 Classes/Pseudos (.card, :hover) + 2 Elements (div, a) = (1, 2, 2) or 122 points.', solution: 'IDs = 100, Classes/Attributes/Pseudos = 10, Elements/Pseudos = 1. Selector has 1 ID (#featured), 1 class (.card), 1 pseudo-class (:hover), and 2 elements (div, a).', difficulty: 'Beginner', topic: 'CSS Specificity' },
        { question: 'What causes vertical margin collapsing in CSS?', answer: 'When top and bottom margins of adjacent block-level elements touch, they collapse into a single margin equal to the largest of the two margins rather than adding together.', solution: 'Margin collapsing occurs only on vertical block margins (not padding, nor horizontal margins, nor flex/grid children).', difficulty: 'Beginner', topic: 'Box Model' },
      ],
      projects: [
        { title: 'Responsive Recipe & Profile Card', description: 'Style an elegant recipe card component with typography, custom borders, and subtle box shadows.', difficulty: 'Beginner', techStack: ['HTML5', 'CSS3'], features: ['Border-box layout sizing', 'Custom color palette using HSL', 'Card hover state elevation', 'Google Fonts typography integration'] },
      ],
    },
    Intermediate: {
      description: 'Flexbox layouts, CSS Grid systems, responsive breakpoints, fluid clamp() typography, CSS variables, and transitions.',
      prerequisites: ['CSS box model and selectors'],
      roadmap: [
        { stepNumber: 1, title: 'CSS Flexbox Layouts', description: 'Main axis vs cross axis, justify-content, align-items, flex-grow, and flex-shrink.', duration: '5 hours' },
        { stepNumber: 2, title: 'CSS Grid 2D Layouts', description: 'grid-template-columns, fr units, grid-template-areas, gap, and align-content.', duration: '6 hours' },
        { stepNumber: 3, title: 'Responsive Design & Media Queries', description: 'Breakpoints for mobile, tablet, desktop, and orientation queries.', duration: '4 hours' },
        { stepNumber: 4, title: 'Fluid Typography & clamp()', description: 'Fluid font-sizing: clamp(1rem, 2.5vw, 2.5rem) without stepped media queries.', duration: '3 hours' },
        { stepNumber: 5, title: 'CSS Custom Properties (Variables)', description: 'Declaring :root variables, scoping, runtime modification, and dark mode theming.', duration: '4 hours' },
        { stepNumber: 6, title: 'Transitions and Transforms', description: 'transition properties, timing functions (cubic-bezier), scale, rotate, and translate.', duration: '4 hours' },
      ],
      youtubeResources: [
        { title: 'CSS Flexbox Tutorial - Complete Guide', url: 'https://www.youtube.com/watch?v=JJSoEo8JSnc', channel: 'Kevin Powell', level: 'Intermediate', description: 'Visual and in-depth guide to understanding Flexbox positioning deeply.', type: 'Video' },
        { title: 'CSS Grid Crash Course', url: 'https://www.youtube.com/watch?v=0xMQfnTU6oo', channel: 'Traversy Media', level: 'Intermediate', description: 'Comprehensive overview of 2-dimensional grid layouts in CSS.', type: 'Video' },
      ],
      notesResources: [
        { title: 'CSS-Tricks: Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', description: 'The definitive visual handbook by CSS-Tricks.', type: 'Guide', level: 'Intermediate' },
        { title: 'CSS-Tricks: Complete Guide to CSS Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', description: 'Complete visual cheatsheet for grid containers and items.', type: 'Guide', level: 'Intermediate' },
      ],
      practiceQuestions: [
        { question: 'What is the difference between repeat(auto-fill, ...) and repeat(auto-fit, ...) in CSS Grid?', answer: 'auto-fill creates as many tracks as possible even if empty. auto-fit creates tracks and then collapses empty tracks to 0px, allowing filled items to stretch across the full available container width.', solution: 'auto-fit collapses empty tracks so items expand to fill remaining space; auto-fill reserves empty track space.', difficulty: 'Intermediate', topic: 'CSS Grid' },
        { question: 'How do you create a system dark mode theme using CSS custom properties?', answer: 'Declare light colors in :root and override custom properties inside an @media (prefers-color-scheme: dark) media query.', solution: ':root { --bg: #ffffff; --text: #0f172a; } @media (prefers-color-scheme: dark) { :root { --bg: #0f172a; --text: #ffffff; } }', difficulty: 'Intermediate', topic: 'Theming' },
      ],
      projects: [
        { title: 'Responsive E-Commerce Product Catalog', description: 'Build an auto-fitting multi-column product showcase with interactive hover elevation, filter sidebar, and dark mode theme toggle.', difficulty: 'Intermediate', techStack: ['HTML5', 'CSS Grid', 'Flexbox', 'CSS Variables'], features: ['auto-fit responsive product card grid', 'CSS custom properties dark mode theme toggle', 'Smooth card image hover scale transform', 'Pure CSS responsive off-canvas filter drawer'] },
      ],
    },
    Advanced: {
      description: 'Keyframe animations, GPU acceleration, container queries, subgrid, modern pseudo-classes (:has), BEM architecture, and rendering performance.',
      prerequisites: ['Flexbox and CSS Grid experience'],
      roadmap: [
        { stepNumber: 1, title: 'Hardware-Accelerated Animations', description: 'transform, opacity, will-change, and preventing layout thrashing and repaints.', duration: '4 hours' },
        { stepNumber: 2, title: 'CSS Container Queries (@container)', description: 'Component-driven styling based on parent container width instead of viewport width.', duration: '5 hours' },
        { stepNumber: 3, title: 'CSS Subgrid', description: 'Inheriting parent grid tracks across nested child elements for unified alignment.', duration: '4 hours' },
        { stepNumber: 4, title: 'The :has() Parent Selector & Pseudo-Classes', description: ':has(), :is(), :where(), and styling parent elements based on child state.', duration: '4 hours' },
        { stepNumber: 5, title: 'Scalable CSS Architecture (BEM & CUBE CSS)', description: 'Block-Element-Modifier naming, utility classes, and component encapsulation.', duration: '4 hours' },
        { stepNumber: 6, title: 'CSS Rendering Engine Optimization', description: 'Containment property (contain), content-visibility: auto, and reducing paint times.', duration: '5 hours' },
      ],
      youtubeResources: [
        { title: 'Modern CSS Features You Need in 2026', url: 'https://www.youtube.com/watch?v=2nff1jXwU7A', channel: 'Kevin Powell', level: 'Advanced', description: 'Practical breakdown of container queries, :has() selector, and CSS subgrid.', type: 'Video' },
        { title: 'High-Performance CSS Animations', url: 'https://www.youtube.com/watch?v=hy00Qk1jM40', channel: 'Google Chrome Developers', level: 'Advanced', description: 'Techniques for building silky-smooth 60fps animations without dropped frames.', type: 'Video' },
      ],
      notesResources: [
        { title: 'MDN Web Docs: CSS Container Queries', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries', description: 'Official guide on container contexts and responsive component architecture.', type: 'Documentation', level: 'Advanced' },
        { title: 'Web.dev: The Parent Selector :has()', url: 'https://web.dev/has-m105/', description: 'Google guide on conditional styling with the modern CSS :has() selector.', type: 'Guide', level: 'Advanced' },
      ],
      practiceQuestions: [
        { question: 'Why does animating "transform: translateY(-10px)" perform better than animating "top: -10px"?', answer: 'Animating "top" forces the browser to recalculate layout (reflow) and repaint every pixel. "transform" runs directly on the GPU compositor thread without triggering layout or repaint, maintaining smooth 60fps.', solution: 'Compositor-only properties: transform and opacity. Always animate these for high performance.', difficulty: 'Advanced', topic: 'Performance' },
        { question: 'How do CSS Container Queries differ from traditional Media Queries?', answer: 'Media queries respond only to the global browser viewport width. Container queries respond to the specific width of the component\'s parent container, enabling truly modular responsive components.', solution: '.parent { container-type: inline-size; } @container (min-width: 400px) { .card { display: flex; } }', difficulty: 'Advanced', topic: 'Container Queries' },
      ],
      projects: [
        { title: 'Modern Animated UI Dashboard with Container Queries', description: 'Develop an enterprise dashboard with modular cards that adapt their layout based on container width, featuring GPU-accelerated keyframe animations.', difficulty: 'Advanced', techStack: ['HTML5', 'CSS Container Queries', 'Subgrid', 'CSS Animations'], features: ['Container queries on dashboard widgets', 'CSS subgrid card header and footer alignment', 'Silky-smooth keyframe animations using transform & opacity', ':has() selector form validation state styling'] },
      ],
    },
  },
};

console.log('Part 2 built (Backend, HTML, CSS).');
