/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {
  addCourse,
  getCourse,
  getCourses,
  setLoadingCourse,
} from "@store/slices/CourseSlice";
import { Api } from "@utilities/Api";
import { IAddCourseData, ICourse } from "@utilities/interfaces/PublicInterfce";
import { toast } from "react-toastify";

export const GetAllCoursesApi = () => {
  return async (dispatch: Dispatch<PayloadAction<ICourse[] | boolean>>) => {
    try {
      dispatch(setLoadingCourse(true));
      const { data } = await Api.get(`Course/getAll?sort=true`);
      dispatch(setLoadingCourse(false));
      dispatch(getCourses(data));
    } catch (error: any) {
      dispatch(setLoadingCourse(false));
      toast.error(
        error.response?.data?.message || "Error in getting all courses"
      );
    }
  };
};

export const AddCourseApi = (Data: IAddCourseData) => {
  return async (dispatch: Dispatch<PayloadAction<ICourse | boolean>>) => {
    try {
      dispatch(setLoadingCourse(true));
      const { data } = await Api.post(`Course/addCourse`, Data);
      dispatch(setLoadingCourse(false));
      dispatch(addCourse(data));
      toast.success("Course added successfully");
    } catch (error: any) {
      dispatch(setLoadingCourse(false));

      toast.error(
        error.response?.data?.message || "Error in getting all courses"
      );
    }
  };
};

export const GetCourseApi = (id: string) => {
  return async (dispatch: Dispatch<PayloadAction<ICourse | boolean>>) => {
    try {
      dispatch(setLoadingCourse(true));
      const { data } = await Api.get(`Course/getById/${id}`);
      dispatch(setLoadingCourse(false));
      dispatch(getCourse(data));
    } catch (error: any) {
      dispatch(setLoadingCourse(false));
      toast.error(
        error.response?.data?.message || "Error in getting one courses"
      );
    }
  };
};
