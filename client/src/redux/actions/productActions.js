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