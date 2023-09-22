import React from "react";
import "./WorkWithMe.css";

const WorkWithMe = () => {
  return (
    <>
      <div className="container-of-work">
        {/* <div className="content-of-work"> */}
        <div className="content-data">
          <h1 className="content-name-red">
            <span>Hi, I’m Jonah Altman.</span>
          </h1>

          <h1 className="content-name-white">
            <span>I Help Bussinesses</span>
          </h1>
          <h1 className="content-name-white">
            <span>Increase Sales, Boost</span>
          </h1>
          <h1 className="content-name-white">
            <span>Their Profits and Build</span>
          </h1>
          <h1 className="content-name-white">
            <span>a Winning Marketing</span>
          </h1>
          <h1 className="content-name-white">
            <span>Strategy.</span>
          </h1>
        </div>
        <div className="content-image">
          <img
            style={{ height: "750px", width: "758px" }}
            src="https://static.wixstatic.com/media/2e2a49_7833038ba8494b8e8e91a50edc6de54a~mv2.jpg/v1/fill/w_948,h_906,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_7833038ba8494b8e8e91a50edc6de54a~mv2.jpg"
          />
        </div>
        {/* </div> */}
      </div>
      <div className="first-content">
        <div className="first-content-data">
          <h1 className="first-content-name-red">
            <span>Marketing Strategy</span>
          </h1>
          <span className="first-content-text">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </span>
        </div>
        <div>
          <img
            style={{ width: "350px", height: "350px", marginTop: "100px" }}
            src="./first.png"
          />
        </div>
      </div>
      <div className="first-content">
        <div>
          <img
            style={{
              width: "350px",
              height: "350px",
              marginTop: "100px",
              marginLeft: "300px",
            }}
            src="./second.png"
          />
        </div>
        <div className="second-content-data">
          <h1 className="first-content-name-red">
            <span>SEO Tools & Digital Presence Planning</span>
          </h1>
          <span className="first-content-text">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </span>
        </div>
      </div>
      <div className="first-content">
        <div className="first-content-data">
          <h1 className="first-content-name-red">
            <span>Email Marketing Planning & Copywriting</span>
          </h1>
          <span className="first-content-text">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </span>
        </div>
        <div>
          <img
            style={{ width: "350px", height: "350px", marginTop: "100px" }}
            src="./third.png"
          />
        </div>
      </div>
      
      <div className="last-content">
        <div>
          <h2 className="last-content-text">I'd Love to Hear From You.</h2>
          <h2 className="last-content-text2">Here's How You Can Reach Me</h2>
        </div>
        <button className="submit-button">
               Get In Touch
              </button>

      </div>




    </>
  );
};

export default WorkWithMe;
