import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListingPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // API call to fetch products from database
  const fetchProducts = async () => {
    const response = await axios
      .get("http://cs311-glamify.herokuapp.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  return <ProductComponent products={products}/>;
};

export default ProductListingPage;
