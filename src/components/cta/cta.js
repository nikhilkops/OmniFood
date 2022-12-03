import React from "react";
import "./cta.css";

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

function Cta() {
  const { letterSignup } = useContext(AuthContext);

  let [email, setEmail] = useState("");
  let [heard, setHeard] = useState("");

  let [name, setName] = useState("");

  function fSetName(e) {
    setName(e.target.value);
  }
  function fSetEmail(e) {
    setEmail(e.target.value);
  }
  function fSetHeard(e) {
    setHeard(e.target.value);
  }

  async function signUp() {
    try {
      if (email && name && heard) {
        let letterObj = {
          fullName: name,
          enterEmail: email,
          heardAboutUs: heard,
        };

        await letterSignup(letterObj);
      }
    } catch (err) {
      console.log(err);
    }
  }
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
                    value={name}
                    onChange={fSetName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Enter Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    value={email}
                    onChange={fSetEmail}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="select-where">
                    Where did you hear about us ?
                  </label>
                  <select
                    id="select-where"
                    value={heard}
                    onChange={fSetHeard}
                    required
                  >
                    <option value="">Please Choose One Option</option>
                    <option value="Family & Friends">Family & Friends</option>
                    <option value="Youtube">Youtube</option>
                    <option value=" Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Twitter">Others</option>
                  </select>
                </div>

                <div className="login_button_container brown">
                  <div className="login_button" onClick={signUp}>
                    <a>Sign Up Now !</a>
                  </div>
                </div>
              </form>
            </div>
            <div className="cta-image-box"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
