import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthCredentials, IAuthState } from "./auth.interfaces";

const initialState: IAuthState = {
  token: null,
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<IAuthCredentials>) => {
      console.log("setting credentials", action.payload);

      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    setLogout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, setLogout } = authSlice.actions;
export default authSlice.reducer;
