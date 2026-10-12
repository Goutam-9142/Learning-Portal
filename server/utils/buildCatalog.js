/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Master Catalog Builder: Generates portalCourses.js and seedCourses.js
 * Contains complete learning content for all 25 categories with:
 *  - Beginner, Intermediate, and Advanced tiers for EVERY course
 *  - Specific topic curricula matching the user's master prompt
 *  - Verified YouTube tutorials & playlists
 *  - Official documentation & cheat sheets
 *  - Step-by-step learning roadmaps with durations
 *  - Practice interview questions with solutions
 *  - Hands-on projects with tech stack and milestone checklist
 * ═══════════════════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');

const ALL_CATEGORIES = [
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

console.log(`Defined ${ALL_CATEGORIES.length} categories.`);
