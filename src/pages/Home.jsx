import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import site from '../config/site';

const Home = () => {
  const { t } = useLanguage();
  useAOS();

  const aiTips = [
    { path: '/ai-tips/chatgpt',  title: 'ChatGPT',        desc: 'OpenAI의 대화형 AI 활용법',          icon: '💬' },
    { path: '/ai-tips/claude',   title: 'Claude',          desc: 'Anthropic의 AI 어시스턴트 활용법',    icon: '🤖' },
    { path: '/ai-tips/gemini',   title: 'Gemini',          desc: 'Google의 멀티모달 AI 활용법',         icon: '✨' },
    { path: '/ai-tips/copilot',  title: 'Copilot',         desc: 'GitHub AI 코딩 어시스턴트 활용법',     icon: '👨‍💻' },
    { path: '/ai-tips/prompt',   title: '프롬프트 작성법',   desc: '효과적인 프롬프트 엔지니어링',         icon: '✏️' },
    { path: '/ai-tips/coding',   title: 'AI 코딩 활용',     desc: '코드 생성, 디버깅, 리팩토링',         icon: '💻' },
    { path: '/ai-tips/writing',  title: 'AI 문서 작성',     desc: '보고서, 요약, 번역, 이메일',          icon: '📝' },
    { path: '/ai-tips/learning', title: 'AI 학습 활용',     desc: '개념 설명, 퀴즈, 학습 계획',          icon: '📚' },
  ];

  const chapters = [
    { path: '/python/setup',     title: '실습환경 구축',           desc: 'Python 설치, IDLE, VS Code 설정',       icon: '🖥️', step: '1주차' },
    { path: '/python/io',        title: '입출력과 변수',           desc: 'print(), input(), 변수, f-string',      icon: '⌨️', step: '2주차' },
    { path: '/python/datatype',  title: '자료형과 연산',           desc: '정수, 소수, 문자, 형변환, 연산자',        icon: '🔢', step: '3주차' },
    { path: '/python/ipo',       title: 'IPO와 PDC',             desc: '입력-처리-출력, 문제정의차트',            icon: '📋', step: '4주차' },
    { path: '/python/turtle',    title: '터틀 그래픽',            desc: 'Turtle 그래픽, 함수(def) 기초',          icon: '🐢', step: '5주차' },
    { path: '/python/flowchart', title: '순서도와 알고리즘',       desc: '논리적 사고, Flowgorithm 활용',          icon: '📐', step: '6주차' },
    { path: '/python/condition', title: 'IF 조건문',              desc: 'if, elif, else, 비교/논리 연산자',       icon: '🔀', step: '7주차' },
    { path: '/python/loop',      title: '반복문',                 desc: 'while, for, break, continue',          icon: '🔁', step: '8주차' },
    { path: '/python/function',  title: '함수와 매개변수',         desc: 'def, 매개변수, return, 스코프',          icon: '⚙️', step: '9주차' },
    { path: '/python/exception', title: '예외 처리',              desc: '오류 유형, try-except-finally',          icon: '🛡️', step: '10주차' },
    { path: '/python/list',      title: '다차원 리스트',           desc: '2차원/3차원 리스트, 리스트 컴프리헨션',    icon: '📊', step: '11주차' },
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
            <h1 className="hero-title">
              <span className="hero-title-line1">파이썬으로 시작하는</span>{' '}
              <span className="hero-title-line2">컴퓨팅 사고</span>
            </h1>
            <p className="hero-description">{t('site.home.heroDesc')}</p>
            <div className="hero-actions">
              <Link to="/python" className="hero-btn primary">{t('site.home.startLearning')}</Link>
              <Link to="/community/board" className="hero-btn secondary">{t('site.home.goToBoard')}</Link>
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
                key={ch.path}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <span className="curriculum-step">{ch.step}</span>
                <span className="curriculum-icon">{ch.icon}</span>
                <h3 className="curriculum-card-title">{ch.title}</h3>
                <p className="curriculum-card-desc">{ch.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tips Cards */}
      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t('site.aiTips.title')}</h2>
          <p className="section-subtitle" data-aos="fade-up">{t('site.aiTips.subtitle')}</p>
          <div className="curriculum-grid">
            {aiTips.map((item, i) => (
              <Link
                to={item.path}
                key={item.path}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="curriculum-icon">{item.icon}</span>
                <h3 className="curriculum-card-title">{item.title}</h3>
                <p className="curriculum-card-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
