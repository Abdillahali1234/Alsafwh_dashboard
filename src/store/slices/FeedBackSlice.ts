import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFeedBack } from "@utilities/interfaces/PublicInterfce";

export interface IStateFeedback {
  isLoading: boolean;
  isSubmitted: boolean;
  NotConfirmedFeedbacks: IFeedBack[];
  AllFeedBackConfirmed: IFeedBack[];
}
const initialState: IStateFeedback = {
  isLoading: false,
  isSubmitted: false,
  NotConfirmedFeedbacks: [],
  AllFeedBackConfirmed: [],
};

const FeedBackSlice = createSlice({
  name: "Feedback",
  initialState,
  reducers: {
    getNotConfirmedFeedbacks: (state, action: PayloadAction<IFeedBack[]>) => {
      state.NotConfirmedFeedbacks = action.payload;
    },
    confirmFeedback: (state, action: PayloadAction<string>) => {
      state.AllFeedBackConfirmed.push(
        state.NotConfirmedFeedbacks.find(
          (e) => e.id === action.payload
        ) as IFeedBack
      );
      state.NotConfirmedFeedbacks = state.NotConfirmedFeedbacks.filter(
        (e) => e.id !== action.payload
      );
    },
    deleteFeedback: (state, action) => {
      state.NotConfirmedFeedbacks = state.NotConfirmedFeedbacks.filter(
        (e) => e.id !== action.payload
      );
    },
    getAllFeedBackConfirmed: (state, action: PayloadAction<IFeedBack[]>) => {
      state.AllFeedBackConfirmed = action.payload;
    },
    deleteFeedBackConfirmed: (state, action: PayloadAction<string>) => {
      state.AllFeedBackConfirmed = state.AllFeedBackConfirmed.filter(
        (e) => e.id !== action.payload
      );
    },
  },
});

export const {
  getNotConfirmedFeedbacks,
  confirmFeedback,
  deleteFeedback,
  getAllFeedBackConfirmed,
  deleteFeedBackConfirmed,
} = FeedBackSlice.actions;
export default FeedBackSlice.reducer;
