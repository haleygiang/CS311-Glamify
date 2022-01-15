import React from "react";
import Header from "./HeaderPage";
import rightImg3 from "../assets/right3.jpeg";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const {
      id_product,
      brand,
      category,
      love,
      name,
      price,
      rating,
    } = product;

    return (
      <div className="card" style={{ width: "20rem", margin: "1rem" }}>
        <img src={rightImg3} className="card-img-top" alt="product-img" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">
            {category} by {brand}
          </p>
          <p className="card-text">
            <strong>
              {love}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart-fill mx-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>{" "}
              and {rating}/5
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill mb-1 mx-1"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </strong>
          </p>
          <p className="card-text text-danger h5">${price}</p>
          <a href={`/product/${id_product}`} className="btn btn-primary">
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
