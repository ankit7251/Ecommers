import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import pkg from "../../../package.json";

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct/fetchSingleProduct",
  async (id) => {
    try {
      const response = await axios.get(`${pkg.baseUrl}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching single product:", error);
      throw error;
    }
  }
);
const singleProductApiSlice = createSlice({
  name: "singleProduct",
  initialState: {
    id: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.id = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default singleProductApiSlice.reducer;
