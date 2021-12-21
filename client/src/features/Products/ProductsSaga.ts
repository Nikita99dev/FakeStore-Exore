import { SagaIterator } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'
import { actions } from '../../app/rootReducer'

import { deleteProdTool, editProductTool, fetchAllProductsTool, fetchCurrent } from './tools'


export function* fetchAllProducts():SagaIterator {
  try {
    const products = yield call(fetchAllProductsTool, 'https://fakestoreapi.com/products')
    yield put(actions.fetchAllProductsFulfilled(products))
  } catch (error) {
    yield put(actions.fetchAllProductsRejected(error as string))
  }
}

function* fetchCurrentProd({ payload }: any):SagaIterator {
  console.log('----', payload)
  try {
    const cur = yield call(fetchCurrent, `https://fakestoreapi.com/products/${payload}`)
    yield put(actions.fetchCurrentProductFulfilled(cur))
  } catch (error) {
    yield put(actions.fetchCurrentProductRejected(error as string))
  }
}

export function* deleteExisted({payload}: any):SagaIterator {
  
  console.log(payload)

  try {
    yield call(deleteProdTool, `https://fakestoreapi.com/products/${payload}`)
    yield put(actions.deleteProductFulfilled(payload))
  } catch (error) {
      yield put(actions.deleteProductRejected(error))
  }

}

function* editProduct({payload}:any):SagaIterator{
  console.log('-----------------------------------------------------', payload)
  try {
    yield call(editProductTool, `https://fakestoreapi.com/products/${payload.id}`, payload.body)
    yield put(actions.editProductFulfilled({...payload.body, id: payload.id } ))
  } catch (error) {
    yield put(actions.editProductPending(error))
  }
}

export default function* ProductsWatcher() {
  yield takeEvery(`${actions.fetchAllProductsPending}`, fetchAllProducts)
  yield takeEvery(`${actions.fetchCurrentProductPending}`, fetchCurrentProd)
  yield takeEvery(`${actions.deleteProductPending}`, deleteExisted)
  yield takeEvery(`${actions.editProductPending}`, editProduct)
}
