/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { getAllSubscriptionStudent } from "@store/slices/SubscriptionSlice";
import { Api } from "@utilities/Api";
import {
  IPayMentSendingData,
  ISubscriptionStudent,
} from "@utilities/interfaces/PublicInterfce";
import { toast } from "react-toastify";

export const AddSubscriptionApi = (Data: IPayMentSendingData) => {
  return async (dispatch: Dispatch<PayloadAction<string>>) => {
    try {
      const { data } = await Api.post(
        "SubscriptionUser/AddSubscriptionUser",
        Data
      );
      console.log(data);
      toast.success("تم اضافه الاشتراك بنجاح");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "حدث خطأ اثناء التحميل");
    }
  };
};

export const GetAllSubscriptionStudentApi = (id: number) => {
  return async (dispatch: Dispatch<PayloadAction<ISubscriptionStudent[]>>) => {
    try {
      const { data } = await Api.get(
        `SubscriptionUser/GetAllSubscription/${id}`
      );
      console.log(data);
      
      dispatch(getAllSubscriptionStudent(data));
    } catch (error: any) {
      console.log(error.response);
      
      toast.error(error?.response?.data?.message || "حدث خطأ اثناء التحميل");
    }
  };
};
