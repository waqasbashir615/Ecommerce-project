import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./services/core";
import authReducer from "./slice/auth";

const persistConfig = {
  key: "auth",
  storage,
};

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: persistReducer(persistConfig, authReducer), 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
