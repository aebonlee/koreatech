import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import site from '../config/site';

const Home = () => {
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
      <SEOHead
        title={`${site.name} | ${site.nameKo}`}
        description={site.description}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">{t('site.home.subtitle')}</h1>
            <p className="hero-description">{t('site.home.heroDesc')}</p>
            <div className="hero-actions">
              <Link to="/python/basics" className="hero-btn primary">{t('site.home.startLearning')}</Link>
              <Link to="/board" className="hero-btn secondary">{t('site.home.goToBoard')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is CT */}
      <section className="section ct-intro-section">
        <div className="container">
          <div className="ct-intro" data-aos="fade-up">
            <h2 className="section-title">{t('site.home.whatIsCT')}</h2>
            <p className="ct-description">{t('site.home.ctDescription')}</p>
          </div>
          <div className="learning-goals" data-aos="fade-up" data-aos-delay="200">
            <h3>{t('site.home.learningGoals')}</h3>
            <ul className="goals-list">
              <li>{t('site.home.goal1')}</li>
              <li>{t('site.home.goal2')}</li>
              <li>{t('site.home.goal3')}</li>
              <li>{t('site.home.goal4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum Cards */}
      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t('site.home.curriculum')}</h2>
          <p className="section-subtitle" data-aos="fade-up">{t('site.home.curriculumDesc')}</p>
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

export default Home;
