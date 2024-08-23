import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProblem } from "@utilities/interfaces/PublicInterfce";

export interface IProblemState {
  isLoading: boolean;
  problems: IProblem[];
}

const initialState: IProblemState = {
  isLoading: false,
  problems: [],
};

const ProblemSlice = createSlice({
  name: "problem",
  initialState,
  reducers: {
    getAllProblems: (state, action: PayloadAction<IProblem[]>) => {
      state.problems = action.payload;
    },
    setLoadingProblem: (state, action:PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    makeReading:(state, action:PayloadAction<string>) =>{
    
    state.problems.forEach(problem => {
        if (problem.id === action.payload) {
          problem.isReading = true;
        }
      });


    },
    deleteProblem:(state, action:PayloadAction<string>) =>{
      state.problems = state.problems.filter(problem => problem.id!== action.payload);
    }
  },
});

export const { getAllProblems, setLoadingProblem, makeReading, deleteProblem } =
  ProblemSlice.actions;

export default ProblemSlice.reducer;
