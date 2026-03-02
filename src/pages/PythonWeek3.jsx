import { Link } from 'react-router-dom';

const PythonWeek3 = () => (
  <>
    <section className="page-header">
      <div className="container">
        <h1>3주차: Data Type과 산술연산</h1>
        <p>정수, 소수, 문자 자료형과 산술연산자</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <h2>1. 자료형 (Data Types)</h2>
          <p>파이썬의 기본 자료형은 다음과 같습니다:</p>
          <table className="lesson-table">
            <thead>
              <tr><th>자료형</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><code>int</code></td><td>정수</td><td><code>10, -3, 0</code></td></tr>
              <tr><td><code>float</code></td><td>실수 (소수점)</td><td><code>3.14, -0.5</code></td></tr>
              <tr><td><code>str</code></td><td>문자열</td><td><code>"hello", '파이썬'</code></td></tr>
              <tr><td><code>bool</code></td><td>논리값</td><td><code>True, False</code></td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">자료형 확인 - type()</div>
            <pre><code>{`x = 42
print(type(x))   # <class 'int'>

y = 3.14
print(type(y))   # <class 'float'>

z = "Hello"
print(type(z))   # <class 'str'>

w = True
print(type(w))   # <class 'bool'>`}</code></pre>
          </div>

          <h2>2. 형변환 (Type Conversion)</h2>
          <p>자료형을 다른 자료형으로 변환할 수 있습니다.</p>
          <div className="code-block">
            <div className="code-header">형변환 함수</div>
            <pre><code>{`# 문자열 → 정수
age = int("20")
print(age + 1)    # 21

# 문자열 → 실수
price = float("19.99")
print(price * 2)  # 39.98

# 숫자 → 문자열
num = 100
text = str(num)
print("점수: " + text)  # 점수: 100

# 정수 ↔ 실수
print(int(3.7))    # 3 (소수점 버림)
print(float(5))    # 5.0`}</code></pre>
          </div>

          <h2>3. 산술연산자</h2>
          <table className="lesson-table">
            <thead>
              <tr><th>연산자</th><th>의미</th><th>예시</th><th>결과</th></tr>
            </thead>
            <tbody>
              <tr><td><code>+</code></td><td>덧셈</td><td><code>10 + 3</code></td><td>13</td></tr>
              <tr><td><code>-</code></td><td>뺄셈</td><td><code>10 - 3</code></td><td>7</td></tr>
              <tr><td><code>*</code></td><td>곱셈</td><td><code>10 * 3</code></td><td>30</td></tr>
              <tr><td><code>/</code></td><td>나눗셈</td><td><code>10 / 3</code></td><td>3.333...</td></tr>
              <tr><td><code>//</code></td><td>몫 (정수 나눗셈)</td><td><code>10 // 3</code></td><td>3</td></tr>
              <tr><td><code>%</code></td><td>나머지</td><td><code>10 % 3</code></td><td>1</td></tr>
              <tr><td><code>**</code></td><td>거듭제곱</td><td><code>2 ** 10</code></td><td>1024</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">산술연산 실습</div>
            <pre><code>{`a = 10
b = 3

print(f"{a} + {b} = {a + b}")    # 13
print(f"{a} - {b} = {a - b}")    # 7
print(f"{a} * {b} = {a * b}")    # 30
print(f"{a} / {b} = {a / b}")    # 3.333...
print(f"{a} // {b} = {a // b}")  # 3
print(f"{a} % {b} = {a % b}")    # 1
print(f"{a} ** {b} = {a ** b}")  # 1000`}</code></pre>
          </div>

          <h2>4. 문자열 연산</h2>
          <div className="code-block">
            <div className="code-header">문자열 연결과 반복</div>
            <pre><code>{`# 문자열 연결 (+)
first = "컴퓨팅"
second = "사고"
print(first + " " + second)  # 컴퓨팅 사고

# 문자열 반복 (*)
line = "=" * 20
print(line)  # ====================

# 문자열 길이
text = "Hello, Python!"
print(len(text))  # 14`}</code></pre>
          </div>

          <h2>5. 복합 대입 연산자</h2>
          <div className="code-block">
            <div className="code-header">복합 대입 연산자</div>
            <pre><code>{`x = 10
x += 5   # x = x + 5 → 15
x -= 3   # x = x - 3 → 12
x *= 2   # x = x * 2 → 24
x //= 5  # x = x // 5 → 4
print(x)  # 4`}</code></pre>
          </div>

          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p>원의 반지름을 입력받아 원의 둘레와 넓이를 계산하는 프로그램을 작성하세요.<br/>
            둘레 = 2 × π × r, 넓이 = π × r² (π = 3.14159)</p>
          </div>

          <div className="lesson-nav">
            <Link to="/python/io" className="lesson-nav-btn prev">← 2주차: 입출력과 변수</Link>
            <Link to="/python/ipo" className="lesson-nav-btn next">4주차: 입력-처리-출력 →</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PythonWeek3;
