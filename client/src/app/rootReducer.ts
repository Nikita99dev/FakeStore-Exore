import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer, { ProductActions } from "./Slices/ProductsSlice";


export const rootReducer = combineReducers({
  products: ProductReducer
})

export const actions = {
  ...ProductActions,
}
