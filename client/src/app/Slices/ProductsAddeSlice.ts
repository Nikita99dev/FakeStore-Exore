import { createSlice } from "@reduxjs/toolkit";
import { IInitState, IInitState2, IProducts } from "./Interfaces/AppInterfaces";


const initialState: IInitState2 = {
  products2: [],
  current: undefined,
  error: null,
  isLoading: false
}

const initState = () => {
	const stateFromLS:any = JSON.parse(window.localStorage.getItem('product2') || "0")
  console.log('state from ls: ', stateFromLS)
	if (stateFromLS) {
    initialState.products2 = stateFromLS 
  } 
}

initState()
console.log('initStatefrom ', initialState)

const AddedProductSlice = createSlice({
  name: "addedProducts",
  initialState,
  reducers:{
    addProductPending: (state, action) => {
      state.isLoading = true;
    },
    addProductFulfilled: (state, action) => {
      state.products2.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    addProductRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false
    },
    deleteCreatedProductPending: (state, action) => {
      state.isLoading = true;
    },
    deleteCreatedProductFulfilled: (state, action) => {
      state.products2 = state.products2.filter(el=>el.id !== Number(action.payload)) || [];
      state.isLoading = false;
      state.error = null;
    },
    deleteCreatedProductRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }

  }
})

export default AddedProductSlice.reducer
export const {actions: AddedProductActions} = AddedProductSlice







