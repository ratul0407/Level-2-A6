import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarRoutes";
import { deliverySidebarItems } from "@/routes/deliverySidebarRoutes";
import { receiverSidebarItems } from "@/routes/receiverSidebarRoutes";
import { senderSidebarItems } from "@/routes/senderSidebarRoutes";
import { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems];
    case role.admin:
      return [...adminSidebarItems];
    case role.sender:
      return [...senderSidebarItems];
    case role.receiver:
      return [...receiverSidebarItems];
    case role.delivery_personnel:
      return [...deliverySidebarItems];
    default:
      return [];
  }
};
