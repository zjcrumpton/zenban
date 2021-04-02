// Package Components
import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// Source Components
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
