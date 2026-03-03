# 다운로드 로그인 필수 적용

## Context

강의안 PDF 보기/다운로드, 참고자료 첨부파일 다운로드가 비로그인 상태에서도 가능했음. 로그인한 사용자만 다운로드할 수 있도록 제한 필요.

## 변경 사항

### 1. `src/pages/LectureMaterials.jsx` — 강의안 PDF 보기/다운로드 로그인 체크

- `useAuth`, `useToast`, `useNavigate` 추가
- `handleDownload` 함수 추가: 미로그인 시 `e.preventDefault()`로 다운로드 차단, 토스트 알림 후 `/login`으로 이동
- 보기(view) / 다운로드(download) 버튼 모두에 `onClick` 핸들러 적용

```jsx
const handleDownload = (e, file) => {
  if (!isLoggedIn) {
    e.preventDefault();
    showToast(t('download.loginRequired'), 'error');
    navigate('/login');
  }
};
```

### 2. `src/pages/LectureDetail.jsx` — 참고자료 첨부파일 다운로드 로그인 체크

- `isLoggedIn` 디스트럭처링 추가
- 로그인 상태: 기존 `<a>` 태그로 다운로드 허용
- 비로그인 상태: `<button>`으로 변경, 클릭 시 토스트 알림 + `/login` 이동

### 3. `src/utils/translations.js` — 다운로드 로그인 안내 번역 키 추가

| 키 | ko | en |
|----|----|----|
| `download.loginRequired` | 다운로드하려면 로그인이 필요합니다. | Please log in to download. |

## 수정 파일

| 파일 | 변경 |
|------|------|
| `src/pages/LectureMaterials.jsx` | useAuth/useToast/useNavigate 추가, handleDownload 로그인 체크 |
| `src/pages/LectureDetail.jsx` | isLoggedIn 체크, 비로그인 시 버튼으로 전환 |
| `src/utils/translations.js` | download.loginRequired 번역 키 추가 (ko/en) |

## 검증

1. 비로그인 상태에서 보기/다운로드 클릭 → 토스트 "다운로드하려면 로그인이 필요합니다." + 로그인 페이지 이동
2. 로그인 상태에서 보기/다운로드 클릭 → 정상 동작
3. `npm run build` 성공
