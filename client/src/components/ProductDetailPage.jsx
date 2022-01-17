import React, { useEffect } from "react";
import Header from "./HeaderPage";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addProductCompare,
} from "../redux/actions/productActions";
import image from "../assets/right3.jpeg";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  // Get product details from state
  const product = useSelector((state) => state.product);
  const compare = useSelector((state) => state.compare);
  console.log("COMPARE: ", compare);

  const {
    // id_product,
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

  // Add product to compare page 
  const onAdd = (product) => {
    dispatch(addProductCompare(product));
  };

  return (
    <div>
      {/* Nav Bar  */}
      <Header />
      <div>
        {Object.keys(product).length === 0 ? (
          <div><h1 className="display-6">...Loading</h1>
          </div>
        ) : (
          <section
            className="row text-dark no-gutters text-sm-start contain-md"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            {/* Left side */}
            <div className="col w-50 h-100 p-5 align-items-center justify-content-between">
              <img
                className="img-fluid rounded mx-auto d-block"
                src={image}
                alt="productImg"
                style={{ height: "75vh" }}
              />
            </div>

            {/* Right side */}
            <div className="col h-100 w-50 align-left align-items-start mt-3 mb-3 justify-content-between">
              <h5 className="display-6">
                {brand} <small className="text-muted">in {category}</small>
              </h5>
              <h4>{name}</h4>

              <p className="card-text">
                {love}
                <strong>
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
                </strong>
                | {rating}/5
                <strong>
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
                | {num_reviews} Reviews
              </p>

              <h5>
                ${price}.00
                <small className="text-muted"> for {size}</small>
              </h5>
              <hr />
              <h5 className="mt-4">
                <a
                  className="text-reset text-decoration-none"
                  data-bs-toggle="collapse"
                  href="#details"
                >
                  About the Product
                </a>
              </h5>
              <p className="text-muted" id="details">
                {details}
              </p>
              <h5>
                <a
                  className="text-reset text-decoration-none"
                  data-bs-toggle="collapse"
                  href="#ingredients"
                >
                  Ingredients
                </a>
              </h5>
              <p className="text-muted collapse" id="ingredients">
                {ingredients}
              </p>
              <h5 className="mb-4">
                <a
                  className="text-reset text-decoration-none"
                  data-bs-toggle="collapse"
                  href="#howtouse"
                >
                  How to Use
                </a>
              </h5>
              <p className="text-muted collapse" id="howtouse">
                {how_to_use}
              </p>

              {/* Buttons */}
              <hr />
              <div className="align-items-center d-flex justify-content-center d-grid gap-2">
                <button type="button" className="btn btn-danger btn-lg mt-4">
                  <a href={url} className="text-reset text-decoration-none">
                    Buy Product
                  </a>
                </button>
                <button type="button" className="btn btn-secondary btn-lg mt-4" onClick={() => onAdd(product)}>
                  Add to Compare
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
