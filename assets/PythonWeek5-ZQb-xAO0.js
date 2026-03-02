import{j as e,L as r}from"./index-nF71Syg7.js";const s=()=>e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"5주차: Turtle과 함수(def)"}),e.jsx("p",{children:"Turtle 그래픽으로 그리며 기능 단위 묶기(def) 학습"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. Turtle 모듈 소개"}),e.jsxs("p",{children:[e.jsx("code",{children:"turtle"})," 모듈은 파이썬에 기본 포함된 그래픽 모듈로, 거북이를 움직여 그림을 그립니다. 프로그래밍의 기본 개념을 시각적으로 배울 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Turtle 시작하기"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.shape("turtle")  # 거북이 모양으로 변경

t.forward(100)     # 앞으로 100픽셀 이동
t.left(90)         # 왼쪽으로 90도 회전
t.forward(100)     # 앞으로 100픽셀 이동

turtle.done()      # 창 유지`})})]}),e.jsx("h2",{children:"2. 기본 명령어"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"명령어"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"forward(n)"})," / ",e.jsx("code",{children:"fd(n)"})]}),e.jsx("td",{children:"앞으로 n 픽셀 이동"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"backward(n)"})," / ",e.jsx("code",{children:"bk(n)"})]}),e.jsx("td",{children:"뒤로 n 픽셀 이동"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"left(각도)"})," / ",e.jsx("code",{children:"lt(각도)"})]}),e.jsx("td",{children:"왼쪽으로 회전"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"right(각도)"})," / ",e.jsx("code",{children:"rt(각도)"})]}),e.jsx("td",{children:"오른쪽으로 회전"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"circle(r)"})}),e.jsx("td",{children:"반지름 r인 원 그리기"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"penup()"})," / ",e.jsx("code",{children:"pendown()"})]}),e.jsx("td",{children:"펜 올리기/내리기"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'pencolor("색")'})}),e.jsx("td",{children:"펜 색상 변경"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'fillcolor("색")'})}),e.jsx("td",{children:"채우기 색상 설정"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"begin_fill()"})," / ",e.jsx("code",{children:"end_fill()"})]}),e.jsx("td",{children:"도형 채우기"})]})]})]}),e.jsx("h2",{children:"3. 도형 그리기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"사각형 그리기"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()

# 사각형: 4번 반복 (앞으로 + 90도 회전)
for i in range(4):
    t.forward(100)
    t.left(90)

turtle.done()`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"삼각형 그리기"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()

# 삼각형: 3번 반복 (앞으로 + 120도 회전)
for i in range(3):
    t.forward(100)
    t.left(120)

turtle.done()`})})]}),e.jsx("h2",{children:"4. 함수(def)로 기능 묶기"}),e.jsxs("p",{children:["비슷한 코드가 반복될 때, ",e.jsx("code",{children:"def"})," 키워드로 함수를 만들어 묶을 수 있습니다. 이것이 ",e.jsx("strong",{children:"추상화"}),"의 핵심입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"함수로 도형 그리기"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()

# 사각형 그리는 함수
def draw_square(size):
    for i in range(4):
        t.forward(size)
        t.left(90)

# 삼각형 그리는 함수
def draw_triangle(size):
    for i in range(3):
        t.forward(size)
        t.left(120)

# 함수 호출로 여러 도형 그리기
draw_square(100)
t.penup()
t.forward(150)
t.pendown()
draw_triangle(100)

turtle.done()`})})]}),e.jsx("h2",{children:"5. 매개변수 활용"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"다각형 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(0)  # 최고 속도

def draw_polygon(sides, size, color):
    """n각형을 그리는 함수"""
    t.pencolor(color)
    angle = 360 / sides
    for i in range(sides):
        t.forward(size)
        t.left(angle)

# 다양한 도형 그리기
draw_polygon(3, 80, "red")      # 삼각형
draw_polygon(5, 80, "blue")     # 오각형
draw_polygon(6, 80, "green")    # 육각형
draw_polygon(36, 10, "purple")  # 원에 가까운 도형

turtle.done()`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsxs("p",{children:["Turtle을 활용하여 나만의 그림(집, 꽃, 로봇 등)을 그리는 프로그램을 작성하세요.",e.jsx("br",{}),"반복되는 도형은 반드시 ",e.jsx("code",{children:"def"}),"로 함수화하세요."]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(r,{to:"/python/ipo",className:"lesson-nav-btn prev",children:"← 4주차: 입력-처리-출력"}),e.jsx(r,{to:"/python/flowchart",className:"lesson-nav-btn next",children:"6주차: 순서도 →"})]})]})})})]});export{s as default};
