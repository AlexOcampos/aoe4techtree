import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Error,
  Home,
  About,
  Civilization,
  Nightbot,
  Roadmap,
} from "./pages/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/civilization/:id">
          <Civilization />
        </Route>
        <Route exact path="/civilization/:id/lang/:lang">
          <Civilization />
        </Route>
        <Route exact path="/nightbot">
          <Nightbot />
        </Route>
        <Route exact path="/roadmap">
          <Roadmap />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
