import "./App.scss";
import Profile from "./components/pages/Profile/Profile";
import Home from "./components/pages/Home/Home";
import Catalog from "./components/pages/Catalog/Catalog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
