import { createSlice } from "@reduxjs/toolkit";

import { ICourse, ISubject } from "@utilities/interfaces/PublicInterfce";

export interface ISingleMateriel extends ISubject {
  courses: ICourse[];
}

export interface IStateSubject {
  subjects: ISubject[];
  subject: ISingleMateriel | null;
}

const initialState: IStateSubject = {
  subjects: [],
  subject: null,
};

const SubjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    getAllSubject: (state, action) => {
      state.subjects = action.payload;
    },
    getSingleMateriel: (state, action) => {
      state.subject = action.payload;
    },
  },
});

export const { getAllSubject, getSingleMateriel } = SubjectSlice.actions;
export default SubjectSlice.reducer;
