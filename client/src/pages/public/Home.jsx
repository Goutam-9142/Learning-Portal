import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, Users, Award, Zap, Star, Play,
  CheckCircle, ArrowUpRight, Compass, Video, FileText, CheckSquare
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { ALL_CATEGORIES } from '../../data/portalCourses';
import CategoryIcon from '../../components/common/CategoryIcon';
import './Home.css';

const stats = [
  { value: '18+',  label: 'Core Tech Subjects', icon: <BookOpen size={20} /> },
  { value: '24',   label: 'Curated Categories', icon: <Compass size={20} /> },
  { value: '3',    label: 'Skill Levels per Subject', icon: <Award size={20} /> },
  { value: '100%', label: 'Free & Open Learning', icon: <Star size={20} /> },
];

const features = [
  { icon: <Zap size={24} />,      title: '3-Tier Learning Paths', desc: 'Beginner, Intermediate, and Advanced milestones for every subject with step-by-step roadmaps.' },
  { icon: <Video size={24} />,    title: 'Verified Video Tutorials', desc: 'Curated educational YouTube playlists from top instructors like FreeCodeCamp, Traversy Media, and Abdul Bari.' },
  { icon: <FileText size={24} />, title: 'Documentation & Notes', desc: 'Official documentation references, cheat sheets, and downloadable notes to solidify your understanding.' },
  { icon: <CheckSquare size={24} />, title: 'Interview & Projects', desc: 'Real interview questions with solutions and practical portfolio projects for each domain.' },
];

