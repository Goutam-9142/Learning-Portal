/**
 * ═══════════════════════════════════════════════════════════════════════════
 * New and Enhanced Course Catalog Definitions
 * Includes: Frontend Development, Backend Development, HTML, CSS,
 * Data Structures & Algorithms, Machine Learning, Data Science, AI,
 * and Software Engineering.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const courseFrontendDev = {
  _id: 'course-frontend-dev',
  title: 'Modern Frontend Development: Zero to Hero',
  category: 'Frontend Development',
  level: 'All Levels',
  duration: '12 weeks',
  description: 'Master modern frontend engineering: responsive UI layouts, ES6+ JavaScript, React architecture, TypeScript, state management, and performance optimization.',
  coverImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60',
  faculty: { name: 'Dan Abramov', email: 'dan@eduflow.io' },
  prerequisites: ['Basic computer literacy', 'A modern web browser and VS Code'],
  learningOutcomes: [
    'Design pixel-perfect responsive layouts using CSS Flexbox and 2D CSS Grid',
    'Write clean, modern ES6+ JavaScript and consume asynchronous REST APIs',
    'Architect robust Single Page Applications with React 18, Hooks, and Router',
    'Incorporate TypeScript for end-to-end type safety and compile-time correctness',
    'Optimize web performance, Core Web Vitals, accessibility, and automated tests',
  ],
  curriculum: [
    { moduleTitle: 'Module 1: Responsive Layouts & CSS Mastery', duration: '3 weeks', topics: ['HTML5 Semantics', 'Flexbox Alignment', 'CSS Grid Systems', 'Responsive Breakpoints & Media Queries'] },
    { moduleTitle: 'Module 2: JavaScript Mastery & Async APIs', duration: '3 weeks', topics: ['DOM Manipulation', 'ES6+ Features', 'Promises & Async/Await', 'Fetch API & JSON Processing'] },
    { moduleTitle: 'Module 3: React.js Component Architecture', duration: '3 weeks', topics: ['Components & Props', 'React State & Hooks', 'React Router v6', 'Form Validation & Context'] },
    { moduleTitle: 'Module 4: Advanced Architecture & Production', duration: '3 weeks', topics: ['TypeScript Integration', 'State Management (Zustand/Redux)', 'Testing with Vitest/RTL', 'Performance & Accessibility (WCAG)'] },
  ],
  levelsData: {
    Beginner: {
      description: 'Master HTML, CSS, Flexbox, CSS Grid, responsive design, JavaScript fundamentals, DOM manipulation, and Git.',
      prerequisites: ['None. Beginners welcome!'],
      roadmap: [
        { stepNumber: 1, title: 'HTML Foundations', description: 'Semantic tags, document outline, links, media, and form controls.', duration: '4 hours' },
        { stepNumber: 2, title: 'CSS Styling & Cascade', description: 'Selectors, specificity, typography, colors, and the CSS box model.', duration: '5 hours' },
        { stepNumber: 3, title: 'Flexbox Layouts', description: 'Flex containers, direction, justify-content, align-items, and flex-wrap.', duration: '4 hours' },
        { stepNumber: 4, title: 'CSS Grid Layouts', description: 'Two-dimensional grid tracks, fr units, grid-template-areas, and auto-fit.', duration: '5 hours' },
        { stepNumber: 5, title: 'Responsive Design', description: 'Mobile-first workflows, media queries, clamp() fluid typography, and viewports.', duration: '4 hours' },
        { stepNumber: 6, title: 'JavaScript Fundamentals', description: 'Data types, variables, conditionals, loops, functions, and arrays.', duration: '6 hours' },
        { stepNumber: 7, title: 'DOM Manipulation', description: 'Selecting elements, adding event listeners, dynamic style manipulation.', duration: '5 hours' },
        { stepNumber: 8, title: 'Git and GitHub', description: 'Version control workflows, commit history, branching, and pushing to remotes.', duration: '4 hours' },
        { stepNumber: 9, title: 'Build a Responsive Website', description: 'Build and deploy a responsive product landing page with mobile hamburger nav.', duration: '8 hours' },
      ],
      youtubeResources: [
        { title: 'Frontend Web Development Bootcamp Course', url: 'https://www.youtube.com/watch?v=zJSY8tbf_ys', channel: 'freeCodeCamp.org', level: 'Beginner', description: 'Complete step-by-step introduction to frontend development and responsive design.', type: 'Video' },
        { title: 'CSS Flexbox & Grid Masterclass', url: 'https://www.youtube.com/watch?v=JJSoEo8JSnc', channel: 'Kevin Powell', level: 'Beginner', description: 'In-depth visual guide to mastering CSS layout systems.', type: 'Video' },
      ],
      notesResources: [
        { title: 'MDN Frontend Web Developer Path', url: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer', description: 'Official Mozilla Developer Network comprehensive curriculum.', type: 'Documentation', level: 'Beginner' },
        { title: 'CSS-Tricks Flexbox & Grid Guides', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', description: 'Definitive visual cheat sheets for CSS Flexbox and 2D Grid.', type: 'CheatSheet', level: 'Beginner' },
      ],
      practiceQuestions: [
        { question: 'When should you choose CSS Grid over Flexbox for a layout?', answer: 'Use Flexbox for one-dimensional layouts (a single row or column of items) and CSS Grid for two-dimensional layouts where alignment across both rows and columns is required.', solution: 'Flexbox = 1D content-first flow. CSS Grid = 2D layout-first structure with precise row/column control.', difficulty: 'Beginner', topic: 'CSS Layouts' },
        { question: 'What is event delegation in JavaScript and why is it useful?', answer: 'Event delegation attaches a single event listener to a parent element to manage events for all existing and dynamically added child elements via event bubbling, conserving memory.', solution: 'Listen on parent: parent.addEventListener("click", (e) => { if (e.target.matches(".child")) { ... } }); avoids attaching hundreds of individual listeners.', difficulty: 'Beginner', topic: 'DOM Manipulation' },
      ],
      projects: [
        { title: 'Responsive Product Showcase Landing Page', description: 'Build a mobile-first responsive landing page with sticky navbar, hero section, features grid, pricing cards, and interactive FAQ accordion.', difficulty: 'Beginner', techStack: ['HTML5', 'CSS Grid', 'Flexbox', 'JavaScript'], features: ['Mobile-first responsive layout', 'CSS Grid feature matrix', 'Interactive FAQ accordion using vanilla JS', 'Fully compliant with W3C validation'] },
      ],
    },
    Intermediate: {
      description: 'Advanced JavaScript, ES6+, Promises, async/await, React.js components, hooks, routing, and API integration.',
      prerequisites: ['HTML5, CSS3, and JavaScript basics'],
      roadmap: [
        { stepNumber: 1, title: 'Advanced JavaScript & Prototypes', description: 'Prototypes, prototype chain, "this" binding, closures, and lexical scope.', duration: '6 hours' },
        { stepNumber: 2, title: 'ES6+ Features & Syntax', description: 'Destructuring, rest/spread, template strings, default parameters, and ES modules.', duration: '4 hours' },
        { stepNumber: 3, title: 'Promises and Async/Await', description: 'Promise states, chaining, Promise.all, async/await syntax, and error handling.', duration: '5 hours' },
        { stepNumber: 4, title: 'Fetch API & REST Integrations', description: 'GET/POST requests, JSON serialization, headers, and HTTP status codes.', duration: '5 hours' },
        { stepNumber: 5, title: 'React.js Foundations', description: 'JSX syntax, components, props validation, and virtual DOM reconciliation.', duration: '6 hours' },
        { stepNumber: 6, title: 'Components, Props, and State', description: 'Managing local component state with useState, props drilling vs composition.', duration: '6 hours' },
        { stepNumber: 7, title: 'React Hooks Mastery', description: 'useEffect lifecycle management, useRef for DOM nodes, and custom reusable hooks.', duration: '7 hours' },
        { stepNumber: 8, title: 'React Router v6', description: 'Browser router, route parameters, nested routes, protected routes, and programmatic navigation.', duration: '5 hours' },
        { stepNumber: 9, title: 'Form Handling & Validation', description: 'Controlled inputs, form submission handling, and validation error messages.', duration: '5 hours' },
        { stepNumber: 10, title: 'API Integration in React', description: 'Fetching data inside useEffect, loading states, error boundaries, and debounce.', duration: '6 hours' },
        { stepNumber: 11, title: 'Build a React Project', description: 'Develop and deploy an interactive analytics and finance dashboard.', duration: '10 hours' },
      ],
      youtubeResources: [
        { title: 'React 18 Full Course - Complete Guide', url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8', channel: 'Traversy Media', level: 'Intermediate', description: 'Hands-on React course with components, hooks, router, and context.', type: 'Video' },
        { title: 'Async JavaScript: Promises, Async/Await & Fetch', url: 'https://www.youtube.com/watch?v=PoRJizFvM7s', channel: 'freeCodeCamp.org', level: 'Intermediate', description: 'Deep dive into asynchronous JavaScript and network request patterns.', type: 'Video' },
      ],
      notesResources: [
        { title: 'React.dev Official Documentation', url: 'https://react.dev/learn', description: 'The official interactive learning guide from the React core team.', type: 'Documentation', level: 'Intermediate' },
        { title: 'JavaScript.info: The Modern JavaScript Tutorial', url: 'https://javascript.info/', description: 'In-depth reference on ES6+, closures, prototypes, and asynchronous execution.', type: 'Guide', level: 'Intermediate' },
      ],
      practiceQuestions: [
        { question: 'What is the purpose of useEffect dependency array in React?', answer: 'The dependency array instructs React when to re-execute the effect. If empty ([]), it runs once on mount. If containing variables ([a, b]), it re-runs when any dependency value changes by shallow equality.', solution: 'No array: runs after every render.\nEmpty []: runs once on mount/unmount.\nWith dependencies [foo]: re-runs when foo changes.', difficulty: 'Intermediate', topic: 'React Hooks' },
        { question: 'What is the difference between Promise.all and Promise.allSettled?', answer: 'Promise.all rejects immediately as soon as any single promise rejects (fail-fast), whereas Promise.allSettled waits for all promises to settle regardless of whether they fulfilled or rejected.', solution: 'Use Promise.all when all results are strictly interdependent. Use Promise.allSettled when independent outcomes should all be inspected.', difficulty: 'Intermediate', topic: 'Async JavaScript' },
      ],
      projects: [
        { title: 'Interactive Analytics & Finance Dashboard', description: 'Build a responsive multi-page dashboard featuring live chart visualizations, filtering, search, and external API data.', difficulty: 'Intermediate', techStack: ['React', 'React Router', 'Recharts', 'Fetch API', 'CSS Modules'], features: ['Multi-page navigation with React Router', 'Interactive financial charts with Recharts', 'Dynamic search filter with debounced input', 'Dark/light theme toggle saved to localStorage'] },
      ],
    },
    Advanced: {
      description: 'Advanced React patterns, TypeScript, state management, performance optimization, testing, accessibility, and production architecture.',
      prerequisites: ['Solid React 18 knowledge and intermediate JavaScript'],
      roadmap: [
        { stepNumber: 1, title: 'Advanced React Patterns', description: 'Compound components, render props, higher-order components, and context selectors.', duration: '6 hours' },
        { stepNumber: 2, title: 'TypeScript for Frontend', description: 'Props interfaces, generic components, Discriminated Unions, and strict type safety.', duration: '8 hours' },
        { stepNumber: 3, title: 'State Management at Scale', description: 'Zustand, Redux Toolkit, React Query (TanStack Query) for server state caching.', duration: '7 hours' },
        { stepNumber: 4, title: 'Performance Optimization', description: 'React.memo, useMemo, useCallback, virtualization (TanStack Virtual), and bundle splitting.', duration: '6 hours' },
        { stepNumber: 5, title: 'Lazy Loading & Code Splitting', description: 'Route-based and component-based code splitting using React.lazy and Suspense.', duration: '5 hours' },
        { stepNumber: 6, title: 'Frontend Testing', description: 'Unit testing with Vitest/Jest, component tests with React Testing Library, and MSW mocking.', duration: '8 hours' },
        { stepNumber: 7, title: 'Web Accessibility (a11y)', description: 'ARIA attributes, keyboard navigation, focus trap in modals, and automated axe-core audits.', duration: '5 hours' },
        { stepNumber: 8, title: 'Security Best Practices', description: 'Sanitizing user inputs (DOMPurify), CSP headers, preventing XSS, and safe iframe embeds.', duration: '5 hours' },
        { stepNumber: 9, title: 'Frontend Architecture', description: 'Atomic design, feature-sliced design, monorepos, and design system token distribution.', duration: '6 hours' },
        { stepNumber: 10, title: 'Build a Production-Ready Application', description: 'Deliver a production-grade multi-tenant collaborative workspace.', duration: '12 hours' },
      ],
      youtubeResources: [
        { title: 'Advanced React Patterns & Performance Tuning', url: 'https://www.youtube.com/watch?v=HYKZXg7_tQY', channel: 'Jack Herrington', level: 'Advanced', description: 'Deep architectural dive into compound components, state stores, and rendering performance.', type: 'Video' },
        { title: 'TypeScript Full Course for Beginners to Advanced', url: 'https://www.youtube.com/watch?v=BwuLxPH8IDs', channel: 'freeCodeCamp.org', level: 'Advanced', description: 'Comprehensive TypeScript course covering interfaces, generics, and React integration.', type: 'Video' },
      ],
      notesResources: [
        { title: 'TypeScript Handbook Official Documentation', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', description: 'Official reference guide for type definitions, interfaces, and generics.', type: 'Documentation', level: 'Advanced' },
        { title: 'Kent C. Dodds: React Testing Library Principles', url: 'https://testing-library.com/docs/react-testing-library/intro/', description: 'Best practices for writing maintainable, user-centric frontend tests.', type: 'Guide', level: 'Advanced' },
      ],
      practiceQuestions: [
        { question: 'When does useMemo improve performance and when does it hurt performance?', answer: 'useMemo improves performance only when computing an expensive value (e.g. filtering 10,000 items) or maintaining referential stability for downstream memoized components. Overusing it on trivial operations adds memory overhead and unnecessary comparison cycles.', solution: 'Profile with React DevTools Profiler before wrapping calculations. Never use it for simple arithmetic or short array mapping.', difficulty: 'Advanced', topic: 'React Performance' },
        { question: 'What is a Discriminated Union in TypeScript and how does it prevent state bugs in React?', answer: 'A Discriminated Union is a type composition where multiple interfaces share a common literal property (the discriminant), enabling TypeScript to narrow types with 100% compile-time exhaustiveness.', solution: 'type State = { status: "loading" } | { status: "success", data: T } | { status: "error", error: Error }; prevents rendering data when status is "loading".', difficulty: 'Advanced', topic: 'TypeScript' },
      ],
      projects: [
        { title: 'Multi-Tenant Collaborative Kanban Workspace', description: 'Build an enterprise-grade collaborative task application featuring drag-and-drop boards, optimistic updates, and end-to-end TypeScript.', difficulty: 'Advanced', techStack: ['React', 'TypeScript', 'Zustand', 'TailwindCSS', 'Vitest', 'RTL'], features: ['Type-safe state store with Zustand', 'Drag-and-drop column and card organization', '100% unit and component test coverage with Vitest & RTL', 'Automated accessibility compliance check with axe-core'] },
      ],
    },
  },
};

console.log('courseFrontendDev built.');
