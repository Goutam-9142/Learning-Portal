const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Course = require('../models/Course');
const Material = require('../models/Material');
const Assignment = require('../models/Assignment');

/* ─────────────────────────────────────────────────────────────────────────────
 * Helper: resolve a stored file path into a full public URL.
 * Converts Windows back-slashes to forward-slashes for URL safety.
 * ───────────────────────────────────────────────────────────────────────────── */
const toPublicUrl = (req, filePath) => {
  if (!filePath) return '';
  const clean = filePath.replace(/\\/g, '/');
  return `${req.protocol}://${req.get('host')}/${clean}`;
};

/* ─────────────────────────────────────────────────────────────────────────────
 * Helper: validate a MongoDB ObjectId string.
 * ───────────────────────────────────────────────────────────────────────────── */
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

/* ═══════════════════════════════════════════════════════════════════════════
 * createCourse
 * @desc    Create a new course (cover image optional via prior Multer pass)
 * @route   POST /api/courses
 * @access  Private – Admin | Faculty
 * ═══════════════════════════════════════════════════════════════════════════ */
const createCourse = asyncHandler(async (req, res) => {
  const { title, description, category, duration, level, isPublished } = req.body;

  // ── Input validation ───────────────────────────────────────────────────────
  if (!title || title.trim().length < 3) {
    res.status(400);
    throw new Error('Title is required and must be at least 3 characters');
  }
  if (!description || description.trim().length < 10) {
    res.status(400);
    throw new Error('Description is required and must be at least 10 characters');
  }

  if (!category || typeof category !== 'string' || !category.trim()) {
    res.status(400);
    throw new Error('A valid category name is required');
  }

  // ── Determine faculty owner ────────────────────────────────────────────────
  // Admins may specify a facultyId in the body; faculty defaults to themselves.
  let facultyId = req.user._id;
  if (req.user.role === 'admin' && req.body.facultyId) {
    if (!isValidObjectId(req.body.facultyId)) {
      res.status(400);
      throw new Error('Invalid facultyId');
    }
    facultyId = req.body.facultyId;
  }

  // ── Resolve cover image path (set by uploadThumbnail middleware, if used) ──
  const coverImage = req.file
    ? req.file.path.replace(/\\/g, '/')
    : (req.body.coverImage || '');

  const course = await Course.create({
    title:             title.trim(),
    description:       description.trim(),
    category:          category.trim(),
    faculty:           facultyId,
    coverImage,
    duration:          duration ? duration.trim() : '',
    level:             level ? level : 'Beginner',
    isPublished:       isPublished === undefined ? true : (isPublished === 'true' || isPublished === true),
    prerequisites:     req.body.prerequisites || [],
    learningOutcomes:  req.body.learningOutcomes || [],
    curriculum:        req.body.curriculum || [],
    levelsData:        req.body.levelsData || {},
    roadmap:           req.body.roadmap || [],
    youtubeResources:  req.body.youtubeResources || [],
    notesResources:    req.body.notesResources || [],
    practiceQuestions: req.body.practiceQuestions || [],
    projects:          req.body.projects || [],
    relatedCategories: req.body.relatedCategories || [],
  });

  res.status(201).json({
    success: true,
    message: 'Course created successfully',
    course,
  });
});

/* ═══════════════════════════════════════════════════════════════════════════
 * getCourses
 * @desc    List all published courses with optional search / filter / pagination
 * @route   GET /api/courses
 * @access  Public
 *
 * Query params:
 *   search   – full-text search on title + description
 *   category – filter by category enum value
 *   level    – filter by level (Beginner | Intermediate | Advanced)
 *   faculty  – filter by faculty ObjectId
 *   page     – page number (default 1)
 *   limit    – results per page (default 10, max 50)
 * ═══════════════════════════════════════════════════════════════════════════ */
