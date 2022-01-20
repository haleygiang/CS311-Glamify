import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const SearchPage = () => {
  const lastSegment = window.location.href.split("/").pop();
  const choice = lastSegment.substr(0, lastSegment.length);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // API call to fetch search products from database
  const fetchProducts = async () => {
    const response = await axios
      .get("http://cs311-glamify.herokuapp.com/products/search/" + choice)
      .catch((err) => {
        console.log("Err: ", err);
      });
    if (response !== null) {
      console.log("RESPONSE: ", response);
      dispatch(setProducts(response.data));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <ProductComponent products={products} />

};

export default SearchPage;
