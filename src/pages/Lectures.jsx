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
                <div className="board-table-wrapper">
                  <table className="board-table">
                    <thead>
                      <tr>
                        <th className="lecture-col-week">{t('site.lectures.weekPrefix')}</th>
                        <th className="board-col-title">{t('site.lectures.titleLabel')}</th>
                        <th className="lecture-col-desc">{t('site.lectures.descriptionCol')}</th>
                        <th className="board-col-date">{t('site.lectures.date')}</th>
                        <th className="lecture-col-views">{t('site.lectures.views')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lectures.map((lecture) => (
                        <tr key={lecture.id}>
                          <td className="lecture-col-week">
                            <span className="lecture-week-badge">
                              Week {lecture.week_number}
                            </span>
                          </td>
                          <td className="board-col-title">
                            <Link to={`/lectures/${lecture.id}`}>{lecture.title}</Link>
                          </td>
                          <td className="lecture-col-desc">{lecture.description}</td>
                          <td className="board-col-date">{formatDate(lecture.created_at)}</td>
                          <td className="lecture-col-views">{lecture.views || 0}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
