import MyParcel from "@/pages/Sender/MyParcel";
import { ISidebarItems } from "@/types";

export const adminSidebarItems: ISidebarItems[] = [
  {
    title: "Dashboard",
    url: "#",
    items: [
      {
        title: "something",
        url: "/admin/my-parcel",
        component: MyParcel,
      },
    ],
  },
];
