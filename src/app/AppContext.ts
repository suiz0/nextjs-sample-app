"use client";

import { AxiosInstance } from "axios";
import React from "react";

export interface ApplicationContext {
  client?: AxiosInstance;
}
const AppContext = React.createContext<ApplicationContext>({});

export default AppContext;
