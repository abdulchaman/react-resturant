import React, { Component } from "react";
import { Link } from "react-router-dom";
import QuickDisplay from "./QuickDisplay";
import "./quicksearch.css";

let url = "https://zomatoajulypi.herokuapp.com/quicksearch";
class QuickSearch extends Component {
  constructor(){
    super();
    this.state = {
      mealType : ''
    }
  }
  render() {
    return (
      <>
        <div id="quickSearch">
          <span id="QuickHeading">Quick Search</span>
          <span id="QuickSubHeading">Find Restaurants By Meal Type</span>
          <QuickDisplay mealData= {this.state.mealType}></QuickDisplay>
        </div>
      </>
    )
  }
  componentDidMount(){
    fetch(url, {method: 'GET'})
    .then((res)=> res.json())
    .then((data)=> {this.setState({mealType: data})})
  }
}
export default QuickSearch;
