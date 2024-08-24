/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {
  addTeacher,
  getAllTeacher,
  getCoursesTeacher,
  GetOneTeacher,
  setLoading,
} from "@store/slices/TeacherSlice";
import { Api } from "@utilities/Api";
import { ICourse, ITeacher } from "@utilities/interfaces/PublicInterfce";
import { toast } from "react-toastify";

export const GetAllTeacherApi = () => {
  return async (dispatch: Dispatch<PayloadAction<ITeacher[]>>) => {
    try {
      const { data } = await Api.get("Teacher/getteachers");
      dispatch(getAllTeacher(data));
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "حدث خطأ اثناء التحميل");
    }
  };
};

export const GetTeacherApi = (UserId: string) => {
  return async (dispatch: Dispatch<PayloadAction<ITeacher | null>>) => {
    try {
      const { data } = await Api.get(`Teacher/getTeacher/${UserId}`);
      localStorage.setItem("teacher", JSON.stringify(data));
      dispatch(GetOneTeacher(data));
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "حدث خطأ اثناء التحميل");
    }
  };
};

export const GetCoursesTeacherApi = (UserId: string) => {
  return async (dispatch: Dispatch<PayloadAction<ICourse[] | boolean>>) => {
    try {
      dispatch(setLoading(true));
      const { data } = await Api.get(`Course/getCoursesToTeacher/${UserId}`);
      dispatch(getCoursesTeacher(data));
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setLoading(false));
      toast.error(error?.response?.data?.message || "حدث خطأ اثناء التحميل");
    }
  };
};

export const AddTeacherApi = (Data: FormData) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      await Api.post(`Teacher/addTeacher`, Data);
      toast.success("تم اضافه المعلم بنجاح");
      dispatch(addTeacher(true));
    } catch (error: any) {
      console.log(error?.response?.data);
      if (Array.isArray(error?.response.data)) {
        if (error?.response.data[0].description) {
          let errorMessage = "";
          error?.response.data.forEach(
            (element: { code: string; description: string }) => {
              console.log(element);

              errorMessage += element.description;
            }
          );
          toast.error(errorMessage);
          return;
        }
        toast.error(error?.response.data.join(", "));
        return;
      } else if (Array.isArray(error?.response?.data?.errors)) {
        let errorMessage = "";
        error?.response.data.errors.forEach((element: string) => {
          errorMessage += element;
        });
        toast.error(errorMessage);
        return;
      }
      toast.error(error?.response.data.message);
    }
  };
};
