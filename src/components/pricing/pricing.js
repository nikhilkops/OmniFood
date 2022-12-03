import React from "react";
import "./pricing.css";

import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";

import { GiKnifeFork } from "react-icons/gi";

function pricing() {
  return (
    <>
      {" "}
      <section className="section-pricing">
        <div className="container">
          <span className="subheading">Pricing</span>
          <h2 className="heading-secondary">
            Eating well without breaking the bank
          </h2>
        </div>

        <div className="container grid grid-2-cols">
          <div className="pricing-plan starter">
            <header className="plan-header">
              <p className="plan-name">Starter</p>
              <p className="plan-price">
                <span>
                  <BiRupee />
                </span>
                399
              </p>

              <p className="plan-text">
                per month . That's just <BiRupee />
                13 per day
              </p>
            </header>
            <ul className="list">
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="meal-icon"
                ></ion-icon>
                <AiOutlineCheck className="meal-icon" />
                <span>1 meal per day</span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="meal-icon"
                ></ion-icon>
                <AiOutlineCheck className="meal-icon" />
                <span>Order from 11am to 9pm </span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="meal-icon"
                ></ion-icon>
                <AiOutlineCheck className="meal-icon" />
                <span>Delivery is free</span>
              </li>
              <li className="list-item">
                <ion-icon name="close-outline" className="meal-icon"></ion-icon>
                <AiOutlineClose className="meal-icon" />
                <span> Get access to latest recipes</span>
              </li>
            </ul>
            <div className="plan-signup">
              <a href="#" className="btn btn-full margin-right-sm">
                Start Eating Well
              </a>
            </div>
          </div>
          <div className="pricing-plan complete">
            <header className="plan-header">
              <p className="plan-name">Complete</p>
              <p className="plan-price">
                <span>
                  {" "}
                  <BiRupee />
                </span>
                649
              </p>

              <p className="plan-text">
                per month . That's just <BiRupee />
                11 per day
              </p>
            </header>
            <ul className="list">
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="meal-icon"
                ></ion-icon>
                <AiOutlineCheck className="meal-icon" />
                <span>
                  <strong>2</strong> meal per day
                </span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="meal-icon"
                ></ion-icon>
                <AiOutlineCheck className="meal-icon" />
                <span>
                  {" "}
                  Order <strong>24/7</strong>
                </span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="meal-icon"
                ></ion-icon>
                <AiOutlineCheck className="meal-icon" />
                <span>Delivery is free</span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="meal-icon"
                ></ion-icon>
                <AiOutlineCheck className="meal-icon" />
                <span> Get access to latest recipes</span>
              </li>
            </ul>
            <div className="plan-signup">
              <a href="#" className="btn btn-full margin-right-sm">
                Start Eating Well
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default pricing;
