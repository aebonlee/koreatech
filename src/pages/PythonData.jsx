import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const PythonData = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title={t('site.python.data.title')} path="/python/data" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.python.data.title')}</h1>
          <p>{t('site.python.data.desc')}</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 리스트 (List)</h2>
            <p>리스트는 여러 값을 순서대로 저장하는 자료구조입니다. 대괄호 <code>[]</code>를 사용합니다.</p>
            <div className="code-block">
              <div className="code-header">리스트 기본</div>
              <pre><code>{`# 리스트 생성
fruits = ["사과", "바나나", "딸기"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

# 인덱싱
print(fruits[0])   # 사과
print(fruits[-1])  # 딸기

# 슬라이싱
print(numbers[1:4])  # [2, 3, 4]
print(numbers[:3])   # [1, 2, 3]
print(numbers[::2])  # [1, 3, 5]`}</code></pre>
            </div>

            <div className="code-block">
              <div className="code-header">리스트 메서드</div>
              <pre><code>{`fruits = ["사과", "바나나"]

fruits.append("딸기")       # 끝에 추가
fruits.insert(1, "포도")    # 특정 위치에 삽입
fruits.remove("바나나")     # 값으로 삭제
popped = fruits.pop()       # 마지막 항목 꺼내기

print(fruits)   # ['사과', '포도']
print(popped)   # 딸기

numbers = [3, 1, 4, 1, 5, 9]
numbers.sort()              # 정렬 (원본 변경)
print(numbers)  # [1, 1, 3, 4, 5, 9]

print(len(numbers))  # 6 (길이)`}</code></pre>
            </div>

            <div className="code-block">
              <div className="code-header">리스트 컴프리헨션</div>
              <pre><code>{`# 기본
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# 조건 포함
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]`}</code></pre>
            </div>

            <h2>2. 튜플 (Tuple)</h2>
            <p>튜플은 리스트와 비슷하지만 <strong>변경할 수 없는(immutable)</strong> 자료구조입니다. 소괄호 <code>()</code>를 사용합니다.</p>
            <div className="code-block">
              <div className="code-header">튜플 사용</div>
              <pre><code>{`# 튜플 생성
point = (3, 4)
colors = ("red", "green", "blue")

# 인덱싱
print(point[0])  # 3

# 언패킹
x, y = point
print(f"x={x}, y={y}")  # x=3, y=4

# 튜플은 변경 불가
# point[0] = 5  # TypeError!

# 함수에서 여러 값 반환 시 활용
def get_info():
    return "홍길동", 25

name, age = get_info()
print(name, age)  # 홍길동 25`}</code></pre>
            </div>

            <h2>3. 딕셔너리 (Dictionary)</h2>
            <p>딕셔너리는 <strong>키-값 쌍</strong>으로 데이터를 저장합니다. 중괄호 <code>{'{}'}</code>를 사용합니다.</p>
            <div className="code-block">
              <div className="code-header">딕셔너리 기본</div>
              <pre><code>{`# 딕셔너리 생성
student = {
    "name": "홍길동",
    "age": 20,
    "major": "컴퓨터공학"
}

# 값 접근
print(student["name"])        # 홍길동
print(student.get("grade", "없음"))  # 없음 (기본값)

# 값 수정/추가
student["age"] = 21
student["gpa"] = 4.0

# 삭제
del student["gpa"]

# 순회
for key, value in student.items():
    print(f"{key}: {value}")`}</code></pre>
            </div>

            <div className="code-block">
              <div className="code-header">딕셔너리 활용</div>
              <pre><code>{`# 딕셔너리 컴프리헨션
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# 단어 빈도수 세기
text = "apple banana apple cherry banana apple"
word_count = {}
for word in text.split():
    word_count[word] = word_count.get(word, 0) + 1
print(word_count)
# {'apple': 3, 'banana': 2, 'cherry': 1}`}</code></pre>
            </div>

            <h2>4. 집합 (Set)</h2>
            <p>집합은 <strong>중복을 허용하지 않는</strong> 자료구조입니다. 수학의 집합 연산을 지원합니다.</p>
            <div className="code-block">
              <div className="code-header">집합 연산</div>
              <pre><code>{`# 집합 생성
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

# 중복 제거
nums = [1, 2, 2, 3, 3, 3]
unique = set(nums)
print(unique)  # {1, 2, 3}

# 집합 연산
print(a & b)   # {4, 5}     교집합
print(a | b)   # {1,2,3,4,5,6,7,8}  합집합
print(a - b)   # {1, 2, 3}  차집합

# 메서드
a.add(6)       # 추가
a.discard(1)   # 삭제 (없어도 에러 없음)
print(a)       # {2, 3, 4, 5, 6}`}</code></pre>
            </div>

            <h2>5. 자료구조 비교</h2>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>자료구조</th>
                  <th>기호</th>
                  <th>순서</th>
                  <th>변경</th>
                  <th>중복</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>리스트</td><td><code>[]</code></td><td>O</td><td>O</td><td>O</td></tr>
                <tr><td>튜플</td><td><code>()</code></td><td>O</td><td>X</td><td>O</td></tr>
                <tr><td>딕셔너리</td><td><code>{'{}'}</code></td><td>O (3.7+)</td><td>O</td><td>키 X</td></tr>
                <tr><td>집합</td><td><code>{'{}'}</code></td><td>X</td><td>O</td><td>X</td></tr>
              </tbody>
            </table>

            <h2>6. 연습 문제</h2>
            <div className="exercise-box">
              <h3>문제 1: 성적 관리</h3>
              <p>학생 이름과 점수를 딕셔너리로 관리하고, 평균 점수와 최고 점수 학생을 출력하세요.</p>
            </div>
            <div className="exercise-box">
              <h3>문제 2: 중복 제거 및 정렬</h3>
              <p>리스트에서 중복을 제거하고 오름차순으로 정렬하는 함수를 작성하세요.</p>
            </div>

            <div className="lesson-nav">
              <Link to="/python/functions" className="lesson-nav-btn prev">← 함수</Link>
              <Link to="/python" className="lesson-nav-btn next">목록으로 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PythonData;
