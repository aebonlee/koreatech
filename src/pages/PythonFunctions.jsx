import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const PythonFunctions = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title={t('site.python.functions.title')} path="/python/functions" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.python.functions.title')}</h1>
          <p>{t('site.python.functions.desc')}</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 함수 정의 (def)</h2>
            <p>함수는 특정 작업을 수행하는 코드 블록입니다. <code>def</code> 키워드로 정의합니다.</p>
            <div className="code-block">
              <div className="code-header">기본 함수</div>
              <pre><code>{`def greet():
    print("안녕하세요!")

greet()  # 안녕하세요!

# 매개변수가 있는 함수
def greet_name(name):
    print(f"안녕하세요, {name}님!")

greet_name("홍길동")  # 안녕하세요, 홍길동님!`}</code></pre>
            </div>

            <h2>2. 매개변수와 인자</h2>
            <div className="code-block">
              <div className="code-header">다양한 매개변수</div>
              <pre><code>{`# 기본값 매개변수
def power(base, exp=2):
    return base ** exp

print(power(3))     # 9  (exp=2 기본값)
print(power(3, 3))  # 27

# 키워드 인자
def info(name, age, city="서울"):
    print(f"{name}, {age}세, {city}")

info("홍길동", 25)
info(age=30, name="김철수", city="부산")

# 가변 인자 (*args)
def total(*numbers):
    return sum(numbers)

print(total(1, 2, 3, 4, 5))  # 15

# 키워드 가변 인자 (**kwargs)
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="홍길동", age=20, major="컴퓨터공학")`}</code></pre>
            </div>

            <h2>3. 반환값 (return)</h2>
            <div className="code-block">
              <div className="code-header">return문</div>
              <pre><code>{`def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # 8

# 여러 값 반환 (튜플)
def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(f"최소: {lo}, 최대: {hi}")  # 최소: 1, 최대: 9`}</code></pre>
            </div>

            <h2>4. 람다 함수 (lambda)</h2>
            <p>람다 함수는 간단한 한 줄짜리 함수를 만들 때 사용합니다.</p>
            <div className="code-block">
              <div className="code-header">lambda 예제</div>
              <pre><code>{`# 일반 함수
def square(x):
    return x ** 2

# 람다로 동일하게
square_lambda = lambda x: x ** 2

print(square(5))        # 25
print(square_lambda(5))  # 25

# sorted와 함께 사용
students = [("홍길동", 85), ("김철수", 92), ("이영희", 78)]
students_sorted = sorted(students, key=lambda s: s[1], reverse=True)
print(students_sorted)
# [('김철수', 92), ('홍길동', 85), ('이영희', 78)]`}</code></pre>
            </div>

            <h2>5. 변수의 스코프 (Scope)</h2>
            <div className="code-block">
              <div className="code-header">지역 변수와 전역 변수</div>
              <pre><code>{`x = 10  # 전역 변수

def my_func():
    x = 20  # 지역 변수 (전역 x와 별개)
    print(f"함수 내부: {x}")  # 20

my_func()
print(f"함수 외부: {x}")  # 10

# global 키워드
def change_global():
    global x
    x = 99

change_global()
print(f"변경 후: {x}")  # 99`}</code></pre>
            </div>

            <h2>6. 연습 문제</h2>
            <div className="exercise-box">
              <h3>문제 1: 팩토리얼 함수</h3>
              <p><code>factorial(n)</code> 함수를 작성하여 n!을 계산하세요. (재귀와 반복 두 가지 방법으로 구현)</p>
            </div>
            <div className="exercise-box">
              <h3>문제 2: 소수 판별 함수</h3>
              <p><code>is_prime(n)</code> 함수를 작성하여 n이 소수인지 판별하세요.</p>
            </div>

            <div className="lesson-nav">
              <Link to="/python/control" className="lesson-nav-btn prev">← 제어문</Link>
              <Link to="/python/data" className="lesson-nav-btn next">자료구조 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PythonFunctions;
