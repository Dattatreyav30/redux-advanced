import { configureStore, createSlice } from "@reduxjs/toolkit";

const intialCartState = { isCartVisible: true };

const cartSlice = createSlice({
  name: "cart",
  initialState: intialCartState,
  reducers: {
    toggleVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

const store = configureStore({ reducer: { cart: cartSlice.reducer } });

export const cartActions = cartSlice.actions;

export default store;
