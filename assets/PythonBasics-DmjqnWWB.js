import{u as i,j as e,L as n}from"./index-DleUYR5m.js";import{S as d}from"./SEOHead-DEFYuAFt.js";const l=()=>{const{t:s}=i();return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:s("site.python.basics.title"),path:"/python/basics"}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:s("site.python.basics.title")}),e.jsx("p",{children:s("site.python.basics.desc")})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. 파이썬이란?"}),e.jsx("p",{children:"파이썬(Python)은 1991년 귀도 반 로섬(Guido van Rossum)이 만든 프로그래밍 언어입니다. 문법이 간결하고 읽기 쉬워 프로그래밍 입문자에게 적합합니다."}),e.jsxs("ul",{children:[e.jsx("li",{children:"간결하고 직관적인 문법"}),e.jsx("li",{children:"다양한 라이브러리 생태계"}),e.jsx("li",{children:"웹, 데이터 분석, AI 등 폭넓은 활용 분야"})]}),e.jsx("h2",{children:"2. 파이썬 설치"}),e.jsxs("p",{children:[e.jsx("a",{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer",children:"python.org"}),"에서 최신 버전을 다운로드하여 설치합니다. 설치 시 ",e.jsx("strong",{children:'"Add Python to PATH"'}),"를 반드시 체크하세요."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"터미널에서 버전 확인"}),e.jsx("pre",{children:e.jsxs("code",{children:["python --version",`
`,"# Python 3.12.x"]})})]}),e.jsx("h2",{children:"3. 변수 (Variable)"}),e.jsx("p",{children:"변수는 데이터를 저장하는 공간입니다. 파이썬에서는 별도의 자료형 선언 없이 값을 할당하면 됩니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"변수 선언 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`# 변수 선언
name = "홍길동"
age = 20
height = 175.5
is_student = True

print(name)      # 홍길동
print(age)       # 20
print(height)    # 175.5
print(is_student)  # True`})})]}),e.jsx("h2",{children:"4. 자료형 (Data Types)"}),e.jsx("p",{children:"파이썬의 기본 자료형은 다음과 같습니다:"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"자료형"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"int"})}),e.jsx("td",{children:"정수"}),e.jsx("td",{children:e.jsx("code",{children:"10, -3, 0"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"float"})}),e.jsx("td",{children:"실수 (소수점)"}),e.jsx("td",{children:e.jsx("code",{children:"3.14, -0.5"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"str"})}),e.jsx("td",{children:"문자열"}),e.jsx("td",{children:e.jsx("code",{children:`"hello", '파이썬'`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"bool"})}),e.jsx("td",{children:"논리값"}),e.jsx("td",{children:e.jsx("code",{children:"True, False"})})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"자료형 확인"}),e.jsx("pre",{children:e.jsx("code",{children:`x = 42
print(type(x))   # <class 'int'>

y = "Hello"
print(type(y))   # <class 'str'>

z = 3.14
print(type(z))   # <class 'float'>`})})]}),e.jsx("h2",{children:"5. 입출력 (Input / Output)"}),e.jsxs("p",{children:[e.jsx("code",{children:"print()"})," 함수로 값을 출력하고, ",e.jsx("code",{children:"input()"})," 함수로 사용자 입력을 받습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"입출력 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`# 출력
print("안녕하세요!")
print("이름:", "홍길동", "나이:", 20)

# f-string (포맷 문자열)
name = "홍길동"
age = 20
print(f"{name}님은 {age}세입니다.")

# 입력
user_name = input("이름을 입력하세요: ")
print(f"안녕하세요, {user_name}님!")

# 숫자 입력 (형변환 필요)
num = int(input("숫자를 입력하세요: "))
print(f"입력한 숫자의 2배: {num * 2}")`})})]}),e.jsx("h2",{children:"6. 연산자"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"산술 연산자"}),e.jsx("pre",{children:e.jsx("code",{children:`a = 10
b = 3

print(a + b)   # 13 (덧셈)
print(a - b)   # 7  (뺄셈)
print(a * b)   # 30 (곱셈)
print(a / b)   # 3.333... (나눗셈)
print(a // b)  # 3  (몫)
print(a % b)   # 1  (나머지)
print(a ** b)  # 1000 (거듭제곱)`})})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(n,{to:"/python",className:"lesson-nav-btn prev",children:"← 목록으로"}),e.jsx(n,{to:"/python/control",className:"lesson-nav-btn next",children:"제어문 →"})]})]})})})]})};export{l as default};
