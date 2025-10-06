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
import Logo from "@/assets/icons/Logo";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ISidebarItems } from "@/types";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useGetMeQuery(undefined);
  const { pathname } = useLocation();
  const data = {
    navMain: getSidebarItems(userData?.data?.data?.role),
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to="/">
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {/* <Collapsible>
          <CollapsibleTrigger className="flex items-center">
            All Parcels <ChevronDown />
          </CollapsibleTrigger>
          <CollapsibleContent>Pending</CollapsibleContent>
          <CollapsibleContent>Approved</CollapsibleContent>
          <CollapsibleContent>Delivered</CollapsibleContent>
          <CollapsibleContent>Cancelled</CollapsibleContent>
        </Collapsible> */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {data.navMain.map((group) => (
                  <SidebarGroup key={group.title}>
                    <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {group.items?.map((item) => (
                          <SidebarItem
                            key={item.title}
                            item={item}
                            pathname={pathname}
                          />
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
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

function SidebarItem({
  item,
  pathname,
}: {
  item: ISidebarItems;
  pathname: string;
}) {
  const [open, setOpen] = React.useState(pathname.startsWith(item.url || ""));
  const hasChildren = item.subRoutes && item.subRoutes.length > 0;
  console.log(item);

  if (hasChildren) {
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger
          className={cn(
            "flex w-full items-center justify-between px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition",
            open && "bg-accent"
          )}
        >
          <span>{item.title}</span>
          <ChevronRight
            className={cn("h-4 w-4 transition-transform", open && "rotate-90")}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="pl-4 mt-1 space-y-1">
          {item.subRoutes.map((sub) => (
            <SidebarMenuItem key={sub.title}>
              <SidebarMenuButton asChild isActive={pathname === sub.url}>
                <Link to={sub.url!}>{sub.title}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  // Simple link (no children)
  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild isActive={pathname === item.url}>
        <Link to={item.url!}>{item.title}</Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
