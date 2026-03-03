# KoreaTech 컴퓨팅 사고

> 한국기술교육대학교 컴퓨팅 사고 및 Python 프로그래밍 교육 플랫폼

**[https://koreatech.dreamitbiz.com](https://koreatech.dreamitbiz.com)**

---

## 소개

11주차 Python 커리큘럼과 컴퓨팅 사고(Computational Thinking) 학습 자료를 제공하는 교육용 웹사이트입니다. AI 활용 가이드, 커뮤니티(게시판·갤러리·포트폴리오·웹 추천사이트), 주차별 강의안/참고자료, 사용자 인증, 다크 모드, 다국어(한/영) 지원 등의 기능을 포함합니다.

## 기술 스택

| 구분 | 기술 |
|------|------|
| Frontend | React 19, React Router 7 |
| Build | Vite 7 |
| Backend/DB | Supabase (PostgreSQL + Auth + RLS) |
| 배포 | GitHub Pages + GitHub Actions |
| 인증 | Supabase Auth (Email, Google, Kakao OAuth) |

## 주요 기능

### 학습 콘텐츠
- **컴퓨팅 사고** — 컴퓨팅 사고란?, 주차별 강의계획, 강의계획서, 실습안내
- **11주차 Python 커리큘럼** — 설치부터 다차원 리스트까지 단계별 학습
- **AI 활용 Tip!** — ChatGPT, Claude, Gemini, Copilot 활용법, 프롬프트 작성법, AI 코딩·문서작성·학습 활용
- **주차별 강의안** — 강의 PDF 다운로드 및 슬라이드 뷰어
- **주차별 참고자료** — 참고자료 등록/조회/수정/삭제

### 커뮤니티
- **게시판** — 공지/질문/자유 카테고리, 댓글, 페이지네이션
- **갤러리** — 웹디자인&개발/프로젝트/스크린샷/코딩결과 카테고리, 이미지 카드 그리드, 댓글
- **포트폴리오** — 포트폴리오 등록/공유, 태그, 커버 이미지, 댓글
- **웹 추천사이트** — 교육/개발도구/디자인/AI/참고자료 카테고리, 사이트 URL 및 추천내용, 댓글

### 시스템
- **사용자 인증** — 이메일, Google, Kakao 로그인 지원
- **관리자 대시보드** — 회원 관리 및 접속 현황
- **다크 모드 & 5가지 컬러 테마** — Navy Blue, Red, Purple, Green, Orange
- **다국어 지원** — 한국어(기본) / English
- **코드 복사 버튼** — 코드 블록 원클릭 복사
- **반응형 디자인** — 모바일/태블릿/데스크톱 최적화
- **SEO** — 페이지별 메타 태그 관리

## 시작하기

### 사전 요구사항

- Node.js 16+
- Supabase 계정

### 설치

```bash
# 저장소 클론
git clone https://github.com/aebonlee/koreatech.git
cd koreatech

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env 파일에 Supabase 키 입력
```

### 환경 변수

`.env.example`을 참고하여 `.env` 파일을 설정합니다.

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_KAKAO_CLIENT_ID=your-kakao-client-id
VITE_SITE_URL=https://koreatech.dreamitbiz.com
```

### Supabase 데이터베이스 설정

Supabase에 다음 테이블을 생성해야 합니다. 자세한 내용은 `Dev_md/Supabase_가이드.md`를 참고하세요.

| 테이블 | 설명 |
|--------|------|
| `posts` | 게시판 (제목, 내용, 카테고리, 조회수) |
| `comments` | 게시판 댓글 |
| `user_profiles` | 사용자 프로필 (역할, 프로필 이미지) |
| `lectures` | 주차별 강의안/참고자료 |
| `gallery` | 갤러리 작품 |
| `gallery_comments` | 갤러리 댓글 |
| `portfolio` | 포트폴리오 |
| `portfolio_comments` | 포트폴리오 댓글 |
| `websites` | 웹 추천사이트 |
| `websites_comments` | 웹 추천사이트 댓글 |

### 실행

```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 프로젝트 구조

```
src/
├── components/          # 공통 컴포넌트
│   ├── layout/          #   Navbar, Footer
│   ├── AuthGuard.jsx    #   인증 가드 (로그인 필요 페이지)
│   ├── Pagination.jsx   #   페이지네이션
│   ├── SearchModal.jsx  #   검색 모달
│   └── SEOHead.jsx      #   SEO 메타 태그
├── config/              # 설정
│   ├── site.js          #   메뉴, 브랜드, 푸터 설정
│   └── admin.js         #   관리자 설정
├── contexts/            # Context API
│   ├── AuthContext.jsx  #   인증 상태
│   ├── ThemeContext.jsx #   테마/다크 모드
│   ├── LanguageContext.jsx  #   다국어
│   └── ToastContext.jsx #   토스트 알림
├── hooks/               # 커스텀 훅
│   ├── useAOS.js        #   스크롤 애니메이션
│   └── useCodeCopy.js   #   코드 복사 버튼
├── layouts/             # 페이지 레이아웃
│   └── PublicLayout.jsx #   라우팅 + Navbar/Footer 래핑
├── pages/               # 라우트 페이지 (53개)
│   ├── Home.jsx         #   메인 홈
│   ├── WhatIsCT.jsx     #   컴퓨팅 사고란?
│   ├── WeeklyPlan.jsx   #   주차별 강의계획
│   ├── Syllabus.jsx     #   강의계획서
│   ├── PracticeGuide.jsx    #   실습안내
│   ├── PythonLesson.jsx #   Python 실습 홈
│   ├── PythonWeek1~11.jsx   #   주차별 Python 실습
│   ├── AiTipsHome.jsx   #   AI 활용 홈
│   ├── AiTips*.jsx      #   AI 활용 가이드 (8개)
│   ├── LectureMaterials.jsx #   강의자료 다운로드
│   ├── Lectures.jsx     #   참고자료 목록
│   ├── LectureDetail.jsx    #   참고자료 상세
│   ├── LectureWrite.jsx #   참고자료 등록/수정
│   ├── Board.jsx        #   게시판 목록
│   ├── BoardDetail.jsx  #   게시판 상세
│   ├── BoardWrite.jsx   #   게시판 작성
│   ├── Gallery.jsx      #   갤러리 목록
│   ├── GalleryDetail.jsx    #   갤러리 상세
│   ├── GalleryWrite.jsx #   갤러리 등록/수정
│   ├── Portfolio.jsx    #   포트폴리오 목록
│   ├── PortfolioDetail.jsx  #   포트폴리오 상세
│   ├── PortfolioWrite.jsx   #   포트폴리오 등록/수정
│   ├── Websites.jsx     #   웹 추천사이트 목록
│   ├── WebsiteDetail.jsx    #   웹 추천사이트 상세
│   ├── WebsiteWrite.jsx #   웹 추천사이트 등록/수정
│   ├── Login.jsx        #   로그인
│   ├── Register.jsx     #   회원가입
│   ├── ForgotPassword.jsx   #   비밀번호 찾기
│   ├── MyPage.jsx       #   마이페이지
│   ├── Admin.jsx        #   관리자 대시보드
│   └── NotFound.jsx     #   404 페이지
├── styles/              # 모듈별 CSS (12개)
│   ├── base.css         #   기본 변수, 리셋
│   ├── navbar.css       #   네비게이션 바
│   ├── footer.css       #   푸터
│   ├── hero.css         #   히어로 섹션
│   ├── site.css         #   사이트 전용 (강의, 게시판, 카드 등)
│   ├── auth.css         #   인증 페이지
│   ├── search.css       #   검색 모달
│   ├── toast.css        #   토스트 알림
│   ├── animations.css   #   애니메이션
│   ├── dark-mode.css    #   다크 모드
│   ├── responsive.css   #   반응형
│   └── shop.css         #   기타
└── utils/               # 유틸리티
    ├── supabase.js      #   Supabase CRUD (게시판, 갤러리, 포트폴리오, 웹사이트, 강의안, 댓글)
    ├── translations.js  #   한/영 번역 데이터
    ├── auth.js          #   인증 유틸
    └── searchStorage.js #   검색 기록 관리
```

## 라우트 구조

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | Home | 메인 페이지 |
| `/ct/what-is-ct` | WhatIsCT | 컴퓨팅 사고란? |
| `/ct/weekly-plan` | WeeklyPlan | 주차별 강의계획 |
| `/ct/syllabus` | Syllabus | 강의계획서 |
| `/ct/practice-guide` | PracticeGuide | 실습안내 |
| `/python` | PythonLesson | Python 실습 홈 |
| `/python/setup\|io\|...` | PythonWeek1~11 | 주차별 실습 |
| `/ai-tips` | AiTipsHome | AI 활용 홈 |
| `/ai-tips/chatgpt\|claude\|...` | AiTips* | AI 활용 가이드 |
| `/lectures` | LectureMaterials | 강의자료 다운로드 |
| `/references` | Lectures | 주차별 참고자료 |
| `/community/board` | Board | 게시판 |
| `/community/gallery` | Gallery | 갤러리 |
| `/community/portfolio` | Portfolio | 포트폴리오 |
| `/community/websites` | Websites | 웹 추천사이트 |
| `/login` | Login | 로그인 |
| `/register` | Register | 회원가입 |
| `/mypage` | MyPage | 마이페이지 |
| `/admin` | Admin | 관리자 대시보드 |

## 네비게이션 메뉴

```
홈
컴퓨팅 사고 ─── 컴퓨팅 사고란? / 주차별 강의계획 / 강의계획서 / 실습안내
파이썬 실습 ─── 1주차~11주차
AI활용 Tip! ─── ChatGPT / Claude / Gemini / Copilot / 프롬프트 / 코딩 / 문서작성 / 학습
주차별 강의안
주차별 참고자료
커뮤니티 ────── 게시판 / 갤러리 / 포트폴리오 / 웹 추천사이트
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 및 GitHub Pages에 배포합니다.

## 커리큘럼

| 주차 | 주제 |
|------|------|
| 1주차 | Python 설치 및 개발 환경 |
| 2주차 | 입출력과 변수 |
| 3주차 | 자료형과 연산자 |
| 4주차 | IPO 모델과 문제 정의 |
| 5주차 | 터틀 그래픽스 |
| 6주차 | 순서도와 알고리즘 |
| 7주차 | 조건문 (if/elif/else) |
| 8주차 | 반복문 (while/for) |
| 9주차 | 함수와 매개변수 |
| 10주차 | 예외 처리 |
| 11주차 | 다차원 리스트 |

## 개발 문서

`Dev_md/` 폴더에 개발 관련 문서가 포함되어 있습니다.

| 문서 | 설명 |
|------|------|
| `Supabase_가이드.md` | Supabase 테이블/RLS/RPC 설정 가이드 |
| `주차별_강의안_개발가이드.md` | 강의안 기능 개발 가이드 |
| `관리자페이지_구현.md` | 관리자 대시보드 구현 문서 |
| `커뮤니티_메뉴_확장_계획.md` | 커뮤니티 확장 계획 |
| `평가기준.md` | 프로젝트 평가 기준 |
| `개발일지.md ~ 개발일지_v14.md` | 버전별 개발일지 |

## 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.
