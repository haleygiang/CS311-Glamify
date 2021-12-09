import React from 'react'
import Header from '../components/Header'
import poster from '../components/images/MainPagePoster.png'
import "./home.css";


function Home() {
    return (
            <div>
                <Header/>
                <div className="suggestions">
                    <img src={poster} width="800" height="700" />
                    <button className="buttons">
                        Mask
                    </button>
                    <button className="buttons">
                        Moisturizer
                    </button>
                    <button className="buttons">
                        Face Wash
                    </button>
                    <button className="buttons">
                        Essence
                    </button>
                </div>
            </div>
    );
}


export default Home;
