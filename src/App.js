import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";

function App() {
  // const person = {name: 'Jay', age : 30}
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" exact component={Create} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
