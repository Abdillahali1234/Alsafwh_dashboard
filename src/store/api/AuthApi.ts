/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { LogIn } from "@store/slices/AuthSlice";
import { Api } from "@utilities/Api";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
import { logout } from "@store/slices/UserSlice";

export const LoginApi = (email: string, password: string, en: string) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      const { data } = await Api.post(`/Auth/login`, { email, password });
      const cookies = new Cookies();
      const expires = new Date(data.refreshTokenExpiresOn);

      if (isNaN(expires.getTime())) {
        throw new Error(
          `Invalid expiration date: ${data.refreshTokenExpiresOn}`
        );
      }

      if (data.roles[0] !== "Admin") {
        toast.error("Access denied");
        return;
      }

      cookies.set("refreshTokenAdmin", data.refrashToken, {
        path: "/",
        expires: expires,
      });

      cookies.set("authModelAdmin", JSON.stringify(data), {
        path: "/",
        expires: expires,
      });

      dispatch(LogIn(data));
      toast.success(
        en == "ar"
          ? "تم تسجيل الدخول بنجاح"
          : "You have successfully logged in."
      );
    } catch (error: any) {
      console.error("Error during login:", error);
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };
};

export const LogOutApi = (lang: string) => {
  return async (dispatch: Dispatch<PayloadAction<void>>) => {
    try {
      const cookies = new Cookies();
      cookies.remove("RefreashToken", { path: "/" });
      cookies.remove("refreshTokenAdmin", { path: "/" });
      cookies.remove("authModelAdmin", { path: "/" });
      dispatch(LogIn(null));

      dispatch(logout());
      
      toast.success(
        lang == "ar"
          ? "تم تسجيل الخروج بنجاح"
          : "You have successfully logged out."
      );
    } catch (error) {
      console.log(error);
    }
  };
};
