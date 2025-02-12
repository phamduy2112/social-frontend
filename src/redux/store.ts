import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Sử dụng localStorage cho web
import { authReducer } from "./auth/Auth.slice";
import { userReducer } from "./auth/User.slice";


const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ['userReducer'], // Chỉ persist `user` và `cart`
};

const rootReducer = combineReducers({
    auth:authReducer,
    userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production', // Enable dev tools in non-production environments

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;