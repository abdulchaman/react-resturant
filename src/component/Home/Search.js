import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./search.css";
let lurl = "https://zomatoajulypi.herokuapp.com/location";
let restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId=";
class Search extends Component {
constructor(){
  super();
  this.state={
    location:'',
    restData:''
  }
}
renderCity = (data) =>{
  if(data){
    return data.map((item)=>{
      return(
        <option value={item.state_id} key={item.state_id}>{item.state}</option>
      )
    })
  }
}

renderRest = (data) =>{
  if(data){
    return data.map((item)=>{
      return(
        <option value={item.restaurant_id} key={item._id}>
          {item.restaurant_name} | {item.address}
        </option>
      )
    })
  }
}

handleCity = (event) =>{
  let stateId = event.target.value;
  fetch(`${restUrl}${stateId}`, {method: 'GET'})
  .then((res)=> res.json())
  .then((data)=> {
    this.setState({restData:data})
  })
}

  render() {
    return (
      <>
        <div id="search">
          <div className="logo">
            <span>D!</span>
          </div>
          <div id="heading">Find Best Place Near You</div>
          <div id="dropdown">
            <select onChange={this.handleCity}>
              <option>----SELECT Location----</option>
              {this.renderCity(this.state.location)}
            </select>
            <select id="restSelect">
              <option>----SELECT Restaurants----</option>
              {this.renderRest(this.state.restData)}
            </select>
          </div>
        </div>
      </>
    );
  }

  componentDidMount(){
    fetch(lurl,{method: 'GET'})
    .then((res)=> res.json())
    .then((data)=>{
      this.setState({location:data})
    })
  }

}
export default Search;
