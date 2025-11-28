import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { Link, useLocation } from "react-router";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useGetMeQuery(undefined);
  const { pathname } = useLocation();
  const data = {
    navMain: getSidebarItems(userData?.data?.data?.role),
  };

  return (
    <Sidebar {...props} className="text-white">
      <SidebarHeader className="bg-black rounded-tr-4xl">
        <div className="">
          <Link to="/">
            <p className="text-4xl font-open-sans pt-10">
              <span className="font-bold text-custom-red">E</span>
              Parcel
            </p>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-black rounded-br-4xl pr-8">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title} className="p-0">
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                      className="py-6 rounded-r-4xl"
                    >
                      <Link to={item.url}>
                        {item.icon && <item.icon />}
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
