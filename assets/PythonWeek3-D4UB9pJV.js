import{j as e,L as s}from"./index-nF71Syg7.js";const c=()=>e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"3주차: Data Type과 산술연산"}),e.jsx("p",{children:"정수, 소수, 문자 자료형과 산술연산자"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. 자료형 (Data Types)"}),e.jsx("p",{children:"파이썬의 기본 자료형은 다음과 같습니다:"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"자료형"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"int"})}),e.jsx("td",{children:"정수"}),e.jsx("td",{children:e.jsx("code",{children:"10, -3, 0"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"float"})}),e.jsx("td",{children:"실수 (소수점)"}),e.jsx("td",{children:e.jsx("code",{children:"3.14, -0.5"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"str"})}),e.jsx("td",{children:"문자열"}),e.jsx("td",{children:e.jsx("code",{children:`"hello", '파이썬'`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"bool"})}),e.jsx("td",{children:"논리값"}),e.jsx("td",{children:e.jsx("code",{children:"True, False"})})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"자료형 확인 - type()"}),e.jsx("pre",{children:e.jsx("code",{children:`x = 42
print(type(x))   # <class 'int'>

y = 3.14
print(type(y))   # <class 'float'>

z = "Hello"
print(type(z))   # <class 'str'>

w = True
print(type(w))   # <class 'bool'>`})})]}),e.jsx("h2",{children:"2. 형변환 (Type Conversion)"}),e.jsx("p",{children:"자료형을 다른 자료형으로 변환할 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"형변환 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`# 문자열 → 정수
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
print(float(5))    # 5.0`})})]}),e.jsx("h2",{children:"3. 산술연산자"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"연산자"}),e.jsx("th",{children:"의미"}),e.jsx("th",{children:"예시"}),e.jsx("th",{children:"결과"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"+"})}),e.jsx("td",{children:"덧셈"}),e.jsx("td",{children:e.jsx("code",{children:"10 + 3"})}),e.jsx("td",{children:"13"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"-"})}),e.jsx("td",{children:"뺄셈"}),e.jsx("td",{children:e.jsx("code",{children:"10 - 3"})}),e.jsx("td",{children:"7"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"*"})}),e.jsx("td",{children:"곱셈"}),e.jsx("td",{children:e.jsx("code",{children:"10 * 3"})}),e.jsx("td",{children:"30"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"/"})}),e.jsx("td",{children:"나눗셈"}),e.jsx("td",{children:e.jsx("code",{children:"10 / 3"})}),e.jsx("td",{children:"3.333..."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"//"})}),e.jsx("td",{children:"몫 (정수 나눗셈)"}),e.jsx("td",{children:e.jsx("code",{children:"10 // 3"})}),e.jsx("td",{children:"3"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"%"})}),e.jsx("td",{children:"나머지"}),e.jsx("td",{children:e.jsx("code",{children:"10 % 3"})}),e.jsx("td",{children:"1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"**"})}),e.jsx("td",{children:"거듭제곱"}),e.jsx("td",{children:e.jsx("code",{children:"2 ** 10"})}),e.jsx("td",{children:"1024"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"산술연산 실습"}),e.jsx("pre",{children:e.jsx("code",{children:`a = 10
b = 3

print(f"{a} + {b} = {a + b}")    # 13
print(f"{a} - {b} = {a - b}")    # 7
print(f"{a} * {b} = {a * b}")    # 30
print(f"{a} / {b} = {a / b}")    # 3.333...
print(f"{a} // {b} = {a // b}")  # 3
print(f"{a} % {b} = {a % b}")    # 1
print(f"{a} ** {b} = {a ** b}")  # 1000`})})]}),e.jsx("h2",{children:"4. 문자열 연산"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"문자열 연결과 반복"}),e.jsx("pre",{children:e.jsx("code",{children:`# 문자열 연결 (+)
first = "컴퓨팅"
second = "사고"
print(first + " " + second)  # 컴퓨팅 사고

# 문자열 반복 (*)
line = "=" * 20
print(line)  # ====================

# 문자열 길이
text = "Hello, Python!"
print(len(text))  # 14`})})]}),e.jsx("h2",{children:"5. 복합 대입 연산자"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"복합 대입 연산자"}),e.jsx("pre",{children:e.jsx("code",{children:`x = 10
x += 5   # x = x + 5 → 15
x -= 3   # x = x - 3 → 12
x *= 2   # x = x * 2 → 24
x //= 5  # x = x // 5 → 4
print(x)  # 4`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsxs("p",{children:["원의 반지름을 입력받아 원의 둘레와 넓이를 계산하는 프로그램을 작성하세요.",e.jsx("br",{}),"둘레 = 2 × π × r, 넓이 = π × r² (π = 3.14159)"]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/python/io",className:"lesson-nav-btn prev",children:"← 2주차: 입출력과 변수"}),e.jsx(s,{to:"/python/ipo",className:"lesson-nav-btn next",children:"4주차: 입력-처리-출력 →"})]})]})})})]});export{c as default};
