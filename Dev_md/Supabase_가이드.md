# Supabase 설정 가이드

## 1. 프로젝트 생성
1. [supabase.com](https://supabase.com)에서 새 프로젝트 생성
2. Project URL과 Anon Key 복사

## 2. 환경 변수 설정
`.env` 파일을 프로젝트 루트에 생성:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 3. 테이블 생성 (SQL Editor)

### posts 테이블
```sql
CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'free',
  user_id UUID REFERENCES auth.users(id),
  author_name TEXT NOT NULL,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- RLS 활성화
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- 누구나 읽기 가능
CREATE POLICY "Anyone can read posts" ON posts
  FOR SELECT USING (true);

-- 로그인 사용자만 작성
CREATE POLICY "Authenticated users can insert posts" ON posts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 작성자만 삭제
CREATE POLICY "Users can delete own posts" ON posts
  FOR DELETE USING (auth.uid() = user_id);
```

### comments 테이블
```sql
CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  post_id BIGINT REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  author_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read comments" ON comments
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert comments" ON comments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own comments" ON comments
  FOR DELETE USING (auth.uid() = user_id);
```

### user_profiles 테이블
```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT,
  display_name TEXT,
  avatar_url TEXT,
  provider TEXT,
  role TEXT DEFAULT 'member',
  signup_domain TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = id);
```

### 조회수 증가 함수
```sql
CREATE OR REPLACE FUNCTION increment_views(post_id BIGINT)
RETURNS void AS $$
BEGIN
  UPDATE posts SET views = views + 1 WHERE id = post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### 회원가입 시 프로필 자동 생성 트리거
```sql
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_profiles (id, email, display_name, provider, signup_domain)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    NEW.raw_app_meta_data->>'provider',
    NEW.raw_user_meta_data->>'signup_domain'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
```

## 4. Auth 설정
1. Authentication > Providers에서 Google, Kakao 활성화
2. Site URL을 `https://koreatech.dreamitbiz.com`으로 설정
3. Redirect URLs에 `https://koreatech.dreamitbiz.com/**` 추가

## 5. GitHub Actions 시크릿
Repository Settings > Secrets and variables > Actions에 추가:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 6. 설정 완료 체크리스트
- [x] 프로젝트 생성 및 환경변수 설정
- [x] 테이블 3개 생성 (posts, comments, user_profiles)
- [x] RLS 정책 적용
- [x] increment_views 함수 생성
- [x] handle_new_user 트리거 생성
- [x] Auth 도메인 등록 (Site URL + Redirect URLs)
- [x] GitHub Actions 시크릿 설정
- [ ] Google OAuth Provider 키 등록
- [ ] Kakao OAuth Provider 키 등록