const getCourses = asyncHandler(async (req, res) => {
  const { search, category, level, faculty, page = 1, limit = 10 } = req.query;

  // ── Build filter object ────────────────────────────────────────────────────
  const filter = { isPublished: true };

  if (search && search.trim()) {
    const q = search.trim();
    filter.$or = [
      { title: { $regex: q, $options: 'i' } },
      { description: { $regex: q, $options: 'i' } },
      { category: { $regex: q, $options: 'i' } },
    ];
  }

  if (category && category.trim()) {
    const cat = category.trim();
    const catRegex = new RegExp(`^${cat}$`, 'i');
    if (filter.$or) {
      // Combine search and category
      filter.$and = [
        { $or: filter.$or },
        { $or: [{ category: catRegex }, { relatedCategories: catRegex }] }
      ];
      delete filter.$or;
    } else {
      filter.$or = [
        { category: catRegex },
        { relatedCategories: catRegex }
      ];
    }
  }

  if (level) {
    if (level === 'All Levels') {
      // matches any level
    } else {
      filter.$or = filter.$or || [];
      // allow courses at that level OR courses with 'All Levels'
      const levelFilter = [{ level }, { level: 'All Levels' }];
      if (filter.$and) {
        filter.$and.push({ $or: levelFilter });
      } else if (filter.$or.length > 0) {
        filter.$and = [
          { $or: filter.$or },
          { $or: levelFilter }
        ];
        delete filter.$or;
      } else {
        filter.$or = levelFilter;
      }
    }
  }

  if (faculty && isValidObjectId(faculty)) filter.faculty = faculty;

  // ── Pagination math ────────────────────────────────────────────────────────
  const pageNum  = Math.max(1, parseInt(page, 10))  || 1;
  const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10))) || 10;
  const skip     = (pageNum - 1) * limitNum;

  const [courses, total] = await Promise.all([
    Course.find(filter)
      .populate('faculty', 'name email profileImage')
      .select('-enrolledStudents')          // keep list response lean
      .sort(search ? { score: { $meta: 'textScore' } } : { createdAt: -1 })
      .skip(skip)
      .limit(limitNum),
    Course.countDocuments(filter),
  ]);

  res.status(200).json({
    success: true,
    total,
    page:       pageNum,
    totalPages: Math.ceil(total / limitNum),
    count:      courses.length,
    courses,
  });
});

/* ═══════════════════════════════════════════════════════════════════════════
 * getCourseById
 * @desc    Get a single course with populated faculty, materials, and assignments
 * @route   GET /api/courses/:id
 * @access  Public (published) | Private (unpublished – faculty owner / admin)
 * ═══════════════════════════════════════════════════════════════════════════ */
