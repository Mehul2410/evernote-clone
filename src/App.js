import react from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
