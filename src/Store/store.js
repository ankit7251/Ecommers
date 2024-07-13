import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice/ProductApiSlice";
import singleProductReducer from "./Slice/SingleProductApiSlice";
import AddCardSlice from "./Slice/AddCardSlice";
import UserLoginData from "./Slice/UserLoginData";

const store = configureStore({
  reducer: {
    products: productReducer,
    singleProduct: singleProductReducer,
    AddCard : AddCardSlice,
    userData : UserLoginData
  },
});

export default store;
