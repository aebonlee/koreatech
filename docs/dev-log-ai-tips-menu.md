# AI활용 Tip! 드롭다운 메뉴 추가

## Context

"파이썬 실습" 다음에 "AI활용 Tip!" 드롭다운 메뉴를 추가. AI 종류별 4개(ChatGPT, Claude, Gemini, Copilot) + 기능별 4개(프롬프트, 코딩, 문서, 학습) = 하위 8개 페이지 + 1개 랜딩 페이지. 기존 PythonWeek 페이지 패턴(정적 콘텐츠 + lesson-content 구조)을 따름.

## 메뉴 구조

```
AI활용 Tip! (드롭다운)
├── [종류별]
│   ├── ChatGPT 활용법      /ai-tips/chatgpt
│   ├── Claude 활용법        /ai-tips/claude
│   ├── Gemini 활용법        /ai-tips/gemini
│   └── Copilot 활용법       /ai-tips/copilot
├── [기능별]
│   ├── 프롬프트 작성법      /ai-tips/prompt
│   ├── AI 코딩 활용         /ai-tips/coding
│   ├── AI 문서 작성         /ai-tips/writing
│   └── AI 학습 활용         /ai-tips/learning
```

랜딩 페이지: `/ai-tips` → `AiTipsHome.jsx`

## 변경 사항

### 1. `src/config/site.js` — 드롭다운 메뉴 추가

파이썬실습과 주차별강의안 사이에 드롭다운 삽입:

**Before:** 홈 | 컴퓨팅사고 | 파이썬실습 | 주차별강의안 | 주차별참고자료 | 게시판
**After:** 홈 | 컴퓨팅사고 | 파이썬실습 | **AI활용 Tip!** | 주차별강의안 | 주차별참고자료 | 게시판

```js
{
  labelKey: 'site.nav.aiTips',
  path: '/ai-tips',
  activePath: '/ai-tips',
  dropdown: [
    { path: '/ai-tips/chatgpt', labelKey: 'site.nav.aiChatGPT' },
    { path: '/ai-tips/claude', labelKey: 'site.nav.aiClaude' },
    { path: '/ai-tips/gemini', labelKey: 'site.nav.aiGemini' },
    { path: '/ai-tips/copilot', labelKey: 'site.nav.aiCopilot' },
    { path: '/ai-tips/prompt', labelKey: 'site.nav.aiPrompt' },
    { path: '/ai-tips/coding', labelKey: 'site.nav.aiCoding' },
    { path: '/ai-tips/writing', labelKey: 'site.nav.aiWriting' },
    { path: '/ai-tips/learning', labelKey: 'site.nav.aiLearning' },
  ]
}
```

### 2. `src/layouts/PublicLayout.jsx` — lazy import 9개 + Route 9개

```jsx
const AiTipsHome = lazy(() => import('../pages/AiTipsHome'));
const AiTipsChatGPT = lazy(() => import('../pages/AiTipsChatGPT'));
const AiTipsClaude = lazy(() => import('../pages/AiTipsClaude'));
const AiTipsGemini = lazy(() => import('../pages/AiTipsGemini'));
const AiTipsCopilot = lazy(() => import('../pages/AiTipsCopilot'));
const AiTipsPrompt = lazy(() => import('../pages/AiTipsPrompt'));
const AiTipsCoding = lazy(() => import('../pages/AiTipsCoding'));
const AiTipsWriting = lazy(() => import('../pages/AiTipsWriting'));
const AiTipsLearning = lazy(() => import('../pages/AiTipsLearning'));

{/* AI Tips */}
<Route path="/ai-tips" element={<AiTipsHome />} />
<Route path="/ai-tips/chatgpt" element={<AiTipsChatGPT />} />
<Route path="/ai-tips/claude" element={<AiTipsClaude />} />
<Route path="/ai-tips/gemini" element={<AiTipsGemini />} />
<Route path="/ai-tips/copilot" element={<AiTipsCopilot />} />
<Route path="/ai-tips/prompt" element={<AiTipsPrompt />} />
<Route path="/ai-tips/coding" element={<AiTipsCoding />} />
<Route path="/ai-tips/writing" element={<AiTipsWriting />} />
<Route path="/ai-tips/learning" element={<AiTipsLearning />} />
```

### 3. `src/utils/translations.js` — 번역 키 추가 (ko/en)

