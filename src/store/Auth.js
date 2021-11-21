import { createSlice } from "@reduxjs/toolkit";

const AuthState = { Auth: false };

const authSlice = createSlice({
  name: "auth",
  initialState: AuthState,
  reducers: {
    login(state) {
      state.Auth = true;
    },
    logout(state) {
      state.Auth = false;
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
