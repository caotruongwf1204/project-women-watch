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

const CART_LOCAL_STORAGE_KEY = "cart";

const loadCartFromLocalStorage = (): CartState | undefined => {
  const storedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
  return storedCart ? JSON.parse(storedCart) : undefined;
};

const saveCartToLocalStorage = (state: CartState): void => {
  localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(state));
};

const cartSlice = createSlice({
  name: "cart",
  reducerPath: "cart",
  initialState: loadCartFromLocalStorage() || { items: [] },
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.color === action.payload.color
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      toast.success("Đã thêm sản phẩm vào giỏ hàng.");
      saveCartToLocalStorage(state);
    },
    removeItem(state, action: PayloadAction<{ id: number }>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      toast.success("Đã xóa khỏi giỏ hàng.");
      saveCartToLocalStorage(state);

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
      saveCartToLocalStorage(state);

    },
    clearCart(state) {
      state.items = [];
      saveCartToLocalStorage(state);
    },
  },
});

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export { cartSlice, cartReducer, cartActions };
