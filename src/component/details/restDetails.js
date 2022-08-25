import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import "./details.css";
const url = "http://zomatoajulypi.herokuapp.com/details";

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restDetail: "",
    };
  }
  render() {
    let { restDetail } = this.state;
    return (
      <>
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
                unknown printer took a galley of type and scrambled it to make a
                type specimen
              </p>
            </TabPanel>
            <TabPanel>
              <h2>{restDetail.address}</h2>
              <h3>Phone: {restDetail.contact_number}</h3>
            </TabPanel>
          </Tabs>
        </div>
      </>
    )
  }
  componentDidMount() {
    const restId = this.props.location.search.split("=")[1];
    fetch(`${url}/${restId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        return this.setState({ restDetail: data[0] });
      });
  }
}
export default RestaurantDetails;
