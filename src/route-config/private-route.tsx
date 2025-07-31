import type { RootState } from "@/store";
import type { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const isAuthenticated = Boolean(token);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
