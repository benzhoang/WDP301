import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassPage from "./pages/ForgetPassPage";
import BookingPage from "./pages/BookingPage";
import CoursePage from "./pages/CoursePage";
import TestPage from "./pages/TestPage";
import BlogPage from "./pages/BlogPage";
import AboutUsPage from "./pages/AboutUsPage";
import ChooseRolePage from "./pages/ChooseRolePage";
import AdminLoginPage from "./pages/AdminLoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import StaffListPage from "./pages/StaffListPage";

//Import layout
import AdminLayout from "./layout/AdminLayout";
import UserListPage from "./pages/admin/UserListPage";
import CourseListPage from "./pages/admin/CourseListPage";
import BlogListPage from "./pages/admin/BlogListPage";
import ConsultantListPage from "./pages/admin/ConsultantListPage";
import ConsultantLayout from "./layout/ConsultantLayout";
import Certificate from "./pages/consultant/Certificate";
import ManageBooking from "./pages/consultant/ManageBooking";
import ManageBlog from "./pages/consultant/ManageBlog";
import ManageCourse from "./pages/consultant/ManageCourse";

// Wrapper component to conditionally render Navbar and Footer
const AppLayout = () => {
  const location = useLocation();
  const hideNavbarAndFooter = [
    "/login",
    "/signup",
    "/forget",
    "/choose-role",
    "/admin/login",
    "/dashboard",
    "/stafflist",
    "/userlist",
    "/courselist",
    "/bloglist",
    "/consultantlist",
    "/consultant/certificate",
    "/consultant/booking",
    "/consultant/blog",
    "/consultant/course",
  ].includes(location.pathname);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
    >
      {!hideNavbarAndFooter && <Navbar />}
      <ToastContainer position="top-right" autoClose={2000} />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/forget" element={<ForgetPassPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/choose-role" element={<ChooseRolePage />} />
          {/* Admin */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/dashboard"
            element={
              <AdminLayout>
                <DashboardPage />
              </AdminLayout>
            }
          />
          <Route
            path="/stafflist"
            element={
              <AdminLayout>
                <StaffListPage />
              </AdminLayout>
            }
          />
          <Route
            path="/userlist"
            element={
              <AdminLayout>
                <UserListPage />
              </AdminLayout>
            }
          />
          <Route
            path="/courselist"
            element={
              <AdminLayout>
                <CourseListPage />
              </AdminLayout>
            }
          />
          <Route
            path="/bloglist"
            element={
              <AdminLayout>
                <BlogListPage />
              </AdminLayout>
            }
          />
          <Route
            path="/consultantlist"
            element={
              <AdminLayout>
                <ConsultantListPage />
              </AdminLayout>
            }
          />
          {/* Consultant */}
          <Route
            path="/consultant/certificate"
            element={
              <ConsultantLayout>
                <Certificate />
              </ConsultantLayout>
            }
          />
          <Route
            path="/consultant/booking"
            element={
              <ConsultantLayout>
                <ManageBooking />
              </ConsultantLayout>
            }
          />
          <Route
            path="/consultant/blog"
            element={
              <ConsultantLayout>
                <ManageBlog />
              </ConsultantLayout>
            }
          />
          <Route
            path="/consultant/course"
            element={
              <ConsultantLayout>
                <ManageCourse />
              </ConsultantLayout>
            }
          />
        </Routes>
      </div>

      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
