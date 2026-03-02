import { Link } from 'react-router-dom';

const PythonWeek4 = () => (
  <>
    <section className="page-header">
      <div className="container">
        <h1>4주차: 입력-처리-출력 개념</h1>
        <p>PDC(Problem Definition Chart) 작성과 프로그램 설계</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <h2>1. 입력-처리-출력 (IPO) 구조</h2>
          <p>모든 프로그램은 <strong>입력(Input) → 처리(Process) → 출력(Output)</strong>의 세 단계로 구성됩니다.</p>
          <table className="lesson-table">
            <thead>
              <tr><th>단계</th><th>설명</th><th>파이썬 함수</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>입력 (Input)</strong></td><td>사용자로부터 데이터를 받는 단계</td><td><code>input()</code></td></tr>
              <tr><td><strong>처리 (Process)</strong></td><td>데이터를 가공/계산하는 단계</td><td>연산, 조건, 함수 등</td></tr>
              <tr><td><strong>출력 (Output)</strong></td><td>결과를 화면에 보여주는 단계</td><td><code>print()</code></td></tr>
            </tbody>
          </table>

          <h2>2. PDC (Problem Definition Chart)</h2>
          <p>PDC는 프로그램을 작성하기 전에 문제를 정의하는 도구입니다.</p>
          <div className="code-block">
            <div className="code-header">PDC 예시: 사각형 넓이 계산</div>
            <pre><code>{`┌──────────────────────────────────────────┐
│        Problem Definition Chart          │
├──────────┬──────────────┬────────────────┤
│  Input   │   Process    │    Output      │
├──────────┼──────────────┼────────────────┤
│ 가로(w)  │ area = w × h │ 넓이(area)     │
│ 세로(h)  │              │                │
└──────────┴──────────────┴────────────────┘`}</code></pre>
          </div>

          <h2>3. PDC에서 코드로</h2>
          <div className="code-block">
            <div className="code-header">사각형 넓이 계산 프로그램</div>
            <pre><code>{`# ── Input (입력) ──
width = float(input("가로 길이를 입력하세요: "))
height = float(input("세로 길이를 입력하세요: "))

# ── Process (처리) ──
area = width * height

# ── Output (출력) ──
print(f"사각형의 넓이: {area}")`}</code></pre>
          </div>

          <h2>4. 실습 예제</h2>

          <h3>예제 1: 온도 변환기</h3>
          <div className="code-block">
            <div className="code-header">PDC → 코드</div>
            <pre><code>{`# PDC:
# Input: 섭씨 온도(c)
# Process: f = c × 9/5 + 32
# Output: 화씨 온도(f)

# ── Input ──
celsius = float(input("섭씨 온도를 입력하세요: "))

# ── Process ──
fahrenheit = celsius * 9 / 5 + 32

# ── Output ──
print(f"{celsius}°C = {fahrenheit:.1f}°F")`}</code></pre>
          </div>

          <h3>예제 2: 할인 가격 계산</h3>
          <div className="code-block">
            <div className="code-header">PDC → 코드</div>
            <pre><code>{`# PDC:
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
print(f"최종 가격: {final_price:,.0f}원")`}</code></pre>
          </div>

          <h3>예제 3: 환율 계산기</h3>
          <div className="code-block">
            <div className="code-header">환율 계산기</div>
            <pre><code>{`# ── Input ──
krw = int(input("한국 원화 금액: "))
rate = float(input("환율 (1달러 = ?원): "))

# ── Process ──
usd = krw / rate

# ── Output ──
print(f"{krw:,}원 = {'$'}{usd:.2f}")`}</code></pre>
          </div>

          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p>다음 문제에 대해 PDC를 먼저 작성하고, 파이썬 코드로 구현하세요:<br/>
            "시간(분)을 입력받아 ○시간 ○분 형태로 변환하여 출력하기"<br/>
            예) 입력: 135 → 출력: 2시간 15분</p>
          </div>

          <div className="lesson-nav">
            <Link to="/python/datatype" className="lesson-nav-btn prev">← 3주차: Data Type</Link>
            <Link to="/python/turtle" className="lesson-nav-btn next">5주차: Turtle →</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PythonWeek4;
