import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const CategoryPage = () => {
  const lastSegment = window.location.href.split("/").pop();
  const choice = lastSegment.substr(1,lastSegment.length)
  const dispatch = useDispatch();

  // API call to fetch products from database
  const fetchProducts = async () => {
    const response = await axios
      .get('http://localhost:3001/products/bigcategory/' + choice)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps


  return <ProductComponent/>;
};

export default CategoryPage;
