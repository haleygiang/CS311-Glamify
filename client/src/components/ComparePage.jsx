import React from "react";
import Header from "./HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { removeProductCompare } from "../redux/actions/productActions";

const ComparePage = () => {
  const { products } = useSelector((state) => state.compare);
  console.log("COMPARE: ", products);
  const dispatch = useDispatch();

  // Remove product from compare page
  // eslint-disable-next-line
  const onRemove = (product) => {
    dispatch(removeProductCompare(product));
  };

  return (
    <div>
      {/* Nav Bar  */}
      <Header />
      <div className="container mt-3 mb-3">
        <h1 className="display-6 mb-3">Compare with Similar Products</h1>
        <div className="table-responsive">
          <table className="table table-striped text-successtable-border border-light">
            <thead className="border-light">
              <tr>
                <th scope="col"></th>
                {products.map(({ category }) => (
                  <th scope="col">{category}</th>
                ))}
              </tr>
              {/* {brand,category,name, love, num_reviews, price, rating, size, url} */}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
