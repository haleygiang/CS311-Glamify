import { productConstants, messages } from "../constants/productConstants";

const intialState = {
    products: [],
};

export const allProductsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case productConstants.SET_PRODUCTS:
            return {...state, products: payload };
        default:
            return state;
    }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case productConstants.SELECTED_PRODUCT:
            return {...state, ...payload };
        case productConstants.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};


const initialStateCompare = {
    products: [],
    qty: 0,
    message: "",
};

export const compareProductsReducer = (
    state = initialStateCompare, { type, payload }
) => {
    switch (type) {
        case productConstants.ADD_COMPARE_PRODUCT:
            const exist = state.products.filter(
                (item) => item.id_product === payload.id_product
            );

            if (exist.length === 0) {
                return {
                    ...state,
                    products: [...state.products, payload],
                    qty: state.qty + 1,
                    message: messages.ADD_COMPARE_SUCCESS,
                };
            } else {
                return {
                    ...state,
                    message: messages.ALREADY_ADDED_COMPARE,
                };
            }
        case productConstants.REMOVE_COMPARE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((item) => item !== payload),
                qty: state.qty - 1,
                message: messages.REMOVE_COMPARE_SUCCESS,
            };
        default:
            return state;
    }
};