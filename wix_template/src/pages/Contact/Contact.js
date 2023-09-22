import React from "react";
import "./Contact.css";
import Form from "../../components/Form";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="contact-details">
          <div className="contact-form">
           
              <h1>
                <span className="heading">Contact Me Here</span>
              </h1>
              <div className="form-container">
                <Form />
              </div>
          
          </div>
          <div className="contact-info">
            <div>
              <h1>
                <span className="heading">Available here too</span>
              </h1>
            </div>
            <div className="content">
              <p>info@mysite.com</p>
              <p>Tel: 123-456-7890</p>
              <div className="content-icons">
                <a href="https://www.facebook.com/wix">
                  <img src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png" />
                </a>
                <a href="https://twitter.com/wix">
                  <img src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7d035ba85f6486680c2facedecdcf4d.png" />
                </a>
                <a href="https://www.linkedin.com/company/wix-com">
                  <img src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png" />
                </a>
              </div>
              <span className="content-data-of-contact">
                Looking forward to hearing from you.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
