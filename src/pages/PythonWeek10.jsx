import { Link } from 'react-router-dom';

const PythonWeek10 = () => (
  <>
    <section className="page-header">
      <div className="container">
        <h1>10주차: Try-Except 예외처리</h1>
        <p>소프트웨어 오류와 검증, 디버깅 기법</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <h2>1. 오류의 종류</h2>
          <table className="lesson-table">
            <thead>
              <tr><th>오류 유형</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>문법 오류 (SyntaxError)</strong></td><td>코드 작성 규칙 위반</td><td><code>print("hello"</code> (괄호 누락)</td></tr>
              <tr><td><strong>런타임 오류 (RuntimeError)</strong></td><td>실행 중 발생하는 오류</td><td>0으로 나누기, 존재하지 않는 변수</td></tr>
              <tr><td><strong>논리 오류 (LogicError)</strong></td><td>결과가 예상과 다름</td><td>계산 공식이 잘못된 경우</td></tr>
            </tbody>
          </table>

          <h2>2. 주요 런타임 오류</h2>
          <div className="code-block">
            <div className="code-header">자주 발생하는 오류들</div>
            <pre><code>{`# ZeroDivisionError: 0으로 나누기
# result = 10 / 0

# ValueError: 잘못된 형변환
# num = int("hello")

# NameError: 정의되지 않은 변수
# print(undefined_var)

# TypeError: 잘못된 연산
# result = "hello" + 5

# IndexError: 범위 초과
# numbers = [1, 2, 3]
# print(numbers[5])`}</code></pre>
          </div>

          <h2>3. try-except 기본 구조</h2>
          <p>오류가 발생할 수 있는 코드를 <code>try</code> 블록에 넣고, 오류 발생 시 <code>except</code> 블록이 실행됩니다.</p>
          <div className="code-block">
            <div className="code-header">try-except 기본</div>
            <pre><code>{`try:
    num = int(input("숫자를 입력하세요: "))
    print(f"입력한 숫자: {num}")
except:
    print("숫자가 아닌 값을 입력했습니다.")`}</code></pre>
          </div>

          <h2>4. 특정 오류 처리</h2>
          <div className="code-block">
            <div className="code-header">오류 유형별 처리</div>
            <pre><code>{`try:
    a = int(input("분자: "))
    b = int(input("분모: "))
    result = a / b
    print(f"결과: {result}")
except ValueError:
    print("숫자를 입력해주세요.")
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다.")`}</code></pre>
          </div>

          <h2>5. else와 finally</h2>
          <div className="code-block">
            <div className="code-header">try-except-else-finally</div>
            <pre><code>{`try:
    num = int(input("숫자: "))
except ValueError:
    print("오류: 숫자가 아닙니다.")
else:
    # 오류가 없을 때 실행
    print(f"입력한 숫자의 제곱: {num ** 2}")
finally:
    # 오류 여부와 관계없이 항상 실행
    print("프로그램 종료")`}</code></pre>
          </div>

          <h2>6. 안전한 입력 받기</h2>
          <div className="code-block">
            <div className="code-header">반복으로 올바른 입력 받기</div>
            <pre><code>{`def safe_input(prompt):
    """올바른 정수가 입력될 때까지 반복"""
    while True:
        try:
            value = int(input(prompt))
            return value
        except ValueError:
            print("올바른 숫자를 입력해주세요.")

# 사용
age = safe_input("나이를 입력하세요: ")
print(f"입력한 나이: {age}")`}</code></pre>
          </div>

          <h2>7. 종합 실습: 안전한 계산기</h2>
          <div className="code-block">
            <div className="code-header">예외처리가 포함된 계산기</div>
            <pre><code>{`def calculator():
    try:
        a = float(input("첫 번째 수: "))
        op = input("연산자 (+, -, *, /): ")
        b = float(input("두 번째 수: "))

        if op == "+":
            result = a + b
        elif op == "-":
            result = a - b
        elif op == "*":
            result = a * b
        elif op == "/":
            result = a / b
        else:
            print("지원하지 않는 연산자입니다.")
            return

        print(f"결과: {a} {op} {b} = {result}")

    except ValueError:
        print("숫자를 올바르게 입력해주세요.")
    except ZeroDivisionError:
        print("0으로 나눌 수 없습니다.")

calculator()`}</code></pre>
          </div>

          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p>사용자로부터 점수(0~100)를 입력받아 등급을 출력하는 프로그램을 작성하세요.<br/>
            - 숫자가 아닌 입력 시 "숫자를 입력해주세요" 메시지 출력<br/>
            - 범위(0~100)를 벗어나면 "0~100 사이의 값을 입력해주세요" 메시지 출력<br/>
            - 올바른 입력이 될 때까지 반복</p>
          </div>

          <div className="lesson-nav">
            <Link to="/python/function" className="lesson-nav-btn prev">← 9주차: 함수</Link>
            <Link to="/python/list" className="lesson-nav-btn next">11주차: 리스트 →</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PythonWeek10;
