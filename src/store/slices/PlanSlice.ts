import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISubscriptionPlan } from "@utilities/interfaces/PublicInterfce";

export interface IStateSubscription {
  plans: ISubscriptionPlan[];
  plan: ISubscriptionPlan | null;
}

const initialState: IStateSubscription = {
  plans: [],
  plan: null,
};

const PlanSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    getAllPlans: (state, action: PayloadAction<ISubscriptionPlan[]>) => {
      state.plans = action.payload;
    },
    getPlan: (state, action: PayloadAction<ISubscriptionPlan>) => {
      state.plan = action.payload;
    },
  },
});

export const { getAllPlans, getPlan } = PlanSlice.actions;
export default PlanSlice.reducer;