const featuredTracks = [
  {
    title: 'Data Structures & Algorithms',
    category: 'Data Structures and Algorithms',
    desc: 'Master arrays, trees, graphs, dynamic programming, and complexity analysis for technical coding interviews.',
    duration: '12 weeks',
    modules: 4,
    color: '#7c3aed',
    icon: 'Network',
  },
  {
    title: 'Full-Stack Web Development',
    category: 'Web Development',
    desc: 'Build modern responsive applications with HTML5, CSS3, JavaScript, React, Node.js, and MongoDB.',
    duration: '14 weeks',
    modules: 4,
    color: '#4f46e5',
    icon: 'Globe',
  },
  {
    title: 'Machine Learning & AI',
    category: 'Machine Learning',
    desc: 'Supervised, unsupervised models, neural networks, feature engineering, and real-world predictive pipelines.',
    duration: '10 weeks',
    modules: 4,
    color: '#9333ea',
    icon: 'TrendingUp',
  },
  {
    title: 'Database Management Systems',
    category: 'Database Management Systems',
    desc: 'Relational database architecture, ER diagrams, normalization (1NF-BCNF), indexing, and SQL queries.',
    duration: '8 weeks',
    modules: 4,
    color: '#059669',
    icon: 'Database',
  },
  {
    title: 'Operating Systems & Concurrency',
    category: 'Operating Systems',
    desc: 'Processes, threads, CPU scheduling, synchronization, deadlock avoidance, and virtual memory paging.',
    duration: '8 weeks',
    modules: 4,
    color: '#475569',
    icon: 'Laptop',
  },
  {
    title: 'Computer Networks & Protocols',
    category: 'Computer Networks',
    desc: 'OSI 7 layers, TCP/IP stack, IP routing, subnetting, HTTP/HTTPS, DNS, and modern network security.',
    duration: '8 weeks',
    modules: 4,
    color: '#2563eb',
    icon: 'Share2',
  },
];

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__glow hero__glow--left"  aria-hidden />
        <div className="hero__glow hero__glow--right" aria-hidden />

        <div className="container">
          <div className="hero__content animate-fadeInUp">
            <span className="badge badge-accent hero__badge">
              <Zap size={11} /> 24 Technical Domains • 3 Learning Levels
            </span>

            <h1 className="hero__title">
              Learn Computer Science & Engineering
              <span className="gradient-text"> Without Limits</span>
            </h1>

            <p className="hero__subtitle">
              Interactive roadmaps, verified video lectures, official documentation,
              practice interview questions, and hands-on projects — all in one unified learning portal.
            </p>

            <div className="hero__cta">
              <Link to="/courses" className="btn btn-primary btn-lg">
                Explore All Courses <ArrowRight size={18} />
              </Link>
              {!isAuthenticated && (
                <Link to="/register" className="btn btn-outline btn-lg">
                  <Play size={16} /> Get Started Free
                </Link>
              )}
            </div>
          </div>

          {/* ── Stats row ─────────────────────────────────────────── */}
          <div className="hero__stats animate-fadeInUp delay-200">
            {stats.map(({ value, label, icon }) => (
              <div key={label} className="hero__stat-card card">
                <div className="hero__stat-icon">{icon}</div>
                <div>
                  <div className="hero__stat-value">{value}</div>
                  <div className="hero__stat-label text-muted text-sm">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore by Category (All 24 Categories) ────────────────── */}
      <section className="home-categories container">
        <div className="section-header text-center animate-fadeInUp">
          <span className="badge badge-primary" style={{ alignSelf: 'center', marginBottom: 6 }}>
            Complete Subject Catalog
          </span>
          <h2>Explore by <span className="gradient-text">Category</span></h2>
          <p className="text-muted" style={{ maxWidth: 640, margin: '0 auto' }}>
            Choose from 24 specialized categories spanning core CS foundations, modern web stacks, programming languages, databases, and interview prep.
          </p>
        </div>

        <div className="category-grid animate-fadeInUp delay-100">
          {ALL_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/courses?category=${encodeURIComponent(cat.name)}`}
              className="category-card"
              title={`View ${cat.name} courses`}
            >
              <div
                className="category-card__icon-wrap"
                style={{
                  backgroundColor: `${cat.color}15`,
                  color: cat.color,
                }}
              >
                <CategoryIcon name={cat.icon} size={22} color={cat.color} />
              </div>
              <h3 className="category-card__name">{cat.name}</h3>
              <p className="category-card__desc">{cat.desc}</p>
              <span className="category-card__cta">
                Explore courses <ArrowUpRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Core Tracks ──────────────────────────────────────── */}
      <section className="home-tracks">
        <div className="container">
          <div className="section-header text-center animate-fadeInUp">
            <span className="badge badge-warning" style={{ alignSelf: 'center', marginBottom: 6 }}>
              Curated Roadmaps
            </span>
            <h2>Core Engineering <span className="gradient-text">Learning Tracks</span></h2>
            <p className="text-muted" style={{ maxWidth: 620, margin: '0 auto' }}>
              Structured, end-to-end curriculums with Beginner, Intermediate, and Advanced tiers to guide your journey.
            </p>
          </div>

          <div className="grid-3 animate-fadeInUp delay-100">
            {featuredTracks.map((track) => (
              <div key={track.title} className="track-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: `${track.color}15`,
                      color: track.color,
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    <CategoryIcon name={track.icon} size={20} color={track.color} />
                  </div>
                  <div>
                    <span className="badge badge-primary text-xs">{track.category}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.15rem', marginTop: 4 }}>{track.title}</h3>
                <p className="text-muted text-sm" style={{ marginTop: 6, lineHeight: 1.6, flex: 1 }}>
                  {track.desc}
                </p>

                <div className="track-card__levels">
                  <span className="badge badge-success text-xs">Beginner</span>
                  <span className="badge badge-warning text-xs">Intermediate</span>
                  <span className="badge badge-danger text-xs">Advanced</span>
                </div>

                <div className="track-card__meta">
                  <span>⏱ {track.duration}</span>
                  <span>📚 {track.modules} Modules</span>
                  <Link
                    to={`/courses?category=${encodeURIComponent(track.category)}`}
                    className="btn-link"
                    style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 4, fontWeight: 600 }}
                  >
                    View Track <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────── */}
      <section className="features container">
        <div className="section-header text-center animate-fadeInUp">
          <h2>Everything You Need to <span className="gradient-text">Succeed</span></h2>
          <p className="text-muted">A complete learning ecosystem built for engineering students and self-taught developers.</p>
        </div>

        <div className="grid-4 animate-fadeInUp delay-100">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="feature-card card card-hover">
              <div className="feature-card__icon">{icon}</div>
              <h3 className="feature-card__title">{title}</h3>
              <p className="feature-card__desc text-muted text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────── */}
      {!isAuthenticated && (
        <section className="cta-banner container animate-fadeInUp">
          <div className="cta-banner__inner card">
            <div className="cta-banner__glow" aria-hidden />
            <h2>Ready to Elevate Your Tech Skills?</h2>
            <p className="text-muted">
              Explore 24 categories, follow structured roadmaps, and practice with real questions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/register" className="btn btn-primary btn-lg">
                Create Free Account <ArrowRight size={18} />
              </Link>
              <Link to="/courses" className="btn btn-secondary btn-lg">
                Browse All Courses
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
