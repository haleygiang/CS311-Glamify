import React from "react";
import Header from "../components/Header";
import poster from "../components/images/MainPagePoster.png";
import "./home.css";
import { useNavigate } from 'react-router-dom';

function Home() {

    let navigate = useNavigate();
    navigate('../components/AllProducts');


  return (
    <div>
      <Header/>
      <div className="suggestions">
        <img src={poster} width="800" height="700" />
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
      </div>
    </div>
  )
}

export default Home;
