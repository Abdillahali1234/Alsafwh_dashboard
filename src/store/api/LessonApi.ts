/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {
  addLesson,
  getAllLessonsToCourse,
  getLesson,
  setLoadingLesson,
} from "@store/slices/LessonSlice";
import { Api } from "@utilities/Api";
import { ILesson } from "@utilities/interfaces/PublicInterfce";
import { toast } from "react-toastify";

export const GetLessonsCourseApi = (courseId: string) => {
  return async (dispatch: Dispatch<PayloadAction<ILesson[] | boolean>>) => {
    try {
      dispatch(setLoadingLesson(true));
      const { data } = await Api.get(`Lession/GetLessonsToCourse/${courseId}`);
      dispatch(setLoadingLesson(false))      
      dispatch(getAllLessonsToCourse(data));
    } catch (error: any) {
      dispatch(setLoadingLesson(false));
      console.log(error);
    }
  };
};

export const GetLessonApi = (LessonId: string) => {
  return async (dispatch: Dispatch<PayloadAction<ILesson>>) => {
    try {
      const { data } = await Api.get(`Lession/getlession/${LessonId}`);

      dispatch(getLesson(data));
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const AddLessonApi = (
  Data: Omit<ILesson, "containQuize" | "quize" | "id">
) => {
  return async (dispatch: Dispatch<PayloadAction<ILesson |boolean>>) => {
    try {
      dispatch(setLoadingLesson(true));
      const { data } = await Api.post(`Lession/addlession`, Data);
      
      dispatch(addLesson(data.lesion));
      toast.success("تم اضافه الدرس بنجاح");
      dispatch(setLoadingLesson(false));
    } catch (error: any) {
      dispatch(setLoadingLesson(false));
      console.log(error);
    }
  };
};
