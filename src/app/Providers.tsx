"use client";

import httpClient from "@/http";
import AppContext from "./AppContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContext.Provider value={{ client: httpClient({ baseUrl: "/api" }) }}>
      {children}
    </AppContext.Provider>
  );
};

export default Providers;
