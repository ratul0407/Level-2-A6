import { ISidebarItems } from "@/types";

import { lazy } from "react";

const DeliveryParcels = lazy(() => import("@/pages/Delivery/DeliveryParcels"));
const UpdateParcelLocation = lazy(
  () => import("@/pages/Delivery/DeliveryUpdateMap")
);
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
      {
        title: "Update Parcel Location",
        url: "/delivery/update-parcel-location",
        component: UpdateParcelLocation,
      },
    ],
  },
];
