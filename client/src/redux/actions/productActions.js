import { productConstants } from "../constants/productConstants";

export const setProducts = (products) => {
    return {
        type: productConstants.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: productConstants.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: productConstants.REMOVE_SELECTED_PRODUCT,
    };
};

export const addProductCompare = (product) => {
    return {
        type: productConstants.ADD_COMPARE_PRODUCT,
        payload: product,
    }
}

export const removeProductCompare = (product) => {
    return {
        type: productConstants.REMOVE_COMPARE_PRODUCT,
    }
}