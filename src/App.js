import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function App() {
 

  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect from="/" to="Home" />
            </Route>

            <Route path="/Home">
              <Home />
            </Route>


          </Switch>
        </Router>
    </div>
  );
}
