import{u as r,j as e,L as n}from"./index-CVH9E57l.js";import{S as d}from"./SEOHead-l83Q9VQH.js";const l=()=>{const{t:s}=r();return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:s("site.python.data.title"),path:"/python/data"}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:s("site.python.data.title")}),e.jsx("p",{children:s("site.python.data.desc")})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. 리스트 (List)"}),e.jsxs("p",{children:["리스트는 여러 값을 순서대로 저장하는 자료구조입니다. 대괄호 ",e.jsx("code",{children:"[]"}),"를 사용합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"리스트 기본"}),e.jsx("pre",{children:e.jsx("code",{children:`# 리스트 생성
fruits = ["사과", "바나나", "딸기"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

# 인덱싱
print(fruits[0])   # 사과
print(fruits[-1])  # 딸기

# 슬라이싱
print(numbers[1:4])  # [2, 3, 4]
print(numbers[:3])   # [1, 2, 3]
print(numbers[::2])  # [1, 3, 5]`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"리스트 메서드"}),e.jsx("pre",{children:e.jsx("code",{children:`fruits = ["사과", "바나나"]

fruits.append("딸기")       # 끝에 추가
fruits.insert(1, "포도")    # 특정 위치에 삽입
fruits.remove("바나나")     # 값으로 삭제
popped = fruits.pop()       # 마지막 항목 꺼내기

print(fruits)   # ['사과', '포도']
print(popped)   # 딸기

numbers = [3, 1, 4, 1, 5, 9]
numbers.sort()              # 정렬 (원본 변경)
print(numbers)  # [1, 1, 3, 4, 5, 9]

print(len(numbers))  # 6 (길이)`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"리스트 컴프리헨션"}),e.jsx("pre",{children:e.jsx("code",{children:`# 기본
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# 조건 포함
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]`})})]}),e.jsx("h2",{children:"2. 튜플 (Tuple)"}),e.jsxs("p",{children:["튜플은 리스트와 비슷하지만 ",e.jsx("strong",{children:"변경할 수 없는(immutable)"})," 자료구조입니다. 소괄호 ",e.jsx("code",{children:"()"}),"를 사용합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"튜플 사용"}),e.jsx("pre",{children:e.jsx("code",{children:`# 튜플 생성
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
print(name, age)  # 홍길동 25`})})]}),e.jsx("h2",{children:"3. 딕셔너리 (Dictionary)"}),e.jsxs("p",{children:["딕셔너리는 ",e.jsx("strong",{children:"키-값 쌍"}),"으로 데이터를 저장합니다. 중괄호 ",e.jsx("code",{children:"{}"}),"를 사용합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"딕셔너리 기본"}),e.jsx("pre",{children:e.jsx("code",{children:`# 딕셔너리 생성
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
    print(f"{key}: {value}")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"딕셔너리 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`# 딕셔너리 컴프리헨션
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# 단어 빈도수 세기
text = "apple banana apple cherry banana apple"
word_count = {}
for word in text.split():
    word_count[word] = word_count.get(word, 0) + 1
print(word_count)
# {'apple': 3, 'banana': 2, 'cherry': 1}`})})]}),e.jsx("h2",{children:"4. 집합 (Set)"}),e.jsxs("p",{children:["집합은 ",e.jsx("strong",{children:"중복을 허용하지 않는"})," 자료구조입니다. 수학의 집합 연산을 지원합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"집합 연산"}),e.jsx("pre",{children:e.jsx("code",{children:`# 집합 생성
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
print(a)       # {2, 3, 4, 5, 6}`})})]}),e.jsx("h2",{children:"5. 자료구조 비교"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"자료구조"}),e.jsx("th",{children:"기호"}),e.jsx("th",{children:"순서"}),e.jsx("th",{children:"변경"}),e.jsx("th",{children:"중복"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"리스트"}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"튜플"}),e.jsx("td",{children:e.jsx("code",{children:"()"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"딕셔너리"}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"O (3.7+)"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"키 X"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"집합"}),e.jsx("td",{children:e.jsx("code",{children:"{}"})}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"X"})]})]})]}),e.jsx("h2",{children:"6. 연습 문제"}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"문제 1: 성적 관리"}),e.jsx("p",{children:"학생 이름과 점수를 딕셔너리로 관리하고, 평균 점수와 최고 점수 학생을 출력하세요."})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"문제 2: 중복 제거 및 정렬"}),e.jsx("p",{children:"리스트에서 중복을 제거하고 오름차순으로 정렬하는 함수를 작성하세요."})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(n,{to:"/python/functions",className:"lesson-nav-btn prev",children:"← 함수"}),e.jsx(n,{to:"/python",className:"lesson-nav-btn next",children:"목록으로 →"})]})]})})})]})};export{l as default};
