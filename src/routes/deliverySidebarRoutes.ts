import DeliveryParcels from "@/pages/Delivery/DeliveryParcels";
import { ISidebarItems } from "@/types";

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
