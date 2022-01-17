import React from 'react';
import Header from "./HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ComparePage = () => {
  const products = useSelector((state) => state.compare);
  console.log("COMPARE: ", products);

  // Remove product from compare page 
  // const onRemove = (product) => {
  //   dispatch(removeProductCompare(product));
  // }

    return (
        <div>
          {/* Nav Bar  */}
          <Header />
          Compare Page
        </div>
    )
}

export default ComparePage
