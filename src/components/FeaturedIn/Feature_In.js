import React from "react";
import "./featured.css";
import images from "./images";
function Feature_In() {
  return (
    <>
      <section className="featured-in container">
        <div className="feature-heading">
          <a>As Featured In</a>
        </div>
        <div className="publications">
          {Object.keys(images).map((val, key) => {
            return (
              <img
                className="publication-logo"
                src={images[val]}
                alt={val}
                key={val}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Feature_In;
