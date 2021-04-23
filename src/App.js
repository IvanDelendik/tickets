import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/pages/Profile/Profile";
import Home from "./components/pages/Home/Home";
import Catalog from "./components/pages/Catalog/Catalog";
import Basket from "./components/pages/Basket/Basket";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/catalog" exact>
          <Catalog />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/basket" exact>
          <Basket />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
