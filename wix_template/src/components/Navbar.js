import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {FaFacebookF} from 'react-icons';

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo-container">
          <div className="logo-icon">
            {/* <svg className="icon" >
              <g>
                <path  fill="#FFFFFF" d="M175.294 30.212H24.706A4.706 4.706 0 0020 34.918v130.165a4.706 4.706 0 004.706 4.706h150.588a4.706 4.706 0 004.706-4.706V34.918a4.706 4.706 0 00-4.706-4.706zm-4.706 122.776L105.129 39.624h65.459v113.364zm-44.706 4.706l17.976-32.329 18.824 32.329h-36.8zm-10.776 0H82.447l38.871-71.012 17.035 29.459-23.247 41.553zm-43.388 0H37.506L100 49.553l15.812 27.388-44.094 80.753zm23.153-118.07L29.412 152.988V39.624h65.459z"></path>
              </g>
            </svg> */}
          </div>
          <div className="logo-name">
            <a
              href="/"
              target="_self"
              style={{ color: "inherit" }}
            >
              <span className="logo-name1">
                <span className="johan-name">Johan</span>&nbsp;Altman
              </span>
            </a>
          </div>
        </div>
        <div className="category-name">
          <ul>
            <li>
              <Link to="/">
                <p className="pages" style={{ color: '#FC5C65' }}>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to="/work">
                <p className="pages">WorkWithMe</p>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <p className="pages">Blog</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p className="pages">Contact</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="right-nav">
          <div class="fg-search">
         
            <input style={{color:'white'}} type="text" class="input" placeholder="Search..." />
            <button type="submit">
             
            </button>
          </div>
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a href="https://www.facebook.com/wix">
                  <img src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png"/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/wix">
                  <img src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01ab6619093f45388d66736ec22e5885.png"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/wix-com">
                  <img src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7528824071724d12a3e6c31eee0b40d4.png"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
