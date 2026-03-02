import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const PythonBasics = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title={t('site.python.basics.title')} path="/python/basics" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.python.basics.title')}</h1>
          <p>{t('site.python.basics.desc')}</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 파이썬이란?</h2>
            <p>
              파이썬(Python)은 1991년 귀도 반 로섬(Guido van Rossum)이 만든 프로그래밍 언어입니다.
              문법이 간결하고 읽기 쉬워 프로그래밍 입문자에게 적합합니다.
            </p>
            <ul>
              <li>간결하고 직관적인 문법</li>
              <li>다양한 라이브러리 생태계</li>
              <li>웹, 데이터 분석, AI 등 폭넓은 활용 분야</li>
            </ul>

            <h2>2. 파이썬 설치</h2>
            <p>
              <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python.org</a>에서
              최신 버전을 다운로드하여 설치합니다. 설치 시 <strong>"Add Python to PATH"</strong>를 반드시 체크하세요.
            </p>
            <div className="code-block">
              <div className="code-header">터미널에서 버전 확인</div>
              <pre><code>python --version{'\n'}# Python 3.12.x</code></pre>
            </div>

            <h2>3. 변수 (Variable)</h2>
            <p>변수는 데이터를 저장하는 공간입니다. 파이썬에서는 별도의 자료형 선언 없이 값을 할당하면 됩니다.</p>
            <div className="code-block">
              <div className="code-header">변수 선언 예제</div>
              <pre><code>{`# 변수 선언
name = "홍길동"
age = 20
height = 175.5
is_student = True

print(name)      # 홍길동
print(age)       # 20
print(height)    # 175.5
print(is_student)  # True`}</code></pre>
            </div>

            <h2>4. 자료형 (Data Types)</h2>
            <p>파이썬의 기본 자료형은 다음과 같습니다:</p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>자료형</th>
                  <th>설명</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>int</code></td><td>정수</td><td><code>10, -3, 0</code></td></tr>
                <tr><td><code>float</code></td><td>실수 (소수점)</td><td><code>3.14, -0.5</code></td></tr>
                <tr><td><code>str</code></td><td>문자열</td><td><code>"hello", '파이썬'</code></td></tr>
                <tr><td><code>bool</code></td><td>논리값</td><td><code>True, False</code></td></tr>
              </tbody>
            </table>

            <div className="code-block">
              <div className="code-header">자료형 확인</div>
              <pre><code>{`x = 42
print(type(x))   # <class 'int'>

y = "Hello"
print(type(y))   # <class 'str'>

z = 3.14
print(type(z))   # <class 'float'>`}</code></pre>
            </div>

            <h2>5. 입출력 (Input / Output)</h2>
            <p><code>print()</code> 함수로 값을 출력하고, <code>input()</code> 함수로 사용자 입력을 받습니다.</p>
            <div className="code-block">
              <div className="code-header">입출력 예제</div>
              <pre><code>{`# 출력
print("안녕하세요!")
print("이름:", "홍길동", "나이:", 20)

# f-string (포맷 문자열)
name = "홍길동"
age = 20
print(f"{name}님은 {age}세입니다.")

# 입력
user_name = input("이름을 입력하세요: ")
print(f"안녕하세요, {user_name}님!")

# 숫자 입력 (형변환 필요)
num = int(input("숫자를 입력하세요: "))
print(f"입력한 숫자의 2배: {num * 2}")`}</code></pre>
            </div>

            <h2>6. 연산자</h2>
            <div className="code-block">
              <div className="code-header">산술 연산자</div>
              <pre><code>{`a = 10
b = 3

print(a + b)   # 13 (덧셈)
print(a - b)   # 7  (뺄셈)
print(a * b)   # 30 (곱셈)
print(a / b)   # 3.333... (나눗셈)
print(a // b)  # 3  (몫)
print(a % b)   # 1  (나머지)
print(a ** b)  # 1000 (거듭제곱)`}</code></pre>
            </div>

            <div className="lesson-nav">
              <Link to="/python" className="lesson-nav-btn prev">← 목록으로</Link>
              <Link to="/python/control" className="lesson-nav-btn next">제어문 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PythonBasics;
