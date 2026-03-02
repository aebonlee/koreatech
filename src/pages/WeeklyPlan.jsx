import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const weeklyData = [
  { week: 1,  theory: '교과목 소개 및 운영 방법', practice: '파이썬 및 실습환경 안내' },
  { week: 2,  theory: '컴퓨팅적 사고 개념', practice: '입출력과 변수 (Input & Output)' },
  { week: 3,  theory: '정보와 데이터 (부호화)', practice: 'Data Type(정수, 소수, 문자)와 산술연산' },
  { week: 4,  theory: '문제 인식과 정의 (PDC 작성방법)', practice: '입력-처리-출력 개념' },
  { week: 5,  theory: '추상화 (핵심아이디어 - 패턴 & 규칙)', practice: 'Turtle (비슷한 것 끼리 기능 단위 묶기 def)' },
  { week: 6,  theory: '논리적으로 사고하기 (순서도)', practice: 'Flowgorithm 활용 순서도 그리기' },
  { week: 7,  theory: '사고의 흐름 (조건)', practice: 'IF 조건문' },
  { week: 8,  theory: '사고의 흐름 (반복)', practice: 'While 조건반복, For 횟수반복' },
  { week: 9,  theory: '알고리즘적 사고 (정렬과 탐색)', practice: '함수와 매개변수' },
  { week: 10, theory: '소프트웨어 오류와 검증 (디버깅)', practice: 'Try-Except' },
  { week: 11, theory: '정보 모델링 (2차원, 3차원 리스트)', practice: '2차원, 3차원 리스트' },
  { week: 12, theory: '중간고사', practice: '중간고사' },
  { week: 13, theory: '총정리 및 기말프로젝트 소개', practice: '생성형 AI 활용 프로젝트 수행' },
  { week: 14, theory: 'AI와 컴퓨팅 사고', practice: '생성형 AI 활용 프로젝트 수행' },
  { week: 15, theory: '프로젝트 결과제출 및 평가', practice: '프로젝트 결과제출 및 평가' },
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
                  <tr key={row.week} className={row.week === 12 || row.week === 15 ? 'exam-row' : ''}>
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
