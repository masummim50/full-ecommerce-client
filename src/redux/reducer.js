import { combineReducers } from "redux";
import { loadProductsReducer } from "./allReducer";


export const reducer = combineReducers({
  loadProductsReducer: loadProductsReducer
})