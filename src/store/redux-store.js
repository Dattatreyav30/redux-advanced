import { configureStore, createSlice } from "@reduxjs/toolkit";

const intialCartState = { isCartVisible: true };
const intialCartMethodState = { quantity: 1, items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: intialCartState,
  reducers: {
    toggleVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

const cartMethodSlice = createSlice({
  name: "cartMthods",
  initialState: intialCartMethodState,
  reducers: {
    increaseQty(state) {
      state.quantity++;
    },
    decreaseQty(state) {
      state.quantity--;
    },
    addItem(state, action) {
      state.items = [action.payload, ...state.items];
    },
    removeItem(state, action) {
      state.items = [...action.payload];
    },
  },
});
const store = configureStore({
  reducer: { cart: cartSlice.reducer, cartMethod: cartMethodSlice.reducer },
});

export const cartActions = cartSlice.actions;
export const cartMethodActions = cartMethodSlice.actions;

export default store;
