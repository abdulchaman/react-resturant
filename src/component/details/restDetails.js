import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MenuDisplay from "./MenuDisplay";
import axios from "axios";
import "react-tabs/style/react-tabs.css";
import "./details.css";
const url = "http://zomatoajulypi.herokuapp.com/details";
const menuUrl = " https://zomatoajulypi.herokuapp.com/menu";

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restDetail: "",
      menuList: "",
      mealId: sessionStorage.getItem("mealId")
        ? sessionStorage.getItem("mealId")
        : 1,
        userItem:""
    };
  }
  proceed = ()=>{
    sessionStorage.setItem('menu',this.state.userItem);
    this.props.history.push(`/placeOrder/${this.state.restDetail.restaurant_name}`)
  }
  addToCart = (data) =>{
     this.setState({userItem:data})
  }
  render() {
    let { restDetail } = this.state;
    return (
      <>
        <div className="container-fluid">
          <div className="main">
            <div className="titleImg">
              <div className="imageClass">
                <img
                  src={restDetail.restaurant_thumb}
                  alt={restDetail.restaurant_name}
                ></img>
              </div>
            </div>
            <div className="titleContent">
              <div className="content">
                <h1>{restDetail.restaurant_name}</h1>
                <span id="cfeedback">231 Customers Rating Average</span>
                <h3>
                  Old Price <del>Rs. 450</del>
                </h3>
                <h3>Offer Price Rs. {restDetail.cost}</h3>
                <h3>
                  Best Taste of Fresh Chai with Samosa At your Door or DineIn
                </h3>
                <div>
                  <div className="icons">
                    <img src="https://i.ibb.co/wJvrhYg/veg.png" />
                  </div>
                  <div className="icons">
                    <img src="https://i.ibb.co/mD3jpgc/sentizied.png" />
                  </div>
                </div>
              </div>
              <Tabs>
                <TabList>
                  <Tab>About</Tab>
                  <Tab>Contact</Tab>
                </TabList>
                <TabPanel>
                  <h2>{restDetail.restaurant_name}</h2>
                  <p>
                    {restDetail.restaurant_name} is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen
                  </p>
                </TabPanel>
                <TabPanel>
                  <h2>{restDetail.address}</h2>
                  <h3>Phone: {restDetail.contact_number}</h3>
                </TabPanel>
              </Tabs>
              <div>
                <Link
                  to={`/listing/${this.state.mealId}`}
                  className="btn btn-danger"
                >
                  Back
                </Link> &nbsp;
                <button className="btn btn-success" onClick={this.proceed}>Proceed</button>
              </div>
            </div>
          </div>
          <div className="col-md-12">
          <center><h2>Menu</h2></center>
          <MenuDisplay menuList={this.state.menuList} finalOrder={(data)=> this.addToCart(data)}></MenuDisplay>
          </div>
        </div>
      </>
    );
  }
  async componentDidMount() {
    let restId = this.props.location.search.split("=")[1];
    let response = await axios.get(`${url}/${restId}`);
    let menuResponse = await axios.get(`${menuUrl}/${restId}`);
    this.setState({
      restDetail: response.data[0],
      menuList: menuResponse.data,
    });
  }
}
export default RestaurantDetails;
