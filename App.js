import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child 1" }, [
    React.createElement("h1", {}, "Hello i am aadesh"),
    React.createElement("h1", {}, "this is h1 second header tag of child 1"),
  ]),
  React.createElement("div", { id: "child 2" }, [
    React.createElement("h1", {}, "this is h1 first header tag of child 2"),
    React.createElement("h1", {}, "this is h1 second header tag of child 2"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
