/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Catalog Part 3: DSA, Machine Learning, Data Science, AI, and Software Eng.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const courseDsa = {
  _id: 'course-dsa',
  title: 'Data Structures & Algorithms: Complete Mastery',
  category: 'Data Structures & Algorithms',
  level: 'All Levels',
  duration: '14 weeks',
  description: 'Master algorithmic problem solving from time complexity, arrays, strings, and sorting to dynamic programming, graphs, segment trees, and interview excellence.',
  coverImage: 'https://images.unsplash.com/photo-1516116211227-bbc7914e6b64?w=800&auto=format&fit=crop&q=60',
  faculty: { name: 'Abdul Bari', email: 'abdulbari@eduflow.io' },
  prerequisites: ['Basic syntax of one programming language (C++, Java, or Python)'],
  learningOutcomes: [
    'Analyze algorithm efficiency using Big-O, Big-Omega, and Big-Theta notation',
    'Master linear and non-linear data structures: Linked Lists, Stacks, Queues, Trees, Graphs',
    'Implement foundational and advanced sorting and searching algorithms',
    'Solve complex optimization problems using Dynamic Programming and Greedy methods',
    'Excel in technical coding interviews and competitive programming contests',
  ],
  curriculum: [
    { moduleTitle: 'Module 1: Complexity Analysis & Elementary Structures', duration: '3 weeks', topics: ['Big O Notation & Master Theorem', 'Arrays & Strings', 'Searching (Linear, Binary)', 'Elementary Sorting (Bubble, Selection, Insertion)', 'Recursion Fundamentals'] },
    { moduleTitle: 'Module 2: Core Data Structures & Divide & Conquer', duration: '4 weeks', topics: ['Linked Lists (Singly, Doubly)', 'Stacks, Queues & Monotonic Deques', 'Hash Tables & Collision Resolution', 'Trees, BST & Heaps', 'Merge Sort & Quick Sort'] },
    { moduleTitle: 'Module 3: Algorithmic Paradigms & Graphs', duration: '4 weeks', topics: ['Two-Pointer & Sliding Window', 'Greedy Algorithms', 'Backtracking (N-Queens, Sudoku)', 'Graph BFS & DFS', 'Intermediate LeetCode Problems'] },
    { moduleTitle: 'Module 4: Advanced Structures & Dynamic Programming', duration: '3 weeks', topics: ['Advanced Trees (Tries, AVL)', 'Shortest Paths (Dijkstra, Bellman-Ford)', 'Dynamic Programming (1D, 2D, Knapsack)', 'Segment Trees & Fenwick Trees', 'Disjoint Set Union (DSU)'] },
  ],
  levelsData: {
    Beginner: {
      description: 'Programming fundamentals, time/space complexity, Big O, arrays, strings, linear/binary search, elementary sorting, recursion, and basic problem solving.',
      prerequisites: ['Basic programming syntax in any language'],
      roadmap: [
        { stepNumber: 1, title: 'Programming Fundamentals', description: 'Variables, loops, conditionals, memory layout of arrays, and pointers/references.', duration: '4 hours' },
        { stepNumber: 2, title: 'Time and Space Complexity', description: 'Counting operations, worst-case, average-case, and best-case analysis.', duration: '4 hours' },
        { stepNumber: 3, title: 'Big O Notation', description: 'Asymptotic notation: O(1), O(log n), O(n), O(n log n), O(n^2), and O(2^n).', duration: '4 hours' },
        { stepNumber: 4, title: 'Arrays', description: 'Static vs dynamic arrays, memory addresses, element insertion, deletion, and rotation.', duration: '5 hours' },
        { stepNumber: 5, title: 'Strings', description: 'Character encoding (ASCII/Unicode), immutability, reversal, palindromes, and substrings.', duration: '4 hours' },
        { stepNumber: 6, title: 'Basic Searching', description: 'Understanding search spaces, indexed lookups, and unsorted vs sorted lists.', duration: '3 hours' },
        { stepNumber: 7, title: 'Linear Search', description: 'Iterating sequentially through collections, edge cases, and O(n) complexity.', duration: '3 hours' },
        { stepNumber: 8, title: 'Binary Search', description: 'Divide-and-conquer search on sorted arrays, lower/upper bounds, and O(log n) efficiency.', duration: '6 hours' },
        { stepNumber: 9, title: 'Basic Sorting Introduction', description: 'In-place vs out-of-place sorting, stable vs unstable algorithms.', duration: '3 hours' },
        { stepNumber: 10, title: 'Bubble Sort', description: 'Adjacent swapping, pass optimization with boolean flags, and O(n^2) analysis.', duration: '4 hours' },
        { stepNumber: 11, title: 'Selection Sort', description: 'Finding minimum element per pass, swap counts, and O(n^2) performance.', duration: '4 hours' },
        { stepNumber: 12, title: 'Insertion Sort', description: 'Building sorted sub-arrays, shifting elements, and O(n) best-case on nearly sorted data.', duration: '4 hours' },
        { stepNumber: 13, title: 'Recursion Fundamentals', description: 'Call stack anatomy, base conditions, recurrence relations, and recursion tree visualization.', duration: '6 hours' },
        { stepNumber: 14, title: 'Basic Problem-Solving Exercises', description: 'Hands-on practice solving elementary array, string, and math problems.', duration: '8 hours' },
      ],
      youtubeResources: [
        { title: 'Data Structures and Algorithms - Beginner Course', url: 'https://www.youtube.com/watch?v=8hly31xKli0', channel: 'freeCodeCamp.org', level: 'Beginner', description: 'Comprehensive introduction to Big O, arrays, and binary search.', type: 'Video' },
        { title: 'Abdul Bari: Algorithms Analysis & Big O', url: 'https://www.youtube.com/watch?v=9TlHvipP5yA', channel: 'Abdul Bari', level: 'Beginner', description: 'Masterclass explanation of asymptotic notation and recurrence relations.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Big-O Cheat Sheet', url: 'https://www.bigocheatsheet.com/', description: 'Visual charts for time and space complexities of all major data structures and algorithms.', type: 'CheatSheet', level: 'Beginner' },
        { title: 'GeeksforGeeks: DSA Fundamentals Guide', url: 'https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/', description: 'Topic-by-topic reference notes and code examples.', type: 'Guide', level: 'Beginner' },
      ],
      practiceQuestions: [
        { question: 'What is the time complexity of Binary Search and why must the input be sorted?', answer: 'Time complexity is O(log n). It repeatedly divides the search space in half. The array must be sorted so comparing with the middle element reliably eliminates one entire half of remaining elements.', solution: 'Low = 0, High = n - 1. Mid = low + (high - low) / 2. If target == arr[mid], return mid. If target < arr[mid], high = mid - 1; else low = mid + 1.', difficulty: 'Beginner', topic: 'Binary Search' },
        { question: 'What is the space complexity of a recursive function that makes n nested calls?', answer: 'O(n) auxiliary space on the call stack, because each recursive call allocates a stack frame storing local variables and return address until the base condition is reached.', solution: 'Recursion call stack depth = n. Stack frames consume O(1) each => Total O(n) space.', difficulty: 'Beginner', topic: 'Recursion' },
      ],
      projects: [
        { title: 'Sorting Algorithm Visualizer', description: 'Build an interactive web-based sorting visualizer animating Bubble Sort, Selection Sort, and Insertion Sort comparisons in real time.', difficulty: 'Beginner', techStack: ['HTML5', 'CSS3', 'JavaScript'], features: ['Generate randomized bar arrays', 'Step-by-step visual swap animations', 'Speed control slider and comparisons counter', 'Time complexity display for chosen algorithm'] },
      ],
    },
    Intermediate: {
      description: 'Linked lists, stacks, queues, hash tables, trees, BST, heaps, merge/quick sort, two-pointer, sliding window, greedy, backtracking, graphs, BFS/DFS.',
      prerequisites: ['Arrays, Big O notation, and basic recursion'],
      roadmap: [
        { stepNumber: 1, title: 'Linked Lists', description: 'Singly, doubly, and circular linked lists, node insertion, deletion, and fast/slow pointer reversal.', duration: '6 hours' },
        { stepNumber: 2, title: 'Stacks', description: 'LIFO principle, array/linked-list implementations, parenthesization validation, and monotonic stacks.', duration: '5 hours' },
        { stepNumber: 3, title: 'Queues', description: 'FIFO principle, circular queues, deques, and priority queue interfaces.', duration: '5 hours' },
        { stepNumber: 4, title: 'Hash Tables', description: 'Hash functions, load factor, collision resolution (chaining vs open addressing), and O(1) lookups.', duration: '6 hours' },
        { stepNumber: 5, title: 'Trees', description: 'Tree terminology: root, leaf, height, depth, subtree, and recursive properties.', duration: '4 hours' },
        { stepNumber: 6, title: 'Binary Trees', description: 'Full, complete, perfect trees, and traversals: Pre-order, In-order, Post-order, and Level-order.', duration: '6 hours' },
        { stepNumber: 7, title: 'Binary Search Trees (BST)', description: 'BST invariant, search, insert, delete node, LCA, and validation.', duration: '6 hours' },
        { stepNumber: 8, title: 'Heaps and Priority Queues', description: 'Min-heap, max-heap, heapify algorithm, and heapsort in O(n log n).', duration: '6 hours' },
        { stepNumber: 9, title: 'Merge Sort', description: 'Divide-and-conquer splitting, recursive merging, stability, and O(n log n) proof.', duration: '5 hours' },
        { stepNumber: 10, title: 'Quick Sort', description: 'Partitioning schemes (Lomuto vs Hoare), pivot selection, and randomized quicksort.', duration: '5 hours' },
        { stepNumber: 11, title: 'Two-Pointer Technique', description: 'Opposite-direction and same-direction pointers for sorted pair sums and container problems.', duration: '5 hours' },
        { stepNumber: 12, title: 'Sliding Window', description: 'Fixed and variable length windows for maximum subarray and substring problems.', duration: '6 hours' },
        { stepNumber: 13, title: 'Greedy Algorithms', description: 'Greedy choice property, optimal substructure, activity selection, and fractional knapsack.', duration: '6 hours' },
        { stepNumber: 14, title: 'Backtracking', description: 'State-space tree exploration, pruning, N-Queens problem, and Sudoku solver.', duration: '7 hours' },
        { stepNumber: 15, title: 'Graph Fundamentals', description: 'Adjacency matrix vs adjacency list, directed/undirected, and weighted edges.', duration: '5 hours' },
        { stepNumber: 16, title: 'BFS and DFS', description: 'Breadth-First Search (queue) and Depth-First Search (stack/recursion) traversals and cycle detection.', duration: '7 hours' },
        { stepNumber: 17, title: 'Intermediate Coding Problems', description: 'Solving 50+ classic LeetCode medium questions across trees, graphs, and pointers.', duration: '12 hours' },
      ],
      youtubeResources: [
        { title: 'Binary Tree Algorithms - Full Course', url: 'https://www.youtube.com/watch?v=fAAZixBzIAI', channel: 'freeCodeCamp.org', level: 'Intermediate', description: 'Comprehensive guide to binary tree traversals, BSTs, and recursive tree problems.', type: 'Video' },
        { title: 'Graph Theory Full Course', url: 'https://www.youtube.com/watch?v=09_LlHjoEiY', channel: 'freeCodeCamp.org', level: 'Intermediate', description: 'In-depth graph representations, BFS, DFS, and topological sort by William Fiset.', type: 'Video' },
      ],
      notesResources: [
        { title: 'NeetCode 150 Practice Roadmap', url: 'https://neetcode.io/practice', description: 'Curated list of standard coding interview patterns with video solutions.', type: 'Guide', level: 'Intermediate' },
        { title: 'Algorithms by Robert Sedgewick (Princeton)', url: 'https://algs4.cs.princeton.edu/home/', description: 'Authoritative computer science reference for data structures and sorting.', type: 'Documentation', level: 'Intermediate' },
      ],
      practiceQuestions: [
        { question: 'How do you detect a cycle in a Singly Linked List using Floyd\'s Cycle Detection algorithm?', answer: 'Use two pointers (slow moving 1 step, fast moving 2 steps). If there is a cycle, the fast pointer will eventually catch up and meet the slow pointer inside the loop. If fast reaches null, no cycle exists.', solution: 'Slow = head, Fast = head. While (fast && fast.next) { slow = slow.next; fast = fast.next.next; if (slow == fast) return true; } Return false. O(n) time, O(1) space.', difficulty: 'Intermediate', topic: 'Linked Lists' },
        { question: 'What is the difference between BFS and DFS and what underlying data structures do they utilize?', answer: 'BFS explores neighbor nodes layer by layer using a Queue (FIFO). DFS explores as deep as possible down a branch before backtracking using a Stack (or the recursive call stack).', solution: 'BFS: Queue, finds shortest path on unweighted graphs. DFS: Stack/Recursion, topological sorting, connected components.', difficulty: 'Intermediate', topic: 'Graphs' },
      ],
      projects: [
        { title: 'Interactive Maze & Pathfinding Grid Visualizer', description: 'Build a graphical pathfinding visualizer running BFS and DFS algorithms on a 2D grid with user-drawn wall obstacles.', difficulty: 'Intermediate', techStack: ['JavaScript', 'HTML5 Canvas', 'CSS3'], features: ['Draggable start and target nodes', 'Real-time BFS vs DFS search exploration animation', 'Shortest path highlight on goal arrival', 'Clear grid and random maze generation'] },
      ],
    },
    Advanced: {
      description: 'Advanced trees, tries, Dijkstra, MST, dynamic programming, segment trees, Fenwick trees, DSU, shortest paths, and hard interview problems.',
      prerequisites: ['Intermediate trees, graphs, and recursion'],
      roadmap: [
        { stepNumber: 1, title: 'Advanced Trees (AVL & Red-Black)', description: 'Self-balancing binary search trees, tree rotations, and guaranteed O(log n) operations.', duration: '7 hours' },
        { stepNumber: 2, title: 'Tries (Prefix Trees)', description: 'Trie node representation, insert, search, prefix matching, and word dictionary lookups.', duration: '6 hours' },
        { stepNumber: 3, title: 'Advanced Graph Algorithms', description: 'Topological sorting (Kahn\'s algorithm), strongly connected components (Kosaraju, Tarjan).', duration: '7 hours' },
        { stepNumber: 4, title: 'Dijkstra\'s Algorithm', description: 'Single-source shortest path on non-negative weighted graphs with priority queue in O((V + E) log V).', duration: '7 hours' },
        { stepNumber: 5, title: 'Minimum Spanning Trees (MST)', description: 'Kruskal\'s algorithm (with DSU) and Prim\'s algorithm for minimum connection weight.', duration: '6 hours' },
        { stepNumber: 6, title: 'Dynamic Programming Fundamentals', description: 'Overlapping subproblems, optimal substructure, memoization (top-down), and tabulation (bottom-up).', duration: '8 hours' },
        { stepNumber: 7, title: '1D & 2D Dynamic Programming', description: 'Fibonacci, climbing stairs, house robber, 0/1 Knapsack, and Longest Common Subsequence (LCS).', duration: '9 hours' },
        { stepNumber: 8, title: 'Advanced Recursion & Partition DP', description: 'Matrix chain multiplication, palindrome partitioning, and bitmask DP.', duration: '8 hours' },
        { stepNumber: 9, title: 'Segment Trees', description: 'Range query data structure with point updates and range sum/min queries in O(log n).', duration: '7 hours' },
        { stepNumber: 10, title: 'Fenwick Trees (Binary Indexed Tree)', description: 'Compact array-based structure for prefix sums and point updates in O(log n).', duration: '6 hours' },
        { stepNumber: 11, title: 'Disjoint Set Union (DSU / Union-Find)', description: 'Path compression and union by rank/size achieving near O(1) amortized inverse Ackermann time.', duration: '6 hours' },
        { stepNumber: 12, title: 'All-Pairs & Negative Shortest Paths', description: 'Bellman-Ford algorithm (detecting negative cycles) and Floyd-Warshall O(V^3) algorithm.', duration: '6 hours' },
        { stepNumber: 13, title: 'Advanced Complexity Analysis', description: 'Amortized analysis (aggregate method, accounting method, potential method).', duration: '5 hours' },
        { stepNumber: 14, title: 'Competitive Programming Techniques', description: 'Bit manipulation tricks, binary lifting for LCA, and fast I/O.', duration: '7 hours' },
        { stepNumber: 15, title: 'Interview-Level Problem Solving', description: 'Mastering LeetCode Hard problems for FAANG/top-tier engineering rounds.', duration: '14 hours' },
      ],
      youtubeResources: [
        { title: 'Dynamic Programming - Learn to Solve Any DP Problem', url: 'https://www.youtube.com/watch?v=oBt53YbR9Kk', channel: 'freeCodeCamp.org', level: 'Advanced', description: 'Complete 5-hour breakdown of 1D, 2D, and grid DP patterns.', type: 'Video' },
        { title: 'Dijkstra\'s Shortest Path Algorithm by William Fiset', url: 'https://www.youtube.com/watch?v=pSqmA2U50C8', channel: 'WilliamFiset', level: 'Advanced', description: 'Visual explanation and code implementation of Dijkstra using priority queues.', type: 'Video' },
      ],
      notesResources: [
        { title: 'CP-Algorithms: Competitive Programming Reference', url: 'https://cp-algorithms.com/', description: 'Definitive community handbook on segment trees, string algorithms, and graphs.', type: 'Documentation', level: 'Advanced' },
        { title: 'Stanford CS166: Advanced Data Structures Notes', url: 'https://web.stanford.edu/class/cs166/', description: 'In-depth lecture notes on Fenwick trees, Tries, and Range Minimum Queries.', type: 'Documentation', level: 'Advanced' },
      ],
      practiceQuestions: [
        { question: 'Describe the 0/1 Knapsack problem and state its DP state recurrence relation.', answer: 'Given items with weights w[i] and values v[i], maximize total value within capacity W. Recurrence: dp[i][w] = max(dp[i-1][w], v[i] + dp[i-1][w - w[i]]) if w >= w[i], else dp[i-1][w]. Time complexity O(N*W), pseudo-polynomial.', solution: 'dp[w] = max(dp[w], v[i] + dp[w - w[i]]) iterating backwards from W down to w[i] optimizes space to O(W).', difficulty: 'Advanced', topic: 'Dynamic Programming' },
        { question: 'Why does Disjoint Set Union (DSU) achieve near O(1) time complexity per operation?', answer: 'Combining Path Compression (pointing every traversed node directly to the root) with Union by Rank (attaching smaller tree under deeper tree) ensures the tree depth grows slower than any standard function, bounded by the inverse Ackermann function α(n) ≤ 4 for all practical universe values.', solution: 'Find(i): if (parent[i] != i) parent[i] = find(parent[i]); return parent[i]; achieves O(α(N)) amortized time.', difficulty: 'Advanced', topic: 'Disjoint Set Union' },
      ],
      projects: [
        { title: 'High-Performance Autocomplete & Search Engine', description: 'Build an ultra-fast search suggestion engine using a Trie with frequency counters and a Disjoint Set Union component for connected query clustering.', difficulty: 'Advanced', techStack: ['C++', 'Python', 'Data Structures'], features: ['Trie insertion and prefix traversal in O(L) time where L = word length', 'Top-K frequent completions ranking using Min-Heaps', 'Memory-optimized Trie nodes with unicode support', 'Sub-millisecond query response benchmarking'] },
      ],
    },
  },
};

