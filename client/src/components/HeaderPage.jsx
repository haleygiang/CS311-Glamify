import { React } from "react";

function Header(props) {
  const search = props.search;

// import { useState } from "react";

// const Header = () => {
//   const [search, setSearch] = useState("");
//   const setQuery = useState("");

//   // only setQuery when finish typing, setSearch back to empty string for the next search
//   const getSearch = (e) => {
//     e.preventDefault();
//     setQuery(search);
//     setSearch("");
//   };

//   const updateSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   return { 
//     // BUG!!!
//       // search={search},
//       getSearch,
//       updateSearch
//     }
// };

// export default Header;


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
                Compare
              </a>
            </li>
          </ul>
        </div>

        <form className="d-flex ms-auto" onSubmit={props.getSearch}>
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={props.updateSearch}
          ></input>
          <button className="btn btn-danger" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
