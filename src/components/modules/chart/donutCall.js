import React from "react";
import "./styles.css";

import Donut from "./donutViz";

export default function App() {
  let data = [
    { name: "Jours séléctionée", value: "4", colors: "coral" },
    { name: "Jours restant", value: "6", colors: "white" }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Donut id="1" data={data} height={"150px"} width={"150px"} />
      <Donut id="2" data={data} height={"150px"} width={"150px"} />
      <Donut id="3" data={data} height={"150px"} width={"150px"} />
    </div>
  );
}
