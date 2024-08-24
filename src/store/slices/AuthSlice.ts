import { createSlice } from "@reduxjs/toolkit";
import { IAuthModel } from "@utilities/interfaces/AuthInterface";
import { Cookies } from "react-cookie";


  
export interface StateInterface {
  IsLoading: boolean;
  AuthModel: IAuthModel | null;
}





const cookies = new Cookies();
const AuthModelStored = cookies.get("authModelAdmin");

const initialState: StateInterface = {
  IsLoading: false,
  AuthModel: AuthModelStored ? AuthModelStored : null,

};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LogIn: (state, action) => {
      state.AuthModel = action.payload;
    },
  
  },
});

export const { LogIn } = AuthSlice.actions;

export default AuthSlice.reducer;
