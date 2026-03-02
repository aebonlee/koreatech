import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { getLectureById, deleteLecture, incrementLectureViews } from '../utils/supabase';
import SEOHead from '../components/SEOHead';

const LectureDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isAdmin } = useAuth();
  const { showToast } = useToast();

  const [lecture, setLecture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLecture();
  }, [id]);

  const loadLecture = async () => {
    setLoading(true);
    const data = await getLectureById(id);
    setLecture(data);
    if (data) {
      incrementLectureViews(id);
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!window.confirm(t('site.lectures.deleteConfirm'))) return;
    try {
      await deleteLecture(id);
      showToast(t('site.lectures.deleted'), 'success');
      navigate('/lectures');
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  if (loading) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
          <div className="loading-spinner"></div>
        </div>
      </section>
    );
  }

  if (!lecture) {
    return (
      <section className="section">
        <div className="container">
          <div className="board-empty">{t('site.lectures.notFound')}</div>
          <Link to="/lectures" className="board-btn">{t('site.lectures.backToList')}</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEOHead title={lecture.title} path={`/lectures/${id}`} />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.lectures.title')}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="lecture-detail">
            <div className="lecture-detail-header">
              <span className="lecture-week-badge">
                Week {lecture.week_number}
              </span>
              <h2 className="lecture-detail-title">{lecture.title}</h2>
              <div className="lecture-detail-meta">
                <span>{new Date(lecture.created_at).toLocaleDateString('ko-KR')}</span>
                <span>{t('site.lectures.views')}: {lecture.views || 0}</span>
              </div>
            </div>

            {lecture.slide_url && (
              <div className="lecture-slide-section">
                <h3 className="lecture-section-title">{t('site.lectures.slideTitle')}</h3>
                <div className="lecture-slide-container">
                  <iframe
                    src={lecture.slide_url}
                    title={lecture.title}
                    allowFullScreen
                  />
                </div>
                <p className="lecture-slide-help">{t('site.lectures.slideHelp')}</p>
              </div>
            )}

            {lecture.content && (
              <div className="lecture-detail-content">
                {lecture.content.split('\n').map((line, i) => (
                  <p key={i}>{line || '\u00A0'}</p>
                ))}
              </div>
            )}

            {lecture.file_url && (
              <div className="lecture-file-section">
                <a
                  href={lecture.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="board-btn primary"
                >
                  {t('site.lectures.download')}
                </a>
              </div>
            )}

            {lecture.tags && lecture.tags.length > 0 && (
              <div className="lecture-tags-section">
                {lecture.tags.map((tag, i) => (
                  <span key={i} className="lecture-tag">{tag}</span>
                ))}
              </div>
            )}

            <div className="lecture-detail-actions">
              <Link to="/lectures" className="board-btn">
                {t('site.lectures.backToList')}
              </Link>
              {isAdmin && (
                <>
                  <Link to={`/lectures/edit/${id}`} className="board-btn primary">
                    {t('site.lectures.edit')}
                  </Link>
                  <button className="board-btn danger" onClick={handleDelete}>
                    {t('site.lectures.delete')}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LectureDetail;
