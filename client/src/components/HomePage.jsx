import React from "react";
import Header from "./HeaderPage";
import image from "../assets/right1.jpeg";

function HomePage() {
  return (
    <div>
      {/* Nav Bar  */}
      <Header />
      <div style={{ backgroundColor: "#fff3f4" }}>
        {/* Home Screen  */}
        <section
          className="text-dark row no-gutters text-sm-start"
          style={{ height: "100vh", width: "100%", backgroundColor: "#ffe7ea" }}
        >
          <div className="col h-100 w-50 p-5 align-left d-flex align-items-center justify-content-between">
            <div>
              <h1>
                Is Your Skin <span className="text-secondary">Happy</span>?
              </h1>
              <p className="lead">
                Let Glamify help you choose the best cosmetic products for your
                skin with the best price!
              </p>
              <a href="/shop/allproducts">
                <button className="btn btn-secondary btn-lg">
                  View Products
                </button>
              </a>
            </div>
          </div>
          <div
            className="col w-50 h-100 p-5 align-items-center justify-content-between"
            style={{ backgroundColor: "#fff3f4" }}
          >
            <div>
              <img
                className="img-fluid rounded mx-auto d-block "
                src={image}
                alt="img"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
