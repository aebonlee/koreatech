import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { createPortfolio } from '../utils/supabase';
import SEOHead from '../components/SEOHead';

const PortfolioWrite = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { user } = useAuth();
  const { showToast } = useToast();

  const [form, setForm] = useState({
    title: '',
    summary: '',
    cover_image: '',
    tags: '',
    content: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;

    setSubmitting(true);
    try {
      const item = await createPortfolio({
        title: form.title.trim(),
        summary: form.summary.trim(),
        cover_image: form.cover_image.trim() || null,
        tags: form.tags.trim() || null,
        content: form.content.trim(),
        user_id: user.id,
        author_name: user.user_metadata?.full_name || user.email,
      });
      showToast('포트폴리오가 등록되었습니다.', 'success');
      navigate(`/community/portfolio/${item.id}`);
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead title={t('site.portfolio.writeTitle')} path="/community/portfolio/write" noindex />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.portfolio.writeTitle')}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form className="board-write-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t('site.portfolio.titleLabel')}</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder={t('site.portfolio.titlePlaceholder')}
                required
              />
            </div>

            <div className="form-group">
              <label>{t('site.portfolio.summary')}</label>
              <input
                type="text"
                value={form.summary}
                onChange={(e) => setForm({ ...form, summary: e.target.value })}
                placeholder={t('site.portfolio.summaryPlaceholder')}
              />
            </div>

            <div className="form-group">
              <label>{t('site.portfolio.coverImage')}</label>
              <input
                type="url"
                value={form.cover_image}
                onChange={(e) => setForm({ ...form, cover_image: e.target.value })}
                placeholder={t('site.portfolio.coverImagePlaceholder')}
              />
            </div>

            <div className="form-group">
              <label>{t('site.portfolio.tags')}</label>
              <input
                type="text"
                value={form.tags}
                onChange={(e) => setForm({ ...form, tags: e.target.value })}
                placeholder={t('site.portfolio.tagsPlaceholder')}
              />
            </div>

            <div className="form-group">
              <label>{t('site.portfolio.content')}</label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder={t('site.portfolio.contentPlaceholder')}
                rows={12}
                required
              />
            </div>

            <div className="form-actions">
              <button type="button" className="board-btn" onClick={() => navigate('/community/portfolio')}>
                {t('site.portfolio.cancel')}
              </button>
              <button type="submit" className="board-btn primary" disabled={submitting}>
                {submitting ? t('site.portfolio.submitting') : t('site.portfolio.submit')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default PortfolioWrite;
