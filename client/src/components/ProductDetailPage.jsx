import React, { useEffect } from "react";
import Header from "./HeaderPage";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { PRODUCT } from "../utils/test_products";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  // Get product details from state
  let product = useSelector((state) => state.product);

  let {
      id_product,
      // brand,
      // category,
      details,
      // how_to_use,
      // ingredients,
      // love,
      name,
      // num_reviews,
      // price,
      // rating,
      // size,
      // url,
    } = PRODUCT;

  // API call to fetch product details
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`http://localhost:3001/products/id/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
    // console.log(response.data);
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]); // eslint-disable-line react-hooks/exhaustive-deps
  
  console.log("product: ", product);
  console.log("product details: ", id_product, details, name);

  return (
    <div>
      {/* Nav Bar  */}
      <Header />
      <div className="container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div>Detail Page {details}</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