const getCourseById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let course;
  if (isValidObjectId(id)) {
    course = await Course.findById(id)
      .populate('faculty',          'name email profileImage')
      .populate('enrolledStudents', 'name email profileImage');
  } else {
    // Try lookup by exact title map, title regex, or category
    const SLUG_TITLE_MAP = {
      'dsa': 'Data Structures & Algorithms: Complete Mastery',
      'course-dsa': 'Data Structures & Algorithms: Complete Mastery',
      'ai': 'Artificial Intelligence: Agents, Logic & Modern AI',
      'course-ai': 'Artificial Intelligence: Agents, Logic & Modern AI',
      'ml': 'Machine Learning Engineering: From Fundamentals to MLOps',
      'course-ml': 'Machine Learning Engineering: From Fundamentals to MLOps',
      'course-machine-learning': 'Machine Learning Engineering: From Fundamentals to MLOps',
      'c-lang': 'C Programming & Systems Fundamentals',
      'course-c-lang': 'C Programming & Systems Fundamentals',
      'cpp': 'Modern C++ (C++17/20) & Software Engineering',
      'course-cpp': 'Modern C++ (C++17/20) & Software Engineering',
      'dbms': 'Database Management Systems & Relational Architecture',
      'course-dbms': 'Database Management Systems & Relational Architecture',
      'sql-mysql': 'SQL & MySQL Database Administration & Query Mastery',
      'course-sql-mysql': 'SQL & MySQL Database Administration & Query Mastery',
      'node-express': 'Node.js & Express.js Backend Architecture',
      'course-node-express': 'Node.js & Express.js Backend Architecture',
      'git-github': 'Git & GitHub: Professional Version Control & Collaboration',
      'course-git-github': 'Git & GitHub: Professional Version Control & Collaboration',
      'computer-networks': 'Computer Networks & Internet Protocol Architecture',
      'course-computer-networks': 'Computer Networks & Internet Protocol Architecture',
      'operating-systems': 'Operating Systems & Kernel Architecture',
      'course-operating-systems': 'Operating Systems & Kernel Architecture',
      'cybersecurity': 'Cybersecurity Fundamentals & Network Defense',
      'course-cybersecurity': 'Cybersecurity Fundamentals & Network Defense',
      'aptitude-interview': 'Aptitude, Logical Reasoning & Interview Preparation',
      'course-aptitude-interview': 'Aptitude, Logical Reasoning & Interview Preparation',
      'software-engineering': 'Software Engineering: Design Patterns & Clean Architecture',
      'course-software-engineering': 'Software Engineering: Design Patterns & Clean Architecture',
      'data-science': 'Data Science & Advanced Analytics Masterclass',
      'course-data-science': 'Data Science & Advanced Analytics Masterclass',
      'python': 'Python Programming: From Beginner to Advanced',
      'course-python': 'Python Programming: From Beginner to Advanced',
      'java': 'Core Java & Advanced Object-Oriented Architecture',
      'course-java': 'Core Java & Advanced Object-Oriented Architecture',
      'javascript': 'Modern JavaScript from Fundamentals to Mastery',
      'course-javascript': 'Modern JavaScript from Fundamentals to Mastery',
      'react': 'Complete React 18+ Developer: Zero to Mastery',
      'course-react': 'Complete React 18+ Developer: Zero to Mastery',
      'html': 'HTML5 Semantic Architecture & Web Accessibility',
      'course-html': 'HTML5 Semantic Architecture & Web Accessibility',
      'css': 'CSS3 Mastery: Modern Layouts, Animations & Architecture',
      'course-css': 'CSS3 Mastery: Modern Layouts, Animations & Architecture',
      'web-dev': 'Full-Stack Web Development Bootcamp',
      'course-web-dev': 'Full-Stack Web Development Bootcamp',
      'frontend-dev': 'Modern Frontend Development: Zero to Hero',
      'course-frontend-dev': 'Modern Frontend Development: Zero to Hero',
      'backend-dev': 'Scalable Backend Engineering & Architecture',
      'course-backend-dev': 'Scalable Backend Engineering & Architecture',
    };

    const targetTitle = SLUG_TITLE_MAP[id] || SLUG_TITLE_MAP[id.toLowerCase()];
    const cleanSlug = id.replace(/^course-/, '').replace(/-/g, ' ');

    course = await Course.findOne(
      targetTitle
        ? { title: targetTitle }
        : {
            $or: [
              { title: new RegExp(cleanSlug, 'i') },
              { category: new RegExp(cleanSlug, 'i') }
            ]
          }
    )
      .sort({ createdAt: -1 })
      .populate('faculty',          'name email profileImage')
      .populate('enrolledStudents', 'name email profileImage');
  }

  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  // ── Visibility gate ────────────────────────────────────────────────────────
  // Unpublished courses are visible only to their faculty owner and admins
  if (!course.isPublished) {
    const isOwner =
      req.user &&
      (req.user.role === 'admin' ||
        (course.faculty && course.faculty._id.toString() === req.user._id.toString()));

    if (!isOwner) {
      res.status(403);
      throw new Error('This course is not yet published');
    }
  }

  // ── Fetch related materials and assignments in parallel ───────────────────
  const [materials, assignments] = await Promise.all([
    Material.find({ course: course._id, isVisible: true })
      .populate('uploadedBy', 'name')
      .sort({ order: 1, createdAt: 1 }),
    Assignment.find({ course: course._id, isActive: true })
      .populate('createdBy', 'name')
      .sort({ dueDate: 1 }),
  ]);

  res.status(200).json({
    success: true,
    course,
    data: course,
    materials,
    assignments,
  });
});

/* ═══════════════════════════════════════════════════════════════════════════
 * updateCourse
 * @desc    Update course details (thumbnail handled by uploadThumbnail middleware)
 * @route   PUT /api/courses/:id
 * @access  Private – Admin | Faculty owner only
 * ═══════════════════════════════════════════════════════════════════════════ */
const updateCourse = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error('Invalid course ID');
  }

  const course = await Course.findById(id);
  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  // ── Ownership check (admins bypass) ───────────────────────────────────────
  if (
    req.user.role !== 'admin' &&
    course.faculty.toString() !== req.user._id.toString()
  ) {
    res.status(403);
    throw new Error('You are not authorized to edit this course');
  }

  const { title, description, category, duration, level, isPublished } = req.body;

  if (title !== undefined)       course.title       = title.trim();
  if (description !== undefined) course.description = description.trim();
  if (category !== undefined)    course.category    = category;
  if (duration !== undefined)    course.duration    = duration.trim();
  if (level !== undefined)       course.level       = level;
  if (isPublished !== undefined) {
    course.isPublished = isPublished === 'true' || isPublished === true;
  }

  // Update cover image if a new file was uploaded
  if (req.file) {
    course.coverImage = req.file.path.replace(/\\/g, '/');
  }

  const updated = await course.save();

  res.status(200).json({
    success: true,
    message: 'Course updated successfully',
    course: updated,
  });
});

/* ═══════════════════════════════════════════════════════════════════════════
 * deleteCourse
 * @desc    Hard-delete a course and its associated materials & assignments
 * @route   DELETE /api/courses/:id
 * @access  Private – Admin | Faculty owner only
 * ═══════════════════════════════════════════════════════════════════════════ */
