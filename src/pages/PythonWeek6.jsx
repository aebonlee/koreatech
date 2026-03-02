import { Link } from 'react-router-dom';

const PythonWeek6 = () => (
  <>
    <section className="page-header">
      <div className="container">
        <h1>6주차: Flowgorithm 활용 순서도 그리기</h1>
        <p>논리적 사고를 순서도로 시각화하기</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <h2>1. 순서도(Flowchart)란?</h2>
          <p>
            순서도는 프로그램의 실행 흐름을 시각적으로 표현하는 도구입니다.
            코드를 작성하기 전에 순서도로 논리를 설계하면 체계적인 프로그래밍이 가능합니다.
          </p>

          <h2>2. 순서도 기호</h2>
          <table className="lesson-table">
            <thead>
              <tr><th>기호</th><th>이름</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td>○</td><td>단말 (Terminal)</td><td>시작 / 끝</td></tr>
              <tr><td>▭</td><td>처리 (Process)</td><td>연산, 대입 등 처리</td></tr>
              <tr><td>▱</td><td>입출력 (I/O)</td><td>데이터 입력 / 출력</td></tr>
              <tr><td>◇</td><td>판단 (Decision)</td><td>조건 분기 (예/아니오)</td></tr>
              <tr><td>→</td><td>흐름선 (Flow Line)</td><td>실행 순서 표시</td></tr>
            </tbody>
          </table>

          <h2>3. Flowgorithm 소개</h2>
          <p>
            <a href="http://www.flowgorithm.org/" target="_blank" rel="noopener noreferrer">Flowgorithm</a>은
            순서도를 그리면 자동으로 프로그램이 실행되는 무료 교육용 도구입니다.
          </p>
          <ul>
            <li>순서도를 그래픽으로 작성</li>
            <li>작성한 순서도를 바로 실행하여 결과 확인</li>
            <li>파이썬, Java 등 다양한 언어 코드로 변환 가능</li>
          </ul>
          <p><strong>설치:</strong> flowgorithm.org에서 다운로드 → 설치 → 실행</p>

          <h2>4. 순차 구조</h2>
          <p>명령을 위에서 아래로 순서대로 실행합니다.</p>
          <div className="code-block">
            <div className="code-header">순차 구조 순서도 → 파이썬</div>
            <pre><code>{`# 순서도: 시작 → 입력(이름) → 처리(인사말) → 출력 → 끝

# ① 입력
name = input("이름을 입력하세요: ")

# ② 처리
message = f"안녕하세요, {name}님!"

# ③ 출력
print(message)`}</code></pre>
          </div>

          <h2>5. 선택 구조 (조건 분기)</h2>
          <p>조건에 따라 실행 경로가 달라집니다. 순서도에서 ◇(판단) 기호를 사용합니다.</p>
          <div className="code-block">
            <div className="code-header">선택 구조 순서도 → 파이썬</div>
            <pre><code>{`# 순서도: 시작 → 입력(점수) → 판단(>=60?)
#         → Yes: "합격" 출력 / No: "불합격" 출력 → 끝

score = int(input("점수를 입력하세요: "))

if score >= 60:
    print("합격입니다!")
else:
    print("불합격입니다.")`}</code></pre>
          </div>

          <h2>6. 반복 구조</h2>
          <p>조건이 만족되는 동안 특정 처리를 반복합니다.</p>
          <div className="code-block">
            <div className="code-header">반복 구조 순서도 → 파이썬</div>
            <pre><code>{`# 순서도: 시작 → i=1 → 판단(i<=5?)
#         → Yes: 출력(i) → i=i+1 → 판단으로 돌아감
#         → No: 끝

i = 1
while i <= 5:
    print(f"반복 {i}번째")
    i = i + 1

print("반복 종료")`}</code></pre>
          </div>

          <h2>7. 종합 예제</h2>
          <div className="code-block">
            <div className="code-header">1~N까지 합 구하기 (순서도 → 코드)</div>
            <pre><code>{`# 순서도:
# 시작 → 입력(N) → sum=0, i=1
# → 판단(i<=N?) → Yes: sum=sum+i, i=i+1 → 판단으로
#                → No: 출력(sum) → 끝

N = int(input("N을 입력하세요: "))
total = 0
i = 1

while i <= N:
    total = total + i
    i = i + 1

print(f"1부터 {N}까지의 합: {total}")`}</code></pre>
          </div>

          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p>다음 문제를 Flowgorithm으로 순서도를 먼저 그린 후, 파이썬 코드로 구현하세요:<br/>
            "두 수를 입력받아 큰 수, 작은 수, 평균을 출력하는 프로그램"</p>
          </div>

          <div className="lesson-nav">
            <Link to="/python/turtle" className="lesson-nav-btn prev">← 5주차: Turtle</Link>
            <Link to="/python/condition" className="lesson-nav-btn next">7주차: IF 조건문 →</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PythonWeek6;
