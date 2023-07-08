import { ReactElement } from "react";
import authService from "../services/authService";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({
  router,
  children,
}: {
  router: AppRouterInstance;
  children: ReactElement;
}) => {
  const pathname = usePathname();
  const unprotectedRoutes = ["/auth"];

  let pathIsProtected = unprotectedRoutes.indexOf(pathname) === -1;

  if (isBrowser() && pathIsProtected && !authService.isUserAuthenticated()) {
    router.push("/auth");
  }

  return children;
};

export default ProtectedRoute;
