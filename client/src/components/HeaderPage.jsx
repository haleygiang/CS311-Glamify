import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

const Header = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { qty } = useSelector((state) => state.compare);

  // console.log("SEARCH: ", search);

  // API call to fetch products from database
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:3001/products/bigcategory/" + query)
      .catch((err) => {
        console.log("Err: ", err);
      });
    if (response !== null) {
      dispatch(setProducts(response.data));
    }
  };

  // only call API when finish typing query
  useEffect(() => {
    if (query !== "") fetchProducts();
    // eslint-disable-next-line
  }, [query]);

  // update search while typing
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // only setQuery when finish typing, setSearch back to empty string for the next search
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    // Nav bar
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light p-3"
      style={{ backgroundColor: "#fff3f4" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Glamify.
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/shop/allproducts">
                    All Products
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/shop/makeup">
                    Makeup
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/shop/skincare">
                    Skincare
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/shop/hair">
                    Hair
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/shop/fragrance">
                    Fragrance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/shop/bathbody">
                    Bath & Body
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/compare">
                  Compare{" "}
                  {qty ? (
                    <span className="badge rounded-pill bg-danger">
                      {qty}
                    </span>
                  ) : (
                    ""
                  )}
              </a>
            </li>
          </ul>
        </div>

        <form className="d-flex ms-auto" onSubmit={getSearch}>
          <input
            className="form-control me-2"
            id="input"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={updateSearch}
          ></input>
          <a
            href="/search/?keyword={$document.getElementById('input').value}"
            className="btn btn-danger btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Search
          </a>
        </form>
      </div>
    </nav>
  );
};

export default Header;
