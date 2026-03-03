# 주차별 참고자료 메뉴 추가 및 등록 폼 간소화

## Context

기존에 만들어둔 강의안 게시판(Lectures.jsx, LectureDetail.jsx, LectureWrite.jsx)이 라우트에서 제거된 상태였음. 이를 "주차별 참고자료"라는 새 메뉴로 복원하되, 경로를 `/references`로 변경하고 등록 폼을 간소화.

## 변경 사항

### 1. `src/config/site.js` — 네비게이션에 "주차별 참고자료" 메뉴 추가

**Before:** 홈 | 컴퓨팅사고 | 파이썬실습 | 주차별강의안 | 게시판
**After:** 홈 | 컴퓨팅사고 | 파이썬실습 | 주차별강의안 | **주차별 참고자료** | 게시판

```js
{ path: '/references', labelKey: 'site.nav.references', activePath: '/references' },
```

### 2. `src/layouts/PublicLayout.jsx` — /references 라우트 4개 추가

```jsx
<Route path="/references" element={<Lectures />} />
<Route path="/references/write" element={<AuthGuard><LectureWrite /></AuthGuard>} />
<Route path="/references/edit/:id" element={<AuthGuard><LectureWrite /></AuthGuard>} />
<Route path="/references/:id" element={<LectureDetail />} />
```

- LectureDetail, LectureWrite lazy import 복원

### 3. `src/pages/Lectures.jsx` — 경로 및 제목 변경

- 페이지 제목: `site.references.title` ("주차별 참고자료")
- 링크 경로: `/lectures/...` → `/references/...`
- 관리자 등록 버튼: `site.references.write` ("참고자료 등록")
- 설명(description) 컬럼 제거
- 테이블 컬럼: 주차 | 제목 | 등록일 | 조회수

### 4. `src/pages/LectureWrite.jsx` — 등록 폼 간소화

**유지 항목:** week_number, title, content, file_url, is_published
**제거 항목:** description, slide_url, cover_image, tags

- 경로: `/lectures/...` → `/references/...`
- tags 파싱 로직 제거

### 5. `src/pages/LectureDetail.jsx` — 경로 및 표시 간소화

- 경로: `/lectures/...` → `/references/...`
- 슬라이드 iframe 영역 제거
- 태그 표시 제거
- 페이지 헤더: `site.references.title`

### 6. `src/utils/translations.js` — 번역 키 추가

| 키 | ko | en |
|----|----|----|
| `site.nav.references` | 주차별 참고자료 | References |
| `site.references.title` | 주차별 참고자료 | Weekly References |
| `site.references.subtitle` | 주차별 참고 자료를 확인하세요 | Check weekly reference materials |
| `site.references.write` | 참고자료 등록 | New Reference |
| `site.references.empty` | 등록된 참고자료가 없습니다. | No references available. |

기존 `site.lectures.*` 키들은 LectureMaterials 등에서 사용 중이므로 유지.

## 수정 파일

| 파일 | 변경 |
|------|------|
| `src/config/site.js` | 네비게이션 메뉴 항목 추가 |
| `src/layouts/PublicLayout.jsx` | /references 라우트 4개 추가, lazy import 복원 |
| `src/pages/Lectures.jsx` | 경로·제목 변경, 설명 컬럼 제거 |
| `src/pages/LectureWrite.jsx` | 폼 간소화(5개 필드만), 경로 변경 |
| `src/pages/LectureDetail.jsx` | 경로 변경, 슬라이드/태그 제거 |
| `src/utils/translations.js` | 참고자료 번역 키 5개 추가 (ko/en) |

## SQL 스크립트 변경

**변경 불필요.** 기존 `lectures` 테이블을 그대로 사용. 프론트엔드에서 제거한 필드(description, slide_url, cover_image, tags)는 DB 컬럼에 그대로 존재하지만, 새 등록 시 값이 전송되지 않아 NULL/기본값으로 저장됨. 기존 데이터에는 영향 없음.

## 검증

1. 네비게이션에 "주차별 참고자료" 메뉴 표시 확인
2. `/references` 접속 → 목록형 테이블 표시
3. 관리자 "참고자료 등록" → 간소화된 폼 (주차/제목/내용/첨부파일/공개) 확인
4. 등록 후 상세 페이지 정상 표시
5. `npm run build` 성공
