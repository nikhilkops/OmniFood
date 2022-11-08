import React from "react";
import "./feature.css";

import { TbLeaf } from "react-icons/tb";
import { IoEarthSharp, IoInfiniteOutline } from "react-icons/io5";
import { AiOutlinePause } from "react-icons/ai";
// TbInfinity
export default function features() {
  return (
    <>
      <section className="features">
        <div className="container text-center margin-bottom-9">
          <a>
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </a>
        </div>

        <div className="container grid grid-4-cols">
          <div className="feature">
            <IoInfiniteOutline className="feature-icon" />

            <p className="feature-title">Never cook again!</p>
            <p className="feature-description">
              Our subscriptions cover 365 days per year, even including major
              holidays.
            </p>
          </div>

          <div className="feature">
            <TbLeaf className="feature-icon" />
            <p className="feature-title">Local & Organic</p>
            <p className="feature-description">
              Our subscriptions cover 365 days per year, even including major
              holidays.
            </p>
          </div>

          <div className="feature">
            <IoEarthSharp className="feature-icon" />
            <p className="feature-title">No Waste</p>
            <p className="feature-description">
              All our partners only use reusable containers to package all your
              meals.
            </p>
          </div>

          <div className="feature">
            <AiOutlinePause className="feature-icon" />
            <p className="feature-title">Pause any Time</p>
            <p className="feature-description">
              Going on vacation? Just pause your subscription, and we refund
              unused days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
