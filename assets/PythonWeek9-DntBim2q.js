import{j as e,L as s}from"./index-nF71Syg7.js";const d=()=>e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"9주차: 함수와 매개변수"}),e.jsx("p",{children:"함수 정의, 호출, 매개변수와 반환값"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. 함수란?"}),e.jsx("p",{children:"함수(Function)는 특정 작업을 수행하는 코드 묶음입니다. 한 번 정의하면 여러 번 호출하여 재사용할 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"함수 정의와 호출"}),e.jsx("pre",{children:e.jsx("code",{children:`# 함수 정의
def greet():
    print("안녕하세요!")
    print("반갑습니다!")

# 함수 호출
greet()
greet()  # 여러 번 호출 가능`})})]}),e.jsx("h2",{children:"2. 매개변수 (Parameter)"}),e.jsx("p",{children:"함수에 값을 전달하여 다양한 동작을 수행할 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"매개변수와 인자"}),e.jsx("pre",{children:e.jsx("code",{children:`# 매개변수가 있는 함수
def greet_name(name):
    print(f"안녕하세요, {name}님!")

greet_name("홍길동")  # 안녕하세요, 홍길동님!
greet_name("김철수")  # 안녕하세요, 김철수님!

# 여러 개의 매개변수
def add(a, b):
    print(f"{a} + {b} = {a + b}")

add(3, 5)   # 3 + 5 = 8
add(10, 20) # 10 + 20 = 30`})})]}),e.jsx("h2",{children:"3. 반환값 (return)"}),e.jsxs("p",{children:[e.jsx("code",{children:"return"}),"을 사용하면 함수의 결과값을 돌려줄 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"return 사용"}),e.jsx("pre",{children:e.jsx("code",{children:`def add(a, b):
    return a + b

result = add(3, 5)
print(f"결과: {result}")  # 결과: 8

# 반환값을 다른 계산에 활용
total = add(10, 20) + add(30, 40)
print(f"총합: {total}")  # 총합: 100`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"여러 값 반환"}),e.jsx("pre",{children:e.jsx("code",{children:`def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(f"최소: {lo}, 최대: {hi}")  # 최소: 1, 최대: 9`})})]}),e.jsx("h2",{children:"4. 기본값 매개변수"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"기본값 설정"}),e.jsx("pre",{children:e.jsx("code",{children:`def power(base, exp=2):
    return base ** exp

print(power(3))     # 9  (exp 기본값 2 사용)
print(power(3, 3))  # 27 (exp에 3 전달)
print(power(2, 10)) # 1024`})})]}),e.jsx("h2",{children:"5. 실습 예제"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"사칙연산 함수 모음"}),e.jsx("pre",{children:e.jsx("code",{children:`def add(a, b):
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
print(f"{x} ÷ {y} = {divide(x, y)}")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"온도 변환 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`def celsius_to_fahrenheit(c):
    return c * 9 / 5 + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5 / 9

# 사용
c = 36.5
print(f"{c}°C = {celsius_to_fahrenheit(c):.1f}°F")

f = 98.6
print(f"{f}°F = {fahrenheit_to_celsius(f):.1f}°C")`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsxs("p",{children:["1. ",e.jsx("code",{children:"is_even(n)"})," - 짝수이면 True, 홀수이면 False를 반환하는 함수를 작성하세요.",e.jsx("br",{}),"2. ",e.jsx("code",{children:"grade(score)"})," - 점수를 입력받아 등급(A/B/C/D/F) 문자열을 반환하는 함수를 작성하세요."]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/python/loop",className:"lesson-nav-btn prev",children:"← 8주차: 반복문"}),e.jsx(s,{to:"/python/exception",className:"lesson-nav-btn next",children:"10주차: Try-Except →"})]})]})})})]});export{d as default};
