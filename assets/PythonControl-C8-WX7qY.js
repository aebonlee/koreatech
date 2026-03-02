import{u as i,j as e,L as n}from"./index-CEq7oxHZ.js";import{S as r}from"./SEOHead-DIZXn0G1.js";const l=()=>{const{t:s}=i();return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:s("site.python.control.title"),path:"/python/control"}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:s("site.python.control.title")}),e.jsx("p",{children:s("site.python.control.desc")})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. 조건문 (if / elif / else)"}),e.jsx("p",{children:"조건문은 주어진 조건에 따라 다른 코드를 실행합니다. 파이썬은 들여쓰기(indentation)로 블록을 구분합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"if문 기본 구조"}),e.jsx("pre",{children:e.jsx("code",{children:`score = 85

if score >= 90:
    print("A학점")
elif score >= 80:
    print("B학점")
elif score >= 70:
    print("C학점")
else:
    print("F학점")

# 출력: B학점`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"조건 표현식 (삼항 연산자)"}),e.jsx("pre",{children:e.jsx("code",{children:`age = 20
status = "성인" if age >= 18 else "미성년자"
print(status)  # 성인`})})]}),e.jsx("h2",{children:"2. 논리 연산자"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"and, or, not"}),e.jsx("pre",{children:e.jsx("code",{children:`x = 10

# and: 둘 다 참이면 True
print(x > 5 and x < 20)  # True

# or: 하나라도 참이면 True
print(x < 5 or x > 8)    # True

# not: 반대
print(not (x > 5))        # False`})})]}),e.jsx("h2",{children:"3. for 반복문"}),e.jsxs("p",{children:[e.jsx("code",{children:"for"}),"문은 시퀀스(리스트, 문자열, range 등)를 순회하며 반복합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"for문 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`# range() 사용
for i in range(5):
    print(i, end=" ")
# 출력: 0 1 2 3 4

print()

# 리스트 순회
fruits = ["사과", "바나나", "딸기"]
for fruit in fruits:
    print(f"과일: {fruit}")

# 문자열 순회
for ch in "Python":
    print(ch, end="-")
# 출력: P-y-t-h-o-n-`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"중첩 반복문 - 구구단"}),e.jsx("pre",{children:e.jsx("code",{children:`for dan in range(2, 10):
    print(f"--- {dan}단 ---")
    for i in range(1, 10):
        print(f"{dan} x {i} = {dan * i}")
    print()`})})]}),e.jsx("h2",{children:"4. while 반복문"}),e.jsxs("p",{children:[e.jsx("code",{children:"while"}),"문은 조건이 참인 동안 계속 반복합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"while문 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`count = 0
while count < 5:
    print(f"count: {count}")
    count += 1

# 사용자 입력 반복
while True:
    text = input("입력 (q=종료): ")
    if text == "q":
        break
    print(f"입력값: {text}")`})})]}),e.jsx("h2",{children:"5. break / continue"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"break와 continue"}),e.jsx("pre",{children:e.jsx("code",{children:`# break: 반복 즉시 종료
for i in range(10):
    if i == 5:
        break
    print(i, end=" ")
# 출력: 0 1 2 3 4

print()

# continue: 현재 반복 건너뛰기
for i in range(10):
    if i % 2 == 0:
        continue
    print(i, end=" ")
# 출력: 1 3 5 7 9`})})]}),e.jsx("h2",{children:"6. 연습 문제"}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"문제 1: 짝수/홀수 판별"}),e.jsx("p",{children:"사용자로부터 숫자를 입력받아 짝수인지 홀수인지 출력하는 프로그램을 작성하세요."})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"문제 2: 1부터 N까지 합"}),e.jsx("p",{children:"사용자로부터 N을 입력받아 1부터 N까지의 합을 구하는 프로그램을 작성하세요."})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(n,{to:"/python/basics",className:"lesson-nav-btn prev",children:"← 파이썬 기초"}),e.jsx(n,{to:"/python/functions",className:"lesson-nav-btn next",children:"함수 →"})]})]})})})]})};export{l as default};
