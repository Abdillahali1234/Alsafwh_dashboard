/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {
  getStudent,
  getCoursesStudent,
  setLoadingStudent,
  getAllStudents,
  confirmStudent,
} from "@store/slices/StudentSlice";
import { Api } from "@utilities/Api";
import { ICourse } from "@utilities/interfaces/PublicInterfce";
import { IStudent } from "@utilities/interfaces/StudentInterfce";
import { toast } from "react-toastify";

export const GetStudentApi = (studentId: string) => {
  return async (dispatch: Dispatch<PayloadAction<IStudent | boolean>>) => {
    try {
      dispatch(setLoadingStudent(true));
      const { data } = await Api.get(`Student/getstudent/${studentId}`);
      dispatch(getStudent(data));
      dispatch(setLoadingStudent(false));
    } catch (error: any) {
      dispatch(setLoadingStudent(false));
      console.log(error.response.student);
      toast.error("Failed to fetch student!");
    }
  };
};
export const ConfirmStudent = (studentId: string) => {
  return async (dispatch: Dispatch<PayloadAction<string | boolean>>) => {
    try {
      dispatch(setLoadingStudent(true));
      await Api.patch(`Student/ConfirmStudent/${studentId}`);
      dispatch(confirmStudent(studentId));
      dispatch(setLoadingStudent(false));
      toast.success("تم تأكيد الطالب!");
    } catch (error: any) {
      dispatch(setLoadingStudent(false));
      console.log(error.response.student);
      toast.error("Failed to confirm student!");
    }
  };
};

export const GetCoursesToStudentApi = (studentId: string) => {
  return async (dispatch: Dispatch<PayloadAction<ICourse[] | boolean>>) => {
    try {
      dispatch(setLoadingStudent(true));
      const { data } = await Api.get(`Course/getCoursesStudent/${studentId}`);

      dispatch(getCoursesStudent(data));
      dispatch(setLoadingStudent(false));
    } catch (error: any) {
      dispatch(setLoadingStudent(false));
      if (error.response.status !== 404) {
        toast.error(error.response.data.message || "لم يتم تحميل الداتا");
      }
    }
  };
};

export const GetAllStudentsApi = () => {
  return async (dispatch: Dispatch<PayloadAction<IStudent[] | boolean>>) => {
    try {
      dispatch(setLoadingStudent(true));
      const { data } = await Api.get(`Student/getAllStudents`);
      dispatch(getAllStudents(data));
      dispatch(setLoadingStudent(false));
    } catch (error: any) {
      dispatch(setLoadingStudent(false));
      if (error.response.status !== 404) {
        console.log(error.response.data);

        toast.error(error.response.data.message || "لم يتم تحميل الداتا");
      }
    }
  };
};
