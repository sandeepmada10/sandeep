import React from "react";
import "../App.css";
const Form = () => {
  return (
    <div>
      <form>
        <div className="form-conatiner">
          <div className="form-content">
            <div className="form1">
              <div>
                <label htmlFor="Firstname">First Name *</label>
                <div>
                  <input type="text" placeholder="" name="firstname" />
                </div>
              </div>
              <div>
                <label htmlFor="lastnamename">Last Name *</label>
                <div>
                  <input type="text" placeholder="" name="lastnamename" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="lastnamename">Email Address *</label>
              <div>
                <input
                  className="emailaddress"
                  type="text"
                  placeholder=""
                  name="emailaddress"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastnamename">Subject </label>
              <div>
                <input
                  className="subject"
                  type="text"
                  placeholder=""
                  name="subject"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastnamename">Message</label>
              <div>
                <textarea name="message" rows="10" cols="54"></textarea>
              </div>
              <button className="submit-button-form">
               Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
