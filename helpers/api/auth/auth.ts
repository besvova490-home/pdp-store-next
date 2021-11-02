import fetch from "../index";
import Cookies from "universal-cookie";

//helpers
import errorBoundary from "../../errorBoundary";

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
      errorBoundary(e);
    }
  },

  async loginFacebook(data: { token: string }): Promise<void> {
    const cookies = new Cookies();

    try {
      const result = await fetch({
        url: "/auth/login/facebook",
        method: "POST",
        data
      });

      cookies.set("accessToken", result.accessToken, { path: "/" });
      cookies.set("refreshToken", result.refreshToken, { path: "/" });
    } catch (e) {
      errorBoundary(e);
    }
  },

  async loginGoogle(data: { token: string }): Promise<void> {
    const cookies = new Cookies();

    try {
      const result = await fetch({
        url: "/auth/login/google",
        method: "POST",
        data
      });

      cookies.set("accessToken", result.accessToken, { path: "/" });
      cookies.set("refreshToken", result.refreshToken, { path: "/" });
    } catch (e) {
      errorBoundary(e);
    }
  },

  async loginGitHub(data: { code: string }): Promise<void> {
    const cookies = new Cookies();

    try {
      const result = await fetch({
        url: "auth/login/git-hub",
        method: "POST",
        data
      });

      cookies.set("accessToken", result.accessToken, { path: "/" });
      cookies.set("refreshToken", result.refreshToken, { path: "/" });
    } catch (e) {
      errorBoundary(e);
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
      errorBoundary(e);
    }
  },

  async registerGoogle(data: { token: string }): Promise<void> {
    const cookies = new Cookies();
    
    try {
      const result = await fetch({
        url: "/auth/register/google",
        method: "POST",
        data
      });

      cookies.set("accessToken", result.accessToken, { path: "/" });
      cookies.set("refreshToken", result.refreshToken, { path: "/" });
    } catch (e) {
      errorBoundary(e);
    }
  },

  async registerFacebook(data: { token: string }): Promise<void> {
    const cookies = new Cookies();
    
    try {
      const result = await fetch({
        url: "/auth/register/facebook/",
        method: "POST",
        data
      });

      cookies.set("accessToken", result.accessToken, { path: "/" });
      cookies.set("refreshToken", result.refreshToken, { path: "/" });
    } catch (e) {
      errorBoundary(e);
    }
  },

  async profile(): Promise<Record<string, unknown>> {
    try {
      const result = await fetch({
        url: "/auth/profile",
        method: "GET",
      });

      return result;
    } catch (e) {
      errorBoundary(e);
    }
  }
};

export default auth;
