// {
//   /* <div id="parent">
//   <div id="child 1">
//     <h1>hello</h1>
//     <h2>wolrd 1</h2>
//   </div>
//   <div id="child 2">
//     <h1>hello</h1>
//     <h2>wolrd 2</h2>
//   </div>
// </div>; */
// }

// creating nested html structure using react

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child 1" }, [
    React.createElement("h1", {}, "this is h1 first header tag of child 1"),
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
