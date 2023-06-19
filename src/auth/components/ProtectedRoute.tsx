import { ReactElement } from "react";
import authService from "../services/authService";

import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({
  router,
  children,
}: {
  router: AppRouterInstance;
  children: ReactElement;
}) => {
  const unprotectedRoutes = ["/auth"];

  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && pathIsProtected && !authService.isUserAuthenticated()) {
    router.push("/auth");
  }

  return children;
};

export default ProtectedRoute;
