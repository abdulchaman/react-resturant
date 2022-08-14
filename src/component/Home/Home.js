import React from "react";
import {Link} from "react-router-dom";
import Search from "./Search";
import QuickSearch from "./QuickSearch";

const Home = () =>{
    return(
        <>
            <Search></Search>
            <QuickSearch></QuickSearch>
        </>
    )
}
export default Home;