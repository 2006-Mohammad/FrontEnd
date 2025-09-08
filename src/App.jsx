import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage.jsx";
import Layout from "./pages/Layout.jsx";
import DashboardHome from "./pages/DashboardHome.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Features from "./pages/About.jsx";
import PostPage from "./pages/PostPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoute from "./pages/ProtectRoute.jsx";
import AuthGuard from "./pages/AuthGuard.jsx";
import Home from "./pages/Home.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Help from "./pages/Help.jsx";
import Pricing from "./pages/Pricing.jsx";
import FAQ from "./pages/F&Q.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages (outside dashboard) */}
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar />
              <LandingPage />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              {" "}
              <SignUp />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              {" "}
              <SignIn />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              <Navbar />
              <Pricing />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <Navbar />
              <FAQ />
            </>
          }
        />
        <Route
          path="/help"
          element={
            <>
              <Navbar />
              <Help />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <UserProfile />
            </>
          }
        />
        {/* Protected Dashboard */}
        <Route element={<AuthGuard />}>
          <Route path="/dashboard" element={<Layout />}>
            {/* 👇 THIS is the important nested structure */}
            <Route index element={<DashboardHome />} />
            <Route path="about" element={<Features />} />
            <Route path="postpage" element={<PostPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
