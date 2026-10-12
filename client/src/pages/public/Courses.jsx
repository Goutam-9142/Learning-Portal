import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search, Filter, BookOpen, Users, Star,
  ChevronLeft, ChevronRight, X, Loader2, Clock, CheckCircle, Compass, Layers
} from 'lucide-react';
import { courseAPI } from '../../api/lmsApi';
import { useAuth } from '../../context/AuthContext';
import { ALL_CATEGORIES, PORTAL_COURSES } from '../../data/portalCourses';
import CategoryIcon from '../../components/common/CategoryIcon';
import toast from 'react-hot-toast';
import './Courses.css';

const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

/* ── Skeleton card ────────────────────────────────────────────────────────── */
const SkeletonCard = () => (
  <div className="course-card card">
    <div className="skeleton" style={{ height: 190, borderRadius: 'var(--radius-md)' }} />
    <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className="skeleton" style={{ height: 16, width: '40%' }} />
      <div className="skeleton" style={{ height: 22, width: '90%' }} />
      <div className="skeleton" style={{ height: 14, width: '75%' }} />
      <div className="skeleton" style={{ height: 38, marginTop: 12 }} />
    </div>
  </div>
);

/* ── Course card ──────────────────────────────────────────────────────────── */
const CourseCard = ({ course, onEnroll, enrollingId }) => {
  const { isAuthenticated, isStudent } = useAuth();
  const isEnrolling = enrollingId === course._id;

  // Resolve cover image (supports URL, relative server path, or placeholder)
  const imageSrc = course.coverImage
    ? (course.coverImage.startsWith('http') || course.coverImage.startsWith('/') ? course.coverImage : `/${course.coverImage}`)
    : null;

  // Get matching category info for icon/color
  const catInfo = ALL_CATEGORIES.find(
    (c) => c.name.toLowerCase() === (course.category || '').toLowerCase()
  );

  return (
    <div className="course-card card card-hover animate-fadeInUp">
      {/* Thumbnail */}
      <div className="course-card__thumb">
        {imageSrc ? (
          <img src={imageSrc} alt={course.title} loading="lazy" />
        ) : (
          <div
            className="course-card__thumb-placeholder"
            style={{
              background: catInfo ? `linear-gradient(135deg, ${catInfo.color}25, ${catInfo.color}05)` : undefined,
              color: catInfo ? catInfo.color : undefined
            }}
          >
            <CategoryIcon name={catInfo?.icon || 'BookOpen'} size={48} color={catInfo?.color} />
          </div>
        )}

        <span className={`badge course-card__level-badge ${
          course.level === 'Beginner'     ? 'badge-success' :
          course.level === 'Intermediate' ? 'badge-warning' :
          course.level === 'Advanced'     ? 'badge-danger' : 'badge-primary'
        }`}>
          {course.level || 'All Levels'}
        </span>

        {course.duration && (
          <span className="course-card__duration-badge">
            <Clock size={11} style={{ display: 'inline', marginRight: 4, verticalAlign: -1 }} />
            {course.duration}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="course-card__body">
        <div className="course-card__tags">
          <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            {catInfo && <CategoryIcon name={catInfo.icon} size={12} />}
            {course.category}
          </span>
        </div>

        <h3 className="course-card__title">{course.title}</h3>

        <p className="course-card__desc text-muted text-sm">
          {course.description && course.description.length > 110
            ? `${course.description.slice(0, 110)}…`
            : course.description}
        </p>

        {/* Meta row */}
        <div className="course-card__meta">
          <span className="flex items-center gap-1 text-xs text-muted">
            <Users size={13} /> {course.enrollmentCount ?? 0} learners
          </span>
          {course.curriculum && (
            <span className="flex items-center gap-1 text-xs text-muted">
              <Layers size={13} /> {course.curriculum.length} modules
            </span>
          )}
          {course.faculty && (
            <span className="text-xs text-muted" style={{ width: '100%', marginTop: 2 }}>
              Instructor: <strong style={{ color: 'var(--clr-text)' }}>{course.faculty.name}</strong>
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="course-card__actions">
          <Link
            to={`/course/${course._id}`}
            className="btn btn-primary btn-sm"
            style={{ flex: 1 }}
          >
            Explore Course & Roadmap
          </Link>
          {isAuthenticated && isStudent && (
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => onEnroll(course._id)}
              disabled={isEnrolling}
              title="Enroll in this course"
            >
              {isEnrolling ? <Loader2 size={14} className="spin" /> : 'Enroll'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════════════ */
const CoursesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [courses,     setCourses]     = useState([]);
  const [loading,     setLoading]     = useState(true);
  const [enrollingId, setEnrollingId] = useState(null);
  const [meta,        setMeta]        = useState({ total: 0, page: 1, totalPages: 1 });

  // Controlled filter state synced with URL search params
  const [search,   setSearch]   = useState(searchParams.get('search')   || '');
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [level,    setLevel]    = useState(searchParams.get('level')    || '');
  const [page,     setPage]     = useState(parseInt(searchParams.get('page') || '1', 10));

  /* ── Fetch courses with graceful fallback to PORTAL_COURSES catalog ──── */
  const fetchCourses = useCallback(async () => {
    setLoading(true);
    try {
      const params = { page, limit: 12 };
      if (search.trim()) params.search   = search.trim();
      if (category)      params.category = category;
      if (level)         params.level    = level;

      let apiCourses = [];
      let total = 0;
      let totalPages = 1;

      try {
        const { data } = await courseAPI.getAll(params);
        apiCourses = data.courses || [];
        total = data.total || 0;
        totalPages = data.totalPages || 1;
      } catch (err) {
        console.warn('API error, falling back to local portal courses:', err);
      }

      // If API returned courses matching the filter, use them!
      if (apiCourses.length > 0) {
        setCourses(apiCourses);
        setMeta({ total, page, totalPages });
      } else {
        // Fallback to client PORTAL_COURSES catalog
        let filtered = [...PORTAL_COURSES];

        if (category) {
          filtered = filtered.filter((c) =>
            c.category.toLowerCase() === category.toLowerCase() ||
            (c.relatedCategories && c.relatedCategories.some(rc => rc.toLowerCase() === category.toLowerCase()))
          );
        }

        if (level) {
          filtered = filtered.filter((c) =>
            c.level === level || c.level === 'All Levels' || (c.levelsData && c.levelsData[level])
          );
        }

        if (search.trim()) {
          const q = search.trim().toLowerCase();
          filtered = filtered.filter((c) =>
            c.title.toLowerCase().includes(q) ||
            c.description.toLowerCase().includes(q) ||
            c.category.toLowerCase().includes(q)
          );
        }

        setCourses(filtered);
        setMeta({ total: filtered.length, page: 1, totalPages: 1 });
      }
    } catch (err) {
      toast.error(err.message || 'Failed to load courses');
    } finally {
      setLoading(false);
    }
  }, [search, category, level, page]);

  useEffect(() => { fetchCourses(); }, [fetchCourses]);

  /* ── Sync filters to URL ──────────────────────────────────────────────── */
  useEffect(() => {
    const p = {};
    if (search.trim()) p.search   = search.trim();
    if (category)      p.category = category;
    if (level)         p.level    = level;
    if (page > 1)      p.page     = page;
    setSearchParams(p, { replace: true });
  }, [search, category, level, page, setSearchParams]);

  /* ── Handlers ─────────────────────────────────────────────────────────── */
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchCourses();
  };

  const handleSelectCategory = (catName) => {
    setCategory((prev) => (prev === catName ? '' : catName));
    setPage(1);
  };

  const handleSelectLevel = (lvl) => {
    setLevel((prev) => (prev === lvl ? '' : lvl));
    setPage(1);
  };

  const clearFilters = () => {
    setSearch(''); setCategory(''); setLevel(''); setPage(1);
  };

  const handleEnroll = async (courseId) => {
    setEnrollingId(courseId);
    try {
      const { data } = await courseAPI.enroll(courseId);
      toast.success(data.message || 'Successfully enrolled!');
    } catch (err) {
      toast.error(err.message || 'Enrollment failed');
    } finally {
      setEnrollingId(null);
    }
  };

  const hasFilters = search || category || level;

  return (
    <div className="courses-page page-wrapper container">
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="courses-page__header animate-fadeInUp">
        <div>
          <h1>Explore <span className="gradient-text">Courses & Roadmaps</span></h1>
          <p className="text-muted">
            {meta.total > 0
              ? `${meta.total} course${meta.total !== 1 ? 's' : ''} available across 24 technical domains`
              : 'Discover curated engineering and computer science roadmaps'}
          </p>
        </div>

        {/* Level filter quick buttons */}
        <div className="level-pills">
          <button
            type="button"
            className={`level-pill ${level === '' ? 'level-pill--active' : ''}`}
            onClick={() => handleSelectLevel('')}
          >
            All Levels
          </button>
          {LEVELS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              className={`level-pill ${level === lvl ? 'level-pill--active' : ''}`}
              onClick={() => handleSelectLevel(lvl)}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* ── Category Pills Bar (All 24 Categories) ───────────────────────── */}
      <div className="category-pills-section animate-fadeInUp">
        <div className="category-pills-label">
          <Compass size={14} /> Categories ({ALL_CATEGORIES.length})
          {category && (
            <span className="badge badge-accent" style={{ marginLeft: 6 }}>
              Filtered: {category}
            </span>
          )}
        </div>
        <div className="category-pills-container">
          <button
            type="button"
            className={`category-pill ${category === '' ? 'category-pill--active' : ''}`}
            onClick={() => handleSelectCategory('')}
          >
            All Subjects
          </button>
          {ALL_CATEGORIES.map((cat) => {
            const isActive = category.toLowerCase() === cat.name.toLowerCase();
            return (
              <button
                key={cat.id}
                type="button"
                className={`category-pill ${isActive ? 'category-pill--active' : ''}`}
                onClick={() => handleSelectCategory(cat.name)}
              >
                <CategoryIcon name={cat.icon} size={14} color={isActive ? '#fff' : cat.color} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Search + Select Filters ───────────────────────────────────────── */}
      <form
        onSubmit={handleSearch}
        className="courses-page__filters card animate-fadeInUp"
        role="search"
        aria-label="Course search"
      >
        <div className="courses-page__search-wrap">
          <Search size={16} className="courses-page__search-icon" />
          <input
            id="course-search-input"
            className="form-input"
            style={{ paddingLeft: '2.5rem' }}
            placeholder="Search by subject, title, keywords (e.g. React, DSA, Python, SQL)…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search courses"
          />
        </div>

        <select
          id="category-filter"
          className="form-select courses-page__select"
          value={category}
          onChange={(e) => { setCategory(e.target.value); setPage(1); }}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {ALL_CATEGORIES.map((c) => (
            <option key={c.id} value={c.name}>{c.name}</option>
          ))}
        </select>

        <select
          id="level-filter"
          className="form-select courses-page__select"
          value={level}
          onChange={(e) => { setLevel(e.target.value); setPage(1); }}
          aria-label="Filter by level"
        >
          <option value="">All Levels</option>
          {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>

        <button id="search-btn" type="submit" className="btn btn-primary">
          <Filter size={15} /> Search
        </button>

        {hasFilters && (
          <button type="button" className="btn btn-secondary" onClick={clearFilters} title="Clear filters">
            <X size={15} /> Clear Filters
          </button>
        )}
      </form>

      {/* ── Results Grid ─────────────────────────────────────────────────── */}
      {loading ? (
        <div className="courses-grid">
          {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : courses.length === 0 ? (
        <div className="card courses-page__empty animate-fadeIn">
          <BookOpen size={56} style={{ color: 'var(--clr-text-faint)', margin: '0 auto 1rem' }} />
          <h3>No matching courses found</h3>
          <p className="text-muted">
            We couldn't find courses matching your current filters. Try selecting another category or clearing filters.
          </p>
          {hasFilters && (
            <button className="btn btn-outline mt-4" onClick={clearFilters}>
              Clear all filters
            </button>
          )}
        </div>
      ) : (
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              onEnroll={handleEnroll}
              enrollingId={enrollingId}
            />
          ))}
        </div>
      )}

      {/* ── Pagination ──────────────────────────────────────────────────── */}
      {meta.totalPages > 1 && (
        <div className="courses-page__pagination animate-fadeIn">
          <button
            id="prev-page-btn"
            className="btn btn-secondary btn-sm"
            disabled={meta.page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft size={16} /> Prev
          </button>
          <span className="text-muted text-sm">
            Page <strong style={{ color: 'var(--clr-text)' }}>{meta.page}</strong> of{' '}
            <strong style={{ color: 'var(--clr-text)' }}>{meta.totalPages}</strong>
          </span>
          <button
            id="next-page-btn"
            className="btn btn-secondary btn-sm"
            disabled={meta.page >= meta.totalPages}
            onClick={() => setPage((p) => Math.min(meta.totalPages, p + 1))}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
