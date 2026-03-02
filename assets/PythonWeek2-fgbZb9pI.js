import{j as e,L as s}from"./index-nF71Syg7.js";const i=()=>e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"2주차: 입출력과 변수"}),e.jsx("p",{children:"print(), input() 함수와 변수 활용"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. print() 출력 함수"}),e.jsxs("p",{children:[e.jsx("code",{children:"print()"})," 함수로 화면에 값을 출력합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"print() 다양한 사용법"}),e.jsx("pre",{children:e.jsx("code",{children:`# 기본 출력
print("안녕하세요!")

# 여러 값 출력 (쉼표로 구분)
print("이름:", "홍길동", "나이:", 20)

# 줄바꿈 없이 출력
print("Hello", end=" ")
print("World")  # Hello World

# 구분자 변경
print("2025", "03", "01", sep="-")  # 2025-03-01`})})]}),e.jsx("h2",{children:"2. 변수 (Variable)"}),e.jsx("p",{children:"변수는 데이터를 저장하는 공간입니다. 파이썬에서는 별도의 자료형 선언 없이 값을 할당하면 됩니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"변수 선언 및 사용"}),e.jsx("pre",{children:e.jsx("code",{children:`# 변수에 값 저장
name = "홍길동"
age = 20
height = 175.5

# 변수 값 출력
print(name)    # 홍길동
print(age)     # 20

# 변수 값 변경
age = 21
print(age)     # 21`})})]}),e.jsx("h2",{children:"3. input() 입력 함수"}),e.jsxs("p",{children:[e.jsx("code",{children:"input()"})," 함수로 사용자로부터 값을 입력받습니다. 입력값은 항상 ",e.jsx("strong",{children:"문자열(str)"}),"입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"input() 사용법"}),e.jsx("pre",{children:e.jsx("code",{children:`# 문자열 입력
name = input("이름을 입력하세요: ")
print("안녕하세요,", name, "님!")

# 숫자 입력 (형변환 필요!)
age = int(input("나이를 입력하세요: "))
print("내년에는", age + 1, "살입니다.")`})})]}),e.jsx("h2",{children:"4. f-string (포맷 문자열)"}),e.jsx("p",{children:"f-string을 사용하면 변수를 문자열 안에 간편하게 넣을 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"f-string 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`name = "홍길동"
age = 20

# f-string 사용
print(f"{name}님은 {age}세입니다.")
print(f"내년에는 {age + 1}세입니다.")

# 소수점 자릿수 지정
pi = 3.141592
print(f"원주율: {pi:.2f}")  # 원주율: 3.14`})})]}),e.jsx("h2",{children:"5. 종합 실습"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"자기소개 프로그램"}),e.jsx("pre",{children:e.jsx("code",{children:`# 사용자 정보 입력
name = input("이름: ")
major = input("전공: ")
year = int(input("학년: "))

# 결과 출력
print(f"\\n=== 자기소개 ===")
print(f"이름: {name}")
print(f"전공: {major}")
print(f"학년: {year}학년")
print(f"졸업까지 {4 - year}년 남았습니다.")`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsxs("p",{children:["사용자로부터 키(cm)와 몸무게(kg)를 입력받아 BMI를 계산하고 결과를 출력하는 프로그램을 작성하세요.",e.jsx("br",{}),"BMI = 몸무게(kg) / (키(m))²"]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/python/setup",className:"lesson-nav-btn prev",children:"← 1주차: 실습환경"}),e.jsx(s,{to:"/python/datatype",className:"lesson-nav-btn next",children:"3주차: Data Type →"})]})]})})})]});export{i as default};
