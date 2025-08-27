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
import { deliverySidebarItems } from "./deliverySidebarRoutes";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import { TRole } from "@/types";

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
    Component: withAuth(
      DashboardLayout,
      (role.superAdmin as TRole) || (role.admin as TRole)
    ),
    children: [
      { index: true, element: <Navigate to="/admin/all-parcels" /> },
      ...generateRoute(adminSidebarItems),
    ],
  },
  {
    path: "/sender",
    Component: withAuth(DashboardLayout, role.sender as TRole),
    children: [
      { index: true, element: <Navigate to="/sender/create-parcel" /> },
      ...generateRoute(senderSidebarItems),
    ],
  },
  {
    path: "/receiver",
    Component: withAuth(DashboardLayout, role.receiver as TRole),
    children: [
      { index: true, element: <Navigate to="/receiver/my-parcels" /> },
      ...generateRoute(receiverSidebarItems),
    ],
  },
  {
    path: "/delivery",
    Component: withAuth(DashboardLayout, role.delivery_personnel as TRole),
    children: [
      { index: true, element: <Navigate to="/delivery/my-parcels" /> },
      ...generateRoute(deliverySidebarItems),
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
