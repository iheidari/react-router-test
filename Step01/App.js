import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Topics from "./Topics";

const App = () => {
  return (
    <Router>
      <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/topics">
          <li>Topic</li>
        </Link>
        <Link to="/about-us">
          <li>About Us</li>
        </Link>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
        <Route path="/about-us" component={AboutUs} />
      </div>
    </Router>
  );
};

export default App;
