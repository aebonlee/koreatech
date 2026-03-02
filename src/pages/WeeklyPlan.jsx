import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const weeklyData = [
  { week: 1,  theory: '컴퓨팅 사고 개요, 강의 소개', practice: '파이썬 설치 및 개발환경 설정 (IDLE, VS Code)' },
  { week: 2,  theory: '변수와 자료형 (int, float, str, bool)', practice: '변수 선언, 형변환, 기본 연산 실습' },
  { week: 3,  theory: '입출력 함수 (print, input, f-string)', practice: '사용자 입력 프로그램 작성 실습' },
  { week: 4,  theory: '조건문 (if, elif, else)', practice: '성적 판별기, 짝수/홀수 판별 프로그램' },
  { week: 5,  theory: '반복문 (for, while)', practice: '구구단, 별 찍기, 합계 계산 프로그램' },
  { week: 6,  theory: '반복문 심화 (break, continue, 중첩 반복)', practice: '패턴 출력, 소수 판별 프로그램' },
  { week: 7,  theory: '리스트와 튜플', practice: '리스트 조작, 정렬, 검색 실습' },
  { week: 8,  theory: '중간고사', practice: '중간고사' },
  { week: 9,  theory: '딕셔너리와 집합', practice: '단어 빈도수 분석, 집합 연산 실습' },
  { week: 10, theory: '함수 정의와 호출', practice: '계산기 함수, 온도 변환 함수 작성' },
  { week: 11, theory: '함수 심화 (매개변수, 반환값, 람다)', practice: '재귀 함수, 정렬 알고리즘 구현' },
  { week: 12, theory: '파일 입출력', practice: '텍스트 파일 읽기/쓰기, CSV 처리' },
  { week: 13, theory: '모듈과 패키지 활용', practice: 'random, math, datetime 모듈 활용 실습' },
  { week: 14, theory: '종합 프로젝트 안내 및 실습', practice: '미니 프로젝트 구현 (학생 성적 관리 시스템)' },
  { week: 15, theory: '기말고사', practice: '기말고사' },
];

const WeeklyPlan = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title={t('site.ct.weeklyPlan.title')} path="/ct/weekly-plan" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.ct.weeklyPlan.title')}</h1>
          <p>{t('site.ct.weeklyPlan.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="board-table-wrapper">
            <table className="board-table weekly-plan-table">
              <thead>
                <tr>
                  <th style={{ width: '70px', textAlign: 'center' }}>{t('site.ct.weeklyPlan.week')}</th>
                  <th>{t('site.ct.weeklyPlan.theory')} (2{t('site.ct.weeklyPlan.hours')})</th>
                  <th>{t('site.ct.weeklyPlan.practice')} (2{t('site.ct.weeklyPlan.hours')})</th>
                </tr>
              </thead>
              <tbody>
                {weeklyData.map((row) => (
                  <tr key={row.week} className={row.week === 8 || row.week === 15 ? 'exam-row' : ''}>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>{row.week}</td>
                    <td>{row.theory}</td>
                    <td>{row.practice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeeklyPlan;
