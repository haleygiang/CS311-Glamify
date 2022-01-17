import { combineReducers } from "redux";
import { allProductsReducer, selectedProductsReducer, compareProductsReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: allProductsReducer,
    product: selectedProductsReducer,
    compare: compareProductsReducer
});

export default reducers;