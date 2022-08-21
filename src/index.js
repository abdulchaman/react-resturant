import React from "react";
import ReactDom from "react-dom/client";
import Routing from "./Routing"
let container = document.getElementById("root");
let root= ReactDom.createRoot(container);
root.render(<Routing />);