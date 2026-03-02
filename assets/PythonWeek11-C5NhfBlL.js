import{j as s,L as e}from"./index-nF71Syg7.js";const n=()=>s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{children:"11주차: 2차원, 3차원 리스트"}),s.jsx("p",{children:"다차원 리스트를 활용한 정보 모델링"})]})}),s.jsx("section",{className:"section lesson-content",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"lesson-body",children:[s.jsx("h2",{children:"1. 1차원 리스트 복습"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"리스트 기본"}),s.jsx("pre",{children:s.jsx("code",{children:`# 리스트 생성
scores = [85, 92, 78, 96, 88]

# 접근
print(scores[0])     # 85
print(scores[-1])    # 88

# 수정
scores[2] = 80

# 추가/삭제
scores.append(95)    # 끝에 추가
scores.pop(0)        # 첫 번째 삭제

# 반복문으로 순회
for s in scores:
    print(s, end=" ")

print(f"\\n평균: {sum(scores) / len(scores):.1f}")`})})]}),s.jsx("h2",{children:"2. 2차원 리스트"}),s.jsx("p",{children:"리스트 안에 리스트를 넣으면 2차원 리스트(표 형태)가 됩니다."}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"2차원 리스트 생성"}),s.jsx("pre",{children:s.jsx("code",{children:`# 3명의 학생, 각각 3과목 점수
grades = [
    [85, 90, 78],   # 학생 1
    [92, 88, 95],   # 학생 2
    [76, 82, 89]    # 학생 3
]

# 접근: grades[행][열]
print(grades[0][0])  # 85 (학생1의 1과목)
print(grades[1][2])  # 95 (학생2의 3과목)
print(grades[2][1])  # 82 (학생3의 2과목)`})})]}),s.jsx("h2",{children:"3. 2차원 리스트 순회"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"이중 반복문으로 순회"}),s.jsx("pre",{children:s.jsx("code",{children:`grades = [
    [85, 90, 78],
    [92, 88, 95],
    [76, 82, 89]
]

students = ["홍길동", "김철수", "이영희"]
subjects = ["국어", "영어", "수학"]

# 전체 출력
for i in range(len(grades)):
    print(f"{students[i]}: ", end="")
    for j in range(len(grades[i])):
        print(f"{subjects[j]}={grades[i][j]} ", end="")
    avg = sum(grades[i]) / len(grades[i])
    print(f"(평균: {avg:.1f})")`})})]}),s.jsx("h2",{children:"4. 2차원 리스트 활용"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"성적표 프로그램"}),s.jsx("pre",{children:s.jsx("code",{children:`# 성적 데이터 [이름, 국어, 영어, 수학]
students = [
    ["홍길동", 85, 90, 78],
    ["김철수", 92, 88, 95],
    ["이영희", 76, 82, 89],
    ["박민수", 88, 75, 93]
]

print("=" * 45)
print(f"{'이름':^8}{'국어':^8}{'영어':^8}{'수학':^8}{'평균':^8}")
print("=" * 45)

for s in students:
    name = s[0]
    scores = s[1:]
    avg = sum(scores) / len(scores)
    print(f"{name:^8}{s[1]:^8}{s[2]:^8}{s[3]:^8}{avg:^8.1f}")

print("=" * 45)`})})]}),s.jsx("h2",{children:"5. 3차원 리스트"}),s.jsx("p",{children:"리스트 안에 2차원 리스트를 넣으면 3차원 리스트가 됩니다. 여러 반(클래스)의 성적 관리 등에 활용합니다."}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"3차원 리스트"}),s.jsx("pre",{children:s.jsx("code",{children:`# 2개 반 × 3명 학생 × 3과목 점수
all_grades = [
    # 1반
    [
        [85, 90, 78],
        [92, 88, 95],
        [76, 82, 89]
    ],
    # 2반
    [
        [88, 75, 93],
        [91, 84, 87],
        [79, 95, 82]
    ]
]

# 접근: all_grades[반][학생][과목]
print(all_grades[0][0][0])  # 85 (1반, 학생1, 과목1)
print(all_grades[1][2][1])  # 95 (2반, 학생3, 과목2)

# 각 반의 전체 평균 구하기
for class_idx in range(len(all_grades)):
    total = 0
    count = 0
    for student in all_grades[class_idx]:
        total += sum(student)
        count += len(student)
    avg = total / count
    print(f"{class_idx + 1}반 전체 평균: {avg:.1f}")`})})]}),s.jsx("h2",{children:"6. 리스트 컴프리헨션"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"2차원 리스트를 컴프리헨션으로"}),s.jsx("pre",{children:s.jsx("code",{children:`# 3x3 행렬 생성 (모두 0)
matrix = [[0 for j in range(3)] for i in range(3)]
print(matrix)  # [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

# 구구단 표
gugu = [[i * j for j in range(1, 10)] for i in range(2, 10)]
print(f"3 x 7 = {gugu[1][6]}")  # 3 x 7 = 21`})})]}),s.jsxs("div",{className:"exercise-box",children:[s.jsx("h3",{children:"실습 과제"}),s.jsxs("p",{children:["5명 학생의 3과목 점수를 2차원 리스트로 저장하고, 다음을 출력하는 프로그램을 작성하세요:",s.jsx("br",{}),"- 각 학생의 평균",s.jsx("br",{}),"- 각 과목의 평균",s.jsx("br",{}),"- 전체 최고 점수 학생과 과목"]})]}),s.jsxs("div",{className:"lesson-nav",children:[s.jsx(e,{to:"/python/exception",className:"lesson-nav-btn prev",children:"← 10주차: Try-Except"}),s.jsx(e,{to:"/python",className:"lesson-nav-btn next",children:"목록으로 →"})]})]})})})]});export{n as default};
