import { ISidebarItems } from "@/types";

import { lazy } from "react";

const DeliveryParcels = lazy(() => import("@/pages/Delivery/DeliveryParcels"));
export const deliverySidebarItems: ISidebarItems[] = [
  {
    title: "Dashboard",
    url: "#",
    items: [
      {
        title: "My Parcels",
        url: "/delivery/my-parcels",
        component: DeliveryParcels,
      },
    ],
  },
];
