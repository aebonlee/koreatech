# 강의자료 PDF 다운로드/뷰어 페이지 구현 계획

## Context

PDF 파일(week01~12.pdf, 총 ~28MB)이 `pdf/` 폴더에 있지만, Vite가 정적 파일로 서빙하는 `public/pdf/`에는 `.gitkeep`만 존재. 배포 시 PDF가 포함되지 않아 `/pdf/week01.pdf` 접근 시 404 발생. 사용자가 원하는 것: **강의안 목록 페이지 + PDF 바로 보기 + 다운로드**.

## 구현 계획

### 1. PDF 파일 이동 (`pdf/` → `public/pdf/`)

- `pdf/*.pdf` 12개 파일을 `public/pdf/`로 이동 (기존 `.gitkeep` 제거)
- Vite 빌드 시 `public/` 하위 파일이 `dist/`로 복사되므로 배포 시 자동 포함
- 기존 `pdf/` 폴더 삭제

### 2. 신규 페이지: `src/pages/LectureMaterials.jsx` (`/lectures/materials`)

강의자료를 목록화하여 바로 다운로드 + 웹 뷰어로 열 수 있는 전용 페이지.

**구성:**
- page-header: "강의자료 다운로드"
- 12주차 PDF 목록 테이블 (주차 | 제목 | 파일크기 | 보기 | 다운로드)
- "보기" 클릭 시 → 같은 페이지 하단에 `<iframe>`으로 PDF 임베드 뷰어 표시
- "다운로드" 클릭 시 → `<a download>` 속성으로 직접 다운로드
- "새 탭" 버튼 → 브라우저 내장 PDF 뷰어로 열기

**데이터:** Supabase 미사용, 정적 배열로 관리 (파일명이 고정된 12개 PDF)

### 3. 라우팅 추가: `src/layouts/PublicLayout.jsx`

- `LectureMaterials` lazy import 추가
- `<Route path="/lectures/materials" element={<LectureMaterials />} />` 추가 (기존 `/lectures/:id` 위에 배치)

### 4. 메뉴 추가: `src/config/site.js`

- "주차별 강의안" 메뉴를 드롭다운으로 변경:
  - 강의자료 다운로드 (`/lectures/materials`) ← 신규
  - 강의안 게시판 (`/lectures`) ← 기존

### 5. 번역 추가: `src/utils/translations.js`

- `site.nav.lectureMaterials` (ko: '강의자료 다운로드', en: 'Lecture Materials')
- `site.nav.lectureBoard` (ko: '강의안 게시판', en: 'Lecture Board')
- `site.lectures.materials.*` 관련 번역 키

### 6. CSS 추가: `src/styles/site.css`

- `.materials-table` — PDF 목록 테이블 스타일
- `.materials-btn` — 보기/다운로드 버튼 스타일
- `.pdf-viewer` — iframe PDF 뷰어 컨테이너 스타일
- 다크모드 + 반응형 대응

## 수정 파일 목록

| 파일 | 변경 |
|------|------|
| `public/pdf/*.pdf` | `pdf/` → `public/pdf/` 이동 (12개 파일) |
| `src/pages/LectureMaterials.jsx` | 신규 — 강의자료 목록 + PDF 뷰어 페이지 |
| `src/layouts/PublicLayout.jsx` | lazy import + Route 추가 |
| `src/config/site.js` | lectures 메뉴를 드롭다운으로 변경 |
| `src/utils/translations.js` | 신규 번역 키 추가 |
| `src/styles/site.css` | materials 테이블, PDF 뷰어 스타일 추가 |

## 검증

1. `npm run dev` → `/lectures/materials` 접속 → 12개 PDF 목록 표시 확인
2. "보기" 버튼 → 페이지 내 iframe PDF 뷰어 작동 확인
3. "다운로드" 버튼 → PDF 파일 다운로드 확인
4. `/pdf/week01.pdf` 직접 접속 → 정상 서빙 확인
5. 기존 강의안 게시판(`/lectures`) 정상 작동 확인
6. 다크모드, 모바일 반응형 확인
7. `npm run build` 성공 확인
