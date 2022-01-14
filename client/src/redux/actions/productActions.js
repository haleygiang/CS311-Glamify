import { productConstants } from "../constants/productConstants";

export const productActions = {
    request,
    success,
    failure,
    // getProducts
}

function request() {
    return {
        type: productConstants.PRODUCT_REQUEST,
    }
}

function success(data) {
    return {
        type: productConstants.PRODUCT_SUCCESS,
        payload: data
    }
}

function failure(error) {
    return {
        type: productConstants.PRODUCT_FAILURE,
        payload: error
    }
}

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