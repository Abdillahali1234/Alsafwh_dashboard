import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILesson } from "@utilities/interfaces/PublicInterfce";

export interface IStateCourse {
  AllLessonsCourse: ILesson[];
  Lesson: ILesson | null;
  isLoading: boolean;
}

const initialState: IStateCourse = {
  AllLessonsCourse: [],
  Lesson: null,
  isLoading: false,
};

const LessonSlice = createSlice({
  name: "Lesson",
  initialState,
  reducers: {
    getAllLessonsToCourse: (state, action: PayloadAction<ILesson[]>) => {
      state.AllLessonsCourse = action.payload;
    },
    getLesson: (state, action: PayloadAction<ILesson>) => {
      state.Lesson = action.payload;
    },
    setLoadingLesson: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    addLesson:(state, action: PayloadAction<ILesson>) => {
      state.AllLessonsCourse.push(action.payload);
    }
  },
});

export const { getAllLessonsToCourse, getLesson, addLesson, setLoadingLesson } =
  LessonSlice.actions;
export default LessonSlice.reducer;
