import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addCartData: JSON.parse(localStorage.getItem("cartdata")) || [],
};

const addCartSlice = createSlice({
  name: "addCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.addCartData.find(
        (item) => item.productId.id === productId.id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.addCartData.push({ productId, quantity });
      }
      localStorage.setItem("cartdata", JSON.stringify(state.addCartData));
    },
    removetoCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.addCartData = state.addCartData.filter(
        (item) => item?.productId?.id !== productIdToRemove
      );
      localStorage.setItem("cartdata", JSON.stringify(state.addCartData));
    },
    removeAll: (state, action) => {
      state.addCartData = [];
      localStorage.removeItem("cartdata");
    },
    increaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const item = state.addCartData.find(
        (item) => item.productId.id === productId.id
      );
      if (item) {
        item.quantity += 1;
        localStorage.setItem("cartdata", JSON.stringify(state.addCartData));
      }
    },
    decreaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const item = state.addCartData.find(
        (item) => item.productId.id === productId.id
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem("cartdata", JSON.stringify(state.addCartData));
      }
    },
  },
});

export const {
  addToCart,
  removetoCart,
  removeAll,
  increaseQuantity,
  decreaseQuantity,
} = addCartSlice.actions;

export default addCartSlice.reducer;
