import React from "react";
import "./meals.css";

import card from "./meal_card";
import list from "./list";
import { AiOutlineFire, AiOutlineStar, AiOutlineCheck } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";

import images from "./images";

function Meals() {
  return (
    <>
      <section className="section-meals">
        <div className="container text-center">
          <span className="subheading">Meals</span>
          <h2 className="heading-secondary">
            Omnifood AI chooses from 5,000+ recipes
          </h2>
        </div>

        <div className="container grid grid-3-cols grid-center-v animation-up">
          {/* Card Content Map */}
          {card.map((val, j) => {
            return (
              <div className="meal">
                <img
                  className="meal-img"
                  src={val.img}
                  alt="Food_Image"
                  key={"meal-image-" + j}
                />
                <div className="meal-content">
                  <div className="meal-tags">
                    {val.tag_class.map((value, i) => {
                      return (
                        <span className={value} key={val.tag[i]}>
                          {val.tag[i]}{" "}
                        </span>
                      );
                    })}
                  </div>
                  <p className="meal-title">{val.title}</p>

                  <ul className="meal-attributes">
                    <li
                      className="meal-attribute"
                      key={"meal-attribute-" + 2 * Math.random()}
                    >
                      <AiOutlineFire className="meal-icon" />
                      <strong>{val.calories} </strong> Calories
                    </li>
                    <li
                      className="meal-attribute"
                      key={"meal-attribute-" + 2 * Math.random()}
                    >
                      <GiKnifeFork className="meal-icon" />
                      NutriScore &reg;
                      <strong>{val.nutriScore} </strong>
                    </li>
                    <li
                      className="meal-attribute"
                      key={"meal-attribute-" + 2 * Math.random()}
                    >
                      <AiOutlineStar className="meal-icon" />
                      <strong>{val.ARating}</strong> Rating ({val.TNoRating})
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}

          <div className="diets">
            <h3 className="heading-tertiary">Works with any diet:</h3>
            <ul className="list">
              {/* list  content map  */}
              {list.map((val) => {
                return (
                  <li className="list-item" key={val + " " + Math.random()}>
                    <AiOutlineCheck className="meal-icon" />
                    {val}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="all-recipes container">
          <a href="#" className="link">
            See All Recipes &rarr;
          </a>
        </div>

        <img className="top" src={images.top} />
      </section>
    </>
  );
}

export default Meals;
