import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  BookOpen, Video, FileText, CheckSquare, Users, Clock, Award,
  Calendar, ArrowLeft, Lock, Loader2, Play, Pause, Volume2,
  VolumeX, Maximize, RotateCcw, Download, CheckCircle, AlertCircle,
  Upload, X, File, ExternalLink, ChevronRight, ChevronDown, Check,
  Compass, Layers, Code, Sparkles, HelpCircle, Briefcase, RefreshCw
} from 'lucide-react';
import { courseAPI, submissionAPI } from '../../api/lmsApi';
import { useAuth } from '../../context/AuthContext';
import { PORTAL_COURSES, ALL_CATEGORIES } from '../../data/portalCourses';
import CategoryIcon from '../../components/common/CategoryIcon';
import toast from 'react-hot-toast';
import './CourseDetail.css';

/* ── Helper to convert YouTube URL to Embed URL ──────────────────────────── */
function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  // Playlist embed
  const playlistMatch = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  if (playlistMatch && !url.includes('watch?v=')) {
    return `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistMatch[1]}`;
  }
  // Video ID embed
  const videoMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([a-zA-Z0-9_-]{11})/);
  if (videoMatch) {
    return `https://www.youtube-nocookie.com/embed/${videoMatch[1]}`;
  }
  return null;
}

/* ── Custom HTML5 Video Player Component (for uploaded MP4s) ─────────────── */
const VideoPlayer = ({ video }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  useEffect(() => {
    setPlaying(false);
    setCurrentTime(0);
  }, [video]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) videoRef.current.currentTime = time;
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setMuted(vol === 0);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      videoRef.current.muted = vol === 0;
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuteState = !muted;
    setMuted(newMuteState);
    videoRef.current.muted = newMuteState;
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) videoRef.current.playbackRate = speed;
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const videoSrc = video.fileUrl?.startsWith('http') || video.fileUrl?.startsWith('/')
    ? video.fileUrl
    : `/${video.fileUrl}`;

  return (
    <div className="custom-player card">
      <div className="custom-player__video-wrapper">
        <video
          ref={videoRef}
          src={videoSrc}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setPlaying(false)}
          onClick={togglePlay}
          className="custom-player__video"
        />

        {!playing && (
          <button className="custom-player__overlay-btn" onClick={togglePlay} aria-label="Play video">
            <Play size={36} style={{ marginLeft: 4 }} />
          </button>
        )}
      </div>

      <div className="custom-player__controls">
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="custom-player__seek"
        />

        <div className="custom-player__actions">
          <div className="custom-player__left">
            <button className="player-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? <Pause size={18} /> : <Play size={18} />}
            </button>

            <button className="player-btn" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
              {muted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={muted ? 0 : volume}
              onChange={handleVolumeChange}
              className="custom-player__vol-slider"
            />

            <span className="player-time text-xs text-muted">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="custom-player__right">
            <div className="speed-selector">
              {[0.75, 1, 1.25, 1.5, 2].map((s) => (
                <button
                  key={s}
                  className={`speed-btn ${playbackSpeed === s ? 'speed-btn--active' : ''}`}
                  onClick={() => handleSpeedChange(s)}
                >
                  {s}x
                </button>
              ))}
            </div>

            <button className="player-btn" onClick={toggleFullscreen} title="Fullscreen">
              <Maximize size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="custom-player__info">
        <h3>{video.title}</h3>
        {video.description && <p className="text-muted text-sm">{video.description}</p>}
      </div>
    </div>
  );
};

