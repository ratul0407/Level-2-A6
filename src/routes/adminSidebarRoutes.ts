import AllParcels from "@/pages/Admin/AllParcels";
import AllUsers from "@/pages/Admin/AllUsers";
import { ISidebarItems } from "@/types";

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
