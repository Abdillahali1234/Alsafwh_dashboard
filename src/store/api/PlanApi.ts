/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { getAllPlans, getPlan } from "@store/slices/PlanSlice";
import { Api } from "@utilities/Api";
import { toast } from "react-toastify";
import { ISubscriptionPlan } from '@utilities/interfaces/PublicInterfce';

export const GetAllSubscriptionApi = () => {
  return async (dispatch: Dispatch<PayloadAction<ISubscriptionPlan[]>>) => {
    try {
      const { data } = await Api.get(`Subscription/getallsubscription`);
      dispatch(getAllPlans(data.mappedResults));
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "حدث خطأ اثناء التحميل");
    }
  };
};

export const GetSubscriptionApi = (planId: number) => {
  return async (dispatch: Dispatch<PayloadAction<ISubscriptionPlan>>) => {
    try {
      const { data } = await Api.get(`Subscription/getPlan/${planId}`);
      dispatch(getPlan(data));
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "حدث خطأ اثناء التحميل");
    }
  };
};
