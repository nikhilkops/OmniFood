import React from "react";
import "./header.css";

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

import { ToastContainer, toast } from "react-toastify";

import { NavLink } from "react-router-dom";

import logo from "../../content/img/omnifood-logo.png";
function Header() {
  const { user, logout, setUser } = useContext(AuthContext);

  useEffect(() => {
    const lastUser = localStorage.getItem("omnifood_user");
    // console.log(lastUser);
    // console.log(JSON.parse(lastUser));
    if (lastUser) {
      setUser(JSON.parse(lastUser));
    }

    // console.log(user);

    return () => {
      <div> </div>;
    };
  }, []);
  // console.log(user);
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
      {/* ------------------------------------------------------------ */}{" "}
      <header className="header">
        <img src={logo} alt="omnifood-logo" className="logo" />
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Pricing
              </a>
            </li>

            {!user ? (
              <>
                <li>
                  <NavLink to="/signup" className="main-nav-link">
                    Sign Up
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/signin" className="main-nav-link">
                    SignIn
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a className="main-nav-link" href="#">
                    {user.name}
                  </a>
                </li>{" "}
                <li>
                  <a className="main-nav-link" onClick={logout} href="#">
                    Signout
                  </a>
                </li>{" "}
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
