import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IYear } from "@utilities/interfaces/PublicInterfce";

export interface IYearState {
  years: IYear[];
}

const initialState: IYearState = {
  years: [],
};

const YearSlice = createSlice({
  name: "years",
  initialState,
  reducers: {
    getAllYear: (state, action: PayloadAction<IYear[]>) => {
      state.years = action.payload;
    },
  },
});

export const { getAllYear } = YearSlice.actions;
export default YearSlice.reducer;
