import{j as e,L as s}from"./index-nF71Syg7.js";const l=()=>e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"6주차: Flowgorithm 활용 순서도 그리기"}),e.jsx("p",{children:"논리적 사고를 순서도로 시각화하기"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. 순서도(Flowchart)란?"}),e.jsx("p",{children:"순서도는 프로그램의 실행 흐름을 시각적으로 표현하는 도구입니다. 코드를 작성하기 전에 순서도로 논리를 설계하면 체계적인 프로그래밍이 가능합니다."}),e.jsx("h2",{children:"2. 순서도 기호"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기호"}),e.jsx("th",{children:"이름"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"○"}),e.jsx("td",{children:"단말 (Terminal)"}),e.jsx("td",{children:"시작 / 끝"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"▭"}),e.jsx("td",{children:"처리 (Process)"}),e.jsx("td",{children:"연산, 대입 등 처리"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"▱"}),e.jsx("td",{children:"입출력 (I/O)"}),e.jsx("td",{children:"데이터 입력 / 출력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"◇"}),e.jsx("td",{children:"판단 (Decision)"}),e.jsx("td",{children:"조건 분기 (예/아니오)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"→"}),e.jsx("td",{children:"흐름선 (Flow Line)"}),e.jsx("td",{children:"실행 순서 표시"})]})]})]}),e.jsx("h2",{children:"3. Flowgorithm 소개"}),e.jsxs("p",{children:[e.jsx("a",{href:"http://www.flowgorithm.org/",target:"_blank",rel:"noopener noreferrer",children:"Flowgorithm"}),"은 순서도를 그리면 자동으로 프로그램이 실행되는 무료 교육용 도구입니다."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"순서도를 그래픽으로 작성"}),e.jsx("li",{children:"작성한 순서도를 바로 실행하여 결과 확인"}),e.jsx("li",{children:"파이썬, Java 등 다양한 언어 코드로 변환 가능"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"설치:"})," flowgorithm.org에서 다운로드 → 설치 → 실행"]}),e.jsx("h2",{children:"4. 순차 구조"}),e.jsx("p",{children:"명령을 위에서 아래로 순서대로 실행합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"순차 구조 순서도 → 파이썬"}),e.jsx("pre",{children:e.jsx("code",{children:`# 순서도: 시작 → 입력(이름) → 처리(인사말) → 출력 → 끝

# ① 입력
name = input("이름을 입력하세요: ")

# ② 처리
message = f"안녕하세요, {name}님!"

# ③ 출력
print(message)`})})]}),e.jsx("h2",{children:"5. 선택 구조 (조건 분기)"}),e.jsx("p",{children:"조건에 따라 실행 경로가 달라집니다. 순서도에서 ◇(판단) 기호를 사용합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"선택 구조 순서도 → 파이썬"}),e.jsx("pre",{children:e.jsx("code",{children:`# 순서도: 시작 → 입력(점수) → 판단(>=60?)
#         → Yes: "합격" 출력 / No: "불합격" 출력 → 끝

score = int(input("점수를 입력하세요: "))

if score >= 60:
    print("합격입니다!")
else:
    print("불합격입니다.")`})})]}),e.jsx("h2",{children:"6. 반복 구조"}),e.jsx("p",{children:"조건이 만족되는 동안 특정 처리를 반복합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"반복 구조 순서도 → 파이썬"}),e.jsx("pre",{children:e.jsx("code",{children:`# 순서도: 시작 → i=1 → 판단(i<=5?)
#         → Yes: 출력(i) → i=i+1 → 판단으로 돌아감
#         → No: 끝

i = 1
while i <= 5:
    print(f"반복 {i}번째")
    i = i + 1

print("반복 종료")`})})]}),e.jsx("h2",{children:"7. 종합 예제"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"1~N까지 합 구하기 (순서도 → 코드)"}),e.jsx("pre",{children:e.jsx("code",{children:`# 순서도:
# 시작 → 입력(N) → sum=0, i=1
# → 판단(i<=N?) → Yes: sum=sum+i, i=i+1 → 판단으로
#                → No: 출력(sum) → 끝

N = int(input("N을 입력하세요: "))
total = 0
i = 1

while i <= N:
    total = total + i
    i = i + 1

print(f"1부터 {N}까지의 합: {total}")`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsxs("p",{children:["다음 문제를 Flowgorithm으로 순서도를 먼저 그린 후, 파이썬 코드로 구현하세요:",e.jsx("br",{}),'"두 수를 입력받아 큰 수, 작은 수, 평균을 출력하는 프로그램"']})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/python/turtle",className:"lesson-nav-btn prev",children:"← 5주차: Turtle"}),e.jsx(s,{to:"/python/condition",className:"lesson-nav-btn next",children:"7주차: IF 조건문 →"})]})]})})})]});export{l as default};