const deleteCourse = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error('Invalid course ID');
  }

  const course = await Course.findById(id);
  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  if (
    req.user.role !== 'admin' &&
    course.faculty.toString() !== req.user._id.toString()
  ) {
    res.status(403);
    throw new Error('You are not authorized to delete this course');
  }

  // Cascade-delete related materials and assignments
  await Promise.all([
    Material.deleteMany({ course: id }),
    Assignment.deleteMany({ course: id }),
    Course.findByIdAndDelete(id),
  ]);

  res.status(200).json({
    success: true,
    message: 'Course and all associated content deleted successfully',
  });
});

/* ═══════════════════════════════════════════════════════════════════════════
 * enrollCourse
 * @desc    Enroll the currently logged-in student in a course
 * @route   POST /api/courses/:id/enroll
 * @access  Private – Student only
 * ═══════════════════════════════════════════════════════════════════════════ */
const enrollCourse = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error('Invalid course ID');
  }

  const course = await Course.findById(id);
  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  if (!course.isPublished) {
    res.status(400);
    throw new Error('Cannot enroll in an unpublished course');
  }

  const studentId = req.user._id;

  // ── Prevent duplicate enrolment ────────────────────────────────────────────
  const alreadyEnrolled = course.enrolledStudents.some(
    (sid) => sid.toString() === studentId.toString()
  );
  if (alreadyEnrolled) {
    res.status(400);
    throw new Error('You are already enrolled in this course');
  }

  // ── $addToSet is idempotent at the DB level (extra safety net) ────────────
  const updated = await Course.findByIdAndUpdate(
    id,
    { $addToSet: { enrolledStudents: studentId } },
    { new: true }
  ).populate('faculty', 'name email');

  res.status(200).json({
    success: true,
    message: `Successfully enrolled in "${updated.title}"`,
    enrollmentCount: updated.enrolledStudents.length,
  });
});

/* ═══════════════════════════════════════════════════════════════════════════
 * unenrollCourse
 * @desc    Remove the current student from a course's enrolled list
 * @route   DELETE /api/courses/:id/enroll
 * @access  Private – Student only
 * ═══════════════════════════════════════════════════════════════════════════ */
const unenrollCourse = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error('Invalid course ID');
  }

  const course = await Course.findById(id);
  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  const studentId = req.user._id;
  const isEnrolled = course.enrolledStudents.some(
    (sid) => sid.toString() === studentId.toString()
  );

  if (!isEnrolled) {
    res.status(400);
    throw new Error('You are not enrolled in this course');
  }

  await Course.findByIdAndUpdate(id, {
    $pull: { enrolledStudents: studentId },
  });

  res.status(200).json({
    success: true,
    message: `Successfully unenrolled from "${course.title}"`,
  });
});

/* ═══════════════════════════════════════════════════════════════════════════
 * getMyCourses
 * @desc    Faculty: returns courses they own.
 *          Student: returns courses they are enrolled in.
 * @route   GET /api/courses/my
 * @access  Private – All authenticated roles
 * ═══════════════════════════════════════════════════════════════════════════ */
const getMyCourses = asyncHandler(async (req, res) => {
  let courses;

  if (req.user.role === 'faculty') {
    courses = await Course.find({ faculty: req.user._id })
      .populate('faculty', 'name email')
      .sort({ createdAt: -1 });
  } else if (req.user.role === 'student') {
    courses = await Course.find({ enrolledStudents: req.user._id, isPublished: true })
      .populate('faculty', 'name email')
      .select('-enrolledStudents')
      .sort({ createdAt: -1 });
  } else {
    // Admin – return all courses
    courses = await Course.find()
      .populate('faculty', 'name email')
      .sort({ createdAt: -1 });
  }

  res.status(200).json({
    success: true,
    count: courses.length,
    courses,
  });
});

/* ═══════════════════════════════════════════════════════════════════════════
 * getCategories
 * @desc    Get all distinct categories with course counts
 * @route   GET /api/courses/categories
 * @access  Public
 * ═══════════════════════════════════════════════════════════════════════════ */
const getCategories = asyncHandler(async (req, res) => {
  const aggregated = await Course.aggregate([
    { $match: { isPublished: true } },
    { $group: { _id: '$category', count: { $sum: 1 } } },
    { $sort: { count: -1, _id: 1 } },
  ]);

  const categories = aggregated.map((item) => ({
    name: item._id,
    count: item.count,
  }));

  res.status(200).json({
    success: true,
    count: categories.length,
    categories,
  });
});

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  enrollCourse,
  unenrollCourse,
  getMyCourses,
  getCategories,
};
