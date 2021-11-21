import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
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

const store = configureStore({
  reducer: { counter: counterSlice.reducer, Auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
