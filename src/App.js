import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import VisitUs from "./Pages/VisitUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/visitUs" component={VisitUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
