import React from "react";
import Header from "./HeaderPage";
import rightImg3 from "../assets/right3.jpeg";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const {
      id_product,
      // brand,
      // category,
      // details,
      // how_to_use,
      // ingredients,
      // love,
      name,
      // num_reviews,
      // price,
      // rating,
      // size,
      // url,
    } = product;

    return (
      <div class="card" style={{ width: "20rem", margin: "1rem"}}>
        <img src={rightImg3} class="card-img-top" alt="product-img" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Some details details details.</p>
          <a href={`/product/${id_product}`} class="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    );
  });

  return (
    //   {/* Nav bar */}
    <div>
      <Header />
      <div className="col p-20 m-20 align-center d-flex align-items-center justify-content-around flex-wrap">
          {renderList}
      </div>
    </div>
  );
};

export default ProductComponent;
