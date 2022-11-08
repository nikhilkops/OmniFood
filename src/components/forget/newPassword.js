import React from "react";
import "./otp.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import logo from "../../content/img/omnifood-logo.png";
import "./newPassword.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

function NewPassword() {
  let history = useHistory();
  const success = () =>
    toast.success(
      "Password Changed Successfully!\n Redirecting  to Login Page"
    );

  const {
    fPassword,
    fconfirmPassword,
    password,
    confirmPassword,
    otp,
    forgetEmail,
    resetPassword,
  } = useContext(AuthContext);
  useEffect(() => {
    if (!forgetEmail && !otp) {
      history.push("/forgetPassword");
    }
    return () => {
      <div> </div>;
    };
  }, []);
  function verifyEmail() {
    try {
      let res = resetPassword(forgetEmail, otp, password, confirmPassword).then(
        (value) => {
          // console.log(value);
          if (value) {
            // console.log("changed");
            success();

            setTimeout(function () {
              history.push("/signin");
            }, 5000);
          } else {
            // console.log("not changed");
          }
        }
      );
    } catch (e) {
      // console.log(e.message);
    }
  }

  function toggleShow() {
    fShowPassword(!showPassword);
  }

  let [showPassword, fShowPassword] = useState(false);

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
      <div className="container-login otp newPassword">
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

        <form className="login_info">
          <a>New Password</a>
          <div className="email gap-1rem">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="New Password"
              value={password}
              onChange={fPassword}
              autoComplete="off"
            />

            <div onClick={toggleShow}>
              {" "}
              {showPassword ? (
                <AiOutlineEye className="visiblity" />
              ) : (
                <AiOutlineEyeInvisible className="visiblity" />
              )}
            </div>
          </div>

          <a>Confirm Password</a>
          <div className="email gap-1rem">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Confirm Password"
              value={confirmPassword}
              autoComplete="off"
              onChange={fconfirmPassword}
            />

            <div onClick={toggleShow}>
              {" "}
              {showPassword ? (
                <AiOutlineEye className="visiblity" />
              ) : (
                <AiOutlineEyeInvisible className="visiblity" />
              )}
            </div>
          </div>

          <div className="login_button_container">
            <div className="login_button" onClick={verifyEmail}>
              <a>Submit</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewPassword;
