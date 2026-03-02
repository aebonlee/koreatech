import { Link } from 'react-router-dom';

const PythonWeek2 = () => (
  <>
    <section className="page-header">
      <div className="container">
        <h1>2주차: 입출력과 변수</h1>
        <p>print(), input() 함수와 변수 활용</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <h2>1. print() 출력 함수</h2>
          <p><code>print()</code> 함수로 화면에 값을 출력합니다.</p>
          <div className="code-block">
            <div className="code-header">print() 다양한 사용법</div>
            <pre><code>{`# 기본 출력
print("안녕하세요!")

# 여러 값 출력 (쉼표로 구분)
print("이름:", "홍길동", "나이:", 20)

# 줄바꿈 없이 출력
print("Hello", end=" ")
print("World")  # Hello World

# 구분자 변경
print("2025", "03", "01", sep="-")  # 2025-03-01`}</code></pre>
          </div>

          <h2>2. 변수 (Variable)</h2>
          <p>변수는 데이터를 저장하는 공간입니다. 파이썬에서는 별도의 자료형 선언 없이 값을 할당하면 됩니다.</p>
          <div className="code-block">
            <div className="code-header">변수 선언 및 사용</div>
            <pre><code>{`# 변수에 값 저장
name = "홍길동"
age = 20
height = 175.5

# 변수 값 출력
print(name)    # 홍길동
print(age)     # 20

# 변수 값 변경
age = 21
print(age)     # 21`}</code></pre>
          </div>

          <h2>3. input() 입력 함수</h2>
          <p><code>input()</code> 함수로 사용자로부터 값을 입력받습니다. 입력값은 항상 <strong>문자열(str)</strong>입니다.</p>
          <div className="code-block">
            <div className="code-header">input() 사용법</div>
            <pre><code>{`# 문자열 입력
name = input("이름을 입력하세요: ")
print("안녕하세요,", name, "님!")

# 숫자 입력 (형변환 필요!)
age = int(input("나이를 입력하세요: "))
print("내년에는", age + 1, "살입니다.")`}</code></pre>
          </div>

          <h2>4. f-string (포맷 문자열)</h2>
          <p>f-string을 사용하면 변수를 문자열 안에 간편하게 넣을 수 있습니다.</p>
          <div className="code-block">
            <div className="code-header">f-string 예제</div>
            <pre><code>{`name = "홍길동"
age = 20

# f-string 사용
print(f"{name}님은 {age}세입니다.")
print(f"내년에는 {age + 1}세입니다.")

# 소수점 자릿수 지정
pi = 3.141592
print(f"원주율: {pi:.2f}")  # 원주율: 3.14`}</code></pre>
          </div>

          <h2>5. 종합 실습</h2>
          <div className="code-block">
            <div className="code-header">자기소개 프로그램</div>
            <pre><code>{`# 사용자 정보 입력
name = input("이름: ")
major = input("전공: ")
year = int(input("학년: "))

# 결과 출력
print(f"\\n=== 자기소개 ===")
print(f"이름: {name}")
print(f"전공: {major}")
print(f"학년: {year}학년")
print(f"졸업까지 {4 - year}년 남았습니다.")`}</code></pre>
          </div>

          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p>사용자로부터 키(cm)와 몸무게(kg)를 입력받아 BMI를 계산하고 결과를 출력하는 프로그램을 작성하세요.<br/>
            BMI = 몸무게(kg) / (키(m))²</p>
          </div>

          <div className="lesson-nav">
            <Link to="/python/setup" className="lesson-nav-btn prev">← 1주차: 실습환경</Link>
            <Link to="/python/datatype" className="lesson-nav-btn next">3주차: Data Type →</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PythonWeek2;
