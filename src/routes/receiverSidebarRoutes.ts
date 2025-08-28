import { ISidebarItems } from "@/types";
import { lazy } from "react";

const ReceiverParcels = lazy(() => import("@/pages/Receiver/ReceiverParcels"));
export const receiverSidebarItems: ISidebarItems[] = [
  {
    title: "My Dashboard",
    url: "#",
    items: [
      {
        title: "My Parcels",
        url: "/receiver/my-parcels",
        component: ReceiverParcels,
      },
    ],
  },
];
