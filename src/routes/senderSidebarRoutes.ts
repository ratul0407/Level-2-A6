import CreateParcel from "@/pages/Receiver/Sender/CreateParcel";

import { ISidebarItems } from "@/types";
import SenderParcels from "@/pages/Receiver/Sender/SenderParcels";

export const senderSidebarItems: ISidebarItems[] = [
  {
    title: "My Dashboard",
    url: "#",
    items: [
      {
        title: "My Parcels",
        url: "/sender/my-parcel",
        component: SenderParcels,
      },

      {
        title: "Create Parcel",
        url: "/sender/create-parcel",
        component: CreateParcel,
      },
    ],
  },
];
