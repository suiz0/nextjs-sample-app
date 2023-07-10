"use client";

import LoginPage from "./pages/LoginPage";
import { useRouter } from "next/navigation";
import AppContext, { ApplicationContext } from "../AppContext";
import { useContext } from "react";
import authService from "./services/authService";
import { UserData } from "./types";

export default function Page() {
  const appContext = useContext<ApplicationContext>(AppContext);
  const router = useRouter();
  return (
    <LoginPage
      login={(data: UserData) => {
        return authService.login(appContext.client!, data);
      }}
      success={() => {
        router.push("/panel/dashboard");
      }}
    />
  );
}
