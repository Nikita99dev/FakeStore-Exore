import { createSlice } from "@reduxjs/toolkit";
import { IInitState } from "./Interfaces/AppInterfaces";


const initialState: IInitState  = {
  products: [],
  current: undefined,
  error: null,
  isLoading: false
}
const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers:{
    fetchAllProductsPending: (state) => {
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
    },
    fetchCurrentProductPending: (state, action) => {
      state.isLoading = true;
    }, 
    fetchCurrentProductFulfilled: (state, action) => {
      state.current = action.payload;
      state.error = null;
      state.isLoading = false
    }, 
    fetchCurrentProductRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false; 
    },
    deleteProductPending: (state, action) => {
      state.isLoading = true;
    },
    deleteProductFulfilled: (state, action) => {
      state.products = state.products.filter(el=>el.id !== Number(action.payload));
      state.isLoading = false;
      state.error = null;
    },
    deleteProductRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }, 
    editProductPending: (state, action) => {
      state.isLoading = true;
    },
    editProductFulfilled: (state, action) => {
      state.products = state.products.map(el=>{
        if (el.id === Number(action.payload.id)){
          return action.payload
        } else {
          return el
        }
      })
      state.isLoading = false;
      state.error = null;
    },
    editProductRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
})


export default ProductSlice.reducer
export const {actions: ProductActions} = ProductSlice
