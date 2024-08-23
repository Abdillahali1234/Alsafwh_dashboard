/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {
  confirmFeedback,
  deleteFeedback,
  deleteFeedBackConfirmed,
  getAllFeedBackConfirmed,
  getNotConfirmedFeedbacks,
} from "@store/slices/FeedBackSlice";
import { Api } from "@utilities/Api";
import { IFeedBack } from "@utilities/interfaces/PublicInterfce";
import { toast } from "react-toastify";

export const GetAllNotConfirmedFeedbackApi = () => {
  return async (dispatch: Dispatch<PayloadAction<IFeedBack[]>>) => {
    try {
      const { data } = await Api.get("Feedback/getAllNotConfirm");
      dispatch(getNotConfirmedFeedbacks(data));
    } catch (error: any) {
      toast.error(error.response.data.message || "Error in Get Feedbacks");
    }
  };
};
export const GetAllConfirmedFeedbackApi = () => {
  return async (dispatch: Dispatch<PayloadAction<IFeedBack[]>>) => {
    try {
      const { data } = await Api.get("Feedback/getAllFeedback");
      dispatch(getAllFeedBackConfirmed(data));
    } catch (error: any) {
      toast.error(error.response.data.message || "Error in Get Feedbacks");
    }
  };
};

export const ConfirmFeedBackApi = (id: string) => {
  return async (dispatch: Dispatch<PayloadAction<string>>) => {
    try {
      await Api.patch(`Feedback/ConfirmFeedBack/${id}`);
      toast.success("تم تأكيد الرأي");
      dispatch(confirmFeedback(id));
    } catch (error: any) {
      toast.error(error.response.data.message || "Error in Get Feedbacks");
    }
  };
};

export const DeleteFeedBackApi = (id: string, con: boolean = false) => {
  return async (dispatch: Dispatch<PayloadAction<string>>) => {
    try {
      await Api.delete(`Feedback/deleteFeedback/${id}`);
      toast.success("تم حذف الرأي");
      if (!con) {
        dispatch(deleteFeedback(id));
      } else {
        dispatch(deleteFeedBackConfirmed(id));
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "Error in Get Feedbacks");
    }
  };
};