**nav 키 9개:**

| 키 | ko | en |
|----|----|----|
| `site.nav.aiTips` | AI활용 Tip! | AI Tips! |
| `site.nav.aiChatGPT` | ChatGPT 활용법 | ChatGPT Guide |
| `site.nav.aiClaude` | Claude 활용법 | Claude Guide |
| `site.nav.aiGemini` | Gemini 활용법 | Gemini Guide |
| `site.nav.aiCopilot` | Copilot 활용법 | Copilot Guide |
| `site.nav.aiPrompt` | 프롬프트 작성법 | Prompt Writing |
| `site.nav.aiCoding` | AI 코딩 활용 | AI Coding |
| `site.nav.aiWriting` | AI 문서 작성 | AI Writing |
| `site.nav.aiLearning` | AI 학습 활용 | AI Learning |

**페이지 title/subtitle 키:** `site.aiTips.title`, `site.aiTips.subtitle`, `site.aiTips.chatgpt.title/subtitle` 등 각 페이지별 title/subtitle 쌍 (ko/en)

### 4. 신규 페이지 파일 9개 (`src/pages/`)

| 파일 | 내용 |
|------|------|
| `AiTipsHome.jsx` | 랜딩 — 종류별(4장)/기능별(4장) 카드 그리드, PythonLesson 패턴 |
| `AiTipsChatGPT.jsx` | ChatGPT 소개, 버전 비교, 주요 기능, 활용 예시, 프롬프트 팁 |
| `AiTipsClaude.jsx` | Claude 소개, 긴 문서 분석, 코딩, ChatGPT 비교 |
| `AiTipsGemini.jsx` | Gemini 소개, 멀티모달, Google 연동, 실시간 검색 |
| `AiTipsCopilot.jsx` | Copilot 소개, VS Code 설정, 주석→코드 생성, Chat 명령어 |
| `AiTipsPrompt.jsx` | 프롬프트 엔지니어링 기초, 구조화, Zero/Few-shot, CoT, 좋은/나쁜 예시 |
| `AiTipsCoding.jsx` | AI 코드 생성, 디버깅, 리뷰, 리팩토링 |
| `AiTipsWriting.jsx` | AI 보고서, 요약, 번역, 이메일 작성 |
| `AiTipsLearning.jsx` | AI 개념 학습, 퀴즈 생성, 학습 계획, 파인만/간격반복 기법 |

**각 페이지 공통 구조 (PythonWeek 패턴):**
```
SEOHead → page-header → section.lesson-content > .lesson-body
  ├── callout-box (학습 목표)
  ├── h2/h3 섹션들 (콘텐츠)
  ├── callout-box (핵심 정리)
  └── lesson-nav (이전/다음 + 목록)
```

## 수정/생성 파일 요약

| 파일 | 작업 |
|------|------|
| `src/config/site.js` | 드롭다운 메뉴 항목 추가 |
| `src/layouts/PublicLayout.jsx` | lazy import 9개 + Route 9개 추가 |
| `src/utils/translations.js` | nav 키 9개 + 페이지 title/subtitle 키 추가 (ko/en) |
| `src/pages/AiTipsHome.jsx` | **신규** — 랜딩 페이지 |
| `src/pages/AiTipsChatGPT.jsx` | **신규** — ChatGPT 활용법 |
| `src/pages/AiTipsClaude.jsx` | **신규** — Claude 활용법 |
| `src/pages/AiTipsGemini.jsx` | **신규** — Gemini 활용법 |
| `src/pages/AiTipsCopilot.jsx` | **신규** — Copilot 활용법 |
| `src/pages/AiTipsPrompt.jsx` | **신규** — 프롬프트 작성법 |
| `src/pages/AiTipsCoding.jsx` | **신규** — AI 코딩 활용 |
| `src/pages/AiTipsWriting.jsx` | **신규** — AI 문서 작성 |
| `src/pages/AiTipsLearning.jsx` | **신규** — AI 학습 활용 |

## 검증

1. 네비게이션에 "AI활용 Tip!" 드롭다운 메뉴 표시 (8개 하위항목)
2. `/ai-tips` 랜딩 페이지 — 종류별/기능별 카드 그리드
3. 각 8개 하위 페이지 접속 및 콘텐츠 정상 표시
4. lesson-nav로 페이지 간 이동
5. `npm run build` 성공
