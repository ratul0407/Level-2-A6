// import { useGetMeQuery } from "@/redux/features/auth/auth.api";
// import { TRole } from "@/types";
// import { Component, ComponentType } from "react";
// import { useNavigate } from "react-router";

// export const withAuth = <P extends object>(
//   Component: ComponentType<P>,
//   requiredRole?: TRole
// ) => {
//   return function AuthWrapper() {
//     const navigate = useNavigate();
//     const { data, isLoading } = useGetMeQuery(undefined);

//     if (!isLoading && !data?.data?.email) {
//       return navigate("/login");
//     }

//     if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
//       return navigate("/unauthorized");
//     }

//     return <Component />;
//   };
// };
