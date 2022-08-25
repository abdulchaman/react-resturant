import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./component/Home/Home";
import Listing from "./component/Listing/listingApi"
import RestaurantDetails from "./component/details/restDetails";

const Routing = () =>{
    return(
        <BrowserRouter>
            <Header></Header>
            <Route exact path="/" component={Home}></Route>
            <Route path="/listing/:mealId" component={Listing}></Route>
            <Route path="/details" component={RestaurantDetails}></Route>
            <Footer></Footer>
        </BrowserRouter>
    )
}
export default Routing;