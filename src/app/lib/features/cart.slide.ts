"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface CartItem {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
  color: string;
}

interface CartState {
  items: CartItem[];
}

const getLocalStorage = (): CartState => {
  return JSON.parse(localStorage.getItem("cart") || "null") || { items: [] };
};

const saveLocalStorage = (cart: CartState) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  reducerPath: "cart",
  initialState: getLocalStorage(),
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.color === action.payload.color
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.color = action.payload.color;
      } else {
        state.items.push(action.payload);
      }
      toast.success("Đã thêm sản phẩm vào giỏ hàng.");
      saveLocalStorage(state);
    },
    removeItem(state, action: PayloadAction<{ id: number }>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      toast.success("Đã xóa khỏi giỏ hàng.");
      saveLocalStorage(state);
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      saveLocalStorage(state);
    },
    updateColor(state, action: PayloadAction<{ id: number; color: string }>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.color = action.payload.color;
      }
      saveLocalStorage(state);
    },

    clearCart(state) {
      state.items = [];
      saveLocalStorage(state);
    },
  },
});

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export { cartSlice, cartReducer, cartActions };
