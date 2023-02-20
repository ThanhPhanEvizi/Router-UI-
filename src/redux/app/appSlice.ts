import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { saveUserRole } from "../../services/auth";

export interface AuthState {
  role: string;
}

const initialState: AuthState = {
  role: "",
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    changeRole(state, action: PayloadAction<any>) {
      state.role = action.payload;
      saveUserRole(action.payload);
    },
  },
});

//Actions
export const { changeRole } = appSlice.actions;

//Selectors
export const selectRole = (state: RootState) => state.app.role;

//Reducer
const appReducer = appSlice.reducer;
export default appReducer;
