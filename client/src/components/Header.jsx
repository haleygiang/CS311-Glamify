import { React } from "react";
// import "./header.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

function Header(props) {
  const search = props.search;

  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#FFC0CB" }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Glamify.
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="">
                    Makeup
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="">
                    Skincare
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="">
                    Hair
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="">
                    Fragrance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="">
                    Bath & Body
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Compare
              </a>
            </li>
          </ul>
        </div>

        <form class="d-flex" onSubmit={props.getSearch}>
          <input
            class="form-control me-2"
            type="text"
            placeholder="Product's Name"
            aria-label="Search"
            value={search}
            onChange={props.updateSearch}
          ></input>
          <button class="btn btn-danger" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>

    // <div className="header">
    //   <div className="glamify">
    //     Glamify
    //     {/* search form */}
    //     <form className="search-form" onSubmit={props.getSearch}>
    //       <input
    //         type="text"
    //         className="search-bar"
    //         value={props.search}
    //         onChange={props.updateSearch}
    //         placeholder="Product's Name"
    //       />
    //       <button type="submit" className="search-button">
    //         Search
    //       </button>
    //     </form>
    //     <button className="compare_button">Compare</button>
    //   </div>
    // </div>
  );
}

export default Header;
