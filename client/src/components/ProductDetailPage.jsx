import React, { useEffect } from 'react';
import Header from "./HeaderPage";
import axios from "axios";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetailPage = () => {

  const { productId } = useParams();
  console.log(productId);
  
  const product = useSelector((state) => state.product);
  const {
    id_product,
    // brand,
    // category,
    // details,
    // how_to_use,
    // ingredients,
    // love,
    // name,
    // num_reviews,
    // price,
    // rating,
    // size,
    // url,
  } = product;
  
  const dispatch = useDispatch();

  // API call to fetch product details
  const fetchProductDetail = async (id) => {
    const response = await axios
    .get(`http://localhost:3001/products/${id}`)
    .catch((err) => {
      console.log("Err: ", err);
    });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
          {/* Nav Bar  */}
          <Header />
          Detail Page {id_product}
        </div>
        //   <div className="ui grid container">
        //   {Object.keys(product).length === 0 ? (
        //     <div>...Loading</div>
        //   ) : (
        //     <div className="ui placeholder segment">
        //       <div className="ui two column stackable center aligned grid">
        //         <div className="ui vertical divider">AND</div>
        //         <div className="middle aligned row">
        //           <div className="column lp">
        //             <img className="ui fluid image" src={image} />
        //           </div>
        //           <div className="column rp">
        //             <h1>{title}</h1>
        //             <h2>
        //               <a className="ui teal tag label">${price}</a>
        //             </h2>
        //             <h3 className="ui brown block header">{category}</h3>
        //             <p>{description}</p>
        //             <div className="ui vertical animated button" tabIndex="0">
        //               <div className="hidden content">
        //                 <i className="shop icon"></i>
        //               </div>
        //               <div className="visible content">Add to Cart</div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   )}
        // </div>
      
    )
}

export default ProductDetailPage;
