import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Game from  "./screens/Game"
import Library from "./screens/Library"

const App = () => {
  return (
    <Router>
    <Switch>
    <Route path="/game">
      <Game />
    </Route>
    <Route path="/">
      <Library />
    </Route>
  </Switch>
</Router>
  );
}

export default App;
