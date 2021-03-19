import "./App.css";
import Home from "./home";
import Name from "./name";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:name">
          <Name />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
