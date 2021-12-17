import { createSlice } from "@reduxjs/toolkit";
import { IInitState } from "./Interfaces/AppInterfaces";


const initialState: IInitState  = {
  products: [],
  error: null,
  isLoading: false
}
const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers:{
    fetchAllProductsPending: (state, action) => {
      state.isLoading = true;
    },
    fetchAllProductsFulfilled: (state, action) => {
      state.products = action.payload;
      state.error = null;
      state.isLoading = false
    },
    fetchAllProductsRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
})


export default ProductSlice.reducer
export const {actions: ProductActions} = ProductSlice
