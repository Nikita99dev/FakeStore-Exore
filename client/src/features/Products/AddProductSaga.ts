import { SagaIterator } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'
import { actions } from '../../app/rootReducer'
import { AddProductTool } from './tools'




export function* AddProduct({ payload }: any):SagaIterator {

  const id = Math.floor(Math.random() * 1000)+20

  //unique id for future correct filtering state

  try {
    yield call(AddProductTool, `https://fakestoreapi.com/products`, payload)
    console.log('----', {...payload, id} )
    yield put(actions.addProductFulfilled({...payload, id}))
  } catch (error) {
    yield put(actions.addProductRejected(error as string))
  }
}

export function* deleteCreated({payload}: any):SagaIterator {

  try {
    yield put(actions.deleteCreatedProductFulfilled(payload.id))
  } catch (error) {
      yield put(actions.deleteCreatedProductRejected(error as string))
  }
  
}

export default function* AddProductsWatcher() {
  yield takeEvery(`${actions.addProductPending}`, AddProduct)
  yield takeEvery(`${actions.deleteCreatedProductPending}`, deleteCreated)
}
