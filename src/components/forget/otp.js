import React from "react";
import "./otp.css";
import { NavLink } from "react-router-dom";
import { SpinningCircles } from "react-loading-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../context/AuthProvider";
import { useState, useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";

import logo from "../../content/img/omnifood-logo.png";
function ForgetPassword() {
  const { user, fEmail, forgetEmail, forgetPassword, setUser } =
    useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  const error = () => toast.error("Email not registered with us !");
  const warn = () => toast.warn(" Enter email !");
  const success = () =>
    toast.success("OTP send to email id !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  useEffect(() => {
    const lastUser = localStorage.getItem("omnifood_user");

    setUser(JSON.parse(lastUser));

    return () => {
      <div> </div>;
    };
  }, []);

  function sendOTP() {
    try {
      setLoading(true);
      if (forgetEmail.length == 0) {
        warn();
        setLoading(false);
        return;
      }

      const res = forgetPassword(forgetEmail)
        .then((value) => {
          // console.log(value);
          if (value) {
            success();
            setLoading(false);

            history.push("/enterOTP");
            return;
          } else {
            error();
            fEmail("");
            setLoading(false);
            return;
          }
        })
        .catch((err) => {
          setLoading(false);
          return err;
        });
    } catch (err) {
      error();
      // console.log("error");
      setLoading(false);
      // console.log(err.message);
    }
  }

  return (
    <>
      {/* -------------------Popup----------------- */}
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
      {/* ------------------------------- */}

      {user ? (
        history.push("/")
      ) : (
        <>
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
              <a>Please enter your email to search for your account</a>
              {loading ? (
                <div className="loading-circle">
                  <SpinningCircles fill="#e67e22" />
                </div>
              ) : (
                <form className="email">
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={fEmail}
                    autoComplete="on"
                  />
                </form>
              )}

              <div className="login_button_container" onClick={sendOTP}>
                <div className="login_button">
                  <a>Search</a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ForgetPassword;
