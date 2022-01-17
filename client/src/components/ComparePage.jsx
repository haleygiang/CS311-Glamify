import React from 'react';
import Header from "./HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductCompare,
} from "../redux/actions/productActions";

const ComparePage = () => {
  const products = useSelector((state) => state.compare);
  console.log("COMPARE: ", products);
  const dispatch = useDispatch();

  // Remove product from compare page 
  // eslint-disable-next-line
  const onRemove = (product) => {
    dispatch(removeProductCompare(product));
  }

    return (
        <div>
          {/* Nav Bar  */}
          <Header />
          Compare Page
        </div>
    )
}

export default ComparePage;
