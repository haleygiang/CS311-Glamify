import React from "react";
import Header from "./Header";
import * as data from "../utils/test_products";
import rightImg3 from "../assets/right3.jpeg";

const ProductListingPage = (props) => {
  // const products = props.products;
  const products = data.PRODUCTS;
  console.log(products);

  const renderList = products.map((product) => {
    const {
      id_product,
      brand,
      category,
      details,
      how_to_use,
      ingredients,
      love,
      name,
      num_reviews,
      price,
      rating,
      size,
      url,
    } = product;

    return (
      // <div class="" style={{ backgroundColor: "#fff3f4" }} key={id_product}>
      //     Product
      // </div>
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
        {/* <div className="col align-items-center justify-content-between"> */}
          {renderList}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductListingPage;
