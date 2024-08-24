import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISubscriptionStudent } from "@utilities/interfaces/PublicInterfce";

export interface IStateSubscription {
  subscriptionStudent: ISubscriptionStudent[];
}

const initialState: IStateSubscription = {
  subscriptionStudent: [],
};

const SubscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    getAllSubscriptionStudent: (
      state,
      action: PayloadAction<ISubscriptionStudent[]>
    ) => {
      state.subscriptionStudent = action.payload;
    },
  },
});

export const { getAllSubscriptionStudent } = SubscriptionSlice.actions;
export default SubscriptionSlice.reducer;
