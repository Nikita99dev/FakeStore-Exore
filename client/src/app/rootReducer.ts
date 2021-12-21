import { combineReducers } from "@reduxjs/toolkit";
import AddProductReducer from "./Slices/ProductsAddeSlice"
import { AddedProductActions } from "./Slices/ProductsAddeSlice";
import ProductReducer, { ProductActions } from "./Slices/ProductsSlice";


export const rootReducer = combineReducers({
  products: ProductReducer,
  addedProducts: AddProductReducer
})

export const actions = {
  ...ProductActions,
  ...AddedProductActions
}
