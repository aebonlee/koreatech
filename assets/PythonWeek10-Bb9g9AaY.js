import{j as e,L as r}from"./index-nF71Syg7.js";const n=()=>e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"10주차: Try-Except 예외처리"}),e.jsx("p",{children:"소프트웨어 오류와 검증, 디버깅 기법"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. 오류의 종류"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"오류 유형"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"문법 오류 (SyntaxError)"})}),e.jsx("td",{children:"코드 작성 규칙 위반"}),e.jsxs("td",{children:[e.jsx("code",{children:'print("hello"'})," (괄호 누락)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"런타임 오류 (RuntimeError)"})}),e.jsx("td",{children:"실행 중 발생하는 오류"}),e.jsx("td",{children:"0으로 나누기, 존재하지 않는 변수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"논리 오류 (LogicError)"})}),e.jsx("td",{children:"결과가 예상과 다름"}),e.jsx("td",{children:"계산 공식이 잘못된 경우"})]})]})]}),e.jsx("h2",{children:"2. 주요 런타임 오류"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"자주 발생하는 오류들"}),e.jsx("pre",{children:e.jsx("code",{children:`# ZeroDivisionError: 0으로 나누기
# result = 10 / 0

# ValueError: 잘못된 형변환
# num = int("hello")

# NameError: 정의되지 않은 변수
# print(undefined_var)

# TypeError: 잘못된 연산
# result = "hello" + 5

# IndexError: 범위 초과
# numbers = [1, 2, 3]
# print(numbers[5])`})})]}),e.jsx("h2",{children:"3. try-except 기본 구조"}),e.jsxs("p",{children:["오류가 발생할 수 있는 코드를 ",e.jsx("code",{children:"try"})," 블록에 넣고, 오류 발생 시 ",e.jsx("code",{children:"except"})," 블록이 실행됩니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"try-except 기본"}),e.jsx("pre",{children:e.jsx("code",{children:`try:
    num = int(input("숫자를 입력하세요: "))
    print(f"입력한 숫자: {num}")
except:
    print("숫자가 아닌 값을 입력했습니다.")`})})]}),e.jsx("h2",{children:"4. 특정 오류 처리"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"오류 유형별 처리"}),e.jsx("pre",{children:e.jsx("code",{children:`try:
    a = int(input("분자: "))
    b = int(input("분모: "))
    result = a / b
    print(f"결과: {result}")
except ValueError:
    print("숫자를 입력해주세요.")
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다.")`})})]}),e.jsx("h2",{children:"5. else와 finally"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"try-except-else-finally"}),e.jsx("pre",{children:e.jsx("code",{children:`try:
    num = int(input("숫자: "))
except ValueError:
    print("오류: 숫자가 아닙니다.")
else:
    # 오류가 없을 때 실행
    print(f"입력한 숫자의 제곱: {num ** 2}")
finally:
    # 오류 여부와 관계없이 항상 실행
    print("프로그램 종료")`})})]}),e.jsx("h2",{children:"6. 안전한 입력 받기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"반복으로 올바른 입력 받기"}),e.jsx("pre",{children:e.jsx("code",{children:`def safe_input(prompt):
    """올바른 정수가 입력될 때까지 반복"""
    while True:
        try:
            value = int(input(prompt))
            return value
        except ValueError:
            print("올바른 숫자를 입력해주세요.")

# 사용
age = safe_input("나이를 입력하세요: ")
print(f"입력한 나이: {age}")`})})]}),e.jsx("h2",{children:"7. 종합 실습: 안전한 계산기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"예외처리가 포함된 계산기"}),e.jsx("pre",{children:e.jsx("code",{children:`def calculator():
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

calculator()`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsxs("p",{children:["사용자로부터 점수(0~100)를 입력받아 등급을 출력하는 프로그램을 작성하세요.",e.jsx("br",{}),'- 숫자가 아닌 입력 시 "숫자를 입력해주세요" 메시지 출력',e.jsx("br",{}),'- 범위(0~100)를 벗어나면 "0~100 사이의 값을 입력해주세요" 메시지 출력',e.jsx("br",{}),"- 올바른 입력이 될 때까지 반복"]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(r,{to:"/python/function",className:"lesson-nav-btn prev",children:"← 9주차: 함수"}),e.jsx(r,{to:"/python/list",className:"lesson-nav-btn next",children:"11주차: 리스트 →"})]})]})})})]});export{n as default};
