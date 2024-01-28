import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, cartSlice } from "./features/cart.slide";
import { userReducer, userSlice } from "./features/user.slide";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type AppStore = ReturnType<typeof store.dispatch>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
