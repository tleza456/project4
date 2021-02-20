import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screen/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route Path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
