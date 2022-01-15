import { productConstants } from "../constants/productConstants";

const intialState = {
    products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case productConstants.SET_PRODUCTS:
            return {...state, products: payload };
        default:
            return state;
    }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case productConstants.SELECTED_PRODUCT:
            return {...state, ...payload };
        case productConstants.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};