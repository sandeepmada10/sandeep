import React from "react";
import "./Home.css";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <div className="container">
        <video
          className="video"
          src="https://video.wixstatic.com/video/2e2a49_5d6a71cd5ae243779f1a812b91512aa7/1080p/mp4/file.mp4"
          autoPlay
          loop
          muted
        > </video>
        <div className="overlay">
          <div className="welcome-text">
            <span className="overlay-data">
              <div>
                <span className="overlay-data-white">Take Your</span>
                <span className="overlay-data-red">Business</span>
              </div>
              <span className="overlay-data-white">to Higher Ground</span>
            </span>
          

          <div className="overlay-data-2">
            <span className="overlay-data-white">
              Get marketing tips to accelerate your business growth
            </span>
          </div>

          <div className="overlay-form">
            <input
              name="email"
              type="text"
              className="overlay-email"
              placeholder="Email Address*"
            />
            <button className="overlay-button">
              <span className="overlay-button-text">Tell Me</span>
            </button>
          </div>
          
         
          </div>
        </div>
       
      </div>
     
      
    </>
  );
};

export default Home;
