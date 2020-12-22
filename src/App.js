import React from "react";
import ReactDOM from "react-dom";
import Child from "./components/Child";
import SearchParams from "./components/SearchParams";
import Animals from "./components/Animals";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Child name="Ayushman" age="22" />
      <SearchParams name="Ayushman" age="22" />
      <Animals />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
