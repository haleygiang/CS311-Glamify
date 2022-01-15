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

// function getProducts(query) {
//     return dispatch => {
//         dispatch(request())
//         const apiKey = "a3cc1d73eff648ff955048012275c85a"; // spoonacular
//         axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&addRecipeInformation=true&number=9`)
//             .then(response => {
//                 const data = response.data.results
//                 dispatch(success(data))
//             })
//             .catch(error => {
//                 const errorMsg = error.message
//                 dispatch(failure(errorMsg))
//             })

//     }
// }