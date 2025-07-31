import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// ✅ Define user type (you can customize fields as needed)
export interface UserType {
  id: string;
  name: string;
  email: string;
}

// ✅ Auth state interface
export interface AuthState {
  token: string | null;
  user: UserType | null;
}

// ✅ Initial state
const initialState: AuthState = {
  token: null,
  user: null,
};

// ✅ Create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

// ✅ Export actions and reducer
export const { setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
