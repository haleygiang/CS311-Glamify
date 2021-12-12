import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import ComparePage from "./ComparePage";
import DetailPage from "./DetailPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/products/:cat" element={<CategoryPage />}></Route>
        <Route path="/products/:id" element={<DetailPage />}></Route>
        <Route path="/compare" element={<ComparePage/>}></Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
