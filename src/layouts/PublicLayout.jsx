import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import useCodeCopy from '../hooks/useCodeCopy';

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
const Board = lazy(() => import('../pages/Board'));
const BoardDetail = lazy(() => import('../pages/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/BoardWrite'));
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

            {/* Lectures */}
            <Route path="/lectures/materials" element={<LectureMaterials />} />
            <Route path="/lectures" element={<Lectures />} />
            <Route path="/lectures/write" element={<AuthGuard><LectureWrite /></AuthGuard>} />
            <Route path="/lectures/edit/:id" element={<AuthGuard><LectureWrite /></AuthGuard>} />
            <Route path="/lectures/:id" element={<LectureDetail />} />

            {/* Board */}
            <Route path="/board" element={<Board />} />
            <Route path="/board/write" element={<AuthGuard><BoardWrite /></AuthGuard>} />
            <Route path="/board/:id" element={<BoardDetail />} />

            {/* Admin */}
            <Route path="/admin" element={<AuthGuard><Admin /></AuthGuard>} />

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
