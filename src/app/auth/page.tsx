"use client";

import LoginPage from "./pages/LoginPage";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <LoginPage
      success={() => {
        router.push("/");
      }}
    />
  );
}
