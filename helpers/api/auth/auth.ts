import fetch from "../index";
import Cookies from "universal-cookie";

//interfases
import { LoginData, RegisterData } from "./auth.types";

const auth = {
  async login(data: LoginData): Promise<void> {
    const cookies = new Cookies();

    try {
      const result = await fetch({
        url: "/auth/login/",
        method: "POST",
        data
      });

      cookies.set("accessToken", result.accessToken, { path: "/" });
      cookies.set("refreshToken", result.refreshToken, { path: "/" });
    } catch (e) {
      if (e.response) {
        throw e.response.data;
      }
    }
  },

  async register(data: RegisterData): Promise<void> {
    try {
      const result = await fetch({
        url: "/auth/register/",
        method: "POST",
        data
      });

      return result;
    } catch (e) {
      if (e.response) {
        throw e.response.data;
      }
    }
  },

  async profile(): Promise<any> {
    try {
      const result = await fetch({
        url: "/auth/profile",
        method: "GET",
      });

      return result;
    } catch (e) {
      if (e.response) {
        throw e.response.data;
      }
    }
  }
};

export default auth;
