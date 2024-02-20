import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({ auth: authReducer });
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
