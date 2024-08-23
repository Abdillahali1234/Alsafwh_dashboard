import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICourse } from "@utilities/interfaces/PublicInterfce";
export interface StateInterface {
  IsLoading: boolean;
  Courses: ICourse[];
  isAdded: boolean;
  course: ICourse | null;
}

const initialState: StateInterface = {
  IsLoading: false,
  Courses: [],
  isAdded: false,
  course: null,
};

const CourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    getCourses: (state, action: PayloadAction<ICourse[]>) => {
      state.Courses = action.payload;
    },
    setLoadingCourse: (state, action: PayloadAction<boolean>) => {
      state.IsLoading = action.payload;
    },
    addCourse: (state, action: PayloadAction<ICourse>) => {
      state.Courses.push(action.payload);
      state.isAdded = true;
    },
    getCourse: (state, action: PayloadAction<ICourse>) => {
      state.course = action.payload;
    },
  },
});
export const { getCourses, getCourse, setLoadingCourse, addCourse } =
  CourseSlice.actions;

export default CourseSlice.reducer;
