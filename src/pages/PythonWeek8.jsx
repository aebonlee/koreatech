import { Link } from 'react-router-dom';

const PythonWeek8 = () => (
  <>
    <section className="page-header">
      <div className="container">
        <h1>8주차: While 조건반복, For 횟수반복</h1>
        <p>반복문으로 효율적인 프로그래밍하기</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <h2>1. while문 (조건 반복)</h2>
          <p>조건이 <code>True</code>인 동안 코드 블록을 반복 실행합니다.</p>
          <div className="code-block">
            <div className="code-header">while문 기본</div>
            <pre><code>{`# 1부터 5까지 출력
i = 1
while i <= 5:
    print(f"반복 {i}번째")
    i += 1  # i = i + 1

print("반복 종료")`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">합계 계산</div>
            <pre><code>{`# 1부터 100까지 합
total = 0
i = 1

while i <= 100:
    total += i
    i += 1

print(f"1~100 합계: {total}")  # 5050`}</code></pre>
          </div>

          <h2>2. for문 (횟수 반복)</h2>
          <p><code>for</code>문은 정해진 범위를 순회하며 반복합니다.</p>
          <div className="code-block">
            <div className="code-header">for문과 range()</div>
            <pre><code>{`# range(n): 0부터 n-1까지
for i in range(5):
    print(i, end=" ")  # 0 1 2 3 4
print()

# range(start, end): start부터 end-1까지
for i in range(1, 6):
    print(i, end=" ")  # 1 2 3 4 5
print()

# range(start, end, step): step 간격
for i in range(0, 10, 2):
    print(i, end=" ")  # 0 2 4 6 8
print()

# 역순
for i in range(5, 0, -1):
    print(i, end=" ")  # 5 4 3 2 1`}</code></pre>
          </div>

          <h2>3. break와 continue</h2>
          <div className="code-block">
            <div className="code-header">break: 반복 즉시 종료</div>
            <pre><code>{`# 숫자 맞추기 게임
secret = 7
while True:
    guess = int(input("숫자를 맞춰보세요 (1-10): "))
    if guess == secret:
        print("정답입니다!")
        break
    elif guess < secret:
        print("더 큰 수입니다.")
    else:
        print("더 작은 수입니다.")`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">continue: 현재 반복 건너뛰기</div>
            <pre><code>{`# 홀수만 출력
for i in range(1, 11):
    if i % 2 == 0:
        continue  # 짝수면 건너뛰기
    print(i, end=" ")  # 1 3 5 7 9`}</code></pre>
          </div>

          <h2>4. 구구단 프로그램</h2>
          <div className="code-block">
            <div className="code-header">구구단 출력</div>
            <pre><code>{`dan = int(input("몇 단? "))

print(f"\\n--- {dan}단 ---")
for i in range(1, 10):
    print(f"{dan} x {i} = {dan * i}")`}</code></pre>
          </div>

          <h2>5. 중첩 반복문</h2>
          <div className="code-block">
            <div className="code-header">별(*) 찍기 - 직각삼각형</div>
            <pre><code>{`n = 5
for i in range(1, n + 1):
    print("*" * i)

# 출력:
# *
# **
# ***
# ****
# *****`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">별(*) 찍기 - 역삼각형</div>
            <pre><code>{`n = 5
for i in range(n, 0, -1):
    print("*" * i)

# 출력:
# *****
# ****
# ***
# **
# *`}</code></pre>
          </div>

          <h2>6. while vs for 비교</h2>
          <table className="lesson-table">
            <thead>
              <tr><th>구분</th><th>while</th><th>for</th></tr>
            </thead>
            <tbody>
              <tr><td>용도</td><td>조건이 만족되는 동안 반복</td><td>정해진 횟수만큼 반복</td></tr>
              <tr><td>특징</td><td>반복 횟수를 모를 때 유용</td><td>범위/시퀀스 순회에 적합</td></tr>
              <tr><td>주의</td><td>무한 루프 조심 (조건 변화 필수)</td><td>range() 범위 설정</td></tr>
            </tbody>
          </table>

          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p>1. 구구단 전체(2단~9단)를 출력하는 프로그램을 작성하세요.<br/>
            2. 별(*) 찍기로 피라미드 모양을 출력해보세요.</p>
          </div>

          <div className="lesson-nav">
            <Link to="/python/condition" className="lesson-nav-btn prev">← 7주차: IF 조건문</Link>
            <Link to="/python/function" className="lesson-nav-btn next">9주차: 함수 →</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PythonWeek8;
