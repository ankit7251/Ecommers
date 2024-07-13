import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import pkg from "../../../package.json";

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async ( ) => {
    try {
      const response = await axios.get(`${pkg.baseUrl}/products`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

const productApiSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productApiSlice.reducer;
