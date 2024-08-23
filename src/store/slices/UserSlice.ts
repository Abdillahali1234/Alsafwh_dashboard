import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "@utilities/interfaces/PublicInterfce";
export interface StateInterface {
  IsLoading: boolean;
  user: IUser | null;
  isLogout: boolean;
}

const userData = localStorage.getItem("admin");
const initialState: StateInterface = {
  IsLoading: false,
  user: userData ? JSON.parse(userData) : null,
  isLogout: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("admin");
      state.isLogout = true;
    },
  },
});

export const { getUser, logout } = UserSlice.actions;

export default UserSlice.reducer;
