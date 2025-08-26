import { ISidebarItems } from "@/types";

export const senderSidebarItems: ISidebarItems[] = [
  {
    title: "My Dashboard",
    url: "#",
    items: [
      {
        title: "My Parcels",
        url: "/sender/my-parcel",
        component: MyParcel,
      },
      {
        title: "Send Parcel",
        url: "/sender/send-parcel",
        component: SendParcel,
      },
      {
        title: "Create Parcel",
        url: "/sender/create-parcel",
        component: CreateParcel,
      },
    ],
  },
];
