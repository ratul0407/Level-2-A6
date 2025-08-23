import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { role } from "@/constants/role";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { TRole } from "@/types";
import { generateRoute } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";

import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarRoutes";
import { senderSidebarItems } from "./senderSidebarRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [
      { index: true, element: <Navigate to="/admin/my-parcel" /> },
      ...generateRoute(adminSidebarItems),
    ],
  },
  {
    path: "/sender",
    Component: DashboardLayout,
    children: [
      { index: true, element: <Navigate to="/sender/send-parcel" /> },
      ...generateRoute(senderSidebarItems),
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
export default router;
