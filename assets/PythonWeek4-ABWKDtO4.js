import{j as e,L as s}from"./index-nF71Syg7.js";const r=()=>e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"4주차: 입력-처리-출력 개념"}),e.jsx("p",{children:"PDC(Problem Definition Chart) 작성과 프로그램 설계"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. 입력-처리-출력 (IPO) 구조"}),e.jsxs("p",{children:["모든 프로그램은 ",e.jsx("strong",{children:"입력(Input) → 처리(Process) → 출력(Output)"}),"의 세 단계로 구성됩니다."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"단계"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"파이썬 함수"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"입력 (Input)"})}),e.jsx("td",{children:"사용자로부터 데이터를 받는 단계"}),e.jsx("td",{children:e.jsx("code",{children:"input()"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"처리 (Process)"})}),e.jsx("td",{children:"데이터를 가공/계산하는 단계"}),e.jsx("td",{children:"연산, 조건, 함수 등"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"출력 (Output)"})}),e.jsx("td",{children:"결과를 화면에 보여주는 단계"}),e.jsx("td",{children:e.jsx("code",{children:"print()"})})]})]})]}),e.jsx("h2",{children:"2. PDC (Problem Definition Chart)"}),e.jsx("p",{children:"PDC는 프로그램을 작성하기 전에 문제를 정의하는 도구입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC 예시: 사각형 넓이 계산"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────┐
│        Problem Definition Chart          │
├──────────┬──────────────┬────────────────┤
│  Input   │   Process    │    Output      │
├──────────┼──────────────┼────────────────┤
│ 가로(w)  │ area = w × h │ 넓이(area)     │
│ 세로(h)  │              │                │
└──────────┴──────────────┴────────────────┘`})})]}),e.jsx("h2",{children:"3. PDC에서 코드로"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"사각형 넓이 계산 프로그램"}),e.jsx("pre",{children:e.jsx("code",{children:`# ── Input (입력) ──
width = float(input("가로 길이를 입력하세요: "))
height = float(input("세로 길이를 입력하세요: "))

# ── Process (처리) ──
area = width * height

# ── Output (출력) ──
print(f"사각형의 넓이: {area}")`})})]}),e.jsx("h2",{children:"4. 실습 예제"}),e.jsx("h3",{children:"예제 1: 온도 변환기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC → 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`# PDC:
# Input: 섭씨 온도(c)
# Process: f = c × 9/5 + 32
# Output: 화씨 온도(f)

# ── Input ──
celsius = float(input("섭씨 온도를 입력하세요: "))

# ── Process ──
fahrenheit = celsius * 9 / 5 + 32

# ── Output ──
print(f"{celsius}°C = {fahrenheit:.1f}°F")`})})]}),e.jsx("h3",{children:"예제 2: 할인 가격 계산"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC → 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`# PDC:
# Input: 원래 가격(price), 할인율(rate)
# Process: discount = price × rate / 100
#          final = price - discount
# Output: 할인 금액, 최종 가격

# ── Input ──
price = int(input("상품 가격: "))
rate = int(input("할인율(%): "))

# ── Process ──
discount = price * rate / 100
final_price = price - discount

# ── Output ──
print(f"원래 가격: {price:,}원")
print(f"할인 금액: {discount:,.0f}원")
print(f"최종 가격: {final_price:,.0f}원")`})})]}),e.jsx("h3",{children:"예제 3: 환율 계산기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"환율 계산기"}),e.jsx("pre",{children:e.jsx("code",{children:`# ── Input ──
krw = int(input("한국 원화 금액: "))
rate = float(input("환율 (1달러 = ?원): "))

# ── Process ──
usd = krw / rate

# ── Output ──
print(f"{krw:,}원 = {'$'}{usd:.2f}")`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsxs("p",{children:["다음 문제에 대해 PDC를 먼저 작성하고, 파이썬 코드로 구현하세요:",e.jsx("br",{}),'"시간(분)을 입력받아 ○시간 ○분 형태로 변환하여 출력하기"',e.jsx("br",{}),"예) 입력: 135 → 출력: 2시간 15분"]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/python/datatype",className:"lesson-nav-btn prev",children:"← 3주차: Data Type"}),e.jsx(s,{to:"/python/turtle",className:"lesson-nav-btn next",children:"5주차: Turtle →"})]})]})})})]});export{r as default};
