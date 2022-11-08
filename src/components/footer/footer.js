import React from "react";
import "./footer.css";

import logo from "../../content/img/omnifood-logo.png";
function footer() {
  return (
    <>
      {" "}
      <footer className="footer">
        <div className="container grid grid-5-cols border-right">
          <div className="logo-col">
            <img src={logo} alt="omnifood-logo" className="logo" />

            <ul className="social-link">
              <li>
                <a href="#">
                  <ion-icon
                    name="logo-facebook"
                    className="social-icon"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon
                    name="logo-instagram"
                    className="social-icon"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon
                    name="logo-twitter"
                    className="social-icon"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon
                    name="logo-whatsapp"
                    className="social-icon"
                  ></ion-icon>
                </a>
              </li>
            </ul>
            <p className="copyright">
              Copyright &copy; 2021 by Omnifoof, Inc. All rights reserver.
            </p>
          </div>

          <div className="address-footer">
            <p className="footer-heading">Contact Us</p>
            <address className="contacts">
              <p className="address-text">
                623 Harisson St., 2nd Floor,San Francisco, CA 94107
              </p>
              <p className="address-contact">
                <a className="footer-link" href="tel:415-201-6370">
                  415-201-6370
                </a>
                <a className="footer-link" href="mailto:hello@omnifood.com">
                  hello@omnifood.com
                </a>
              </p>
            </address>
          </div>
          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Create Account
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  {" "}
                  iOS App
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Sign In
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Android App
                </a>
              </li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Create Account
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  iOS App{" "}
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Sign In
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Android App
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Reciepe Directory
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  {" "}
                  Help Center
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Privacy & Terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default footer;
