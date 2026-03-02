import { Link } from 'react-router-dom';

const PythonWeek7 = () => (
  <>
    <section className="page-header">
      <div className="container">
        <h1>7주차: IF 조건문</h1>
        <p>if, elif, else를 활용한 조건 분기</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <h2>1. if문 기본 구조</h2>
          <p>조건이 <code>True</code>일 때만 코드 블록을 실행합니다. 파이썬은 <strong>들여쓰기(indentation)</strong>로 블록을 구분합니다.</p>
          <div className="code-block">
            <div className="code-header">if문</div>
            <pre><code>{`age = 20

if age >= 18:
    print("성인입니다.")
    print("투표할 수 있습니다.")`}</code></pre>
          </div>

          <h2>2. if-else문</h2>
          <div className="code-block">
            <div className="code-header">if-else</div>
            <pre><code>{`score = int(input("점수를 입력하세요: "))

if score >= 60:
    print("합격입니다!")
else:
    print("불합격입니다.")`}</code></pre>
          </div>

          <h2>3. if-elif-else문</h2>
          <p>여러 조건을 순서대로 검사합니다.</p>
          <div className="code-block">
            <div className="code-header">성적 등급 판별</div>
            <pre><code>{`score = int(input("점수: "))

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

          <h2>4. 비교 연산자와 논리 연산자</h2>
          <table className="lesson-table">
            <thead>
              <tr><th>비교 연산자</th><th>의미</th><th>논리 연산자</th><th>의미</th></tr>
            </thead>
            <tbody>
              <tr><td><code>==</code></td><td>같다</td><td><code>and</code></td><td>둘 다 참</td></tr>
              <tr><td><code>!=</code></td><td>다르다</td><td><code>or</code></td><td>하나라도 참</td></tr>
              <tr><td><code>&gt;</code>, <code>&lt;</code></td><td>크다, 작다</td><td><code>not</code></td><td>반대</td></tr>
              <tr><td><code>&gt;=</code>, <code>&lt;=</code></td><td>이상, 이하</td><td></td><td></td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">논리 연산자 활용</div>
            <pre><code>{`age = 25
has_license = True

# and: 둘 다 만족해야
if age >= 18 and has_license:
    print("운전할 수 있습니다.")

# or: 하나만 만족해도
day = "토요일"
if day == "토요일" or day == "일요일":
    print("주말입니다!")

# not: 반대
is_raining = False
if not is_raining:
    print("산책하기 좋은 날입니다.")`}</code></pre>
          </div>

          <h2>5. 중첩 조건문</h2>
          <div className="code-block">
            <div className="code-header">중첩 if문</div>
            <pre><code>{`age = int(input("나이: "))
is_member = input("회원입니까? (y/n): ")

if age < 18:
    print("청소년 요금: 5,000원")
else:
    if is_member == "y":
        print("회원 요금: 8,000원")
    else:
        print("일반 요금: 10,000원")`}</code></pre>
          </div>

          <h2>6. 실습 예제: 가위바위보</h2>
          <div className="code-block">
            <div className="code-header">가위바위보 게임</div>
            <pre><code>{`import random

choices = ["가위", "바위", "보"]
computer = random.choice(choices)
user = input("가위, 바위, 보 중 선택: ")

print(f"컴퓨터: {computer}")

if user == computer:
    print("비겼습니다!")
elif (user == "가위" and computer == "보") or \\
     (user == "바위" and computer == "가위") or \\
     (user == "보" and computer == "바위"):
    print("이겼습니다!")
else:
    print("졌습니다!")`}</code></pre>
          </div>

          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p>사용자로부터 연도를 입력받아 윤년인지 판별하는 프로그램을 작성하세요.<br/>
            윤년 조건: 4의 배수이면서 100의 배수가 아니거나, 400의 배수인 해</p>
          </div>

          <div className="lesson-nav">
            <Link to="/python/flowchart" className="lesson-nav-btn prev">← 6주차: 순서도</Link>
            <Link to="/python/loop" className="lesson-nav-btn next">8주차: 반복문 →</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PythonWeek7;
