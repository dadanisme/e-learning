import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export type UserState = {
  role: "admin" | "user" | null;
  name: string;
  loading: boolean;
};

const initialState: UserState = {
  role: null,
  name: "",
  loading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<UserState["role"]>) {
      state.role = action.payload;
    },
    setName(state, action: PayloadAction<UserState["name"]>) {
      state.name = action.payload;
    },
    setLoading(state, action: PayloadAction<UserState["loading"]>) {
      state.loading = action.payload;
    },
  },
});

export const { setRole, setName, setLoading } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
