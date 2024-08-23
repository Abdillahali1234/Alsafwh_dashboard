/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { Api } from "@utilities/Api";
import { toast } from "react-toastify";
import { IProblem } from "@utilities/interfaces/PublicInterfce";
import {
  getAllProblems,
  makeReading,
  deleteProblem,
} from "@store/slices/ProblemSlice";

export const GetAllProblemsApi = () => {
  return async (dispatch: Dispatch<PayloadAction<IProblem[]>>) => {
    try {
      const { data } = await Api.get("Problem/GetAll");
      dispatch(getAllProblems(data));
    } catch (error: any) {
      console.log(error?.response?.data);

      toast.error(error?.response?.data?.message || "حدث خطأ اثناء التحميل");
    }
  };
};
export const MakeReadingApi = (id: string) => {
  return async (dispatch: Dispatch<PayloadAction<string>>) => {
    try {
      await Api.patch(`Problem/makeReading/${id}`);
      dispatch(makeReading(id));
      toast.success("تم تغيير حالة المشكله");
    } catch (error: any) {
      console.log(error?.response?.data);
      toast.error(error?.response?.data?.message || "حدث خطأ اثناء التحميل");
    }
  };
};
export const DeleteProblemApi = (id: string) => {
  return async (dispatch: Dispatch<PayloadAction<string>>) => {
    try {
      await Api.delete(`Problem/delete/${id}`);
      dispatch(deleteProblem(id));
      toast.success("تم  حذف  المشكله");
    } catch (error: any) {
      console.log(error?.response?.data);
      toast.error(error?.response?.data?.message || "حدث خطأ اثناء التحميل");
    }
  };
};
