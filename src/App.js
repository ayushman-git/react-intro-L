import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Child from "./components/Child";
import Animals from "./components/Animals";
import Details from "./components/Details";

const App = () => {
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Child name="Ayushman" age="22" />
      <Router>
        <Animals path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
