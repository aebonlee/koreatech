import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));
const PythonLesson = lazy(() => import('../pages/PythonLesson'));
const PythonBasics = lazy(() => import('../pages/PythonBasics'));
const PythonControl = lazy(() => import('../pages/PythonControl'));
const PythonFunctions = lazy(() => import('../pages/PythonFunctions'));
const PythonData = lazy(() => import('../pages/PythonData'));
const Board = lazy(() => import('../pages/Board'));
const BoardDetail = lazy(() => import('../pages/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/BoardWrite'));
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

            {/* Python Lessons */}
            <Route path="/python" element={<PythonLesson />} />
            <Route path="/python/basics" element={<PythonBasics />} />
            <Route path="/python/control" element={<PythonControl />} />
            <Route path="/python/functions" element={<PythonFunctions />} />
            <Route path="/python/data" element={<PythonData />} />

            {/* Lectures */}
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
