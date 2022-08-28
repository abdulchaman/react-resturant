import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./listing.css";
import ListingDisplay from "./listingDisplay";
import axios from "axios";
const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";
class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantList: "",
    };
  }
  render() {
    return (
      <>
        <div className="row">
          <div id="mainListing">
            <div id="filter"></div>
            <ListingDisplay listData={this.state.restaurantList} />
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    let mealId = this.props.match.params.mealId;
    sessionStorage.setItem("mealId", mealId);
    axios(`${url}${mealId}`, { method: "GET" }).then((res) => {
      this.setState({ restaurantList: res.data });
    });
  }
}
export default Listing;
