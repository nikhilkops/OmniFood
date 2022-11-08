import React from "react";
import "./testinomial.css";

import gallery from "./gallery";
import review from "./peopleReviews";
import bottom from "../../content/img/Bottom.png";

function testinomial() {
  return (
    <>
      <section className="section-testinomials">
        <div className="testinomial-container">
          <span className="subheading">Testinomial</span>
          <h2 className="heading-secondary">
            Once you try it, you can't go back
          </h2>

          <div className="testinomials">
            {review.map((val, i) => {
              return (
                <figure className="testinomial">
                  <img className="testinomial-img" src={val.img} />
                  <blockquote className="testinomial-text">
                    {val.review}
                  </blockquote>
                  <p className="testinomial-name">&mdash; {val.author}</p>
                </figure>
              );
            })}
          </div>
        </div>

        <div className="gallery">
          {Object.keys(gallery).map((val, key) => {
            return (
              <figure className="gallery-item">
                <img src={gallery[val]} />
              </figure>
            );
          })}
        </div>
      </section>

      <img className="bottom shift-up" src={bottom} />
    </>
  );
}

export default testinomial;
