import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      //ANOTHER WAY IS :   const { name, image, cost } = action.payload;

      const itemsArray = state.items;

      const alreadyPresent = itemsArray.find(
        (item) => item.name === plant.name
      );
      if (alreadyPresent) {
        alreadyPresent.quantity++;
      } else {
        itemsArray.push({ ...plant, quantity: 1 });
        ///ANOTHER WAY IS :     state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      let itemsArray = state.items;
      const plant = action.payload; // THE ACTION PAYLOAD CONTAINS PLANT OBJECT
      itemsArray = itemsArray.filter((item) => item.name !== plant.name);
      state.items = itemsArray;
    },

    updateQuantity: (state, action) => {
      const itemsArray = state.items;
      const plant = action.payload;
      const alreadyPresent = itemsArray.find(
        (item) => item.name === plant.name
      );
      if (alreadyPresent) {
        alreadyPresent.quantity = plant.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
