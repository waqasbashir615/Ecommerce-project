// import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
// import { type ReactNode } from "react";

// const RouteGuard = ({ children }: { children: ReactNode }) => {
//   const { isAuthenticated, isLoading } = useKindeAuth();

//   if (isLoading) {
//     return (
//       <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-background">
//         <Loader2 className="size-16 animate-spin text-primary" />
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default RouteGuard;
