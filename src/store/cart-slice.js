import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const addedItem = action.payload;

      let existingItem = state.items.find((item) => item.id === addedItem.id);

      state.totalQty++;

      if (existingItem) {
        existingItem.qty = existingItem.qty + 1;
        existingItem.totPrice = existingItem.qty * existingItem.price;
      } else {
        state.items.push({
          id: addedItem.id,
          title: addedItem.title,
          price: addedItem.price,
          qty: 1,
          totPrice: addedItem.price,
        });
      }
    },

    decreaseItem(state, action) {
      const id = action.payload;

      let existingItem = state.items.find((item) => item.id === id);

      state.totalQty--;

      if (existingItem.qty === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.qty = existingItem.qty - 1;
        existingItem.totPrice = existingItem.qty * existingItem.price;
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
