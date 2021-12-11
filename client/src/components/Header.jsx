import { React } from "react";

function Header(props) {
  const search = props.search;

  return (
    // Nav bar
    <nav
      class="navbar sticky-top navbar-expand-lg navbar-light p-3"
      style={{ backgroundColor: "#fff3f4" }}
    >
      <div class="container">
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
                href="#products"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#makeup">
                    Makeup
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#skincare">
                    Skincare
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#hair">
                    Hair
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#fragrance">
                    Fragrance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="bathbody">
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

        <form class="d-flex ms-auto" onSubmit={props.getSearch}>
          <input
            class="form-control me-2"
            type="text"
            placeholder="Search"
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
