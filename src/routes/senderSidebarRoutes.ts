import { ISidebarItems } from "@/types";

import { lazy } from "react";

const SenderParcels = lazy(() => import("@/pages/Sender/SenderParcels"));
const CreateParcel = lazy(() => import("@/pages/Sender/CreateParcel"));
const TrackParcel = lazy(() => import("@/pages/Shared/TrackParcels"));

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
      {
        title: "Track Parcel",
        url: "/sender/track-parcel",
        component: TrackParcel,
      },
    ],
  },
];
