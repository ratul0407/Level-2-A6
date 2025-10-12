import { ISidebarItems } from "@/types";
import { lazy } from "react";

export const AllParcels = lazy(
  () => import("@/pages/Admin/AllParcels/AllParcels")
);
export const AllUsers = lazy(() => import("@/pages/Admin/AllUsers"));

export const adminSidebarItems: ISidebarItems[] = [
  {
    title: "Dashboard",
    url: "#",
    items: [
      {
        title: "All Users",
        url: "/admin/all-users",
        component: AllUsers,
      },
      {
        title: "All Parcels",
        url: "/admin/all-parcels",
        component: AllParcels,
      },
    ],
  },
];
