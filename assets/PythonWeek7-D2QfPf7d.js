import{j as e,L as s}from"./index-nF71Syg7.js";const c=()=>e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"7주차: IF 조건문"}),e.jsx("p",{children:"if, elif, else를 활용한 조건 분기"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. if문 기본 구조"}),e.jsxs("p",{children:["조건이 ",e.jsx("code",{children:"True"}),"일 때만 코드 블록을 실행합니다. 파이썬은 ",e.jsx("strong",{children:"들여쓰기(indentation)"}),"로 블록을 구분합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"if문"}),e.jsx("pre",{children:e.jsx("code",{children:`age = 20

if age >= 18:
    print("성인입니다.")
    print("투표할 수 있습니다.")`})})]}),e.jsx("h2",{children:"2. if-else문"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"if-else"}),e.jsx("pre",{children:e.jsx("code",{children:`score = int(input("점수를 입력하세요: "))

if score >= 60:
    print("합격입니다!")
else:
    print("불합격입니다.")`})})]}),e.jsx("h2",{children:"3. if-elif-else문"}),e.jsx("p",{children:"여러 조건을 순서대로 검사합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"성적 등급 판별"}),e.jsx("pre",{children:e.jsx("code",{children:`score = int(input("점수: "))

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

print(f"점수: {score}, 등급: {grade}")`})})]}),e.jsx("h2",{children:"4. 비교 연산자와 논리 연산자"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"비교 연산자"}),e.jsx("th",{children:"의미"}),e.jsx("th",{children:"논리 연산자"}),e.jsx("th",{children:"의미"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"=="})}),e.jsx("td",{children:"같다"}),e.jsx("td",{children:e.jsx("code",{children:"and"})}),e.jsx("td",{children:"둘 다 참"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"!="})}),e.jsx("td",{children:"다르다"}),e.jsx("td",{children:e.jsx("code",{children:"or"})}),e.jsx("td",{children:"하나라도 참"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:">"}),", ",e.jsx("code",{children:"<"})]}),e.jsx("td",{children:"크다, 작다"}),e.jsx("td",{children:e.jsx("code",{children:"not"})}),e.jsx("td",{children:"반대"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:">="}),", ",e.jsx("code",{children:"<="})]}),e.jsx("td",{children:"이상, 이하"}),e.jsx("td",{}),e.jsx("td",{})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"논리 연산자 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`age = 25
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
    print("산책하기 좋은 날입니다.")`})})]}),e.jsx("h2",{children:"5. 중첩 조건문"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"중첩 if문"}),e.jsx("pre",{children:e.jsx("code",{children:`age = int(input("나이: "))
is_member = input("회원입니까? (y/n): ")

if age < 18:
    print("청소년 요금: 5,000원")
else:
    if is_member == "y":
        print("회원 요금: 8,000원")
    else:
        print("일반 요금: 10,000원")`})})]}),e.jsx("h2",{children:"6. 실습 예제: 가위바위보"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"가위바위보 게임"}),e.jsx("pre",{children:e.jsx("code",{children:`import random

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
    print("졌습니다!")`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsxs("p",{children:["사용자로부터 연도를 입력받아 윤년인지 판별하는 프로그램을 작성하세요.",e.jsx("br",{}),"윤년 조건: 4의 배수이면서 100의 배수가 아니거나, 400의 배수인 해"]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/python/flowchart",className:"lesson-nav-btn prev",children:"← 6주차: 순서도"}),e.jsx(s,{to:"/python/loop",className:"lesson-nav-btn next",children:"8주차: 반복문 →"})]})]})})})]});export{c as default};