/* ── Assignment Card Component with Inline Submission Form ────────────────── */
const AssignmentCard = ({ assignment, userSubmission, onSubmissionSuccess }) => {
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef();

  const isOverdue = new Date(assignment.dueDate) < new Date();
  const isStudent = user?.role === 'student';

  const handleFileSelect = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      if (selected.size > 20 * 1024 * 1024) {
        toast.error('File size must be under 20 MB');
        return;
      }
      setFile(selected);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('assignmentId', assignment._id);
    formData.append('file', file);

    setSubmitting(true);
    try {
      const { data } = await submissionAPI.submit(formData);
      toast.success(data.message || 'Assignment submitted!');
      setFile(null);
      onSubmissionSuccess();
    } catch (err) {
      toast.error(err.message || 'Failed to submit assignment');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card assignment-card mb-4">
      <div className="assignment-card__header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <h3 className="assignment-card__title">{assignment.title}</h3>
            <span className={`badge ${isOverdue ? 'badge-danger' : 'badge-success'}`}>
              {isOverdue ? 'Overdue' : 'Open'}
            </span>
          </div>
          <p className="text-muted text-sm" style={{ margin: 0 }}>
            {assignment.description}
          </p>
        </div>

        <div className="assignment-card__score-badge">
          <span className="text-xs text-muted">Max Score</span>
          <span className="font-bold text-lg" style={{ color: 'var(--clr-primary-light)' }}>
            {assignment.maxScore} pts
          </span>
        </div>
      </div>

      <div className="assignment-card__meta">
        <span className="text-xs text-muted flex items-center gap-1">
          <Calendar size={13} /> Due: {new Date(assignment.dueDate).toLocaleString('en-IN', {
            day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
          })}
        </span>

        {assignment.attachmentUrl && (
          <a
            href={assignment.attachmentUrl.startsWith('http') ? assignment.attachmentUrl : `/${assignment.attachmentUrl}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs btn-link flex items-center gap-1"
          >
            <Download size={13} /> Attached Reference File
          </a>
        )}
      </div>

      {userSubmission ? (
        <div className="submission-status-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <CheckCircle size={20} style={{ color: 'var(--clr-success)' }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Submitted</div>
              <div className="text-xs text-muted">
                Submitted on {new Date(userSubmission.submittedAt).toLocaleString()}
                {userSubmission.isLate && <span style={{ color: 'var(--clr-danger)', marginLeft: 6 }}>(Late Submission)</span>}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            {userSubmission.status === 'graded' ? (
              <div className="submission-score">
                Grade: <strong>{userSubmission.score} / {assignment.maxScore}</strong>
                {userSubmission.feedback && (
                  <div className="text-xs text-muted mt-1">Feedback: "{userSubmission.feedback}"</div>
                )}
              </div>
            ) : (
              <span className="badge badge-warning">Awaiting Grade</span>
            )}
          </div>
        </div>
      ) : isStudent ? (
        <form onSubmit={handleSubmit} className="assignment-upload-form">
          <h4 style={{ fontSize: '0.9rem', marginBottom: 8 }}>Upload Your Submission</h4>
          <div className="form-group mb-3">
            <div
              className="thumb-dropzone"
              onClick={() => fileInputRef.current?.click()}
              style={{ padding: '1rem', cursor: 'pointer' }}
            >
              <Upload size={20} />
              <span className="text-sm">
                {file ? <strong>{file.name}</strong> : 'Click to select solution file (PDF/Doc/ZIP)'}
              </span>
              {file && <span className="text-xs text-muted">{(file.size / 1024 / 1024).toFixed(2)} MB</span>}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,.zip,.rar,.txt"
              style={{ display: 'none' }}
              onChange={handleFileSelect}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-sm"
            disabled={submitting || !file}
          >
            {submitting ? <><Loader2 size={14} className="spin" /> Uploading…</> : 'Submit Assignment'}
          </button>
        </form>
      ) : null}
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════════════ */
const CourseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, isStudent, user } = useAuth();

  const [course, setCourse] = useState(null);
  const [materials, setMaterials] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [mySubmissions, setMySubmissions] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedLevel, setSelectedLevel] = useState('Beginner');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedYoutube, setSelectedYoutube] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [completedSteps, setCompletedSteps] = useState({});
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);

  /* ── Load Course Data (with seamless fallback to PORTAL_COURSES) ───────── */
  const fetchCourseData = async () => {
    setLoading(true);
    try {
      let loadedCourse = null;
      let loadedMaterials = [];
      let loadedAssignments = [];

      try {
        const { data } = await courseAPI.getById(id);
        loadedCourse = data.course;
        loadedMaterials = data.materials || [];
        loadedAssignments = data.assignments || [];
      } catch (err) {
        // Fallback to client PORTAL_COURSES if ID matches or is slug/title
        const found = PORTAL_COURSES.find(
          (c) => c._id === id || c.category.toLowerCase() === id.toLowerCase()
        );
        if (found) {
          loadedCourse = found;
        } else {
          throw err;
        }
      }

      // Merge with portal course definition if portal course has richer curriculum/levels
      const portalFallback = PORTAL_COURSES.find(
        (c) => c.title.toLowerCase() === (loadedCourse?.title || '').toLowerCase() ||
               c.category.toLowerCase() === (loadedCourse?.category || '').toLowerCase()
      );

      if (portalFallback) {
        loadedCourse = {
          ...portalFallback,
          ...loadedCourse,
          levelsData: loadedCourse.levelsData || portalFallback.levelsData,
          curriculum: loadedCourse.curriculum?.length ? loadedCourse.curriculum : portalFallback.curriculum,
          prerequisites: loadedCourse.prerequisites?.length ? loadedCourse.prerequisites : portalFallback.prerequisites,
          learningOutcomes: loadedCourse.learningOutcomes?.length ? loadedCourse.learningOutcomes : portalFallback.learningOutcomes,
          roadmap: loadedCourse.roadmap?.length ? loadedCourse.roadmap : portalFallback.roadmap,
          youtubeResources: loadedCourse.youtubeResources?.length ? loadedCourse.youtubeResources : portalFallback.youtubeResources,
          notesResources: loadedCourse.notesResources?.length ? loadedCourse.notesResources : portalFallback.notesResources,
          practiceQuestions: loadedCourse.practiceQuestions?.length ? loadedCourse.practiceQuestions : portalFallback.practiceQuestions,
          projects: loadedCourse.projects?.length ? loadedCourse.projects : portalFallback.projects,
        };
      }

      setCourse(loadedCourse);
      setMaterials(loadedMaterials);
      setAssignments(loadedAssignments);

      // Default YouTube resource
      const ytList = loadedCourse.youtubeResources || [];
      if (ytList.length > 0) {
        setSelectedYoutube(ytList[0]);
      }

      // Default uploaded video
      const videoMaterials = loadedMaterials.filter((m) => m.type === 'video');
      if (videoMaterials.length > 0) {
        setSelectedVideo(videoMaterials[0]);
      }

      // Set initial level
      if (loadedCourse.level && loadedCourse.level !== 'All Levels') {
        setSelectedLevel(loadedCourse.level);
      }

      // Fetch user submissions if student
      if (isAuthenticated && user?.role === 'student') {
        try {
          const subRes = await submissionAPI.getMy();
          setMySubmissions(subRes.data.submissions || []);
        } catch (e) {
          // ignore error for guest
        }
      }
    } catch (err) {
      toast.error(err.message || 'Course not found');
      navigate('/courses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, [id]);

  /* ── Load/Save Roadmap checklist progress in localStorage ─────────────── */
  useEffect(() => {
    if (!course?._id) return;
    const storageKey = `eduflow_roadmap_${course._id}_${selectedLevel}`;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setCompletedSteps(JSON.parse(saved));
      } else {
        setCompletedSteps({});
      }
    } catch (e) {
      setCompletedSteps({});
    }
  }, [course?._id, selectedLevel]);

  const toggleStepCompleted = (stepNum) => {
    if (!course?._id) return;
    const storageKey = `eduflow_roadmap_${course._id}_${selectedLevel}`;
    setCompletedSteps((prev) => {
      const updated = { ...prev, [stepNum]: !prev[stepNum] };
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const resetRoadmapProgress = () => {
    if (!course?._id) return;
    const storageKey = `eduflow_roadmap_${course._id}_${selectedLevel}`;
    localStorage.removeItem(storageKey);
    setCompletedSteps({});
    toast.success('Roadmap progress reset');
  };

  /* ── Current Level Specific Data ───────────────────────────────────────── */
  const levelData = useMemo(() => {
    if (!course) return {};
    const specific = course.levelsData?.[selectedLevel] || {};
    return {
      description: specific.description || course.description,
      prerequisites: specific.prerequisites?.length ? specific.prerequisites : (course.prerequisites || []),
      roadmap: specific.roadmap?.length ? specific.roadmap : (course.roadmap || []),
      youtubeResources: specific.youtubeResources?.length ? specific.youtubeResources : (course.youtubeResources || []),
      notesResources: specific.notesResources?.length ? specific.notesResources : (course.notesResources || []),
      practiceQuestions: specific.practiceQuestions?.length ? specific.practiceQuestions : (course.practiceQuestions || []),
      projects: specific.projects?.length ? specific.projects : (course.projects || []),
    };
  }, [course, selectedLevel]);

  // Whenever level changes, update active YouTube tutorial to first item of this level
  useEffect(() => {
    if (levelData.youtubeResources && levelData.youtubeResources.length > 0) {
      setSelectedYoutube(levelData.youtubeResources[0]);
    }
  }, [levelData.youtubeResources]);

  /* ── Calculate Roadmap completion percentage ───────────────────────────── */
  const totalRoadmapSteps = levelData.roadmap?.length || 0;
  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = totalRoadmapSteps > 0 ? Math.round((completedCount / totalRoadmapSteps) * 100) : 0;

  /* ── Related Courses ───────────────────────────────────────────────────── */
  const relatedCourses = useMemo(() => {
    if (!course) return [];
    return PORTAL_COURSES.filter(
      (c) => c._id !== course._id && (
        c.category === course.category ||
        (course.relatedCategories && course.relatedCategories.includes(c.category))
      )
    ).slice(0, 3);
  }, [course]);

  const isEnrolled = course?.enrolledStudents?.some(
    (s) => (s._id || s).toString() === user?._id?.toString()
  );
  const isFacultyOwner = (course?.faculty?._id || course?.faculty)?.toString() === user?._id?.toString();
  const canViewContent = isEnrolled || isFacultyOwner || user?.role === 'admin';

  const handleEnroll = async () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/course/${id}` } });
      return;
    }
    setEnrolling(true);
    try {
      const { data } = await courseAPI.enroll(course._id);
      toast.success(data.message || 'Enrolled successfully!');
      fetchCourseData();
    } catch (err) {
      toast.error(err.message || 'Enrollment failed');
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <div className="page-loader">
        <div className="spinner" />
        <p className="text-muted">Loading course details & roadmap…</p>
      </div>
    );
  }

  if (!course) return null;

  const uploadedVideos = materials.filter((m) => m.type === 'video');
  const uploadedNotes  = materials.filter((m) => m.type === 'note');

  const activeEmbedUrl = selectedYoutube ? getYouTubeEmbedUrl(selectedYoutube.url) : null;

  return (
    <div className="course-detail animate-fadeIn">
      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <div className="course-detail__hero">
        {course.coverImage && (
          <img className="course-detail__hero-bg" src={course.coverImage} alt="" aria-hidden />
        )}
        <div className="course-detail__hero-overlay" />
        <div className="container course-detail__hero-content animate-fadeInUp">
          <Link to="/courses" className="btn btn-secondary btn-sm mb-4 inline-flex">
            <ArrowLeft size={14} /> Back to Courses
          </Link>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <span className="badge badge-primary">{course.category}</span>
            <span className={`badge ${
              selectedLevel === 'Beginner' ? 'badge-success' :
              selectedLevel === 'Intermediate' ? 'badge-warning' : 'badge-danger'
            }`}>
              Level: {selectedLevel}
            </span>
          </div>

          <h1 className="course-detail__title">{course.title}</h1>
          <p className="course-detail__desc">{course.description}</p>

          <div className="course-detail__meta">
            <span><Users size={15} /> {course.enrollmentCount || 0} enrolled learners</span>
            {course.duration && <span><Clock size={15} /> {course.duration}</span>}
            {course.faculty && <span><Award size={15} /> Instructor: {course.faculty.name}</span>}
          </div>
        </div>
      </div>

      {/* ── 3-Level Interactive Switcher Bar ─────────────────────────────── */}
      <div className="level-switcher-bar">
        <div className="container level-switcher-inner">
          <div className="level-switcher-label">
            <Compass size={16} style={{ color: 'var(--clr-primary)' }} />
            <span>Select Learning Level:</span>
          </div>

          <div className="level-switcher-buttons">
            <button
              type="button"
              className={`level-btn ${selectedLevel === 'Beginner' ? 'level-btn--active-beginner' : ''}`}
              onClick={() => setSelectedLevel('Beginner')}
            >
              Beginner
            </button>
            <button
              type="button"
              className={`level-btn ${selectedLevel === 'Intermediate' ? 'level-btn--active-intermediate' : ''}`}
              onClick={() => setSelectedLevel('Intermediate')}
            >
              Intermediate
            </button>
            <button
              type="button"
              className={`level-btn ${selectedLevel === 'Advanced' ? 'level-btn--active-advanced' : ''}`}
              onClick={() => setSelectedLevel('Advanced')}
            >
              Advanced
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Tabbed Content ─────────────────────────────────────────── */}
      <div className="container course-detail__container">
        {/* Navigation Tabs */}
        <div className="course-tabs">
          <button
            className={`course-tab ${activeTab === 'overview' ? 'course-tab--active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <BookOpen size={16} /> Overview & Syllabus
          </button>
          <button
            className={`course-tab ${activeTab === 'roadmap' ? 'course-tab--active' : ''}`}
            onClick={() => setActiveTab('roadmap')}
          >
            <Compass size={16} /> Learning Roadmap ({levelData.roadmap?.length || 0})
          </button>
          <button
            className={`course-tab ${activeTab === 'videos' ? 'course-tab--active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            <Video size={16} /> Video Lectures ({levelData.youtubeResources?.length || uploadedVideos.length})
          </button>
          <button
            className={`course-tab ${activeTab === 'notes' ? 'course-tab--active' : ''}`}
            onClick={() => setActiveTab('notes')}
          >
            <FileText size={16} /> Docs & Notes ({levelData.notesResources?.length || uploadedNotes.length})
          </button>
          <button
            className={`course-tab ${activeTab === 'practice' ? 'course-tab--active' : ''}`}
            onClick={() => setActiveTab('practice')}
          >
            <HelpCircle size={16} /> Practice & Interview ({levelData.practiceQuestions?.length || 0})
          </button>
          <button
            className={`course-tab ${activeTab === 'projects' ? 'course-tab--active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <Briefcase size={16} /> Projects ({levelData.projects?.length || 0})
          </button>
          <button
            className={`course-tab ${activeTab === 'assignments' ? 'course-tab--active' : ''}`}
            onClick={() => setActiveTab('assignments')}
          >
            <CheckSquare size={16} /> Assignments ({assignments.length})
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="course-tab-content">
          {/* ═══════════════════════════════════════════════════════════════
           * TAB 1: OVERVIEW & SYLLABUS
           * ═══════════════════════════════════════════════════════════════ */}
          {activeTab === 'overview' && (
            <div className="desktop-split-layout animate-fadeIn">
              {/* Left Column: Curriculum & Outcomes */}
              <div>
                <div className="card mb-6">
                  <h3>About This Course</h3>
                  <p className="text-muted" style={{ lineHeight: 1.7, marginTop: 10 }}>
                    {levelData.description || course.description}
                  </p>

                  {course.learningOutcomes && course.learningOutcomes.length > 0 && (
                    <>
                      <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>What You Will Learn</h4>
                      <ul className="learning-outcomes">
                        {course.learningOutcomes.map((outcome, idx) => (
                          <li key={idx}>
                            <CheckCircle size={16} style={{ color: 'var(--clr-success)', flexShrink: 0, marginTop: 3 }} />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {levelData.prerequisites && levelData.prerequisites.length > 0 && (
                    <>
                      <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Prerequisites</h4>
                      <div className="prerequisites-list">
                        {levelData.prerequisites.map((p, idx) => (
                          <span key={idx} className="badge badge-warning text-xs">
                            {p}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Curriculum Breakdown */}
                {course.curriculum && course.curriculum.length > 0 && (
                  <div className="card">
                    <h3 style={{ marginBottom: '1rem' }}>Course Curriculum ({course.curriculum.length} Modules)</h3>
                    <div>
                      {course.curriculum.map((mod, idx) => (
                        <div key={idx} className="curriculum-module">
                          <div className="curriculum-module__header">
                            <span>{mod.moduleTitle}</span>
                            {mod.duration && <span className="text-xs text-muted">⏱ {mod.duration}</span>}
                          </div>
                          {mod.topics && (
                            <div className="curriculum-module__topics">
                              {mod.topics.map((topic, tidx) => (
                                <div key={tidx} className="curriculum-topic-item">
                                  <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--clr-primary)' }} />
                                  <span>{topic}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Sticky Sidebar with Actions */}
              <div className="sticky-sidebar">
                <div className="card course-summary-card">
                  <h3>Course Information</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <span className="text-muted">Domain</span>
                      <strong>{course.category}</strong>
                    </div>
                    <div className="info-item">
                      <span className="text-muted">Target Level</span>
                      <span className={`badge ${
                        selectedLevel === 'Beginner' ? 'badge-success' :
                        selectedLevel === 'Intermediate' ? 'badge-warning' : 'badge-danger'
                      }`}>
                        {selectedLevel}
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="text-muted">Estimated Duration</span>
                      <strong>{course.duration || '6 weeks'}</strong>
                    </div>
                    {course.faculty && (
                      <div className="info-item">
                        <span className="text-muted">Instructor</span>
                        <strong>{course.faculty.name}</strong>
                      </div>
                    )}
                    <div className="info-item">
                      <span className="text-muted">Enrolled Students</span>
                      <strong>{course.enrollmentCount || 0}</strong>
                    </div>
                  </div>

                  {!canViewContent ? (
                    <button
                      className="btn btn-primary w-full btn-lg mt-4"
                      onClick={handleEnroll}
                      disabled={enrolling}
                    >
                      {enrolling ? <><Loader2 size={16} className="spin" /> Enrolling…</> : 'Enroll in Course'}
                    </button>
                  ) : (
                    <div className="badge badge-success w-full text-center py-2 mt-4">
                      ✓ You are enrolled in this course
                    </div>
                  )}

                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--clr-border)', textAlign: 'center' }}>
                    <span className="text-xs text-muted">
                      Full access to YouTube video lectures, official documentation, roadmaps, and practice questions.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════
           * TAB 2: LEARNING ROADMAP (INTERACTIVE CHECKLIST)
           * ═══════════════════════════════════════════════════════════════ */}
          {activeTab === 'roadmap' && (
            <div className="animate-fadeIn">
              {/* Progress Summary Card */}
              <div className="card roadmap-progress-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                  <div>
                    <h3 style={{ margin: 0 }}>
                      {selectedLevel} Learning Pathway ({completedCount}/{totalRoadmapSteps} Completed)
                    </h3>
                    <p className="text-muted text-sm" style={{ marginTop: 4 }}>
                      Check off milestones as you master each concept. Progress is saved automatically.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span className="font-bold text-lg" style={{ color: 'var(--clr-primary)' }}>
                      {progressPercent}%
                    </span>
                    {completedCount > 0 && (
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={resetRoadmapProgress}
                        title="Reset Checklist"
                      >
                        <RefreshCw size={13} /> Reset
                      </button>
                    )}
                  </div>
                </div>

                <div className="roadmap-progress-bar-wrap">
                  <div className="roadmap-progress-bar-fill" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>

              {/* Step Timeline */}
              <div className="roadmap-timeline">
                {levelData.roadmap && levelData.roadmap.length > 0 ? (
                  levelData.roadmap.map((step) => {
                    const isChecked = !!completedSteps[step.stepNumber];
                    return (
                      <div
                        key={step.stepNumber}
                        className={`roadmap-step-card ${isChecked ? 'roadmap-step-card--completed' : ''}`}
                      >
                        <input
                          type="checkbox"
                          className="roadmap-step-checkbox"
                          checked={isChecked}
                          onChange={() => toggleStepCompleted(step.stepNumber)}
                          id={`step-${step.stepNumber}`}
                        />

                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                            <span className="roadmap-step-badge">
                              Step {step.stepNumber}
                            </span>
                            <label
                              htmlFor={`step-${step.stepNumber}`}
                              style={{
                                cursor: 'pointer',
                                fontWeight: 700,
                                fontSize: '1.05rem',
                                textDecoration: isChecked ? 'line-through' : 'none',
                                color: isChecked ? 'var(--clr-text-muted)' : 'var(--clr-text)',
                              }}
                            >
                              {step.title}
                            </label>
                            {step.duration && (
                              <span className="text-xs text-muted flex items-center gap-1" style={{ marginLeft: 'auto' }}>
                                <Clock size={12} /> {step.duration}
                              </span>
                            )}
                          </div>

                          <p className="text-muted text-sm" style={{ margin: 0, lineHeight: 1.6 }}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="card text-center py-12">
                    <Compass size={40} style={{ color: 'var(--clr-text-faint)', margin: '0 auto 10px' }} />
                    <h3>No roadmap steps defined for {selectedLevel} level yet.</h3>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════
           * TAB 3: VIDEO LECTURES (YOUTUBE & UPLOADED)
           * ═══════════════════════════════════════════════════════════════ */}
          {activeTab === 'videos' && (
            <div className="tab-pane animate-fadeIn">
              {levelData.youtubeResources && levelData.youtubeResources.length > 0 ? (
                <div className="video-layout">
                  {/* Left: YouTube Video Player & Info */}
                  <div className="youtube-player-card">
                    <div className="youtube-iframe-wrapper">
                      {activeEmbedUrl ? (
                        <iframe
                          src={activeEmbedUrl}
                          title={selectedYoutube?.title || 'YouTube Video Player'}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <div style={{ color: '#fff', display: 'grid', placeItems: 'center', height: '100%' }}>
                          Select a lecture to watch
                        </div>
                      )}
                    </div>

                    {selectedYoutube && (
                      <div className="youtube-info-bar">
                        <div className="youtube-info-top">
                          <div>
                            <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 4 }}>
                              <span className="badge badge-danger text-xs">YouTube Tutorial</span>
                              <span className="badge badge-primary text-xs">{selectedYoutube.channel}</span>
                            </div>
                            <h3 style={{ fontSize: '1.15rem' }}>{selectedYoutube.title}</h3>
                          </div>

                          <a
                            href={selectedYoutube.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-sm"
                            title="Open original video on YouTube"
                          >
                            <ExternalLink size={14} /> Watch on YouTube
                          </a>
                        </div>

                        {selectedYoutube.description && (
                          <p className="text-muted text-sm" style={{ margin: 0 }}>
                            {selectedYoutube.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right: Playlist Sidebar */}
                  <div className="playlist-sidebar">
                    <h4 style={{ fontSize: '0.95rem', margin: 0 }}>
                      {selectedLevel} Tutorials ({levelData.youtubeResources.length})
                    </h4>
                    <div className="playlist-list">
                      {levelData.youtubeResources.map((yt, idx) => {
                        const isActive = selectedYoutube?.url === yt.url;
                        return (
                          <div
                            key={idx}
                            className={`playlist-item ${isActive ? 'playlist-item--active' : ''}`}
                            onClick={() => setSelectedYoutube(yt)}
                          >
                            <div className="playlist-item__icon">
                              <Play size={13} />
                            </div>
                            <div style={{ flex: 1 }}>
                              <div className="playlist-item__title">{yt.title}</div>
                              <div className="text-xs text-muted" style={{ marginTop: 2 }}>
                                {yt.channel}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : uploadedVideos.length > 0 ? (
                <div className="video-layout">
                  <div className="video-layout__player">
                    {selectedVideo ? (
                      <VideoPlayer video={selectedVideo} />
                    ) : (
                      <div className="card text-center py-12">Select a video to start watching</div>
                    )}
                  </div>
                  <div className="playlist-sidebar">
                    <h4 style={{ fontSize: '0.95rem' }}>Uploaded Lectures ({uploadedVideos.length})</h4>
                    <div className="playlist-list">
                      {uploadedVideos.map((v) => (
                        <div
                          key={v._id}
                          className={`playlist-item ${selectedVideo?._id === v._id ? 'playlist-item--active' : ''}`}
                          onClick={() => setSelectedVideo(v)}
                        >
                          <div className="playlist-item__icon"><Play size={13} /></div>
                          <div className="playlist-item__title">{v.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card text-center py-12">
                  <Video size={48} style={{ color: 'var(--clr-text-faint)', margin: '0 auto 12px' }} />
                  <h3>No Video Lectures Available</h3>
                  <p className="text-muted">No video tutorials configured for {selectedLevel} level.</p>
                </div>
              )}
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════
           * TAB 4: PDF NOTES & OFFICIAL DOCUMENTATION
           * ═══════════════════════════════════════════════════════════════ */}
          {activeTab === 'notes' && (
            <div className="tab-pane animate-fadeIn">
              <div className="docs-grid">
                {levelData.notesResources && levelData.notesResources.length > 0 ? (
                  levelData.notesResources.map((note, idx) => (
                    <div key={idx} className="doc-resource-card">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span className={`badge ${note.type === 'Documentation' ? 'badge-primary' : 'badge-accent'} text-xs`}>
                          {note.type}
                        </span>
                        <span className="text-xs text-muted">{note.source || 'Official Source'}</span>
                      </div>

                      <h4 style={{ fontSize: '1.05rem', margin: '4px 0 8px' }}>{note.title}</h4>
                      <p className="text-muted text-sm" style={{ flex: 1, margin: '0 0 16px' }}>
                        {note.description}
                      </p>

                      <a
                        href={note.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        style={{ alignSelf: 'flex-start' }}
                      >
                        {note.type === 'Documentation' ? (
                          <><ExternalLink size={14} /> Open Official Docs</>
                        ) : (
                          <><Download size={14} /> View Reference / Cheat Sheet</>
                        )}
                      </a>
                    </div>
                  ))
                ) : uploadedNotes.length > 0 ? (
                  uploadedNotes.map((note) => (
                    <div key={note._id} className="doc-resource-card">
                      <h4 style={{ fontSize: '1rem' }}>{note.title}</h4>
                      <p className="text-muted text-sm">{note.description}</p>
                      <a
                        href={note.fileUrl.startsWith('http') ? note.fileUrl : `/${note.fileUrl}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary btn-sm"
                        download
                      >
                        <Download size={14} /> Download Note
                      </a>
                    </div>
                  ))
                ) : (
                  <div className="card text-center py-12" style={{ gridColumn: '1 / -1' }}>
                    <FileText size={48} style={{ color: 'var(--clr-text-faint)', margin: '0 auto 12px' }} />
                    <h3>No Documentation or Notes Available</h3>
                    <p className="text-muted">No reference materials added for this level.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════
           * TAB 5: PRACTICE & INTERVIEW QUESTIONS
           * ═══════════════════════════════════════════════════════════════ */}
          {activeTab === 'practice' && (
            <div className="tab-pane animate-fadeIn">
              <div className="questions-list">
                {levelData.practiceQuestions && levelData.practiceQuestions.length > 0 ? (
                  levelData.practiceQuestions.map((q, idx) => {
                    const isExpanded = expandedQuestion === idx;
                    return (
                      <div key={idx} className="question-card">
                        <div className="question-card__header">
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 6 }}>
                              <span className="badge badge-primary text-xs">{q.topic}</span>
                              <span className={`badge ${
                                q.difficulty === 'Beginner' ? 'badge-success' :
                                q.difficulty === 'Intermediate' ? 'badge-warning' : 'badge-danger'
                              } text-xs`}>
                                {q.difficulty}
                              </span>
                            </div>
                            <h4 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>
                              Q{idx + 1}: {q.question}
                            </h4>
                          </div>

                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => setExpandedQuestion(isExpanded ? null : idx)}
                          >
                            {isExpanded ? 'Hide Solution' : 'Reveal Solution'}
                            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="solution-box animate-fadeIn">
                            <strong style={{ display: 'block', marginBottom: 6, color: 'var(--clr-primary)' }}>
                              Solution & Explanation:
                            </strong>
                            <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{q.solution}</p>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="card text-center py-12">
                    <HelpCircle size={48} style={{ color: 'var(--clr-text-faint)', margin: '0 auto 12px' }} />
                    <h3>No Practice Questions for {selectedLevel} Level</h3>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════
           * TAB 6: HANDS-ON PROJECTS
           * ═══════════════════════════════════════════════════════════════ */}
          {activeTab === 'projects' && (
            <div className="tab-pane animate-fadeIn">
              <div className="projects-grid">
                {levelData.projects && levelData.projects.length > 0 ? (
                  levelData.projects.map((proj, idx) => (
                    <div key={idx} className="project-card">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span className={`badge ${
                          proj.difficulty === 'Beginner' ? 'badge-success' :
                          proj.difficulty === 'Intermediate' ? 'badge-warning' : 'badge-danger'
                        } text-xs`}>
                          {proj.difficulty} Project
                        </span>
                      </div>

                      <h4 style={{ fontSize: '1.15rem', margin: 0 }}>{proj.title}</h4>
                      <p className="text-muted text-sm" style={{ margin: 0, lineHeight: 1.6 }}>
                        {proj.description}
                      </p>

                      {proj.techStack && proj.techStack.length > 0 && (
                        <div>
                          <span className="text-xs text-muted" style={{ display: 'block', marginBottom: 4 }}>
                            Recommended Stack:
                          </span>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                            {proj.techStack.map((t, tidx) => (
                              <span key={tidx} className="tech-tag">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {proj.features && proj.features.length > 0 && (
                        <div style={{ marginTop: 8 }}>
                          <span className="text-xs text-muted" style={{ display: 'block', marginBottom: 4 }}>
                            Key Milestones:
                          </span>
                          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {proj.features.map((feat, fidx) => (
                              <li key={fidx} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                                <Check size={13} style={{ color: 'var(--clr-success)', flexShrink: 0 }} />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="card text-center py-12" style={{ gridColumn: '1 / -1' }}>
                    <Briefcase size={48} style={{ color: 'var(--clr-text-faint)', margin: '0 auto 12px' }} />
                    <h3>No Projects Listed for {selectedLevel} Level</h3>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════
           * TAB 7: ASSIGNMENTS
           * ═══════════════════════════════════════════════════════════════ */}
          {activeTab === 'assignments' && (
            <div className="tab-pane animate-fadeIn">
              {!canViewContent ? (
                <div className="card course-detail__locked">
                  <Lock size={40} />
                  <h3>Content Locked</h3>
                  <p className="text-muted">Please enroll in this course to view and submit assignments.</p>
                  <button className="btn btn-primary mt-3" onClick={handleEnroll}>Enroll Now</button>
                </div>
              ) : assignments.length === 0 ? (
                <div className="card text-center py-12">
                  <CheckSquare size={48} style={{ color: 'var(--clr-text-faint)', margin: '0 auto 12px' }} />
                  <h3>No Assignments Created</h3>
                  <p className="text-muted">There are currently no assignments posted for this course.</p>
                </div>
              ) : (
                <div>
                  {assignments.map((assignment) => {
                    const userSub = mySubmissions.find(
                      (s) => s.assignment?._id === assignment._id || s.assignment === assignment._id
                    );
                    return (
                      <AssignmentCard
                        key={assignment._id}
                        assignment={assignment}
                        userSubmission={userSub}
                        onSubmissionSuccess={fetchCourseData}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Related Courses Section ───────────────────────────────────── */}
        {relatedCourses.length > 0 && (
          <div className="related-courses-section">
            <h3 style={{ marginBottom: '1.25rem' }}>Related Courses & Next Steps</h3>
            <div className="grid-3">
              {relatedCourses.map((rc) => (
                <div key={rc._id} className="card card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="badge badge-primary text-xs" style={{ alignSelf: 'flex-start', marginBottom: 6 }}>
                    {rc.category}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: 6 }}>{rc.title}</h4>
                  <p className="text-muted text-sm" style={{ flex: 1, marginBottom: 14 }}>
                    {rc.description && rc.description.slice(0, 95)}…
                  </p>
                  <Link to={`/course/${rc._id}`} className="btn btn-secondary btn-sm" style={{ marginTop: 'auto' }}>
                    View Course <ChevronRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;
