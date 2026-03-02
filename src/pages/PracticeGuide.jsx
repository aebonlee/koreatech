import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const practiceData = [
  {
    week: 1,
    title: '개발환경 설정',
    desc: '파이썬 설치, IDLE 및 VS Code 설정, 첫 프로그램 실행',
    tasks: ['Python 3.x 설치 및 PATH 설정', 'VS Code 설치 및 Python 확장 설치', 'Hello World 프로그램 작성 및 실행'],
  },
  {
    week: 2,
    title: '변수와 자료형 실습',
    desc: '변수 선언, 자료형 확인, 형변환 연습',
    tasks: ['다양한 자료형 변수 선언 및 type() 확인', '사칙연산 계산기 프로그램 작성', '문자열 연결 및 반복 출력'],
  },
  {
    week: 3,
    title: '입출력 실습',
    desc: 'print 서식, input 활용, f-string 포맷팅',
    tasks: ['자기소개 출력 프로그램', 'BMI 계산기 (input으로 키/몸무게 입력)', 'f-string을 활용한 서식 출력'],
  },
  {
    week: 4,
    title: '조건문 실습',
    desc: 'if/elif/else를 활용한 분기 처리',
    tasks: ['성적 등급 판별 프로그램 (A/B/C/D/F)', '윤년 판별 프로그램', '가위바위보 게임'],
  },
  {
    week: 5,
    title: '반복문 기초 실습',
    desc: 'for, while을 활용한 반복 처리',
    tasks: ['1~100 합계 계산 (for, while 각각)', '구구단 출력 프로그램', '별 찍기 패턴 (삼각형)'],
  },
  {
    week: 6,
    title: '반복문 심화 실습',
    desc: '중첩 반복, break/continue 활용',
    tasks: ['다이아몬드 별 패턴 출력', '소수(Prime Number) 판별 프로그램', '숫자 맞추기 게임 (while + break)'],
  },
  {
    week: 7,
    title: '리스트와 튜플 실습',
    desc: '리스트 생성, 조작, 슬라이싱',
    tasks: ['학생 점수 리스트 관리 (추가, 삭제, 정렬)', '최대값/최소값/평균 구하기', '리스트 컴프리헨션 연습'],
  },
  {
    week: 8,
    title: '중간고사',
    desc: '1~7주차 범위 실기 시험',
    tasks: ['필기 시험 (개념 이해)', '실기 시험 (프로그래밍 문제 풀이)'],
  },
  {
    week: 9,
    title: '딕셔너리와 집합 실습',
    desc: '딕셔너리 활용, 집합 연산',
    tasks: ['영어 단어장 프로그램 (딕셔너리)', '텍스트 단어 빈도수 분석', '두 반의 수강생 비교 (집합 연산)'],
  },
  {
    week: 10,
    title: '함수 기초 실습',
    desc: '함수 정의, 호출, 매개변수',
    tasks: ['사칙연산 함수 모음 작성', '온도 변환 함수 (섭씨 ↔ 화씨)', '로또 번호 생성기 함수'],
  },
  {
    week: 11,
    title: '함수 심화 실습',
    desc: '반환값, 기본값 매개변수, 재귀 함수',
    tasks: ['팩토리얼 함수 (반복 vs 재귀)', '피보나치 수열 함수', 'lambda와 정렬 활용'],
  },
  {
    week: 12,
    title: '파일 입출력 실습',
    desc: '텍스트 파일 읽기/쓰기, CSV 처리',
    tasks: ['일기장 프로그램 (파일 쓰기/읽기)', '성적 CSV 파일 읽어서 통계 계산', '파일 내 특정 문자열 검색'],
  },
  {
    week: 13,
    title: '모듈 활용 실습',
    desc: 'random, math, datetime 등 표준 모듈',
    tasks: ['주사위 시뮬레이션 (random)', '수학 퀴즈 프로그램 (math)', 'D-day 계산기 (datetime)'],
  },
  {
    week: 14,
    title: '종합 프로젝트',
    desc: '학생 성적 관리 시스템 구현',
    tasks: ['학생 정보 CRUD (추가/조회/수정/삭제)', '파일 저장 및 불러오기', '통계 출력 (평균, 최고점, 등급 분포)'],
  },
  {
    week: 15,
    title: '기말고사',
    desc: '9~14주차 범위 실기 시험',
    tasks: ['필기 시험 (개념 이해)', '실기 시험 (프로그래밍 문제 풀이)'],
  },
];

const PracticeGuide = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title={t('site.ct.practiceGuide.title')} path="/ct/practice-guide" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.ct.practiceGuide.title')}</h1>
          <p>{t('site.ct.practiceGuide.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="practice-grid">
            {practiceData.map((item) => (
              <div key={item.week} className={`practice-card ${item.week === 8 || item.week === 15 ? 'exam-card' : ''}`}>
                <div className="practice-card-header">
                  <span className="lecture-week-badge">{item.week}{t('site.ct.weeklyPlan.weekUnit')}</span>
                  <h3 className="practice-card-title">{item.title}</h3>
                  <p className="practice-card-desc">{item.desc}</p>
                </div>
                <ul className="practice-task-list">
                  {item.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeGuide;
