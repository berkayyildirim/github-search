import React, {Fragment, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import './App.css';

import GithubState from "./context/github/GithubState";

const App = () => {
  const [alert, setAlert] = useState(null);

  //Search GitHub Users
  

  //Get single Github user
  

  //Get users repos
  

  //Clear Github Users from state

  //Set Alert
  const showAlert = ( msg, type ) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

    return (
      <GithubState>
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route 
              exact 
              path="/" 
              render={props=> (
                <Fragment>
                  <Search
                    setAlert={showAlert}
                    />
                  <Users />
                </Fragment>
              )}/>
              <Route exact path="/About" component={About} />
              <Route exact path="/user/:login" component={User} /> 
          </Switch>
        </div>
      </div>
      </Router>
      </GithubState>
  );
}

export default App;
