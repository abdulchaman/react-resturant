import React, {Component} from "react";
const url = "http://zomatoajulypi.herokuapp.com/menuItem";
class PlaceOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            restName:this.props.match.params.restName

        }
    }
    render(){
        return(
            <>
                <h1>{this.state.restName}</h1>
            </>
        )
    }
}
export default PlaceOrder;