import { ISidebarItems } from "@/types";

export const generateRoute = (sidebarItems: ISidebarItems[]) => {
  return sidebarItems.flatMap((section) =>
    section.items.flatMap((route) => {
      const children =
        route.subRoutes?.map((sub) => ({
          path: sub.url,
          Component: sub.component,
        })) || [];

      return [
        {
          path: route.url,
          Component: route.component,
          children,
        },
      ];
    })
  );
};
