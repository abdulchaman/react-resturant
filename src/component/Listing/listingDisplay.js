import React from "react";
import { Link } from "react-router-dom";
import "./listing.css";

const ListingDisplay = (props) => {
  const renderData = ({ listData }) => {
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            <div className="item">
              <div className="row">
                <div className="col-md-5">
                  <img
                    src={item.restaurant_thumb}
                    className="Image"
                    alt={item.restaurant_name}
                  ></img>
                </div>
                <div className="col-md-7">
                  <div className="hotel_name">
                    <Link to={`/details?restId=${item.restaurant_id}`}>{item.restaurant_name}</Link>
                  </div>

                  <div className="city_name">{item.address}</div>
                  <div className="city_name">{item.rating_text}</div>
                  <div className="city_name">Rs. {item.cost}</div>
                    <div className="labelDiv">
                    {item.mealTypes.map((meal)=>{return(
                      <span className="label label-primary">{meal.mealtype_name}&nbsp;</span>
                    )})}
               
                  
                 
                  </div> 
             
                  <div className="labelDiv">
                    <span className="label label-warning">
                      {item.cuisines[0].cuisine_name}
                    </span>{" "}
                    &nbsp;
                    <span className="label label-info">
                      {item.cuisines[1].cuisine_name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      } else {
        return (
          <div>
            <h2>There is no data</h2>
          </div>
        )
      }
    } else {
      return (
        <div>
          <h2>Loading ...</h2>
          <img src="/images/loader.gif"></img>
        </div>
      )
    }
  };
  return (
    <>
      <div id="content">{renderData(props)}</div>
    </>
  )
};
export default ListingDisplay;
