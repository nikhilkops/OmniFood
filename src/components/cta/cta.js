import React from "react";
import "./cta.css";

function cta() {
  return (
    <>
      {" "}
      <section className="section-cta" action="#">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">
                Get your first meal for free !
              </h2>
              <p className="cta-text">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>

              <form className="cta-form">
                <div>
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Enter Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Enter Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="select-where">
                    Where did you hear about us ?
                  </label>
                  <select id="select-where" required>
                    <option value="">Please Choose One Option</option>
                    <option value="Family & Friends">Family & Friends</option>
                    <option value="Youtube">Youtube</option>
                    <option value=" Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Twitter">Others</option>
                  </select>
                </div>
                <button className="btn">Sign up now</button>
              </form>
            </div>
            <div className="cta-image-box"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default cta;
