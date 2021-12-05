import React from "react";
import { render } from "react-dom";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


