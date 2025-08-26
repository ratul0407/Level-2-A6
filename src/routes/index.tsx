import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { generateRoute } from "@/utils/generateRoutes";

import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarRoutes";
import { senderSidebarItems } from "./senderSidebarRoutes";
import { receiverSidebarItems } from "./receiverSidebarRoutes";

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
      { index: true, element: <Navigate to="/admin/all-parcels" /> },
      ...generateRoute(adminSidebarItems),
    ],
  },
  {
    path: "/sender",
    Component: DashboardLayout,
    children: [
      { index: true, element: <Navigate to="/sender/create-parcel" /> },
      ...generateRoute(senderSidebarItems),
    ],
  },
  {
    path: "/receiver",
    Component: DashboardLayout,
    children: [
      { index: true, element: <Navigate to="/receiver/my-parcels" /> },
      ...generateRoute(receiverSidebarItems),
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
