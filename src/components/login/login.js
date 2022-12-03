import React from "react";
import "./login.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthProvider";

import { NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import {
  SpinningCircles,
  Circles,
  Puff,
  TailSpin,
  Bars,
  Grid,
  Audio,
} from "react-loading-icons";

import { useHistory } from "react-router-dom";

import logo from "../../content/img/omnifood-logo.png";

function Login() {
  const warn = () => toast.warn("Enter Email and Password");
  const error = () =>
    toast.error("Wrong Email or Password", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const { login, user, setUser } = useContext(AuthContext);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  async function LoginButton() {
    try {
      setLoading(true);
      if (email && password) {
        let loginData = { email: email, password: password };
        let isLoggedIn = await login(email, password);

        // console.log(isLoggedIn);
        if (isLoggedIn) {
          setLoading(false);
          history.push("/");
        } else {
          setLoading(false);
          error();
          // history.push("/signin");
        }
        // console.log(user);
      } else {
        //Alert Enter Email and Password
        setLoading(false);
        warn();
      }
    } catch (err) {
      setLoading(false);
      // console.log(err.message);
    }
  }

  function fSetEmail(e) {
    let value = e.target.value;
    setEmail(value);
  }
  function fSetPassword(e) {
    let value = e.target.value;
    setPassword(value);
  }

  useEffect(() => {
    const lastUser = localStorage.getItem("omnifood_user");

    setUser(JSON.parse(lastUser));

    return () => {
      <div> </div>;
    };
  }, []);
  return (
    <>
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
      {user ? (
        history.push("/")
      ) : (
        <>
          {" "}
          <div className="authorize-background"></div>
          <div className="container-login">
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
              <div className="email">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={fSetEmail}
                  autoComplete="on"
                />
              </div>
              <div className="password">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={fSetPassword}
                  autoComplete="on"
                />
              </div>

              {loading ? (
                <div className="loading-circle">
                  <SpinningCircles fill="#e67e22" />
                </div>
              ) : (
                <>
                  {" "}
                  <div className="login_button_container" onClick={LoginButton}>
                    <div className="login_button">
                      <a>Sign In</a>
                    </div>
                  </div>
                  <div className="other_option">
                    <div className="signup">
                      <NavLink to="/forgetPassword">Forget Passsword ?</NavLink>
                    </div>

                    <div className="signup">
                      <NavLink to="/signup">Sign Up</NavLink>
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
