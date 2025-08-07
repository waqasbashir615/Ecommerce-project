// store/index.ts

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./services/core";
import authReducer, { type AuthState } from "./slice/auth";
import wishlistReducer from "./slice/wishlist-list"; // ✅ added

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer<AuthState>(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: persistedAuthReducer,
    wishlist: wishlistReducer, // ✅ added here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
