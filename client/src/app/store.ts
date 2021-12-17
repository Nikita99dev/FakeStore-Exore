import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import { rootReducer } from './rootReducer';
import rootSaga from '../features/Products/rootSaga';
const sagaMiddleWare = createSagaMiddleware();


export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
