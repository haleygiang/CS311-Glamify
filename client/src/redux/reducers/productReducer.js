import { productConstants } from "../constants/productConstants";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export function product(state = initialState, action) {
    switch (action.type) {
        case productConstants.PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case productConstants.PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case productConstants.PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default: return state
    }
}