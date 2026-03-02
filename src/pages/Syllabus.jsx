import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const Syllabus = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title={t('site.ct.syllabus.title')} path="/ct/syllabus" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.ct.syllabus.title')}</h1>
          <p>{t('site.ct.syllabus.subtitle')}</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="syllabus-info-card">
              <h2>교과목 정보</h2>
              <table className="lesson-table">
                <tbody>
                  <tr><th>교과목명</th><td>컴퓨팅 사고 (Computational Thinking)</td></tr>
                  <tr><th>학점/시수</th><td>3학점 / 이론 2시간 + 실습 2시간</td></tr>
                  <tr><th>이수구분</th><td>교양 필수</td></tr>
                  <tr><th>수강대상</th><td>전 학과 1학년</td></tr>
                  <tr><th>선수과목</th><td>없음</td></tr>
                </tbody>
              </table>
            </div>

            <h2>교과목 개요</h2>
            <p>
              본 교과목은 컴퓨팅 사고(Computational Thinking)의 기본 개념을 이해하고,
              파이썬(Python) 프로그래밍을 통해 문제 해결 능력을 기르는 것을 목표로 합니다.
              프로그래밍 경험이 없는 학생도 수강 가능하며, 논리적 사고와 알고리즘 설계 능력을
              체계적으로 학습합니다.
            </p>

            <h2>수업 목표</h2>
            <ul>
              <li>컴퓨팅 사고의 핵심 개념(분해, 패턴 인식, 추상화, 알고리즘)을 이해한다.</li>
              <li>파이썬 기본 문법을 습득하고 활용할 수 있다.</li>
              <li>조건문, 반복문을 활용하여 문제를 해결할 수 있다.</li>
              <li>함수를 정의하고 코드를 구조화할 수 있다.</li>
              <li>리스트, 딕셔너리 등 자료구조를 활용하여 데이터를 처리할 수 있다.</li>
              <li>실생활 문제를 프로그래밍으로 해결하는 경험을 쌓는다.</li>
            </ul>

            <h2>교재 및 참고자료</h2>
            <ul>
              <li><strong>주교재:</strong> 강의 슬라이드 및 온라인 학습 자료 (본 사이트 제공)</li>
              <li><strong>참고서:</strong> 혼자 공부하는 파이썬 (한빛미디어)</li>
              <li><strong>온라인:</strong> Python 공식 문서 (docs.python.org)</li>
            </ul>

            <h2>평가 방법</h2>
            <table className="lesson-table">
              <thead>
                <tr><th>평가 항목</th><th>비율</th><th>비고</th></tr>
              </thead>
              <tbody>
                <tr><td>중간고사</td><td>30%</td><td>필기 + 실기</td></tr>
                <tr><td>기말고사</td><td>30%</td><td>필기 + 실기</td></tr>
                <tr><td>과제</td><td>20%</td><td>주차별 실습 과제</td></tr>
                <tr><td>출석</td><td>10%</td><td>결석 3회 이상 F</td></tr>
                <tr><td>참여도</td><td>10%</td><td>수업 참여, 질문 등</td></tr>
              </tbody>
            </table>

            <h2>수업 운영 방식</h2>
            <ul>
              <li><strong>이론 (2시간):</strong> 개념 설명, 예제 코드 시연, 질의응답</li>
              <li><strong>실습 (2시간):</strong> 개인/팀 실습, 과제 풀이, 코드 리뷰</li>
              <li>매주 실습 과제가 부여되며, 다음 주 수업 전까지 제출</li>
            </ul>

            <h2>수강 시 유의사항</h2>
            <ul>
              <li>개인 노트북 지참 필수 (실습 수업)</li>
              <li>수업 전 파이썬 및 VS Code 설치 완료</li>
              <li>출석은 매 수업 시작 시 확인하며, 지각 3회 = 결석 1회</li>
              <li>과제 표절 적발 시 해당 과제 0점 처리</li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
};

export default Syllabus;
