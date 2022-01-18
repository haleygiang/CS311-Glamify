import React from "react";
import Header from "./HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { removeProductCompare } from "../redux/actions/productActions";
import StarRatings from "react-star-ratings";
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

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
      <div>
        {products.length === 0 ? (
          <div className="container mt-3 mb-3">
            <h1 className="display-6">Nothing to Compare yet...</h1>
          </div>
        ) : (
          <div className="container mt-3 mb-3">
            <h1 className="display-6 mb-3">Compare with Similar Products</h1>
            <div className="table-responsive">
              <table className="table table-striped text-successtable-border border-light">
                <thead className="border-light">
                  <tr>
                    {/* Name + Image  */}
                    <th scope="col"></th>
                    {products.map(({ name, id_product }) => (
                      <th scope="col" key={id_product}>
                        {name}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {/* Category */}
                  <tr>
                    <th scope="row">Category</th>
                    {products.map(({ category, id_product }) => (
                      <td key={id_product}>{category}</td>
                    ))}
                  </tr>

                  {/* Customer Rating + Number Reviews*/}
                  <tr>
                    <th scope="row">Customer Rating</th>
                    {products.map(({ rating, num_reviews, id_product }) => (
                      <td key={id_product}>
                        <span>
                        <StarRatings
                          rating={rating}
                          starRatedColor="#ffcd3c"
                          starDimension="25px"
                          starSpacing="2px"
                        ></StarRatings>
                        <p>{num_reviews} Reviews</p>
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Customer Love */}
                  <tr>
                    <th scope="row">Customer Love</th>
                    {products.map(({ love, id_product }) => (
                      <td key={id_product}>
                        <StyledRating
                          name="customized-color"
                          defaultValue={4}
                          // value={love}
                          precision={0.5}
                          icon={<FavoriteIcon fontSize="inherit" />}
                          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        />
                        <p>({love})</p>
                      </td>
                    ))}
                  </tr>

                  {/* Price */}
                  <tr>
                    <th scope="row">Price</th>
                    {products.map(({ price, id_product }) => (
                      <td key={id_product}><h6><strong>${Math.floor(price)}.00</strong></h6></td>
                    ))}
                  </tr>

                  {/* Brand Name */}
                  <tr>
                    <th scope="row">Brand Name</th>
                    {products.map(({ brand, id_product }) => (
                      <td key={id_product}>{brand}</td>
                    ))}
                  </tr>

                  {/* Size  */}
                  <tr>
                    <th scope="row">Size</th>
                    {products.map(({ size, id_product }) => (
                      <td key={id_product}>{size}</td>
                    ))}
                  </tr>

                  {/* Buttons Buy + Remove Compare*/}
                  <tr>
                    <th scope="row">Buttons</th>
                    {products.map(({ category, id_product }) => (
                      <td key={id_product}>{category}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparePage;
