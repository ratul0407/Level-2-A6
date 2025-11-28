import { ISidebarItems } from "@/types";
import { Home, Package, User } from "lucide-react";
import { lazy } from "react";

export const AllParcels = lazy(
  () => import("@/pages/Admin/AllParcels/AllParcels")
);
export const AllUsers = lazy(() => import("@/pages/Admin/AllUsers"));
const Overview = lazy(() => import("@/pages/Admin/Overview"));
export const adminSidebarItems: ISidebarItems[] = [
  {
    title: "Dashboard",
    url: "#",
    items: [
      {
        title: "Overview",
        url: "/admin/overview",
        component: Overview,
        icon: Home,
      },
      {
        title: "All Users",
        url: "/admin/all-users",
        component: AllUsers,
        icon: User,
      },
      {
        title: "All Parcels",
        url: "/admin/all-parcels",
        component: AllParcels,
        icon: Package,
      },
    ],
  },
];
