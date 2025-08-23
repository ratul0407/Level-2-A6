import MyParcel from "@/pages/Sender/MyParcel";
import { ISidebarItems } from "@/types";
import { withAuth } from "@/utils/withAuth";

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
