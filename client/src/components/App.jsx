import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import ComparePage from "./ComparePage";
import ProductDetailPage from "./ProductDetailPage";
import ProductListingPage from "./ProductListingPage";
import SearchPage from "./SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/shop/allproducts" element={<ProductListingPage />}></Route>
        <Route path="/shop/:cat" element={<CategoryPage />}></Route>
        <Route path="/product/:productId" element={<ProductDetailPage />}></Route>
        <Route path="/compare" element={<ComparePage/>}></Route>
        <Route path="/search?keyword" element={<SearchPage />}></Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
