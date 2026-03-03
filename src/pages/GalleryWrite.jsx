import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { createGalleryItem } from '../utils/supabase';
import SEOHead from '../components/SEOHead';

const GalleryWrite = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { user } = useAuth();
  const { showToast } = useToast();

  const [form, setForm] = useState({
    title: '',
    category: 'artwork',
    image_url: '',
    description: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.image_url.trim()) return;

    setSubmitting(true);
    try {
      const item = await createGalleryItem({
        title: form.title.trim(),
        category: form.category,
        image_url: form.image_url.trim(),
        description: form.description.trim(),
        user_id: user.id,
        author_name: user.user_metadata?.full_name || user.email,
      });
      showToast('작품이 등록되었습니다.', 'success');
      navigate(`/community/gallery/${item.id}`);
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead title={t('site.gallery.writeTitle')} path="/community/gallery/write" noindex />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.gallery.writeTitle')}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form className="board-write-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t('site.gallery.category')}</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option value="artwork">{t('site.gallery.artwork')}</option>
                <option value="project">{t('site.gallery.project')}</option>
                <option value="screenshot">{t('site.gallery.screenshot')}</option>
              </select>
            </div>

            <div className="form-group">
              <label>{t('site.gallery.titleLabel')}</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder={t('site.gallery.titlePlaceholder')}
                required
              />
            </div>

            <div className="form-group">
              <label>{t('site.gallery.imageUrl')}</label>
              <input
                type="url"
                value={form.image_url}
                onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                placeholder={t('site.gallery.imageUrlPlaceholder')}
                required
              />
            </div>

            <div className="form-group">
              <label>{t('site.gallery.description')}</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder={t('site.gallery.descriptionPlaceholder')}
                rows={6}
              />
            </div>

            <div className="form-actions">
              <button type="button" className="board-btn" onClick={() => navigate('/community/gallery')}>
                {t('site.gallery.cancel')}
              </button>
              <button type="submit" className="board-btn primary" disabled={submitting}>
                {submitting ? t('site.gallery.submitting') : t('site.gallery.submit')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default GalleryWrite;
