import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, cartSlice } from "./features/cart.slide";
import { userReducer, userSlice } from "./features/user.slide";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [cartSlice.name]: cartReducer,
      [userSlice.name]: userReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
