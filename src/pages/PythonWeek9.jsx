import { Link } from 'react-router-dom';

const PythonWeek9 = () => (
  <>
    <section className="page-header">
      <div className="container">
        <h1>9주차: 함수와 매개변수</h1>
        <p>함수 정의, 호출, 매개변수와 반환값</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <h2>1. 함수란?</h2>
          <p>
            함수(Function)는 특정 작업을 수행하는 코드 묶음입니다.
            한 번 정의하면 여러 번 호출하여 재사용할 수 있습니다.
          </p>
          <div className="code-block">
            <div className="code-header">함수 정의와 호출</div>
            <pre><code>{`# 함수 정의
def greet():
    print("안녕하세요!")
    print("반갑습니다!")

# 함수 호출
greet()
greet()  # 여러 번 호출 가능`}</code></pre>
          </div>

          <h2>2. 매개변수 (Parameter)</h2>
          <p>함수에 값을 전달하여 다양한 동작을 수행할 수 있습니다.</p>
          <div className="code-block">
            <div className="code-header">매개변수와 인자</div>
            <pre><code>{`# 매개변수가 있는 함수
def greet_name(name):
    print(f"안녕하세요, {name}님!")

greet_name("홍길동")  # 안녕하세요, 홍길동님!
greet_name("김철수")  # 안녕하세요, 김철수님!

# 여러 개의 매개변수
def add(a, b):
    print(f"{a} + {b} = {a + b}")

add(3, 5)   # 3 + 5 = 8
add(10, 20) # 10 + 20 = 30`}</code></pre>
          </div>

          <h2>3. 반환값 (return)</h2>
          <p><code>return</code>을 사용하면 함수의 결과값을 돌려줄 수 있습니다.</p>
          <div className="code-block">
            <div className="code-header">return 사용</div>
            <pre><code>{`def add(a, b):
    return a + b

result = add(3, 5)
print(f"결과: {result}")  # 결과: 8

# 반환값을 다른 계산에 활용
total = add(10, 20) + add(30, 40)
print(f"총합: {total}")  # 총합: 100`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">여러 값 반환</div>
            <pre><code>{`def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(f"최소: {lo}, 최대: {hi}")  # 최소: 1, 최대: 9`}</code></pre>
          </div>

          <h2>4. 기본값 매개변수</h2>
          <div className="code-block">
            <div className="code-header">기본값 설정</div>
            <pre><code>{`def power(base, exp=2):
    return base ** exp

print(power(3))     # 9  (exp 기본값 2 사용)
print(power(3, 3))  # 27 (exp에 3 전달)
print(power(2, 10)) # 1024`}</code></pre>
          </div>

          <h2>5. 실습 예제</h2>
          <div className="code-block">
            <div className="code-header">사칙연산 함수 모음</div>
            <pre><code>{`def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "0으로 나눌 수 없습니다"
    return a / b

# 사용
x = int(input("첫 번째 수: "))
y = int(input("두 번째 수: "))

print(f"{x} + {y} = {add(x, y)}")
print(f"{x} - {y} = {subtract(x, y)}")
print(f"{x} × {y} = {multiply(x, y)}")
print(f"{x} ÷ {y} = {divide(x, y)}")`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">온도 변환 함수</div>
            <pre><code>{`def celsius_to_fahrenheit(c):
    return c * 9 / 5 + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5 / 9

# 사용
c = 36.5
print(f"{c}°C = {celsius_to_fahrenheit(c):.1f}°F")

f = 98.6
print(f"{f}°F = {fahrenheit_to_celsius(f):.1f}°C")`}</code></pre>
          </div>

          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p>1. <code>is_even(n)</code> - 짝수이면 True, 홀수이면 False를 반환하는 함수를 작성하세요.<br/>
            2. <code>grade(score)</code> - 점수를 입력받아 등급(A/B/C/D/F) 문자열을 반환하는 함수를 작성하세요.</p>
          </div>

          <div className="lesson-nav">
            <Link to="/python/loop" className="lesson-nav-btn prev">← 8주차: 반복문</Link>
            <Link to="/python/exception" className="lesson-nav-btn next">10주차: Try-Except →</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PythonWeek9;
