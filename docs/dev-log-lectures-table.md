# 주차별 강의안 — 카드 그리드 → 목록형 게시판 전환

## Context

현재 `/lectures` 페이지(Lectures.jsx)는 카드 그리드 레이아웃으로 시각적이지만, 주차별 자료를 빠르게 탐색하기에 불편함. Board.jsx처럼 **목록형 테이블** 레이아웃으로 전환하여, 주차별 별도 자료 제공용 게시판으로 활용 가능하게 변경.

## 변경 사항

### 1. `src/pages/Lectures.jsx` — 카드 그리드 → 테이블 레이아웃

Board.jsx의 `.board-table` 패턴을 참고하여 변경:

**Before:** `.lecture-grid` > `.lecture-card` (카드 이미지+본문)
**After:** `.board-table-wrapper` > `table.board-table` (목록 테이블)

**테이블 컬럼:**
| 컬럼 | 내용 |
|------|------|
| 주차 | `lecture-week-badge` (Week N) |
| 제목 | 클릭 시 → `/lectures/:id` 상세 이동 |
| 설명 | description (짧게, 모바일 숨김) |
| 등록일 | created_at |
| 조회수 | views |

- 기존 `.board-table` CSS 그대로 재활용 (동일 클래스명)
- 관리자 "강의안 등록" 버튼 유지
- 로딩/빈 상태 유지

### 2. `src/styles/site.css` — 소량 추가

- `.lecture-col-week` (주차 컬럼 80px)
- `.lecture-col-desc` (설명 — 모바일 숨김)
- `.lecture-col-views` (조회수 60px, 중앙 정렬)

### 3. `src/utils/translations.js` — 번역 키 2개 추가

- `site.lectures.date` (ko: '등록일', en: 'Date')
- `site.lectures.descriptionCol` (ko: '설명', en: 'Description')

## 수정 파일

| 파일 | 변경 |
|------|------|
| `src/pages/Lectures.jsx` | 카드 그리드 → 테이블 목록 전환 |
| `src/styles/site.css` | 강의 테이블 컬럼 너비 스타일 3개 추가 |
| `src/utils/translations.js` | 번역 키 2개 추가 |

## 변경하지 않는 것

- LectureDetail.jsx, LectureWrite.jsx — 기존 유지
- Board.jsx — 영향 없음
- Supabase 함수 — 변경 없음

## 검증

1. `/lectures` 접속 → 목록형 테이블 표시 확인
2. 제목 클릭 → `/lectures/:id` 상세 페이지 이동 확인
3. 관리자 "강의안 등록" 버튼 정상 작동
4. 다크모드/반응형 확인
5. `npm run build` 성공
