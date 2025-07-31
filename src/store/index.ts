import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./services/core";
import authReducer, { type AuthState } from "./slice/auth"; // ✅ Named import of AuthState

// ✅ Persist config
const persistConfig = {
  key: "auth",
  storage,
};

// ✅ Persisted reducer with type
const persistedAuthReducer = persistReducer<AuthState>(persistConfig, authReducer);

// ✅ Configure store
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

setupListeners(store.dispatch);

// ✅ Exports
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
