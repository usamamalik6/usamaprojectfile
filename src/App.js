import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import AddCart from "./components/addCart";
import AddBond from "./components/addBond";
import AddView from "./components/addView";
import ViewInvestment from "./components/investment";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-cart" component={AddCart} />
            <Route exact path="/add-bond" component={AddBond} />
            <Route exact path="/view-investment" component={ViewInvestment} />
            <Route exact path="/view" component={AddView} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
