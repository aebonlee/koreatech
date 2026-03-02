import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const PythonControl = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title={t('site.python.control.title')} path="/python/control" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.python.control.title')}</h1>
          <p>{t('site.python.control.desc')}</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 조건문 (if / elif / else)</h2>
            <p>조건문은 주어진 조건에 따라 다른 코드를 실행합니다. 파이썬은 들여쓰기(indentation)로 블록을 구분합니다.</p>
            <div className="code-block">
              <div className="code-header">if문 기본 구조</div>
              <pre><code>{`score = 85

if score >= 90:
    print("A학점")
elif score >= 80:
    print("B학점")
elif score >= 70:
    print("C학점")
else:
    print("F학점")

# 출력: B학점`}</code></pre>
            </div>

            <div className="code-block">
              <div className="code-header">조건 표현식 (삼항 연산자)</div>
              <pre><code>{`age = 20
status = "성인" if age >= 18 else "미성년자"
print(status)  # 성인`}</code></pre>
            </div>

            <h2>2. 논리 연산자</h2>
            <div className="code-block">
              <div className="code-header">and, or, not</div>
              <pre><code>{`x = 10

# and: 둘 다 참이면 True
print(x > 5 and x < 20)  # True

# or: 하나라도 참이면 True
print(x < 5 or x > 8)    # True

# not: 반대
print(not (x > 5))        # False`}</code></pre>
            </div>

            <h2>3. for 반복문</h2>
            <p><code>for</code>문은 시퀀스(리스트, 문자열, range 등)를 순회하며 반복합니다.</p>
            <div className="code-block">
              <div className="code-header">for문 예제</div>
              <pre><code>{`# range() 사용
for i in range(5):
    print(i, end=" ")
# 출력: 0 1 2 3 4

print()

# 리스트 순회
fruits = ["사과", "바나나", "딸기"]
for fruit in fruits:
    print(f"과일: {fruit}")

# 문자열 순회
for ch in "Python":
    print(ch, end="-")
# 출력: P-y-t-h-o-n-`}</code></pre>
            </div>

            <div className="code-block">
              <div className="code-header">중첩 반복문 - 구구단</div>
              <pre><code>{`for dan in range(2, 10):
    print(f"--- {dan}단 ---")
    for i in range(1, 10):
        print(f"{dan} x {i} = {dan * i}")
    print()`}</code></pre>
            </div>

            <h2>4. while 반복문</h2>
            <p><code>while</code>문은 조건이 참인 동안 계속 반복합니다.</p>
            <div className="code-block">
              <div className="code-header">while문 예제</div>
              <pre><code>{`count = 0
while count < 5:
    print(f"count: {count}")
    count += 1

# 사용자 입력 반복
while True:
    text = input("입력 (q=종료): ")
    if text == "q":
        break
    print(f"입력값: {text}")`}</code></pre>
            </div>

            <h2>5. break / continue</h2>
            <div className="code-block">
              <div className="code-header">break와 continue</div>
              <pre><code>{`# break: 반복 즉시 종료
for i in range(10):
    if i == 5:
        break
    print(i, end=" ")
# 출력: 0 1 2 3 4

print()

# continue: 현재 반복 건너뛰기
for i in range(10):
    if i % 2 == 0:
        continue
    print(i, end=" ")
# 출력: 1 3 5 7 9`}</code></pre>
            </div>

            <h2>6. 연습 문제</h2>
            <div className="exercise-box">
              <h3>문제 1: 짝수/홀수 판별</h3>
              <p>사용자로부터 숫자를 입력받아 짝수인지 홀수인지 출력하는 프로그램을 작성하세요.</p>
            </div>
            <div className="exercise-box">
              <h3>문제 2: 1부터 N까지 합</h3>
              <p>사용자로부터 N을 입력받아 1부터 N까지의 합을 구하는 프로그램을 작성하세요.</p>
            </div>

            <div className="lesson-nav">
              <Link to="/python/basics" className="lesson-nav-btn prev">← 파이썬 기초</Link>
              <Link to="/python/functions" className="lesson-nav-btn next">함수 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PythonControl;
