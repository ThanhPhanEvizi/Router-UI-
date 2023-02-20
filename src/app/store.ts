import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appSlice from "../redux/app/appSlice";

const rootReducer = combineReducers({
  app: appSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
