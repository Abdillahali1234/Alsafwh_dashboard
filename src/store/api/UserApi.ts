/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { Api } from "@utilities/Api";
import { toast } from "react-toastify";
import { IUser } from "@utilities/interfaces/PublicInterfce";
import { getUser } from "@store/slices/UserSlice";

export const GetUserApi = (userId: string) => {
  return async (dispatch: Dispatch<PayloadAction<IUser>>) => {
    try {
      const { data } = await Api.get(`/User/getUser/${userId}`);
      localStorage.setItem("admin", JSON.stringify(data));
      dispatch(getUser(data));
    } catch (error: any) {
      console.error("Error during login:", error);
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };
};
