import react from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Body from "./components/home/Body";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route to="/about">
            <Navbar />
          </Route>
        </Switch>
        <Switch>
          <Route to="/">
            <Navbar />
            <Body />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
