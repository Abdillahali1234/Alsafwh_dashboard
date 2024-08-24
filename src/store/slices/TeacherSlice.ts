import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICourse, ITeacher } from "@utilities/interfaces/PublicInterfce";

export interface IStateTeacher {
  teachers: ITeacher[];
  teacher: ITeacher | null;
  isLoading: boolean;
  CoursesTeacher: ICourse[];
  isAdded: boolean;
}

const initialState: IStateTeacher = {
  teachers: [],
  teacher: null,
  isLoading: false,
  CoursesTeacher: [],
  isAdded: false,
};

const TeacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    getAllTeacher: (state, action: PayloadAction<ITeacher[]>) => {
      state.teachers = action.payload;
    },
    GetOneTeacher: (state, action: PayloadAction<ITeacher | null>) => {
      state.teacher = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getCoursesTeacher: (state, action: PayloadAction<ICourse[]>) => {
      state.CoursesTeacher = action.payload;
    },
    addTeacher: (state, action: PayloadAction<boolean>) => {
      state.isAdded = action.payload;
    },
  },
});

export const {
  getAllTeacher,
  GetOneTeacher,
  setLoading,
  getCoursesTeacher,
  addTeacher,
} = TeacherSlice.actions;
export default TeacherSlice.reducer;
