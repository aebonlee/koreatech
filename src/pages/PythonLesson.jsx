import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const PythonLesson = () => {
  const { t } = useLanguage();
  useAOS();

  const chapters = [
    { path: '/python/basics', key: 'basics', icon: '📘', step: 'Step 1' },
    { path: '/python/control', key: 'control', icon: '🔀', step: 'Step 2' },
    { path: '/python/functions', key: 'functions', icon: '⚙️', step: 'Step 3' },
    { path: '/python/data', key: 'data', icon: '📊', step: 'Step 4' },
  ];

  return (
    <>
      <SEOHead title={t('site.python.title')} path="/python" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.python.title')}</h1>
          <p>{t('site.python.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="curriculum-grid">
            {chapters.map((ch, i) => (
              <Link
                to={ch.path}
                key={ch.key}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <span className="curriculum-step">{ch.step}</span>
                <span className="curriculum-icon">{ch.icon}</span>
                <h3 className="curriculum-card-title">{t(`site.python.${ch.key}.title`)}</h3>
                <p className="curriculum-card-desc">{t(`site.python.${ch.key}.desc`)}</p>
                <span className="curriculum-topics">{t(`site.python.${ch.key}.topics`)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PythonLesson;
