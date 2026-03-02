import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const weeks = [
  { week: 1,  path: '/python/setup',     icon: '🖥️', title: '파이썬 및 실습환경 안내',           desc: 'Python 설치, IDLE, VS Code 설정' },
  { week: 2,  path: '/python/io',        icon: '⌨️', title: '입출력과 변수 (Input & Output)',   desc: 'print(), input(), 변수, f-string' },
  { week: 3,  path: '/python/datatype',  icon: '🔢', title: 'Data Type과 산술연산',             desc: '정수, 소수, 문자, 형변환, 연산자' },
  { week: 4,  path: '/python/ipo',       icon: '📋', title: '입력-처리-출력 개념',               desc: 'PDC 작성, IPO 구조 설계' },
  { week: 5,  path: '/python/turtle',    icon: '🐢', title: 'Turtle과 함수(def)',               desc: 'Turtle 그래픽, 기능 단위 묶기' },
  { week: 6,  path: '/python/flowchart', icon: '📐', title: 'Flowgorithm 순서도',               desc: '논리적 사고, 순서도 그리기' },
  { week: 7,  path: '/python/condition', icon: '🔀', title: 'IF 조건문',                        desc: 'if, elif, else, 비교/논리 연산자' },
  { week: 8,  path: '/python/loop',      icon: '🔁', title: 'While 조건반복, For 횟수반복',      desc: 'while, for, break, continue' },
  { week: 9,  path: '/python/function',  icon: '⚙️', title: '함수와 매개변수',                   desc: 'def, 매개변수, return' },
  { week: 10, path: '/python/exception', icon: '🛡️', title: 'Try-Except 예외처리',              desc: '오류 유형, try-except-finally' },
  { week: 11, path: '/python/list',      icon: '📊', title: '2차원, 3차원 리스트',               desc: '다차원 리스트, 정보 모델링' },
];

const PythonLesson = () => {
  const { t } = useLanguage();
  useAOS();

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
          <div className="curriculum-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {weeks.map((w, i) => (
              <Link
                to={w.path}
                key={w.week}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <span className="curriculum-step">{w.week}주차</span>
                <span className="curriculum-icon">{w.icon}</span>
                <h3 className="curriculum-card-title">{w.title}</h3>
                <p className="curriculum-card-desc">{w.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PythonLesson;
