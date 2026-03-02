import SEOHead from '../components/SEOHead';

const WhatIsCT = () => (
  <>
    <SEOHead title="컴퓨팅 사고란?" path="/ct/what-is-ct" />

    <section className="page-header">
      <div className="container">
        <h1>컴퓨팅 사고란?</h1>
        <p>Computational Thinking — 문제를 분석하고 해결하는 사고 방식</p>
      </div>
    </section>

    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <div className="callout-box">
            <h3>학습 목표</h3>
            <ul>
              <li>컴퓨팅 사고(CT)의 정의와 등장 배경을 설명할 수 있다.</li>
              <li>CT의 4가지 핵심 요소를 구분하고 예시를 들 수 있다.</li>
              <li>일상생활에서 CT를 적용하는 방법을 이해한다.</li>
              <li>CT와 프로그래밍의 관계를 설명할 수 있다.</li>
            </ul>
          </div>

          {/* ─── 1. CT 정의 ─── */}
          <h2>1. 컴퓨팅 사고(Computational Thinking)란?</h2>

          <h3>1.1 정의</h3>
          <p>
            <strong>컴퓨팅 사고(Computational Thinking, CT)</strong>는 컴퓨터 과학의 기본 개념과 원리를 활용하여
            문제를 효율적으로 분석하고 해결하는 사고 과정입니다.
          </p>
          <p>
            2006년 카네기멜론대학의 <strong>자넷 윙(Jeannette Wing)</strong> 교수가 "Computational Thinking"이라는
            논문을 발표하면서 본격적으로 주목받기 시작했습니다. 그녀는 이렇게 말했습니다:
          </p>

          <div className="callout-box">
            <p><em>
              "컴퓨팅 사고는 읽기, 쓰기, 산술 능력과 같이 모든 사람이 갖추어야 할 기본적인 사고 능력이다."
            </em></p>
            <p style={{ textAlign: 'right', marginTop: '8px' }}>— Jeannette Wing, 2006</p>
          </div>

          <p>
            CT는 <strong>프로그래머만을 위한 것이 아닙니다</strong>. 의사, 변호사, 예술가, 경영인 등
            모든 분야의 사람들이 문제를 체계적으로 해결하는 데 활용할 수 있는 범용적인 사고 방법입니다.
          </p>

          <h3>1.2 왜 컴퓨팅 사고가 중요한가?</h3>

          <table className="lesson-table">
            <thead>
              <tr><th>관점</th><th>중요성</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>4차 산업혁명</strong></td><td>AI, 빅데이터, IoT 시대에 데이터를 분석하고 자동화하는 사고력이 필수</td></tr>
              <tr><td><strong>문제 해결 능력</strong></td><td>복잡한 문제를 작은 단위로 분해하여 체계적으로 접근하는 능력 향상</td></tr>
              <tr><td><strong>융합 역량</strong></td><td>자신의 전공 분야에 컴퓨팅 원리를 결합하여 창의적 솔루션 도출</td></tr>
              <tr><td><strong>논리적 사고</strong></td><td>감이 아닌 근거와 논리에 기반한 의사결정 능력 배양</td></tr>
              <tr><td><strong>글로벌 교육 트렌드</strong></td><td>영국, 미국, 일본 등 주요 국가에서 초등부터 CT 교육 필수화</td></tr>
            </tbody>
          </table>

          {/* ─── 2. CT 4가지 핵심 요소 ─── */}
          <h2>2. 컴퓨팅 사고의 4가지 핵심 요소</h2>

          <p>컴퓨팅 사고는 다음 <strong>4가지 핵심 요소</strong>로 구성됩니다:</p>

          <h3>2.1 분해 (Decomposition)</h3>
          <p>
            복잡한 문제를 <strong>더 작고 관리 가능한 부분</strong>으로 나누는 과정입니다.
            큰 문제 그대로는 해결하기 어렵지만, 작은 문제로 나누면 각각을 쉽게 처리할 수 있습니다.
          </p>

          <table className="lesson-table">
            <thead>
              <tr><th>일상 예시</th><th>분해 과정</th></tr>
            </thead>
            <tbody>
              <tr><td>라면 끓이기</td><td>물 끓이기 → 스프 넣기 → 면 넣기 → 시간 맞추기 → 완성</td></tr>
              <tr><td>이사하기</td><td>짐 목록 작성 → 포장 → 운송 → 배치 → 정리</td></tr>
              <tr><td>앱 개발</td><td>화면 설계 → 데이터베이스 → 로그인 기능 → 핵심 기능 → 테스트</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">분해 예시: 성적 관리 프로그램</div>
            <pre><code>{`# 큰 문제: "학생 성적 관리 프로그램 만들기"
# 분해:
# 1. 학생 정보 입력받기
# 2. 과목별 점수 입력받기
# 3. 평균 계산하기
# 4. 학점 판정하기
# 5. 결과 출력하기`}</code></pre>
          </div>

          <h3>2.2 패턴 인식 (Pattern Recognition)</h3>
          <p>
            문제들 사이에서 <strong>유사한 패턴이나 규칙성</strong>을 찾아내는 과정입니다.
            패턴을 발견하면 이전의 해결 경험을 재활용할 수 있어 효율적입니다.
          </p>

          <table className="lesson-table">
            <thead>
              <tr><th>일상 예시</th><th>패턴</th></tr>
            </thead>
            <tbody>
              <tr><td>날씨 예측</td><td>과거 기온/습도 데이터에서 반복 패턴 발견</td></tr>
              <tr><td>음악 작곡</td><td>반복되는 코드 진행, 리듬 패턴 활용</td></tr>
              <tr><td>프로그래밍</td><td>반복되는 코드를 함수로 묶기 (DRY 원칙)</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">패턴 인식 예시</div>
            <pre><code>{`# 패턴 발견: 1~10의 합, 1~100의 합, 1~N의 합
# → 공통 패턴: "1부터 N까지 더하기"

def sum_to_n(n):
    total = 0
    for i in range(1, n + 1):
        total += i
    return total

print(sum_to_n(10))    # 55
print(sum_to_n(100))   # 5050`}</code></pre>
          </div>

          <h3>2.3 추상화 (Abstraction)</h3>
          <p>
            문제에서 <strong>핵심적인 요소만 추출</strong>하고 불필요한 세부사항은 제거하는 과정입니다.
            복잡한 현실 세계를 단순화된 모델로 표현합니다.
          </p>

          <table className="lesson-table">
            <thead>
              <tr><th>대상</th><th>현실</th><th>추상화 결과</th></tr>
            </thead>
            <tbody>
              <tr><td>지하철 노선도</td><td>실제 거리, 곡선, 지형</td><td>역 이름, 연결 관계, 노선 색상만 표시</td></tr>
              <tr><td>학생 정보</td><td>키, 몸무게, 취미, 혈액형 등</td><td>이름, 학번, 전공, 성적 (성적 관리에 필요한 것만)</td></tr>
              <tr><td>자동차 운전</td><td>엔진 구조, 연료 분사 원리</td><td>핸들, 페달, 기어 (운전에 필요한 인터페이스만)</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">추상화 예시: 학생을 코드로 표현</div>
            <pre><code>{`# 현실의 학생: 이름, 나이, 키, 몸무게, 취미, 전화번호, 주소 ...
# 성적 관리에 필요한 추상화:

student = {
    "name": "홍길동",
    "id": "2024001",
    "scores": [85, 92, 78]
}
# → 키, 몸무게, 취미 등은 이 문제에서 불필요하므로 제외`}</code></pre>
          </div>

          <h3>2.4 알고리즘 설계 (Algorithm Design)</h3>
          <p>
            문제를 해결하기 위한 <strong>단계적인 절차</strong>를 설계하는 과정입니다.
            누가 따라해도 같은 결과가 나오도록 명확하고 순서가 정해진 지시를 만듭니다.
          </p>

          <table className="lesson-table">
            <thead>
              <tr><th>일상 예시</th><th>알고리즘</th></tr>
            </thead>
            <tbody>
              <tr><td>라면 레시피</td><td>물 550ml 넣기 → 끓으면 스프 넣기 → 면 넣기 → 4분 30초 기다리기</td></tr>
              <tr><td>길 찾기</td><td>출발 → 첫번째 사거리 우회전 → 200m 직진 → 두번째 건물 도착</td></tr>
              <tr><td>최댓값 찾기</td><td>첫번째 값을 최대로 설정 → 나머지와 비교 → 더 크면 교체 → 반복</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">알고리즘 설계 예시: 최댓값 찾기</div>
            <pre><code>{`# 알고리즘: 리스트에서 최댓값 찾기
# 1단계: 첫 번째 값을 최댓값으로 설정
# 2단계: 리스트의 나머지 값과 비교
# 3단계: 더 큰 값이 있으면 최댓값 갱신
# 4단계: 모든 비교 후 최댓값 반환

def find_max(numbers):
    max_val = numbers[0]       # 1단계
    for num in numbers[1:]:    # 2단계
        if num > max_val:      # 3단계
            max_val = num
    return max_val             # 4단계

scores = [78, 92, 85, 96, 88]
print(f"최고 점수: {find_max(scores)}")  # 96`}</code></pre>
          </div>

          {/* ─── 3. CT와 일상생활 ─── */}
          <h2>3. 일상에서 만나는 컴퓨팅 사고</h2>

          <p>컴퓨팅 사고는 컴퓨터를 사용하지 않아도 적용할 수 있습니다:</p>

          <h3>예시 1: 도서관에서 책 찾기</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>CT 요소</th><th>적용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>분해</strong></td><td>주제 파악 → 분류 번호 확인 → 서가 위치 이동 → 책 검색</td></tr>
              <tr><td><strong>패턴 인식</strong></td><td>도서 분류 체계(십진분류법)의 규칙 이해</td></tr>
              <tr><td><strong>추상화</strong></td><td>표지 색상, 두께는 무시하고 분류번호와 저자명에 집중</td></tr>
              <tr><td><strong>알고리즘</strong></td><td>분류번호 순서대로 서가를 탐색하는 절차</td></tr>
            </tbody>
          </table>

          <h3>예시 2: 여행 계획 세우기</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>CT 요소</th><th>적용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>분해</strong></td><td>숙소 예약, 교통편, 관광지 선정, 식당 리서치, 예산 계산</td></tr>
              <tr><td><strong>패턴 인식</strong></td><td>이전 여행 경험에서 비용/시간 패턴 활용</td></tr>
              <tr><td><strong>추상화</strong></td><td>핵심 정보만 추출 (날짜, 장소, 비용, 이동 시간)</td></tr>
              <tr><td><strong>알고리즘</strong></td><td>일자별 동선 최적화 (가까운 관광지끼리 묶기)</td></tr>
            </tbody>
          </table>

          {/* ─── 4. CT vs 프로그래밍 ─── */}
          <h2>4. 컴퓨팅 사고와 프로그래밍의 관계</h2>

          <table className="lesson-table">
            <thead>
              <tr><th>구분</th><th>컴퓨팅 사고</th><th>프로그래밍</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>정의</strong></td><td>문제 해결을 위한 사고 방식</td><td>사고를 코드로 구현하는 기술</td></tr>
              <tr><td><strong>도구</strong></td><td>종이, 순서도, 의사코드</td><td>Python, Java, C 등 프로그래밍 언어</td></tr>
              <tr><td><strong>목적</strong></td><td>무엇을 어떻게 해결할지 설계</td><td>설계한 해결 방법을 실행</td></tr>
              <tr><td><strong>비유</strong></td><td>건축 설계도 그리기</td><td>설계도대로 건물 짓기</td></tr>
              <tr><td><strong>관계</strong></td><td colSpan="2" style={{ textAlign: 'center' }}>CT가 <strong>사고(Think)</strong>라면, 프로그래밍은 <strong>구현(Do)</strong>이다</td></tr>
            </tbody>
          </table>

          <div className="callout-box">
            <h3>핵심 포인트</h3>
            <p>
              프로그래밍을 잘하려면 코딩 문법보다 <strong>컴퓨팅 사고</strong>가 먼저입니다.<br/>
              문제를 어떻게 분해하고, 어떤 패턴을 활용하고, 어떤 알고리즘으로 해결할지를 먼저 생각한 후에
              코드를 작성해야 합니다.
            </p>
          </div>

          {/* ─── 5. CT 문제 해결 프로세스 ─── */}
          <h2>5. CT 기반 문제 해결 프로세스</h2>

          <p>컴퓨팅 사고를 활용한 문제 해결은 다음 단계를 따릅니다:</p>

          <div className="code-block">
            <div className="code-header">문제 해결 5단계</div>
            <pre><code>{`1단계: 문제 인식 (Problem Identification)
  → 무엇이 문제인지 명확하게 정의

2단계: 분석 (Analysis)
  → 분해 + 패턴 인식으로 문제 구조 파악

3단계: 설계 (Design)
  → 추상화 + 알고리즘 설계로 해결 방법 수립
  → PDC(문제정의차트), 순서도, 의사코드 활용

4단계: 구현 (Implementation)
  → 프로그래밍 언어로 코드 작성

5단계: 검증 (Verification)
  → 테스트 데이터로 결과 확인, 디버깅`}</code></pre>
          </div>

          <h3>종합 예시: "학생 성적 등급 판정 프로그램"</h3>

          <table className="lesson-table">
            <thead>
              <tr><th>단계</th><th>활동</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>문제 인식</strong></td><td>학생의 점수를 입력받아 A~F 등급을 판정하여 출력</td></tr>
              <tr><td><strong>분해</strong></td><td>입력(점수) → 처리(등급 판정) → 출력(결과)</td></tr>
              <tr><td><strong>패턴 인식</strong></td><td>90점 이상=A, 80점 이상=B ... → 구간별 반복 패턴</td></tr>
              <tr><td><strong>추상화</strong></td><td>필요한 것: 점수(int), 등급(str). 이름/학번 등은 제외</td></tr>
              <tr><td><strong>알고리즘</strong></td><td>점수를 입력 → if-elif-else로 구간 비교 → 등급 출력</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">구현 (Python)</div>
            <pre><code>{`score = int(input("점수를 입력하세요: "))

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"점수: {score}, 등급: {grade}")`}</code></pre>
          </div>

          {/* ─── 6. 이 수업에서 배울 것 ─── */}
          <h2>6. 이 수업에서 배울 것</h2>

          <p>본 교과목에서는 컴퓨팅 사고의 핵심 개념을 <strong>파이썬(Python)</strong> 프로그래밍과 함께 학습합니다:</p>

          <table className="lesson-table">
            <thead>
              <tr><th>CT 핵심 요소</th><th>관련 수업 내용</th><th>주차</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>분해</strong></td><td>IPO 구조, PDC(문제정의차트) 작성</td><td>4주차</td></tr>
              <tr><td><strong>추상화</strong></td><td>Turtle로 함수(def) 기초, 기능 단위 묶기</td><td>5주차</td></tr>
              <tr><td><strong>알고리즘 설계</strong></td><td>Flowgorithm 순서도, 3가지 제어구조</td><td>6주차</td></tr>
              <tr><td><strong>패턴 인식</strong></td><td>반복문 패턴, 누적 패턴, 함수 재사용</td><td>8-9주차</td></tr>
              <tr><td><strong>검증/디버깅</strong></td><td>Try-Except 예외처리, 디버깅 기법</td><td>10주차</td></tr>
              <tr><td><strong>모델링</strong></td><td>2차원/3차원 리스트로 정보 모델링</td><td>11주차</td></tr>
            </tbody>
          </table>

          {/* ─── 핵심 정리 ─── */}
          <div className="callout-box">
            <h3>핵심 정리</h3>
            <ul>
              <li><strong>컴퓨팅 사고(CT)</strong>는 컴퓨터 과학의 원리를 활용한 문제 해결 사고 방식이다.</li>
              <li>CT의 4가지 핵심 요소: <strong>분해, 패턴 인식, 추상화, 알고리즘 설계</strong></li>
              <li>CT는 프로그래머만이 아닌 <strong>모든 분야</strong>에서 활용 가능한 사고 능력이다.</li>
              <li>프로그래밍은 CT를 <strong>구현하는 도구</strong>이며, CT가 사고의 기반이 된다.</li>
              <li>문제 해결 프로세스: 인식 → 분석 → 설계 → 구현 → 검증</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  </>
);

export default WhatIsCT;
