import React from "react";
import Header from "./Header";
import rightImg1 from "../assets/right1.jpeg";
import rightImg2 from "../assets/right2.jpeg";
import rightImg3 from "../assets/right3.jpeg";
// import poster from "../assets/MainPagePoster.png";
// import "./home.css";
// import { useNavigate } from 'react-router-dom';

function Home() {
  // let navigate = useNavigate();
  // navigate('../components/AllProducts');

  return (
    <div style={{ backgroundColor: "#fff3f4" }}>
      {/* Nav Bar  */}
      <Header />

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
            <button className="btn btn-secondary btn-lg">View Products</button>
          </div>
        </div>
        <div
          className="col w-50 h-100 p-5 align-items-center justify-content-between"
          style={{ backgroundColor: "#fff3f4" }}
        >
          <div>
            <img
              className="img-fluid rounded mx-auto d-block "
              src={rightImg2}
              alt="rightimg2"
              mx-6
            />
          </div>

          {/* <div className="thumbnail">
            <img
              className="img-fluid rounded float-start"
              src={rightImg1}
              alt="rightimg1"
            />
          </div>
          <img className="img-fluid rounded float-end" src={rightImg3} alt="rightimg3" /> */}
        </div>
      </section>

      {/* <div className="suggestions">
        <img src={poster} alt="homepageimg" width="800" height="700" />
          <buttonGroup  className="me-2" aria-label="First group">
            <button onClick={navigate} className="b" variant="secondary">Mask</button>{" "}
            <button onClick={navigate} className="b" variant="secondary">Moisturizer</button>{" "}
            <button onClick={navigate} className="b" variant="secondary">Face Wash</button>{" "}
            <button onClick={navigate} className="b" variant="secondary">Essence</button>
          </buttonGroup>
          <buttonGroup className="me-2" aria-label="First group">
            <button onClick={navigate} className="b" variant="secondary">Foundation</button>{" "}
            <button onClick={navigate} className="b" variant="secondary">Contour</button>{" "}
            <button onClick={navigate} className="b" variant="secondary">Eyeshadow</button>{" "}
            <button onClick={navigate} className="b" variant="secondary">Lipstick</button>
          </buttonGroup>
      </div> */}
    </div>
  );
}

export default Home;
