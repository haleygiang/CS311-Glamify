import { combineReducers } from "redux";
import { allProductsReducer, selectedProductsReducer, compareProductsReducer } from "./productReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['compare']
}

const reducers = combineReducers({
    allProducts: allProductsReducer,
    product: selectedProductsReducer,
    compare: compareProductsReducer
});

export default persistReducer(persistConfig, reducers);