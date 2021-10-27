import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Error, Home, About, Civilization } from "./pages/index";

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
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
