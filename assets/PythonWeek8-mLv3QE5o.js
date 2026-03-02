import{j as e,L as s}from"./index-nF71Syg7.js";const n=()=>e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"8주차: While 조건반복, For 횟수반복"}),e.jsx("p",{children:"반복문으로 효율적인 프로그래밍하기"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. while문 (조건 반복)"}),e.jsxs("p",{children:["조건이 ",e.jsx("code",{children:"True"}),"인 동안 코드 블록을 반복 실행합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"while문 기본"}),e.jsx("pre",{children:e.jsx("code",{children:`# 1부터 5까지 출력
i = 1
while i <= 5:
    print(f"반복 {i}번째")
    i += 1  # i = i + 1

print("반복 종료")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"합계 계산"}),e.jsx("pre",{children:e.jsx("code",{children:`# 1부터 100까지 합
total = 0
i = 1

while i <= 100:
    total += i
    i += 1

print(f"1~100 합계: {total}")  # 5050`})})]}),e.jsx("h2",{children:"2. for문 (횟수 반복)"}),e.jsxs("p",{children:[e.jsx("code",{children:"for"}),"문은 정해진 범위를 순회하며 반복합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"for문과 range()"}),e.jsx("pre",{children:e.jsx("code",{children:`# range(n): 0부터 n-1까지
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
    print(i, end=" ")  # 5 4 3 2 1`})})]}),e.jsx("h2",{children:"3. break와 continue"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"break: 반복 즉시 종료"}),e.jsx("pre",{children:e.jsx("code",{children:`# 숫자 맞추기 게임
secret = 7
while True:
    guess = int(input("숫자를 맞춰보세요 (1-10): "))
    if guess == secret:
        print("정답입니다!")
        break
    elif guess < secret:
        print("더 큰 수입니다.")
    else:
        print("더 작은 수입니다.")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"continue: 현재 반복 건너뛰기"}),e.jsx("pre",{children:e.jsx("code",{children:`# 홀수만 출력
for i in range(1, 11):
    if i % 2 == 0:
        continue  # 짝수면 건너뛰기
    print(i, end=" ")  # 1 3 5 7 9`})})]}),e.jsx("h2",{children:"4. 구구단 프로그램"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"구구단 출력"}),e.jsx("pre",{children:e.jsx("code",{children:`dan = int(input("몇 단? "))

print(f"\\n--- {dan}단 ---")
for i in range(1, 10):
    print(f"{dan} x {i} = {dan * i}")`})})]}),e.jsx("h2",{children:"5. 중첩 반복문"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"별(*) 찍기 - 직각삼각형"}),e.jsx("pre",{children:e.jsx("code",{children:`n = 5
for i in range(1, n + 1):
    print("*" * i)

# 출력:
# *
# **
# ***
# ****
# *****`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"별(*) 찍기 - 역삼각형"}),e.jsx("pre",{children:e.jsx("code",{children:`n = 5
for i in range(n, 0, -1):
    print("*" * i)

# 출력:
# *****
# ****
# ***
# **
# *`})})]}),e.jsx("h2",{children:"6. while vs for 비교"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"while"}),e.jsx("th",{children:"for"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"용도"}),e.jsx("td",{children:"조건이 만족되는 동안 반복"}),e.jsx("td",{children:"정해진 횟수만큼 반복"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"특징"}),e.jsx("td",{children:"반복 횟수를 모를 때 유용"}),e.jsx("td",{children:"범위/시퀀스 순회에 적합"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"주의"}),e.jsx("td",{children:"무한 루프 조심 (조건 변화 필수)"}),e.jsx("td",{children:"range() 범위 설정"})]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsxs("p",{children:["1. 구구단 전체(2단~9단)를 출력하는 프로그램을 작성하세요.",e.jsx("br",{}),"2. 별(*) 찍기로 피라미드 모양을 출력해보세요."]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/python/condition",className:"lesson-nav-btn prev",children:"← 7주차: IF 조건문"}),e.jsx(s,{to:"/python/function",className:"lesson-nav-btn next",children:"9주차: 함수 →"})]})]})})})]});export{n as default};
