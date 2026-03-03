import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import useCodeCopy from '../hooks/useCodeCopy';
import useTableScroller from '../hooks/useTableScroller';

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));
const WhatIsCT = lazy(() => import('../pages/WhatIsCT'));
const WeeklyPlan = lazy(() => import('../pages/WeeklyPlan'));
const Syllabus = lazy(() => import('../pages/Syllabus'));
const PracticeGuide = lazy(() => import('../pages/PracticeGuide'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));
const PythonLesson = lazy(() => import('../pages/PythonLesson'));
const PythonWeek1 = lazy(() => import('../pages/PythonWeek1'));
const PythonWeek2 = lazy(() => import('../pages/PythonWeek2'));
const PythonWeek3 = lazy(() => import('../pages/PythonWeek3'));
const PythonWeek4 = lazy(() => import('../pages/PythonWeek4'));
const PythonWeek5 = lazy(() => import('../pages/PythonWeek5'));
const PythonWeek6 = lazy(() => import('../pages/PythonWeek6'));
const PythonWeek7 = lazy(() => import('../pages/PythonWeek7'));
const PythonWeek8 = lazy(() => import('../pages/PythonWeek8'));
const PythonWeek9 = lazy(() => import('../pages/PythonWeek9'));
const PythonWeek10 = lazy(() => import('../pages/PythonWeek10'));
const PythonWeek11 = lazy(() => import('../pages/PythonWeek11'));
const AiTipsHome = lazy(() => import('../pages/AiTipsHome'));
const AiTipsChatGPT = lazy(() => import('../pages/AiTipsChatGPT'));
const AiTipsClaude = lazy(() => import('../pages/AiTipsClaude'));
const AiTipsGemini = lazy(() => import('../pages/AiTipsGemini'));
const AiTipsCopilot = lazy(() => import('../pages/AiTipsCopilot'));
const AiTipsPrompt = lazy(() => import('../pages/AiTipsPrompt'));
const AiTipsCoding = lazy(() => import('../pages/AiTipsCoding'));
const AiTipsWriting = lazy(() => import('../pages/AiTipsWriting'));
const AiTipsLearning = lazy(() => import('../pages/AiTipsLearning'));
const Board = lazy(() => import('../pages/Board'));
const BoardDetail = lazy(() => import('../pages/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/BoardWrite'));
const Gallery = lazy(() => import('../pages/Gallery'));
const GalleryDetail = lazy(() => import('../pages/GalleryDetail'));
const GalleryWrite = lazy(() => import('../pages/GalleryWrite'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const PortfolioDetail = lazy(() => import('../pages/PortfolioDetail'));
const PortfolioWrite = lazy(() => import('../pages/PortfolioWrite'));
const Websites = lazy(() => import('../pages/Websites'));
const WebsiteDetail = lazy(() => import('../pages/WebsiteDetail'));
const WebsiteWrite = lazy(() => import('../pages/WebsiteWrite'));
const LectureMaterials = lazy(() => import('../pages/LectureMaterials'));
const Lectures = lazy(() => import('../pages/Lectures'));
const LectureDetail = lazy(() => import('../pages/LectureDetail'));
const LectureWrite = lazy(() => import('../pages/LectureWrite'));
const Admin = lazy(() => import('../pages/Admin'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = () => {
  useCodeCopy();
  useTableScroller();

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />

            {/* Computational Thinking */}
            <Route path="/ct/what-is-ct" element={<WhatIsCT />} />
            <Route path="/ct/weekly-plan" element={<WeeklyPlan />} />
            <Route path="/ct/syllabus" element={<Syllabus />} />
            <Route path="/ct/practice-guide" element={<PracticeGuide />} />

            {/* Python Lessons */}
            <Route path="/python" element={<PythonLesson />} />
            <Route path="/python/setup" element={<PythonWeek1 />} />
            <Route path="/python/io" element={<PythonWeek2 />} />
            <Route path="/python/datatype" element={<PythonWeek3 />} />
            <Route path="/python/ipo" element={<PythonWeek4 />} />
            <Route path="/python/turtle" element={<PythonWeek5 />} />
            <Route path="/python/flowchart" element={<PythonWeek6 />} />
            <Route path="/python/condition" element={<PythonWeek7 />} />
            <Route path="/python/loop" element={<PythonWeek8 />} />
            <Route path="/python/function" element={<PythonWeek9 />} />
            <Route path="/python/exception" element={<PythonWeek10 />} />
            <Route path="/python/list" element={<PythonWeek11 />} />

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

            {/* Lectures */}
            <Route path="/lectures/materials" element={<LectureMaterials />} />
            <Route path="/lectures" element={<LectureMaterials />} />

            {/* References (주차별 참고자료) */}
            <Route path="/references" element={<Lectures />} />
            <Route path="/references/write" element={<AuthGuard><LectureWrite /></AuthGuard>} />
            <Route path="/references/edit/:id" element={<AuthGuard><LectureWrite /></AuthGuard>} />
            <Route path="/references/:id" element={<LectureDetail />} />

            {/* Community — Board */}
            <Route path="/community/board" element={<Board />} />
            <Route path="/community/board/write" element={<AuthGuard><BoardWrite /></AuthGuard>} />
            <Route path="/community/board/:id" element={<BoardDetail />} />

            {/* Community — Gallery */}
            <Route path="/community/gallery" element={<Gallery />} />
            <Route path="/community/gallery/write" element={<AuthGuard><GalleryWrite /></AuthGuard>} />
            <Route path="/community/gallery/edit/:id" element={<AuthGuard><GalleryWrite /></AuthGuard>} />
            <Route path="/community/gallery/:id" element={<GalleryDetail />} />

            {/* Community — Portfolio */}
            <Route path="/community/portfolio" element={<Portfolio />} />
            <Route path="/community/portfolio/write" element={<AuthGuard><PortfolioWrite /></AuthGuard>} />
            <Route path="/community/portfolio/edit/:id" element={<AuthGuard><PortfolioWrite /></AuthGuard>} />
            <Route path="/community/portfolio/:id" element={<PortfolioDetail />} />

            {/* Community — Websites (웹 추천사이트) */}
            <Route path="/community/websites" element={<Websites />} />
            <Route path="/community/websites/write" element={<AuthGuard><WebsiteWrite /></AuthGuard>} />
            <Route path="/community/websites/edit/:id" element={<AuthGuard><WebsiteWrite /></AuthGuard>} />
            <Route path="/community/websites/:id" element={<WebsiteDetail />} />

            {/* Admin */}
            <Route path="/admin" element={<AuthGuard><Admin /></AuthGuard>} />

            {/* Legacy redirects */}
            <Route path="/board" element={<Navigate to="/community/board" replace />} />
            <Route path="/board/:id" element={<Navigate to="/community/board" replace />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
