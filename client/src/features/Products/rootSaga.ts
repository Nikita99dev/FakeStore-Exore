import {all} from "@redux-saga/core/effects"
import ProductsWatcher from "./ProductsSaga"

export default function* rootSaga(){
  yield all([
    ProductsWatcher(),
  ])
}
