import MyParcel from "@/pages/Shared/MyParcels";
import { ISidebarItems } from "@/types";

export const receiverSidebarItems: ISidebarItems[] = [
  {
    title: "My Dashboard",
    url: "#",
    items: [
      {
        title: "My Parcels",
        url: "/receiver/my-parcels",
        component: MyParcel,
      },
      //   {
      //     title: "Send Parcel",
      //     url: "/sender/send-parcel",
      //     component: SendParcel,
      //   },
      //   {
      //     title: "Create Parcel",
      //     url: "/sender/create-parcel",
      //     component: CreateParcel,
      //   },
    ],
  },
];
