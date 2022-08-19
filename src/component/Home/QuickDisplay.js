import React from "react";
import { Link } from "react-router-dom";
import "./quicksearch.css";

const QuickDisplay = (props) => {
  const renderMeal = ({ mealData }) => {
    if (mealData) {

     return mealData.map((item) => {
        return (
            <Link to="/" key={item.mealtype_id}>
          <div className="tileContainer">
            <div className="tileComponent1">
              <img src={item.meal_image} alt={item.mealtype} />
            </div>
            <div className="tileComponent2">
              <div className="componentHeading">
                <Link to="/">{item.mealtype}</Link>
              </div>
              <div className="componentSubHeading">
               {item.content}
              </div>
            </div>
          </div>
          </Link>
        );
      });
    }
  };
  return <>
  {renderMeal(props)}
  </>;
};
export default QuickDisplay;
