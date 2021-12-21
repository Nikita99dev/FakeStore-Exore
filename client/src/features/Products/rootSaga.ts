import {all} from "@redux-saga/core/effects"
import AddProductsWatcher from "./AddProductSaga"
import ProductsWatcher from "./ProductsSaga"

export default function* rootSaga(){
  yield all([
    ProductsWatcher(),
    AddProductsWatcher()
  ])
}
