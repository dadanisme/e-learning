import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import user from "./slices/user";

const store = configureStore({
  reducer: {
    user,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
