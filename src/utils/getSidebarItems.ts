import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarRoutes";
import { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems];
    case role.admin:
      return [...adminSidebarItems];
    case role.sender:
      return [...adminSidebarItems];
    default:
      return [];
  }
};
