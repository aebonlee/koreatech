# 푸터 바로가기 링크 보완

## Context

현재 푸터 바로가기 링크가 4개(홈, 파이썬실습, 주차별강의안, 게시판)로 네비게이션 메뉴(7개)에 비해 누락이 많았음. 컴퓨팅 사고, AI활용 Tip!, 주차별 참고자료 3개가 빠져 있었음.

## 변경 사항

### `src/config/site.js` — footerLinks 배열 보완

**Before (4개):**
```
홈 | 파이썬실습 | 주차별강의안 | 게시판
```

**After (7개, 네비게이션 순서와 동일):**
```
홈 | 컴퓨팅 사고 | 파이썬실습 | AI활용 Tip! | 주차별강의안 | 주차별 참고자료 | 게시판
```

```js
footerLinks: [
  { path: '/', labelKey: 'nav.home' },
  { path: '/ct/what-is-ct', labelKey: 'site.nav.ct' },
  { path: '/python', labelKey: 'site.nav.python' },
  { path: '/ai-tips', labelKey: 'site.nav.aiTips' },
  { path: '/lectures', labelKey: 'site.nav.lectures' },
  { path: '/references', labelKey: 'site.nav.references' },
  { path: '/board', labelKey: 'site.nav.board' }
]
```

## 수정 파일

| 파일 | 작업 |
|------|------|
| `src/config/site.js` | footerLinks 배열에 3개 링크 추가 (ct, aiTips, references) |

## 검증

1. 푸터 바로가기에 7개 링크 모두 표시 확인
2. 각 링크 클릭 시 올바른 페이지로 이동
3. `npm run build` 성공
