import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import ComparePage from "./ComparePage";
import DetailPage from "./DetailPage"
import ProductListing from "./ProductListing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/shop/allproducts" element={<ProductListing />}></Route>
        <Route path="/shop/:cat" element={<CategoryPage />}></Route>
        <Route path="/product/:productId" element={<DetailPage />}></Route>
        <Route path="/compare" element={<ComparePage/>}></Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
