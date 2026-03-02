import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { getLectures } from '../utils/supabase';
import getSupabase from '../utils/supabase';
import SEOHead from '../components/SEOHead';

const Lectures = () => {
  const { t } = useLanguage();
  const { isAdmin } = useAuth();
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);

  const client = getSupabase();

  useEffect(() => {
    loadLectures();
  }, []);

  const loadLectures = async () => {
    setLoading(true);
    const data = await getLectures();
    setLectures(data);
    setLoading(false);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('ko-KR');
  };

  return (
    <>
      <SEOHead title={t('site.lectures.title')} path="/lectures" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.lectures.title')}</h1>
          <p>{t('site.lectures.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {!client ? (
            <div className="board-empty">{t('site.board.notConfigured')}</div>
          ) : (
            <>
              {isAdmin && (
                <div className="lecture-toolbar">
                  <Link to="/lectures/write" className="board-write-btn">
                    {t('site.lectures.write')}
                  </Link>
                </div>
              )}

              {loading ? (
                <div className="board-loading">
                  <div className="loading-spinner"></div>
                </div>
              ) : lectures.length === 0 ? (
                <div className="board-empty">{t('site.lectures.empty')}</div>
              ) : (
                <div className="lecture-grid">
                  {lectures.map((lecture) => (
                    <Link
                      key={lecture.id}
                      to={`/lectures/${lecture.id}`}
                      className="lecture-card"
                    >
                      <div className="lecture-card-image">
                        {lecture.cover_image ? (
                          <img src={lecture.cover_image} alt={lecture.title} />
                        ) : (
                          <div className="lecture-card-placeholder">
                            <span>{t('site.lectures.weekPrefix')} {lecture.week_number}</span>
                          </div>
                        )}
                      </div>
                      <div className="lecture-card-body">
                        <span className="lecture-week-badge">
                          Week {lecture.week_number}
                        </span>
                        <h3 className="lecture-card-title">{lecture.title}</h3>
                        {lecture.description && (
                          <p className="lecture-card-desc">{lecture.description}</p>
                        )}
                        <div className="lecture-card-footer">
                          {lecture.tags && lecture.tags.length > 0 && (
                            <div className="lecture-card-tags">
                              {lecture.tags.map((tag, i) => (
                                <span key={i} className="lecture-tag">{tag}</span>
                              ))}
                            </div>
                          )}
                          <div className="lecture-card-meta">
                            <span>{formatDate(lecture.created_at)}</span>
                            <span>{t('site.lectures.views')}: {lecture.views || 0}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Lectures;
