// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header";

import Footer from "./footer";
import SearchNorth from "./searchFood";
import Home from "./home";
import SearchPage from "./searchPage";
import Member from "./member";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/north" exact>
            <SearchNorth type="north" />
          </Route>
          <Route path="/south" exact>
            <SearchNorth type="south" />
          </Route>
          <Route path="/soft" exact>
            <SearchNorth type="soft" />
          </Route>
          <Route path="/chinees" exact>
            <SearchNorth type="chinese" />
          </Route>
          <Route path="/fast" exact>
            <SearchNorth type="fast" />
          </Route>
          <Route path="/search" exact>
            <SearchPage />
          </Route>
          <Route path="/member" exact>
            <Member />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
