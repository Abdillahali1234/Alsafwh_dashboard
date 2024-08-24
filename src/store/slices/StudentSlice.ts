import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICourse } from "@utilities/interfaces/PublicInterfce";
import { IStudent } from "@utilities/interfaces/StudentInterfce";

export interface IStartState {
  student: IStudent | null;
  loading: boolean;
  studentCourses: ICourse[];
  students: IStudent[];
}

const initialState: IStartState = {
  student: null,
  loading: false,
  studentCourses: [],
  students: [],
};

const StudentSlice = createSlice({
  name: "Student",
  initialState,
  reducers: {
    getStudent: (state, action: PayloadAction<IStudent>) => {
      state.student = action.payload;
    },
    setLoadingStudent: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    getCoursesStudent: (state, action: PayloadAction<ICourse[]>) => {
      state.studentCourses = action.payload;
    },
    getAllStudents: (state, action: PayloadAction<IStudent[]>) => {
      state.students = action.payload;
    },
    confirmStudent: (state, action: PayloadAction<string>) => {
      if (state.student && state.student.user.id === action.payload) {
        state.student.isConfirmedFromAdmin = true;
      }
    },
  },
});

export const {
  getStudent,
  setLoadingStudent,
  getAllStudents,
  getCoursesStudent,
  confirmStudent,
} = StudentSlice.actions;

export default StudentSlice.reducer;
