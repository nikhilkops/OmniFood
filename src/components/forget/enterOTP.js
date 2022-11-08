import React from "react";
import "./otp.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

import { ToastContainer, toast } from "react-toastify";

import { useState, useContext, useEffect } from "react";

import logo from "../../content/img/omnifood-logo.png";

function GetOTP() {
  let history = useHistory();
  const { fOTP, forgetEmail, otp } = useContext(AuthContext);

  const warn = () => toast.warn("OTP must be 7 of number");

  function verifyEmail() {
    if (otp.length == 7) {
      // console.log(otp);

      history.push("/newPassword");
    } else {
      warn();
    }
  }

  useEffect(() => {
    if (!forgetEmail) {
      history.push("/forgetPassword");
    }
    return () => {
      <div> </div>;
    };
  }, []);

  return (
    <>
      {" "}
      {/* -----------------------Warning of passsword not entered----------- */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* ------------------------------------------------------------ */}
      <div className="authorize-background"></div>
      <div className="container-login otp">
        <div className="image_container">
          <img className="logo-container" src={logo} />

          <NavLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="close"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </NavLink>
        </div>

        <div className="login_info">
          <a>
            Please enter OTP send to <strong>{forgetEmail}</strong>
          </a>
          <form className="email">
            <input
              type="number"
              required
              placeholder="OTP"
              onChange={fOTP}
              value={otp}
              autoComplete="off"
            />
          </form>

          <div className="login_button_container">
            <div className="login_button" onClick={verifyEmail}>
              <a>Submit</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetOTP;
