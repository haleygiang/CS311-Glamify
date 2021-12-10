import { React } from "react";
import "./header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function Header(props) {
  return (
    <div className="header">
      <div className="glamify">
        Glamify
        {/* search form */}
        <form className="search-form" onSubmit={props.getSearch}>
          <input
            type="text"
            className="search-bar"
            value={props.search}
            onChange={props.updateSearch}
            placeholder="Product's Name"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <button className="compare_button">Compare</button>
      </div>
    </div>
  );
}

export default Header;
