import { AxiosInstance } from "axios";
import { isBrowser } from "../../../utils";
import { UserData } from "../types";

const readJWT = (): string | null => {
  if (isBrowser()) {
    return window.localStorage.getItem("auth.token");
  }

  return null;
};

const login = (apiClient: AxiosInstance, user: UserData) => {
  //if (isBrowser()) {
  return apiClient.post("/auth/login", user).then((response) => {
    window.localStorage.setItem("auth.token", response.data.access_token);
  });
  //}
};

const logout = () => {
  if (isBrowser()) {
    return window.localStorage.removeItem("auth.token");
  }
};

const isUserAuthenticated = () => {
  return readJWT() !== null;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  readJWT,
  login,
  isUserAuthenticated,
  logout,
};
