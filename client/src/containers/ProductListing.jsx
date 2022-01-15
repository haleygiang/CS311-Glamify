// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import * as data from "../utils/test_products";
// import ProductListingPage from "../components/ProductListingPage";

// const ProductListing = () => {
//   const [products, setProducts] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     getProducts();
//     // setProducts(data.PRODUCTS);
//     console.log("hello!");
//   }, []);

//   // Move this to productActions?
//   const getProducts = async () => {
//     // API to get products data from database
//     const response = await axios.get("http://localhost:3001/products").catch((err) => {
//       console.log("Error", err);
//     });
//     console.log(response)
//     // dispatch(setProducts(response.data));
//   };

//   return (
//     //BUG!!! not working rn!
//     <ProductListingPage products={products} />
//   );
// };

// export default ProductListing;
