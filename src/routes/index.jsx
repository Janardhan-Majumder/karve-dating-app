import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Auth from "../layouts/Auth/Auth";
import SignIn from "../pages/Auth/SignIn";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import VerifyOtp from "../pages/Auth/VerifyOtp";
import ResetPassword from "../pages/Auth/ResetPassword";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import Users from "../pages/Main/Users/Users";
import MyProfile from "../pages/Main/MyProfile/MyProfile";
import EditProfile from "../pages/EditProfile/EditProfile";
import Settings from "../pages/Settings/Settings";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import EditPrivacyPolicy from "../pages/Settings/EditPrivacyPolicy";
import TermsConditions from "../pages/Settings/TermsConditions";
import EditTermsConditions from "../pages/Settings/EditTermsConditions";
import AboutUs from "../pages/Settings/AboutUs";
import EditAboutUs from "../pages/Settings/EditAboutUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <DashboardHome />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/profile",
        element: <MyProfile />,
      },
      {
        path: "/edit-profile/:id",
        element: <EditProfile />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/settings/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/settings/edit-terms-conditions",
        element: <EditTermsConditions />,
      },
      {
        path: "/settings/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/settings/edit-privacy-policy",
        element: <EditPrivacyPolicy />,
      },
      {
        path: "/settings/about-us",
        element: <AboutUs />,
      },
      {
        path: "/settings/edit-about-us",
        element: <EditAboutUs />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth",
        element: <SignIn />,
      },
      {
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/auth/verify-email",
        element: <VerifyOtp />,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);

export default router;
