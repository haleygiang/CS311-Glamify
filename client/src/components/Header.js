import { React, useState } from "react";
import "./header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function Header() {
  const [search, setSearch] = useState("");
  const setQuery = useState("");

  // only setQuery when finish typing, setSearch back to empty string for the next search
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="header">
      <div className="glamify">
        Glamify
        {/* search form */}
        <form className="search-form" onSubmit={getSearch}>
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={updateSearch}
            placeholder="Product's Name"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <button className="compare_button">compare</button>
      </div>
    </div>
  );
}

export default Header;
