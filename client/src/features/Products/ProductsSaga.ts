import { SagaIterator } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'
import { actions } from '../../app/rootReducer'

import { fetchAllProductsTool } from './tools'


export function* fetchAllProducts(): SagaIterator{
  try {
    const products = yield call(fetchAllProductsTool, 'https://fakestoreapi.com/products')
    yield put(actions.fetchAllProductsFulfilled(products))
  } catch (error) {
    yield put(actions.fetchAllProductsRejected(error as string))
  }
}


export default function* ProductsWatcher() {
  yield takeEvery(`${actions.fetchAllProductsPending}`, fetchAllProducts)
}