export const courseMachineLearning = {
  _id: 'course-machine-learning',
  title: 'Machine Learning Engineering: From Fundamentals to MLOps',
  category: 'Machine Learning',
  level: 'All Levels',
  duration: '12 weeks',
  description: 'Complete Machine Learning engineering: math foundations, data preprocessing, regression, classification, ensemble models, neural networks, and MLOps deployment.',
  coverImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60',
  faculty: { name: 'Andrew Ng', email: 'andrew@eduflow.io' },
  prerequisites: ['Basic Python programming syntax', 'High school algebra and calculus basics'],
  learningOutcomes: [
    'Understand supervised and unsupervised machine learning principles',
    'Manipulate and clean structured data using NumPy and Pandas',
    'Train regression and classification models using Scikit-Learn',
    'Apply feature engineering, cross-validation, and hyperparameter tuning',
    'Build ensemble models (Random Forest, XGBoost) and neural networks',
    'Deploy production ML APIs with FastAPI, Docker, and MLOps monitoring',
  ],
  curriculum: [
    { moduleTitle: 'Module 1: Foundations of ML & Python for Data', duration: '3 weeks', topics: ['Types of ML & Problem Formulation', 'NumPy Arrays & Pandas DataFrames', 'Data Cleaning & Exploratory Visualization', 'Linear & Logistic Regression'] },
    { moduleTitle: 'Module 2: Feature Engineering & Core Algorithms', duration: '3 weeks', topics: ['Data Preprocessing & Scaling', 'Decision Trees & Random Forests', 'K-Nearest Neighbors & Support Vector Machines', 'Clustering with K-Means'] },
    { moduleTitle: 'Module 3: Model Evaluation, Ensembles & Deep Learning', duration: '3 weeks', topics: ['Overfitting, Bias-Variance & Cross-Validation', 'Ensemble Learning & XGBoost', 'Dimensionality Reduction (PCA)', 'Neural Networks & Deep Learning Basics'] },
    { moduleTitle: 'Module 4: Deployment & MLOps Pipelines', duration: '3 weeks', topics: ['Model Explainability (SHAP/LIME)', 'FastAPI Model Serving', 'Docker Containerization', 'MLOps Drift Monitoring & Pipelines'] },
  ],
  levelsData: {
    Beginner: {
      description: 'Introduction to AI/ML, ML types, Python data libraries (NumPy, Pandas), data cleaning, visualization, statistics, linear algebra, and linear/logistic regression.',
      prerequisites: ['Python basics'],
      roadmap: [
        { stepNumber: 1, title: 'Introduction to AI and Machine Learning', description: 'Difference between traditional rule-based programming and machine learning from data.', duration: '3 hours' },
        { stepNumber: 2, title: 'Types of Machine Learning', description: 'Supervised learning (labeled data), Unsupervised learning (patterns), and Reinforcement learning.', duration: '3 hours' },
        { stepNumber: 3, title: 'Python Fundamentals for Data', description: 'List comprehensions, functions, lambda expressions, and environment setup (Jupyter).', duration: '4 hours' },
        { stepNumber: 4, title: 'NumPy Essentials', description: 'N-dimensional arrays, vectorization, indexing, slicing, and broadcasting operations.', duration: '4 hours' },
        { stepNumber: 5, title: 'Pandas DataFrames', description: 'Series, DataFrames, reading CSV/Excel, filtering, selecting, and basic column operations.', duration: '5 hours' },
        { stepNumber: 6, title: 'Data Cleaning', description: 'Detecting missing values (isnull), dropping vs imputing, and removing duplicate records.', duration: '4 hours' },
        { stepNumber: 7, title: 'Data Visualization', description: 'Creating histograms, scatter plots, and box plots with Matplotlib and Seaborn.', duration: '4 hours' },
        { stepNumber: 8, title: 'Basic Statistics for ML', description: 'Mean, median, mode, variance, standard deviation, and normal distributions.', duration: '4 hours' },
        { stepNumber: 9, title: 'Probability Fundamentals', description: 'Conditional probability, Bayes theorem basics, independent events, and distributions.', duration: '3 hours' },
        { stepNumber: 10, title: 'Introduction to Linear Algebra', description: 'Vectors, matrix multiplication, dot products, and geometric representations.', duration: '4 hours' },
        { stepNumber: 11, title: 'Training and Testing Data', description: 'Train-test split ratio (80/20), random state, and preventing data leakage.', duration: '3 hours' },
        { stepNumber: 12, title: 'Introduction to Scikit-learn', description: 'The fit(), transform(), and predict() API design pattern in Scikit-learn.', duration: '4 hours' },
        { stepNumber: 13, title: 'Linear Regression', description: 'Cost function (Mean Squared Error), slope/intercept, and gradient descent intuition.', duration: '5 hours' },
        { stepNumber: 14, title: 'Logistic Regression', description: 'Sigmoid function, binary classification, decision boundary, and log loss.', duration: '5 hours' },
        { stepNumber: 15, title: 'Build a Simple Prediction Model', description: 'End-to-end implementation of a real estate price predictor using Scikit-learn.', duration: '6 hours' },
      ],
      youtubeResources: [
        { title: 'Machine Learning for Everybody - Full Course', url: 'https://www.youtube.com/watch?v=i_LwzRVP7bg', channel: 'freeCodeCamp.org', level: 'Beginner', description: 'Complete introductory course on ML algorithms, features, and model training.', type: 'Video' },
        { title: 'StatQuest: Linear Regression Clearly Explained', url: 'https://www.youtube.com/watch?v=7ArmBVF2dCs', channel: 'StatQuest with Josh Starmer', level: 'Beginner', description: 'Crystal-clear visual breakdown of linear regression and R-squared calculation.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Scikit-learn: Getting Started with Machine Learning', url: 'https://scikit-learn.org/stable/getting_started.html', description: 'Official introductory tutorial covering estimators and model evaluation.', type: 'Documentation', level: 'Beginner' },
        { title: 'Google Machine Learning Crash Course: Foundations', url: 'https://developers.google.com/machine-learning/crash-course', description: 'Interactive course with best practices for training models and framing problems.', type: 'Guide', level: 'Beginner' },
      ],
      practiceQuestions: [
        { question: 'What is the fundamental difference between Linear Regression and Logistic Regression?', answer: 'Linear Regression predicts a continuous numerical output value (e.g. price, temperature) using a linear equation. Logistic Regression predicts a discrete categorical probability between 0 and 1 using a Sigmoid function for classification (e.g. spam or not spam).', solution: 'Linear Regression: Y = mX + b (Range: -infinity to +infinity). Logistic Regression: P = 1 / (1 + e^(-z)) (Range: 0 to 1).', difficulty: 'Beginner', topic: 'Supervised Learning' },
        { question: 'Why must we split data into training and test sets rather than evaluating on all data?', answer: 'Evaluating on the training data causes models to appear artificially accurate because they may memorize noise (overfitting). A separate test set evaluates generalizability on unseen data.', solution: 'from sklearn.model_selection import train_test_split; X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42);', difficulty: 'Beginner', topic: 'Model Validation' },
      ],
      projects: [
        { title: 'Housing Price Prediction Model', description: 'Build and evaluate a Linear Regression model predicting home prices using the California Housing dataset with Scikit-learn.', difficulty: 'Beginner', techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'], features: ['Exploratory data analysis of housing features and correlations', 'Handling missing data and standardizing feature scales', 'Model training using LinearRegression() from scikit-learn', 'Evaluation using Mean Absolute Error (MAE) and R2 score'] },
      ],
    },
    Intermediate: {
      description: 'Feature engineering, preprocessing, classification algorithms, decision trees, random forests, KNN, SVM, K-Means clustering, evaluation metrics, and hyperparameter tuning.',
      prerequisites: ['NumPy, Pandas, and basic linear regression'],
      roadmap: [
        { stepNumber: 1, title: 'Feature Engineering', description: 'Creating domain features, polynomial terms, date extraction, and interaction features.', duration: '5 hours' },
        { stepNumber: 2, title: 'Data Preprocessing', description: 'StandardScaler, MinMaxScaler, and RobustScaler for numerical standardization.', duration: '4 hours' },
        { stepNumber: 3, title: 'Categorical Data Handling', description: 'One-Hot Encoding, Label Encoding, Target Encoding, and dummy variables.', duration: '4 hours' },
        { stepNumber: 4, title: 'Classification Algorithms Overview', description: 'Supervised classification metrics, decision surfaces, and multi-class schemes.', duration: '4 hours' },
        { stepNumber: 5, title: 'Decision Trees', description: 'Gini Impurity, Information Gain, Entropy, tree depth, and pruning.', duration: '5 hours' },
        { stepNumber: 6, title: 'Random Forest', description: 'Bagging principle, bootstrap sampling, random feature sub-selection, and out-of-bag error.', duration: '6 hours' },
        { stepNumber: 7, title: 'K-Nearest Neighbors (KNN)', description: 'Distance metrics (Euclidean, Manhattan), choosing optimal k, and curse of dimensionality.', duration: '4 hours' },
        { stepNumber: 8, title: 'Support Vector Machines (SVM)', description: 'Maximum margin hyperplane, support vectors, soft margin (C parameter), and kernels (RBF).', duration: '6 hours' },
        { stepNumber: 9, title: 'Clustering Fundamentals', description: 'Unsupervised learning concepts, distance metrics, and intra-cluster cohesion.', duration: '4 hours' },
        { stepNumber: 10, title: 'K-Means Algorithm', description: 'Centroid initialization (K-Means++), iteration steps, and the Elbow Method for k.', duration: '5 hours' },
        { stepNumber: 11, title: 'Model Evaluation Metrics', description: 'Confusion Matrix, Precision, Recall, F1-Score, ROC curve, and AUC score.', duration: '6 hours' },
        { stepNumber: 12, title: 'Cross-Validation', description: 'K-Fold, Stratified K-Fold cross-validation, and leave-one-out validation.', duration: '4 hours' },
        { stepNumber: 13, title: 'Overfitting and Underfitting', description: 'High Bias vs High Variance, learning curves, and regularization (L1 Lasso, L2 Ridge).', duration: '5 hours' },
        { stepNumber: 14, title: 'Hyperparameter Tuning', description: 'GridSearchCV vs RandomizedSearchCV, cross-validated search spaces.', duration: '5 hours' },
        { stepNumber: 15, title: 'Feature Selection Techniques', description: 'Correlation filtering, Recursive Feature Elimination (RFE), and tree feature importances.', duration: '5 hours' },
        { stepNumber: 16, title: 'Build an End-to-End ML Project', description: 'Develop a complete customer churn prediction system with full preprocessing pipeline.', duration: '10 hours' },
      ],
      youtubeResources: [
        { title: 'StatQuest: Random Forests Clearly Explained', url: 'https://www.youtube.com/watch?v=J4Wdy0Wc_xQ', channel: 'StatQuest with Josh Starmer', level: 'Intermediate', description: 'Masterclass on decision trees, bagging, and random forest ensembles.', type: 'Video' },
        { title: 'StatQuest: ROC and AUC Curves Clearly Explained', url: 'https://www.youtube.com/watch?v=4jRBRDbJemM', channel: 'StatQuest with Josh Starmer', level: 'Intermediate', description: 'Visual explanation of sensitivity, specificity, and ROC curves.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Scikit-learn Supervised Learning User Guide', url: 'https://scikit-learn.org/stable/supervised_learning.html', description: 'Authoritative documentation on trees, forests, SVMs, and linear models.', type: 'Documentation', level: 'Intermediate' },
        { title: 'Kaggle Learn: Feature Engineering Micro-Course', url: 'https://www.kaggle.com/learn/feature-engineering', description: 'Hands-on practical guide to transforming raw data into high-signal features.', type: 'Guide', level: 'Intermediate' },
      ],
      practiceQuestions: [
        { question: 'What is the trade-off between Precision and Recall, and when do you prioritize Recall?', answer: 'Precision measures of all predicted positives, how many were correct. Recall measures of all actual positives, how many were detected. Prioritize Recall when missing a positive is costly (e.g. cancer diagnosis, fraud detection).', solution: 'Precision = TP / (TP + FP). Recall = TP / (TP + FN). High Recall minimizes False Negatives.', difficulty: 'Intermediate', topic: 'Evaluation Metrics' },
        { question: 'How does a Random Forest prevent overfitting compared to a single Decision Tree?', answer: 'A single deep decision tree easily memorizes training noise. Random Forest averages predictions across hundreds of independent trees trained on bootstrap samples with random feature subsets, dramatically reducing variance without increasing bias.', solution: 'Bagging reduces variance: Var(Average) = Var(Single) / N for uncorrelated estimators.', difficulty: 'Intermediate', topic: 'Ensemble Learning' },
      ],
      projects: [
        { title: 'End-to-End Customer Churn Prediction Engine', description: 'Build and tune a classification pipeline predicting customer churn with One-Hot encoding, Random Forest, and hyperparameter tuning.', difficulty: 'Intermediate', techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Seaborn'], features: ['Scikit-learn ColumnTransformer for mixed numeric/categorical features', 'Stratified 5-Fold Cross-Validation handling class imbalance', 'Hyperparameter tuning with RandomizedSearchCV', 'ROC-AUC curve plotting and feature importance extraction'] },
      ],
    },
    Advanced: {
      description: 'Ensemble learning, Gradient Boosting, XGBoost, PCA, neural networks, deep learning basics, PyTorch, model explainability (SHAP), FastAPI serving, and MLOps.',
      prerequisites: ['Intermediate ML algorithms and Python proficiency'],
      roadmap: [
        { stepNumber: 1, title: 'Ensemble Learning Theory', description: 'Bagging, Boosting, Stacking, and Voting classifiers comparison.', duration: '5 hours' },
        { stepNumber: 2, title: 'Gradient Boosting (GBM)', description: 'Gradient descent in function space, residual learning, shrinkage, and tree building.', duration: '6 hours' },
        { stepNumber: 3, title: 'XGBoost Fundamentals', description: 'Second-order Taylor expansion loss, regularization term, and column sub-sampling.', duration: '6 hours' },
        { stepNumber: 4, title: 'Dimensionality Reduction', description: 'Curse of dimensionality, distance distortion in high dimensions, and projection.', duration: '4 hours' },
        { stepNumber: 5, title: 'Principal Component Analysis (PCA)', description: 'Covariance matrix, eigenvalues, eigenvectors, explained variance ratio, and t-SNE.', duration: '6 hours' },
        { stepNumber: 6, title: 'Neural Network Fundamentals', description: 'Perceptron, activation functions (ReLU, Sigmoid, Softmax), forward pass, and backpropagation.', duration: '7 hours' },
        { stepNumber: 7, title: 'Deep Learning Introduction', description: 'Multi-layer Perceptrons (MLP), vanishing gradient problem, and optimizers (Adam, RMSProp).', duration: '7 hours' },
        { stepNumber: 8, title: 'PyTorch Fundamentals', description: 'Tensors, autograd, nn.Module, loss functions, optimizer step, and training loops.', duration: '8 hours' },
        { stepNumber: 9, title: 'Model Interpretability (SHAP & LIME)', description: 'Feature attribution with Shapley values, global vs local explainability for stakeholders.', duration: '6 hours' },
        { stepNumber: 10, title: 'Model Deployment with FastAPI', description: 'Serializing models (joblib/pickle), REST inference endpoints, request schemas with Pydantic.', duration: '6 hours' },
        { stepNumber: 11, title: 'ML Pipelines in Production', description: 'End-to-end repeatable sklearn Pipelines, artifacts versioning, and reproducibility.', duration: '5 hours' },
        { stepNumber: 12, title: 'Data and Model Drift', description: 'Concept drift, covariate shift, Kolmogorov-Smirnov statistical tests, and monitoring.', duration: '5 hours' },
        { stepNumber: 13, title: 'Monitoring and Evaluation', description: 'Latency monitoring, throughput, prediction logging, and automated retraining triggers.', duration: '5 hours' },
        { stepNumber: 14, title: 'MLOps Fundamentals', description: 'MLflow experiment tracking, model registry, CI/CD for machine learning, and Dockerizing models.', duration: '7 hours' },
        { stepNumber: 15, title: 'Build and Deploy an End-to-End ML Application', description: 'Deploy a containerized credit risk classification service with FastAPI and SHAP.', duration: '12 hours' },
      ],
      youtubeResources: [
        { title: 'StatQuest: XGBoost Clearly Explained', url: 'https://www.youtube.com/watch?v=OtD8wVdUHyA', channel: 'StatQuest with Josh Starmer', level: 'Advanced', description: 'Complete intuitive walk-through of the mathematics and mechanics behind XGBoost.', type: 'Video' },
        { title: 'PyTorch for Deep Learning Bootcamp', url: 'https://www.youtube.com/watch?v=V_xro1bcAuA', channel: 'freeCodeCamp.org', level: 'Advanced', description: 'Comprehensive guide to building neural networks, tensors, and models in PyTorch.', type: 'Video' },
      ],
      notesResources: [
        { title: 'PyTorch Official Documentation & Tutorials', url: 'https://pytorch.org/tutorials/', description: 'The official guides and recipes for PyTorch neural network engineering.', type: 'Documentation', level: 'Advanced' },
        { title: 'SHAP (SHapley Additive exPlanations) Documentation', url: 'https://shap.readthedocs.io/en/latest/', description: 'Game-theoretic approach to explain the output of any machine learning model.', type: 'Documentation', level: 'Advanced' },
      ],
      practiceQuestions: [
        { question: 'How does Gradient Boosting differ from Random Forest?', answer: 'Random Forest builds trees independently in parallel using bootstrap samples and averages their outputs (reducing variance). Gradient Boosting builds trees sequentially, where each new tree is trained to correct the residual errors made by preceding trees (reducing bias).', solution: 'Random Forest = Parallel independent trees (Bagging). Gradient Boosting = Sequential error-correcting trees (Boosting).', difficulty: 'Advanced', topic: 'Ensemble Learning' },
        { question: 'What are SHAP values and why are they superior to basic feature importances in Random Forests?', answer: 'Basic tree feature importances (e.g. MDI) are biased toward high-cardinality features and do not tell the direction of impact. SHAP values are rooted in cooperative game theory, providing both positive/negative magnitude and local explanation for individual predictions.', solution: 'SHAP computes marginal contribution of feature across all possible feature subsets, satisfying efficiency and symmetry properties.', difficulty: 'Advanced', topic: 'Model Explainability' },
      ],
      projects: [
        { title: 'Production Credit Risk Scoring Engine & MLOps API', description: 'Train an XGBoost credit risk classifier, generate SHAP feature explanations, and deploy as a Dockerized FastAPI service with input validation.', difficulty: 'Advanced', techStack: ['Python', 'XGBoost', 'SHAP', 'FastAPI', 'Docker', 'Pydantic'], features: ['Trained XGBoost model with class imbalance weight tuning', 'FastAPI REST endpoint providing probability and credit decision', 'SHAP waterfall plot generation explaining decision to applicants', 'Multi-stage Docker container ready for cloud deployment'] },
      ],
    },
  },
};

export const courseDataScience = {
  _id: 'course-data-science',
  title: 'Data Science & Advanced Analytics Masterclass',
  category: 'Data Science',
  level: 'All Levels',
  duration: '10 weeks',
  description: 'Transform raw data into actionable insights: statistical analysis, Pandas, data visualization, hypothesis testing, time series, and Big Data analytics.',
  coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
  faculty: { name: 'Dr. Wes McKinney', email: 'wes@eduflow.io' },
  prerequisites: ['Basic Python programming syntax'],
  learningOutcomes: [
    'Clean, aggregate, and reshape complex datasets with NumPy and Pandas',
    'Generate publication-quality interactive charts with Seaborn and Plotly',
    'Perform rigorous statistical hypothesis tests (t-test, ANOVA, Chi-Square)',
    'Forecast trends using ARIMA time series models',
    'Process distributed Big Data with PySpark and build interactive Streamlit dashboards',
  ],
  curriculum: [
    { moduleTitle: 'Module 1: Python for Data Analysis & Ingestion', duration: '2 weeks', topics: ['NumPy Vectorization', 'Pandas Series & DataFrames', 'Data Cleaning & Outlier Detection', 'Exploratory Data Analysis (EDA)'] },
    { moduleTitle: 'Module 2: Visual Storytelling & Statistical Testing', duration: '3 weeks', topics: ['Matplotlib & Seaborn', 'Plotly Interactive Visualizations', 'Hypothesis Testing (t-tests, ANOVA)', 'Correlation & Regression Analysis'] },
    { moduleTitle: 'Module 3: Time Series & Advanced Analytics', duration: '2.5 weeks', topics: ['Time Series Decompositions', 'ARIMA & Prophet Forecasting', 'Feature Store Architecture', 'A/B Testing Experimentation'] },
    { moduleTitle: 'Module 4: Big Data & Executive Dashboarding', duration: '2.5 weeks', topics: ['PySpark DataFrames & SQL', 'Distributed Aggregations', 'Streamlit Interactive Apps', 'Data Storytelling & Reporting'] },
  ],
  levelsData: {
    Beginner: {
      description: 'Introduction to data science methodology, NumPy vectorization, Pandas DataFrames, data cleaning, and exploratory visualization.',
      prerequisites: ['Python basics'],
      roadmap: [
        { stepNumber: 1, title: 'Data Science Methodology', description: 'Problem definition, data collection, cleaning, EDA, modeling, and communication.', duration: '3 hours' },
        { stepNumber: 2, title: 'NumPy Array Manipulation', description: 'Array broadcasting, linear algebra operations, filtering, and statistical functions.', duration: '4 hours' },
        { stepNumber: 3, title: 'Pandas Data Wrangling', description: 'Reading CSV/JSON files, Series and DataFrames, index manipulation, and descriptive stats.', duration: '5 hours' },
        { stepNumber: 4, title: 'Data Cleaning Essentials', description: 'Imputing missing data, removing duplicates, and data type conversions.', duration: '4 hours' },
        { stepNumber: 5, title: 'Exploratory Data Analysis (EDA)', description: 'Understanding distributions, identifying anomalies, and computing summary metrics.', duration: '5 hours' },
        { stepNumber: 6, title: 'Data Visualization with Matplotlib', description: 'Line charts, scatter plots, bar charts, subplots, and formatting titles/labels.', duration: '4 hours' },
      ],
      youtubeResources: [
        { title: 'Data Analysis with Python Course', url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8', channel: 'freeCodeCamp.org', level: 'Beginner', description: 'Comprehensive introduction to NumPy, Pandas, and exploratory data analysis.', type: 'Video' },
        { title: 'Python Pandas Tutorial by Keith Galli', url: 'https://www.youtube.com/watch?v=vmEHCJofslg', channel: 'Keith Galli', level: 'Beginner', description: 'Hands-on practical walk-through of loading, filtering, and analyzing real data.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Python Data Science Handbook', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/', description: 'Free online textbook covering IPython, NumPy, Pandas, and Matplotlib by Jake VanderPlas.', type: 'Documentation', level: 'Beginner' },
        { title: 'Pandas Official Cheat Sheet', url: 'https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf', description: 'Visual two-page summary of core Pandas operations.', type: 'CheatSheet', level: 'Beginner' },
      ],
      practiceQuestions: [
        { question: 'What is the difference between loc and iloc in Pandas?', answer: 'loc selects rows and columns based on label index names. iloc selects rows and columns strictly based on integer position indices (0, 1, 2...).', solution: 'df.loc[df["age"] > 25, ["name", "salary"]] vs df.iloc[0:5, 0:2]', difficulty: 'Beginner', topic: 'Pandas Indexing' },
        { question: 'What is the purpose of exploratory data analysis (EDA)?', answer: 'EDA analyzes datasets to summarize main statistical characteristics, discover patterns, detect anomalies/outliers, test hypotheses, and verify assumptions using summary statistics and graphical plots.', solution: 'Use df.describe(), df.info(), correlation heatmaps, and boxplots to explore data before modeling.', difficulty: 'Beginner', topic: 'EDA' },
      ],
      projects: [
        { title: 'Global Sales & Customer Demographics EDA', description: 'Perform an end-to-end exploratory data analysis on an enterprise retail sales dataset to discover seasonal buying trends.', difficulty: 'Beginner', techStack: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'], features: ['Clean null values and format currency and timestamp columns', 'Aggregate monthly revenue and top product categories', 'Visualize customer distribution by geographic region', 'Export summarized business insights report'] },
      ],
    },
    Intermediate: {
      description: 'Advanced Pandas, Seaborn, interactive Plotly charts, statistical hypothesis testing (t-tests, ANOVA, Chi-Square), and regression analysis.',
      prerequisites: ['Pandas basics and introductory statistics'],
      roadmap: [
        { stepNumber: 1, title: 'Advanced Pandas Operations', description: 'Multi-indexing, groupby aggregations, pivot tables, and cross-tabulations.', duration: '5 hours' },
        { stepNumber: 2, title: 'Statistical Seaborn Visualizations', description: 'KDE plots, pair plots, violin plots, and correlation heatmaps.', duration: '4 hours' },
        { stepNumber: 3, title: 'Interactive Plotly Dashboards', description: 'Interactive zoomable scatter, choropleth geo maps, and hover tooltips.', duration: '5 hours' },
        { stepNumber: 4, title: 'Statistical Hypothesis Testing', description: 'Null hypothesis formulation, p-values, alpha levels, and significance testing.', duration: '5 hours' },
        { stepNumber: 5, title: 'Parametric & Non-Parametric Tests', description: 'Student\'s t-tests (paired/unpaired), ANOVA F-test, and Chi-Square test of independence.', duration: '6 hours' },
        { stepNumber: 6, title: 'A/B Testing Foundations', description: 'Control vs treatment groups, sample size determination, statistical power, and p-hacking risks.', duration: '6 hours' },
      ],
      youtubeResources: [
        { title: 'Corey Schafer: Pandas Groupby & Aggregations', url: 'https://www.youtube.com/watch?v=txMdrV1Ut64', channel: 'Corey Schafer', level: 'Intermediate', description: 'In-depth tutorial on aggregating data and analyzing subsets with Pandas.', type: 'Video' },
        { title: 'StatQuest: Hypothesis Testing and p-values', url: 'https://www.youtube.com/watch?v=0oc49DyA3hU', channel: 'StatQuest with Josh Starmer', level: 'Intermediate', description: 'Clear visual introduction to null hypotheses, p-values, and significance.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Scipy Statistical Functions Documentation', url: 'https://docs.scipy.org/doc/scipy/reference/stats.html', description: 'Official reference for t-tests, ANOVA, and distribution testing.', type: 'Documentation', level: 'Intermediate' },
        { title: 'Think Stats: Probability and Statistics for Programmers', url: 'https://greenteapress.com/wp/think-stats-2e/', description: 'Free computational guide to statistics using Python.', type: 'Guide', level: 'Intermediate' },
      ],
      practiceQuestions: [
        { question: 'What does a p-value of 0.03 mean in an A/B test with a significance threshold of alpha = 0.05?', answer: 'Assuming the null hypothesis is true (there is no real difference between groups), there is a 3% probability of observing results as extreme as those measured. Because p (0.03) < alpha (0.05), we reject the null hypothesis and conclude the difference is statistically significant.', solution: 'Reject H0 when p-value < alpha. The treatment group demonstrated a statistically significant lift.', difficulty: 'Intermediate', topic: 'Hypothesis Testing' },
        { question: 'When should you use ANOVA instead of multiple t-tests?', answer: 'Use ANOVA when comparing the means of 3 or more groups. Running multiple pairwise t-tests compounds the family-wise error rate (Type I error probability increases with each additional test).', solution: 'ANOVA computes a single F-statistic to verify if at least one group mean differs, followed by post-hoc Tukey tests.', difficulty: 'Intermediate', topic: 'ANOVA' },
      ],
      projects: [
        { title: 'E-Commerce A/B Test Statistical Analysis Dashboard', description: 'Conduct a complete statistical analysis of an e-commerce website redesign A/B test determining conversion lift and revenue impact.', difficulty: 'Intermediate', techStack: ['Python', 'Scipy', 'Pandas', 'Plotly', 'Seaborn'], features: ['Calculation of conversion rates for Control and Variant cohorts', 'Two-sample Z-test and Chi-Square test of independence', 'Interactive conversion confidence interval charts using Plotly', 'Executive summary report with actionable go/no-go recommendation'] },
      ],
    },
    Advanced: {
      description: 'Time series forecasting (ARIMA, Prophet), Big Data processing with PySpark, SQL data warehousing, and interactive Streamlit web apps.',
      prerequisites: ['Intermediate data analysis and statistics'],
      roadmap: [
        { stepNumber: 1, title: 'Time Series Decompositions', description: 'Trend, seasonality, residual components, and stationarity tests (ADF test).', duration: '5 hours' },
        { stepNumber: 2, title: 'Time Series Forecasting (ARIMA & SARIMA)', description: 'Autoregressive (AR), Moving Average (MA), differencing, and AIC parameter selection.', duration: '6 hours' },
        { stepNumber: 3, title: 'Modern Forecasting with Prophet', description: 'Handling holiday effects, changepoint detection, and uncertainty intervals.', duration: '5 hours' },
        { stepNumber: 4, title: 'Big Data Processing with PySpark', description: 'Resilient Distributed Datasets (RDDs), Spark DataFrames, lazy evaluation, and catalyst optimizer.', duration: '7 hours' },
        { stepNumber: 5, title: 'Distributed SQL & Feature Stores', description: 'Complex analytical window functions, CTEs, and enterprise feature stores.', duration: '6 hours' },
        { stepNumber: 6, title: 'Interactive Dashboard Apps with Streamlit', description: 'Building and deploying web data apps with interactive sliders, caching, and charts.', duration: '7 hours' },
      ],
      youtubeResources: [
        { title: 'Time Series Forecasting with Python - Full Course', url: 'https://www.youtube.com/watch?v=e8Yw4alG16Q', channel: 'freeCodeCamp.org', level: 'Advanced', description: 'Complete practical course on ARIMA, SARIMA, and time series modeling in Python.', type: 'Video' },
        { title: 'Apache Spark with Python (PySpark) Tutorial', url: 'https://www.youtube.com/watch?v=_C8kWso4ebw', channel: 'freeCodeCamp.org', level: 'Advanced', description: 'Master distributed big data processing, dataframes, and Spark SQL.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Apache Spark Official PySpark Documentation', url: 'https://spark.apache.org/docs/latest/api/python/', description: 'Official reference for PySpark DataFrames and distributed queries.', type: 'Documentation', level: 'Advanced' },
        { title: 'Streamlit Documentation: Data App Building', url: 'https://docs.streamlit.io/', description: 'Fastest way to build and share data applications in pure Python.', type: 'Documentation', level: 'Advanced' },
      ],
      practiceQuestions: [
        { question: 'Why must time series data be stationary before applying ARIMA models, and how do we test stationarity?', answer: 'ARIMA assumes the mean, variance, and autocorrelation structure are constant over time. Non-stationary data has trends or seasonality that cause unstable model estimates. Test stationarity using the Augmented Dickey-Fuller (ADF) test; make stationary via differencing.', solution: 'from statsmodels.tsa.stattools import adfuller; if p-value < 0.05, data is stationary. Otherwise, apply differencing (d parameter in ARIMA).', difficulty: 'Advanced', topic: 'Time Series' },
        { question: 'What is lazy evaluation in Apache Spark and how does it optimize performance?', answer: 'Transformations in Spark (e.g. map, filter, select) do not execute immediately when called. Spark records them in a DAG (Directed Acyclic Graph) and compiles an optimized execution plan using the Catalyst optimizer only when an action (e.g. count, collect, write) is triggered.', solution: 'Lazy evaluation enables query optimization, predicate pushdown, and pipeline optimization across distributed nodes.', difficulty: 'Advanced', topic: 'PySpark & Big Data' },
      ],
      projects: [
        { title: 'Real-time Stock Market Forecasting & Analytics Portal', description: 'Build a production interactive data science web application in Streamlit forecasting equity asset prices with ARIMA, interactive Plotly charts, and PySpark analysis.', difficulty: 'Advanced', techStack: ['Python', 'Streamlit', 'Statsmodels', 'Plotly', 'PySpark'], features: ['Live financial data ingestion using yfinance', 'Automated stationarity testing (ADF test) and differencing', 'Interactive ARIMA/Prophet forecasting with confidence bands', 'Live Streamlit dashboard deployed with interactive parameter sliders'] },
      ],
    },
  },
};

export const courseAi = {
  _id: 'course-ai',
  title: 'Artificial Intelligence: Agents, Logic & Modern AI',
  category: 'Artificial Intelligence',
  level: 'All Levels',
  duration: '10 weeks',
  description: 'Explore intelligent agents, heuristic search (A*), adversarial game playing (Minimax), logic reasoning, expert systems, and modern AI architectures.',
  coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
  faculty: { name: 'Dr. Stuart Russell', email: 'stuart@eduflow.io' },
  prerequisites: ['Python fundamentals', 'Basic discrete mathematics and logic'],
  learningOutcomes: [
    'Design rational intelligent agents for diverse environments',
    'Implement informed heuristic search algorithms including A* and Greedy Search',
    'Build adversarial game-playing engines using Minimax and Alpha-Beta Pruning',
    'Represent knowledge and reason using Propositional and First-Order Logic',
    'Understand modern reinforcement learning, transformers, and AI ethics',
  ],
  curriculum: [
    { moduleTitle: 'Module 1: Intelligent Agents & State-Space Search', duration: '2.5 weeks', topics: ['Agent Architectures (PEAS)', 'Uninformed Search (BFS, DFS, UCS)', 'Informed Search & Heuristics (A* Search)', 'Admissibility & Consistency Proofs'] },
    { moduleTitle: 'Module 2: Adversarial Search & Games', duration: '2.5 weeks', topics: ['Game Trees & Minimax', 'Alpha-Beta Pruning Optimization', 'Evaluation Functions', 'Constraint Satisfaction Problems (CSP)'] },
    { moduleTitle: 'Module 3: Knowledge Representation & Logic', duration: '2.5 weeks', topics: ['Propositional Logic & Inference', 'First-Order Logic & Unification', 'Resolution Refutation', 'Forward & Backward Chaining'] },
    { moduleTitle: 'Module 4: Probabilistic Reasoning & Modern AI', duration: '2.5 weeks', topics: ['Bayesian Networks', 'Markov Decision Processes (MDP)', 'Q-Learning Fundamentals', 'Transformers, RAG & AI Alignment'] },
  ],
  levelsData: {
    Beginner: {
      description: 'Introduction to AI fundamentals, intelligent agents, PEAS framework, state-space search, uninformed search, and informed A* heuristic search.',
      prerequisites: ['Basic Python programming syntax'],
      roadmap: [
        { stepNumber: 1, title: 'Introduction to Artificial Intelligence', description: 'What is AI? History, Turing test, rational agents, and human-like vs rational thinking.', duration: '3 hours' },
        { stepNumber: 2, title: 'Intelligent Agents and PEAS Framework', description: 'Performance measure, Environment, Actuators, Sensors, and agent types.', duration: '3 hours' },
        { stepNumber: 3, title: 'Environment Characteristics', description: 'Fully vs partially observable, deterministic vs stochastic, static vs dynamic environments.', duration: '3 hours' },
        { stepNumber: 4, title: 'State-Space Representation', description: 'Defining initial state, actions, transition model, goal test, and path cost.', duration: '4 hours' },
        { stepNumber: 5, title: 'Uninformed Search Algorithms', description: 'Breadth-First Search, Depth-First Search, Depth-Limited, and Iterative Deepening.', duration: '5 hours' },
        { stepNumber: 6, title: 'Informed (Heuristic) Search & A*', description: 'Greedy Best-First search, A* algorithm (f(n) = g(n) + h(n)), and admissible heuristics.', duration: '6 hours' },
      ],
      youtubeResources: [
        { title: 'Artificial Intelligence - Full University Course (MIT 6.034)', url: 'https://www.youtube.com/watch?v=TjZ3CasnyOU', channel: 'MIT OpenCourseWare', level: 'Beginner', description: 'Classic MIT lecture on search trees, heuristics, and intelligent problem solving.', type: 'Video' },
        { title: 'A* Pathfinding Algorithm Tutorial', url: 'https://www.youtube.com/watch?v=-L-WgKMFuhE', channel: 'Sebastian Lague', level: 'Beginner', description: 'Clear visual demonstration and coding implementation of the A* search algorithm.', type: 'Video' },
      ],
      notesResources: [
        { title: 'UC Berkeley CS188: Introduction to Artificial Intelligence Notes', url: 'https://inst.eecs.berkeley.edu/~cs188/', description: 'Legendary course notes and Pacman project assignments on search and agents.', type: 'Documentation', level: 'Beginner' },
        { title: 'Russell & Norvig: AI - A Modern Approach Notes', url: 'http://aima.cs.berkeley.edu/', description: 'Comprehensive guide based on the world\'s most popular AI textbook.', type: 'Guide', level: 'Beginner' },
      ],
      practiceQuestions: [
        { question: 'What makes a heuristic "admissible" in A* search, and what does it guarantee?', answer: 'A heuristic h(n) is admissible if it never overestimates the true cost to reach the goal from node n (h(n) <= h*(n)). When h(n) is admissible, tree-search A* is guaranteed to return the optimal (shortest/lowest cost) path.', solution: 'h(n) <= actual cost. For Euclidean/Manhattan distance, straight-line distance is always <= actual path length.', difficulty: 'Beginner', topic: 'Heuristic Search' },
        { question: 'What is the PEAS framework for specifying an intelligent agent?', answer: 'PEAS stands for: Performance measure (criteria for success), Environment (external context), Actuators (mechanisms agent uses to act), Sensors (inputs agent perceives).', solution: 'Example Autonomous Car: P=Safety/Speed, E=Roads/Traffic, A=Steering/Brakes, S=Cameras/Lidar.', difficulty: 'Beginner', topic: 'Intelligent Agents' },
      ],
      projects: [
        { title: 'Maze Pathfinding AI Agent with A* Search', description: 'Build a grid-based maze pathfinding agent comparing BFS, DFS, and A* search with Manhattan distance heuristic.', difficulty: 'Beginner', techStack: ['Python', 'Pygame / Matplotlib'], features: ['Interactive grid maze creation with obstacles', 'Real-time visual node expansion exploration counter', 'Optimal shortest path reconstruction', 'Comparison of explored node counts between BFS, DFS, and A*'] },
      ],
    },
    Intermediate: {
      description: 'Adversarial game search, Minimax, Alpha-Beta pruning, constraint satisfaction problems, propositional logic, and inference engines.',
      prerequisites: ['A* search and basic graph concepts'],
      roadmap: [
        { stepNumber: 1, title: 'Adversarial Search & Game Theory', description: 'Zero-sum games, complete information, game trees, and utility values.', duration: '5 hours' },
        { stepNumber: 2, title: 'Minimax Algorithm', description: 'Recursive minimax value calculation, depth limits, and static evaluation functions.', duration: '6 hours' },
        { stepNumber: 3, title: 'Alpha-Beta Pruning', description: 'Pruning irrelevant branches without affecting minimax outcome, best-case O(b^(d/2)).', duration: '6 hours' },
        { stepNumber: 4, title: 'Constraint Satisfaction Problems (CSP)', description: 'Variables, domains, constraints, backtracking search, forward checking, and AC-3.', duration: '6 hours' },
        { stepNumber: 5, title: 'Propositional Logic and Knowledge Bases', description: 'Syntax, semantics, truth tables, entailment, validity, and satisfiability.', duration: '5 hours' },
        { stepNumber: 6, title: 'Inference in Propositional Logic', description: 'Modus Ponens, Resolution refutation, Horn clauses, and forward/backward chaining.', duration: '6 hours' },
      ],
      youtubeResources: [
        { title: 'Minimax and Alpha-Beta Pruning by Computerphile', url: 'https://www.youtube.com/watch?v=l-hh51ncgDI', channel: 'Computerphile', level: 'Intermediate', description: 'Intuitive visual explanation of game trees and pruning unnecessary states.', type: 'Video' },
        { title: 'Constraint Satisfaction Problems (CSP) Tutorial', url: 'https://www.youtube.com/watch?v=lcrJk4r7hso', channel: 'MIT OpenCourseWare', level: 'Intermediate', description: 'Solving constraint networks using backtracking and constraint propagation.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Stanford CS221: Artificial Intelligence Principles', url: 'https://stanford-cs221.github.io/', description: 'Lecture slides on game playing, CSP, and logic reasoning.', type: 'Documentation', level: 'Intermediate' },
        { title: 'AIMA Python: Reference Implementations', url: 'https://github.com/aimacode/aima-python', description: 'Clean Python implementations of algorithms from Artificial Intelligence: A Modern Approach.', type: 'Guide', level: 'Intermediate' },
      ],
      practiceQuestions: [
        { question: 'How does Alpha-Beta pruning reduce the search space in a two-player game tree?', answer: 'Alpha tracks the best value the MAX player can guarantee; Beta tracks the best value the MIN player can guarantee. If at any node, alpha >= beta, the current branch cannot influence the final decision and is pruned immediately.', solution: 'Prunes when beta <= alpha. In best move ordering, effective branching factor decreases from b to sqrt(b).', difficulty: 'Intermediate', topic: 'Adversarial Search' },
        { question: 'What is the Arc Consistency (AC-3) algorithm in Constraint Satisfaction Problems?', answer: 'AC-3 eliminates values from variable domains that cannot participate in any valid solution. An arc (Xi, Xj) is consistent if for every value in Xi\'s domain, there is at least one allowable value in Xj\'s domain.', solution: 'AC-3 runs before backtracking to prune domains, drastically reducing the search tree size.', difficulty: 'Intermediate', topic: 'CSP' },
      ],
      projects: [
        { title: 'Smart Connect-4 / Chess Game Engine', description: 'Develop an intelligent adversarial game engine playing Connect-4 or Chess using Minimax with Alpha-Beta pruning and custom board evaluation.', difficulty: 'Intermediate', techStack: ['Python', 'Minimax', 'Alpha-Beta'], features: ['Depth-limited Minimax recursive decision engine', 'Alpha-Beta pruning branch optimization', 'Position evaluation heuristic function (center control, threat detection)', 'Interactive terminal/GUI gameplay vs human player'] },
      ],
    },
    Advanced: {
      description: 'Markov decision processes, reinforcement learning (Q-Learning), deep Q-networks (DQN), transformer architectures, RAG, and AI safety.',
      prerequisites: ['Probability, linear algebra, and intermediate AI algorithms'],
      roadmap: [
        { stepNumber: 1, title: 'Markov Decision Processes (MDP)', description: 'States, actions, transition probabilities, rewards, discount factor (gamma), and Bellman equation.', duration: '6 hours' },
        { stepNumber: 2, title: 'Value Iteration and Policy Iteration', description: 'Solving MDPs dynamically for optimal policies (pi*).', duration: '6 hours' },
        { stepNumber: 3, title: 'Reinforcement Learning: Q-Learning', description: 'Model-free temporal difference learning, Q-table updates, and epsilon-greedy exploration.', duration: '7 hours' },
        { stepNumber: 4, title: 'Deep Q-Networks (DQN)', description: 'Approximating Q-functions with neural networks, experience replay buffer, and target networks.', duration: '8 hours' },
        { stepNumber: 5, title: 'Natural Language Processing & Transformers', description: 'Attention mechanisms, self-attention, multi-head attention, and transformer encoders/decoders.', duration: '8 hours' },
        { stepNumber: 6, title: 'Retrieval-Augmented Generation (RAG) & Ethics', description: 'Vector databases, semantic embeddings, document retrieval, hallucinations, and AI safety.', duration: '8 hours' },
      ],
      youtubeResources: [
        { title: 'Andrej Karpathy: Neural Networks - Zero to Hero', url: 'https://www.youtube.com/watch?v=VMj-3S1tku0', channel: 'Andrej Karpathy', level: 'Advanced', description: 'Build micrograd, language models, and transformers from scratch.', type: 'Video' },
        { title: 'DeepMind x UCL: Reinforcement Learning Lecture Series', url: 'https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ', channel: 'DeepMind', level: 'Advanced', description: 'Comprehensive theoretical foundations of RL by DeepMind researchers.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Sutton & Barto: Reinforcement Learning Book', url: 'http://incompleteideas.net/book/the-book-2nd.html', description: 'The definitive textbook on reinforcement learning theory and algorithms.', type: 'Documentation', level: 'Advanced' },
        { title: 'Hugging Face NLP Course: Transformers & Vector Search', url: 'https://huggingface.co/learn/nlp-course', description: 'Official hands-on guide to modern transformer models and semantic embeddings.', type: 'Guide', level: 'Advanced' },
      ],
      practiceQuestions: [
        { question: 'State the Bellman Equation for the optimal action-value function Q*(s, a).', answer: 'Q*(s, a) = R(s, a) + gamma * sum(P(s\' | s, a) * max_a\' Q*(s\', a\')). It states that the value of taking action a in state s is the immediate reward plus the discounted expected future return from the best subsequent action.', solution: 'Q*(s,a) = E[R + gamma * max_a\' Q*(s\', a\')]. Basis of value iteration and Q-learning.', difficulty: 'Advanced', topic: 'Reinforcement Learning' },
        { question: 'What problem does the Self-Attention mechanism solve in Transformers compared to Recurrent Neural Networks (RNNs)?', answer: 'RNNs process tokens sequentially (preventing GPU parallelization) and suffer from vanishing gradients over long sequences. Self-Attention calculates direct attention weights between all token pairs simultaneously in O(1) sequential steps, capturing long-range dependencies efficiently.', solution: 'Attention(Q, K, V) = softmax(Q * K^T / sqrt(d_k)) * V computes parallel contextual representations.', difficulty: 'Advanced', topic: 'Transformers' },
      ],
      projects: [
        { title: 'Retrieval-Augmented Generation (RAG) AI Knowledge Assistant', description: 'Build an end-to-end RAG system embedding technical documents into a vector store and querying a language model with cited context.', difficulty: 'Advanced', techStack: ['Python', 'ChromaDB / FAISS', 'LangChain', 'OpenAI / HuggingFace'], features: ['Document chunking and dense vector embedding generation', 'Cosine similarity search retrieving top-K relevant passages', 'Prompt templating injecting retrieved context into LLM', 'Evaluation of retrieval accuracy and hallucination reduction'] },
      ],
    },
  },
};

export const courseSoftwareEngineering = {
  _id: 'course-software-engineering',
  title: 'Software Engineering: Design Patterns & Clean Architecture',
  category: 'Software Engineering',
  level: 'All Levels',
  duration: '8 weeks',
  description: 'Master SDLC, Agile methodologies, UML architecture, SOLID principles, GoF design patterns, automated testing, and scalable clean architecture.',
  coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60',
  faculty: { name: 'Robert C. Martin', email: 'unclebob@eduflow.io' },
  prerequisites: ['Basic object-oriented programming experience in Java, C++, or TypeScript'],
  learningOutcomes: [
    'Apply SDLC frameworks (Scrum, Kanban) and craft clear user stories',
    'Model complex systems using standard UML (Use Case, Class, Sequence) diagrams',
    'Write maintainable code applying the 5 SOLID object-oriented principles',
    'Implement classic Gang of Four (GoF) design patterns to solve recurring challenges',
    'Architect testable, decoupled systems following Clean Architecture and Domain-Driven Design',
  ],
  curriculum: [
    { moduleTitle: 'Module 1: SDLC, Agile & Requirements Engineering', duration: '2 weeks', topics: ['Software Development Life Cycle Models', 'Agile & Scrum Frameworks', 'Requirements Engineering & User Stories', 'UML Structural & Behavioral Modeling'] },
    { moduleTitle: 'Module 2: SOLID Principles & Code Quality', duration: '2 weeks', topics: ['Single Responsibility & Open/Closed', 'Liskov Substitution Principle', 'Interface Segregation & Dependency Inversion', 'Code Smells & Refactoring Patterns'] },
    { moduleTitle: 'Module 3: Design Patterns (GoF)', duration: '2 weeks', topics: ['Creational: Singleton, Factory, Builder', 'Structural: Adapter, Decorator, Facade', 'Behavioral: Observer, Strategy, Command', 'Unit Testing & TDD Principles'] },
    { moduleTitle: 'Module 4: Enterprise Architecture & DevOps', duration: '2 weeks', topics: ['Clean Architecture & Hexagonal Ports', 'Microservices vs Monolith Tradeoffs', 'CI/CD Pipelines & Static Analysis', 'SRE Fundamentals & Fault Tolerance'] },
  ],
  levelsData: {
    Beginner: {
      description: 'Introduction to software engineering, SDLC models (Waterfall, Agile, Scrum), requirements analysis, user stories, and UML diagrams.',
      prerequisites: ['Basic programming literacy'],
      roadmap: [
        { stepNumber: 1, title: 'Introduction to Software Engineering', description: 'Software crisis, engineering discipline vs ad-hoc coding, software quality attributes.', duration: '3 hours' },
        { stepNumber: 2, title: 'SDLC Models', description: 'Waterfall model, V-Model, Iterative development, and Agile values.', duration: '3 hours' },
        { stepNumber: 3, title: 'Agile and Scrum Methodologies', description: 'Sprints, ceremonies (standups, planning, retrospectives), product backlogs, and user stories.', duration: '4 hours' },
        { stepNumber: 4, title: 'Requirements Engineering', description: 'Functional vs non-functional requirements, acceptance criteria, and edge-case discovery.', duration: '3 hours' },
        { stepNumber: 5, title: 'UML Use Case & Class Diagrams', description: 'Actors, use cases, include/extend relationships, class attributes, methods, and associations.', duration: '4 hours' },
        { stepNumber: 6, title: 'UML Sequence & Activity Diagrams', description: 'Message flows, lifelines, synchronous/asynchronous calls, and workflow control branching.', duration: '4 hours' },
      ],
      youtubeResources: [
        { title: 'Agile & Scrum Full Course in 4 Hours', url: 'https://www.youtube.com/watch?v=2T86xAtR6Fo', channel: 'freeCodeCamp.org', level: 'Beginner', description: 'Complete breakdown of Scrum roles, artifacts, ceremonies, and agile delivery.', type: 'Video' },
        { title: 'UML Class Diagram Tutorial by Derek Banas', url: 'https://www.youtube.com/watch?v=3cmzqZzwNDM', channel: 'Derek Banas', level: 'Beginner', description: 'Visual explanation of classes, interfaces, inheritance, and association in UML.', type: 'Video' },
      ],
      notesResources: [
        { title: 'IEEE Guide to Software Engineering Body of Knowledge (SWEBOK)', url: 'https://www.computer.org/education/bodies-of-knowledge/software-engineering', description: 'Authoritative international standard for software engineering competencies.', type: 'Documentation', level: 'Beginner' },
        { title: 'Scrum Guide by Ken Schwaber & Jeff Sutherland', url: 'https://scrumguides.org/scrum-guide.html', description: 'The official definition of the Scrum framework and ceremonies.', type: 'Guide', level: 'Beginner' },
      ],
      practiceQuestions: [
        { question: 'What is the INVEST mnemonic for writing effective Agile user stories?', answer: 'INVEST stands for: Independent, Negotiable, Valuable, Estimable, Small, and Testable.', solution: 'Ensures user stories can be scheduled independently, delivered within a single sprint, and verified by automated or manual acceptance tests.', difficulty: 'Beginner', topic: 'Agile Requirements' },
        { question: 'What is the difference between Aggregation and Composition in UML Class Diagrams?', answer: 'Both represent "has-a" relationships. In Aggregation (open diamond), the child object can exist independently of the parent. In Composition (filled diamond), the child object cannot exist without the parent; destroying parent destroys child.', solution: 'Aggregation: University and Professors. Composition: House and Rooms.', difficulty: 'Beginner', topic: 'UML Modeling' },
      ],
      projects: [
        { title: 'Software Requirements Specification (SRS) & UML Blueprints', description: 'Produce a complete professional SRS document and UML architecture blueprints for an enterprise hospital management portal.', difficulty: 'Beginner', techStack: ['UML', 'Markdown', 'Mermaid.js'], features: ['Documented functional and non-functional requirements (NFRs)', 'Use Case Diagram with 8+ actors and flows', 'Complete Class Diagram with multiplicity and inheritance', 'Sequence Diagram detailing user appointment booking'] },
      ],
    },
    Intermediate: {
      description: 'SOLID design principles in practice, classic GoF design patterns (Factory, Strategy, Observer, Decorator), unit testing, and TDD.',
      prerequisites: ['Object-oriented programming (classes, inheritance, polymorphism)'],
      roadmap: [
        { stepNumber: 1, title: 'Single Responsibility Principle (SRP)', description: 'One reason to change, separating business logic from presentation and persistence.', duration: '4 hours' },
        { stepNumber: 2, title: 'Open/Closed & Liskov Substitution (OCP & LSP)', description: 'Open for extension, closed for modification; subtype behavioral substitutability.', duration: '5 hours' },
        { stepNumber: 3, title: 'Interface Segregation & Dependency Inversion (ISP & DIP)', description: 'Lean role interfaces, depending on abstractions rather than concrete classes.', duration: '5 hours' },
        { stepNumber: 4, title: 'Creational Patterns (Factory, Singleton, Builder)', description: 'Decoupling object creation, managing single shared instances, and complex constructors.', duration: '6 hours' },
        { stepNumber: 5, title: 'Structural Patterns (Adapter, Decorator, Facade)', description: 'Interface adaptation, dynamic behavior extension, and simplified subsystem entry points.', duration: '6 hours' },
        { stepNumber: 6, title: 'Behavioral Patterns (Strategy, Observer, Command)', description: 'Interchangeable algorithms, publish-subscribe decoupling, and encapsulating requests.', duration: '6 hours' },
      ],
      youtubeResources: [
        { title: 'Design Patterns in Object Oriented Programming', url: 'https://www.youtube.com/playlist?list=PLF206E906175C7E07', channel: 'Christopher Okhravi', level: 'Intermediate', description: 'The finest visual explanation of Head First Design Patterns and SOLID concepts.', type: 'Video' },
        { title: 'SOLID Principles in Code: Complete Guide', url: 'https://www.youtube.com/watch?v=rtmFCcjEgEw', channel: 'Derek Banas', level: 'Intermediate', description: 'Practical code examples demonstrating all five SOLID design rules.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Refactoring.Guru: Design Patterns Reference', url: 'https://refactoring.guru/design-patterns', description: 'Visual interactive catalog of all 22 Gang of Four design patterns with code.', type: 'Documentation', level: 'Intermediate' },
        { title: 'Martin Fowler: Catalog of Refactoring Patterns', url: 'https://refactoring.com/catalog/', description: 'Classic refactoring techniques for improving code structure safely.', type: 'Guide', level: 'Intermediate' },
      ],
      practiceQuestions: [
        { question: 'Explain the Open/Closed Principle (OCP) with a concrete code example.', answer: 'Software entities should be open for extension but closed for modification. Rather than adding if/else or switch statements whenever a new payment method is added, define a PaymentStrategy interface so new payment types implement the interface without touching existing code.', solution: 'interface PaymentMethod { void pay(int amount); } class PayPal implements PaymentMethod ... class CreditCard implements PaymentMethod ... ShoppingCart takes PaymentMethod.', difficulty: 'Intermediate', topic: 'SOLID Principles' },
        { question: 'When should you choose the Strategy pattern over inheritance?', answer: 'Use Strategy when behavior needs to be swapped dynamically at runtime or when subclasses would duplicate behavior. Strategy favors object composition over class inheritance, preventing class explosion.', solution: 'Composition (has-a strategy) allows swapping strategies at runtime via setter methods.', difficulty: 'Intermediate', topic: 'Design Patterns' },
      ],
      projects: [
        { title: 'Extensible Order Processing & Billing Engine', description: 'Build an extensible payment and notification engine applying Strategy, Factory, and Observer patterns with 100% unit test coverage.', difficulty: 'Intermediate', techStack: ['Java / TypeScript', 'Jest / JUnit', 'Design Patterns'], features: ['Payment processor implementing Strategy pattern for multiple gateways', 'Notification subsystem implementing Observer pattern for email/SMS', 'Factory method for generating shipping carriers based on order weight', 'Comprehensive unit test suite verifying zero OCP violations'] },
      ],
    },
    Advanced: {
      description: 'Clean Architecture, Domain-Driven Design (DDD), Microservices vs Monolith, event-driven architectures, CI/CD automation, and Site Reliability Engineering.',
      prerequisites: ['Design patterns and enterprise backend architecture'],
      roadmap: [
        { stepNumber: 1, title: 'Clean Architecture & Onion Architecture', description: 'Entities, Use Cases, Interface Adapters, Frameworks, and the Dependency Rule.', duration: '6 hours' },
        { stepNumber: 2, title: 'Domain-Driven Design (DDD)', description: 'Ubiquitous Language, Bounded Contexts, Aggregates, Value Objects, and Domain Events.', duration: '6 hours' },
        { stepNumber: 3, title: 'Microservices Decomposition', description: 'Decomposing by business capability and subdomain, shared-nothing databases, and API gateways.', duration: '6 hours' },
        { stepNumber: 4, title: 'Event-Driven Architectures', description: 'Event sourcing, CQRS (Command Query Responsibility Segregation), and Kafka messaging.', duration: '7 hours' },
        { stepNumber: 5, title: 'CI/CD Pipeline Automation & Quality Gates', description: 'Trunk-based development, SonarQube static analysis, and automated release rollouts.', duration: '6 hours' },
        { stepNumber: 6, title: 'Site Reliability Engineering (SRE) & Resilience', description: 'Circuit breakers (Hystrix/Resilience4j), bulkheads, SLOs/SLAs, and chaos testing.', duration: '6 hours' },
      ],
      youtubeResources: [
        { title: 'Clean Code & Clean Architecture by Robert C. Martin', url: 'https://www.youtube.com/watch?v=2dKZ-dWaCiU', channel: 'NDC Conferences', level: 'Advanced', description: 'Keynote by Uncle Bob on structuring long-lived maintainable software systems.', type: 'Video' },
        { title: 'Microservices Architecture Design Patterns', url: 'https://www.youtube.com/watch?v=y8ONgKzXyBw', channel: 'Mark Richards', level: 'Advanced', description: 'Architectural tradeoffs of distributed services, databases, and event sagas.', type: 'Video' },
      ],
      notesResources: [
        { title: 'Martin Fowler: Microservices Architecture Guide', url: 'https://martinfowler.com/articles/microservices.html', description: 'Foundational architectural essay defining microservices principles and boundaries.', type: 'Documentation', level: 'Advanced' },
        { title: 'Google SRE Book: How Google Runs Production Systems', url: 'https://sre.google/sre-book/table-of-contents/', description: 'Free definitive book on reliability, error budgets, and operational engineering.', type: 'Documentation', level: 'Advanced' },
      ],
      practiceQuestions: [
        { question: 'What is the Dependency Rule in Clean Architecture?', answer: 'Source code dependencies must point only inward toward higher-level policies. Outer layers (UI, Database, Web Frameworks) depend on inner layers (Use Cases, Domain Entities). Inner layers know nothing about outer layers.', solution: 'Domain Entities know nothing about Use Cases. Use Cases know nothing about Express/SQL. Invert dependencies using interfaces.', difficulty: 'Advanced', topic: 'Clean Architecture' },
        { question: 'How does the Circuit Breaker pattern prevent cascading failures in distributed systems?', answer: 'When downstream service failures exceed a threshold, the circuit breaker trips OPEN, immediately failing subsequent requests without calling the failing service. After a timeout, it transitions to HALF-OPEN to test recovery before closing.', solution: 'States: CLOSED (normal), OPEN (fast-fail, protects downstream), HALF-OPEN (testing trial requests).', difficulty: 'Advanced', topic: 'System Resilience' },
      ],
      projects: [
        { title: 'Distributed Event-Driven Order Processing Architecture', description: 'Architect and deploy a distributed order fulfillment system with Clean Architecture, Domain Events, and Docker Compose.', difficulty: 'Advanced', techStack: ['TypeScript / Node.js', 'Clean Architecture', 'Docker Compose', 'Jest'], features: ['Decoupled core domain entities with zero framework dependencies', 'Event publisher and subscriber communication between order and inventory modules', 'Resilience circuit breaker pattern implementation on external payment calls', 'Docker Compose configuration for multi-service local environment'] },
      ],
    },
  },
};

console.log('Part 3 built (DSA, ML, Data Science, AI, Software Eng).');
