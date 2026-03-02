# KoreaTech 컴퓨팅 사고

> 한국기술교육대학교 컴퓨팅 사고 및 Python 프로그래밍 교육 플랫폼

**[https://koreatech.dreamitbiz.com](https://koreatech.dreamitbiz.com)**

## 소개

11주차 Python 커리큘럼과 컴퓨팅 사고(Computational Thinking) 학습 자료를 제공하는 교육용 웹사이트입니다. 게시판, 사용자 인증, 다크 모드, 다국어(한/영) 지원 등의 기능을 포함합니다.

## 기술 스택

| 구분 | 기술 |
|------|------|
| Frontend | React 19, React Router 7 |
| Build | Vite 7 |
| Backend/DB | Supabase (PostgreSQL + Auth) |
| 배포 | GitHub Pages + GitHub Actions |
| 인증 | Supabase Auth (Email, Google, Kakao OAuth) |

## 주요 기능

- **11주차 Python 커리큘럼** - 설치부터 다차원 리스트까지 단계별 학습
- **컴퓨팅 사고 학습** - 분해, 패턴 인식, 추상화, 알고리즘 설계
- **게시판** - 공지/질문/자유 카테고리, 댓글, 페이지네이션
- **사용자 인증** - 이메일, Google, Kakao 로그인 지원
- **다크 모드 & 5가지 컬러 테마** - Navy Blue, Red, Purple, Green, Orange
- **다국어 지원** - 한국어(기본) / English
- **코드 복사 버튼** - 코드 블록 원클릭 복사
- **반응형 디자인** - 모바일/태블릿/데스크톱 최적화
- **관리자 대시보드** - 사용자 관리 및 콘텐츠 관리

## 시작하기

### 사전 요구사항

- Node.js 16+
- Supabase 계정

### 설치

```bash
# 저장소 클론
git clone <repository-url>
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

- `posts` - 게시글 (제목, 내용, 카테고리, 조회수)
- `comments` - 댓글
- `user_profiles` - 사용자 프로필 (역할, 프로필 이미지)

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
├── components/       # 공통 컴포넌트 (AuthGuard, Pagination, SearchModal 등)
│   └── layout/       # Navbar, Footer
├── config/           # 사이트 설정, 관리자 설정
├── contexts/         # Context API (Auth, Theme, Language, Toast)
├── hooks/            # 커스텀 훅 (useAOS, useCodeCopy)
├── layouts/          # 페이지 레이아웃
├── pages/            # 라우트 페이지 컴포넌트
├── styles/           # 모듈별 CSS
└── utils/            # Supabase CRUD, 인증, 번역, 검색
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

## 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.
