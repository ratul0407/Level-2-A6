import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { role } from "@/constants/role";
import {
  authApi,
  useGetMeQuery,
  useLogOutMutation,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hooks";

import { Link } from "react-router";
import MenuBarImg from "../assets/icons/menu.png";
import { ArrowDown, Menu, Phone, PhoneCall } from "lucide-react";
// const Navbar = () => {
//   const { data } = useGetMeQuery(undefined);
//   const [logout] = useLogOutMutation();
//   const dispatch = useAppDispatch();
//   const handleLogOut = async () => {
//     await logout(undefined);
//     dispatch(authApi.util.resetApiState());
//   };
//   const userRole = data?.data?.data?.role;

//   const navigationLinks = [
//     { href: "/", label: "Home" },
//     { href: "/contact", label: "Contact" },
//     { href: "/about", label: "About" },
//     { href: "/careers", label: "Careers" },
//     {
//       href:
//         userRole === role.sender
//           ? "/sender"
//           : userRole === role.receiver
//           ? "/receiver"
//           : userRole === role.delivery_personnel
//           ? "/delivery"
//           : "/admin",
//       label: "Dashboard",
//     },
//   ];
//   return (
//     <header className="border-b sticky top-0 z-50 bg-white">
//       <div className="flex h-16 justify-between gap-4">
//         {/* Left side */}
//         <div className="flex gap-2">
//           <div className="flex items-center md:hidden">
//             {/* Mobile menu trigger */}
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button className="group size-8" variant="ghost" size="icon">
//                   <svg
//                     className="pointer-events-none"
//                     width={16}
//                     height={16}
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M4 12L20 12"
//                       className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
//                     />
//                     <path
//                       d="M4 12H20"
//                       className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
//                     />
//                     <path
//                       d="M4 12H20"
//                       className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
//                     />
//                   </svg>
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent align="start" className="w-36 p-1 md:hidden">
//                 <NavigationMenu className="max-w-none *:w-full">
//                   <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
//                     {navigationLinks.map((link, index) => (
//                       <NavigationMenuItem key={index}>
//                         <NavigationMenuLink
//                           asChild
//                           className="text-muted-foreground hover:text-primary py-1.5 font-medium"
//                         >
//                           <Link to={link.href}>{link.label}</Link>
//                         </NavigationMenuLink>
//                       </NavigationMenuItem>
//                     ))}
//                   </NavigationMenuList>
//                 </NavigationMenu>
//               </PopoverContent>
//             </Popover>
//           </div>
//           {/* Main nav */}
//           <div className="flex items-center gap-6">
//             <Link to="/" className="text-primary hover:text-primary/90">
//               <Logo />
//             </Link>
//             {/* Navigation menu */}
//             <NavigationMenu className="h-full *:h-full max-md:hidden">
//               <NavigationMenuList className="h-full gap-2">
//                 {navigationLinks.map((link, index) => (
//                   <NavigationMenuItem key={index}>
//                     <NavigationMenuLink
//                       asChild
//                       className="text-muted-foreground hover:text-primary py-1.5 font-medium"
//                     >
//                       <Link to={link.href}>{link.label}</Link>
//                     </NavigationMenuLink>
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>
//         </div>
//         {/* Right side */}
//         <div className="flex items-center gap-2">
//           {data?.success ? (
//             <>
//               <Button onClick={handleLogOut} variant={"outline"}>
//                 Log out
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button asChild size="sm" className="text-sm">
//                 <Link to="/login">Log In</Link>
//               </Button>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

//       href:

//       label: "Dashboard",
//     },
const Navbar = () => {
  const { data } = useGetMeQuery(undefined);
  const userRole = data?.data?.data?.role;
  return (
    <header className="pt-6 sticky top-0 bg-white pb-6 w-full px-8 z-[100] ">
      <nav className="hidden md:flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="bg-black rounded-4xl w-fit px-4 py-1">
            <Menu color="#fff" />
          </div>
          <ul className="flex items-center gap-5">
            <li className="flex items-center gap-2">
              <a href="#service">Service</a>
              <div className="border border-custom-red rounded-full w-fit p-0.5">
                <ArrowDown className="text-custom-red size-4" />
              </div>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/our-hubs">Our Hubs</Link>
            </li>
            <li>
              <Link
                to={
                  userRole === role.sender
                    ? "/sender"
                    : userRole === role.receiver
                      ? "/receiver"
                      : userRole === role.delivery_personnel
                        ? "/delivery"
                        : "/admin"
                }
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-20">
          <div>
            <Link to="/" className="flex items-center gap-2">
              Contact Us
              <div className="bg-custom-red w-fit rounded-full p-2">
                <PhoneCall className="text-white size-4" />
              </div>
            </Link>
          </div>
          <div className="space-x-4">
            {userRole ? (
              <button className="bg-custom-red px-4 py-2 rounded-4xl text-white cursor-pointer">
                Log out
              </button>
            ) : (
              <>
                <Link
                  to="/register"
                  className="px-4 py-1 bg-custom-red text-white rounded-full"
                >
                  Register
                </Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
