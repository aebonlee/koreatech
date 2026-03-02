import { Link } from 'react-router-dom';

const PythonWeek5 = () => (
  <>
    <section className="page-header">
      <div className="container">
        <h1>5주차: Turtle과 함수(def)</h1>
        <p>Turtle 그래픽으로 그리며 기능 단위 묶기(def) 학습</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <h2>1. Turtle 모듈 소개</h2>
          <p>
            <code>turtle</code> 모듈은 파이썬에 기본 포함된 그래픽 모듈로,
            거북이를 움직여 그림을 그립니다. 프로그래밍의 기본 개념을 시각적으로 배울 수 있습니다.
          </p>
          <div className="code-block">
            <div className="code-header">Turtle 시작하기</div>
            <pre><code>{`import turtle

t = turtle.Turtle()
t.shape("turtle")  # 거북이 모양으로 변경

t.forward(100)     # 앞으로 100픽셀 이동
t.left(90)         # 왼쪽으로 90도 회전
t.forward(100)     # 앞으로 100픽셀 이동

turtle.done()      # 창 유지`}</code></pre>
          </div>

          <h2>2. 기본 명령어</h2>
          <table className="lesson-table">
            <thead>
              <tr><th>명령어</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><code>forward(n)</code> / <code>fd(n)</code></td><td>앞으로 n 픽셀 이동</td></tr>
              <tr><td><code>backward(n)</code> / <code>bk(n)</code></td><td>뒤로 n 픽셀 이동</td></tr>
              <tr><td><code>left(각도)</code> / <code>lt(각도)</code></td><td>왼쪽으로 회전</td></tr>
              <tr><td><code>right(각도)</code> / <code>rt(각도)</code></td><td>오른쪽으로 회전</td></tr>
              <tr><td><code>circle(r)</code></td><td>반지름 r인 원 그리기</td></tr>
              <tr><td><code>penup()</code> / <code>pendown()</code></td><td>펜 올리기/내리기</td></tr>
              <tr><td><code>pencolor("색")</code></td><td>펜 색상 변경</td></tr>
              <tr><td><code>fillcolor("색")</code></td><td>채우기 색상 설정</td></tr>
              <tr><td><code>begin_fill()</code> / <code>end_fill()</code></td><td>도형 채우기</td></tr>
            </tbody>
          </table>

          <h2>3. 도형 그리기</h2>
          <div className="code-block">
            <div className="code-header">사각형 그리기</div>
            <pre><code>{`import turtle

t = turtle.Turtle()

# 사각형: 4번 반복 (앞으로 + 90도 회전)
for i in range(4):
    t.forward(100)
    t.left(90)

turtle.done()`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">삼각형 그리기</div>
            <pre><code>{`import turtle

t = turtle.Turtle()

# 삼각형: 3번 반복 (앞으로 + 120도 회전)
for i in range(3):
    t.forward(100)
    t.left(120)

turtle.done()`}</code></pre>
          </div>

          <h2>4. 함수(def)로 기능 묶기</h2>
          <p>
            비슷한 코드가 반복될 때, <code>def</code> 키워드로 함수를 만들어 묶을 수 있습니다.
            이것이 <strong>추상화</strong>의 핵심입니다.
          </p>
          <div className="code-block">
            <div className="code-header">함수로 도형 그리기</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          <h2>5. 매개변수 활용</h2>
          <div className="code-block">
            <div className="code-header">다각형 함수</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p>Turtle을 활용하여 나만의 그림(집, 꽃, 로봇 등)을 그리는 프로그램을 작성하세요.<br/>
            반복되는 도형은 반드시 <code>def</code>로 함수화하세요.</p>
          </div>

          <div className="lesson-nav">
            <Link to="/python/ipo" className="lesson-nav-btn prev">← 4주차: 입력-처리-출력</Link>
            <Link to="/python/flowchart" className="lesson-nav-btn next">6주차: 순서도 →</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PythonWeek5;
