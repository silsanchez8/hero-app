import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../ui/NavBar';
import { LoginScreen } from '../login/LoginScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={MarvelScreen} />
        </Switch>
      </div>
    </Router>
  );
};
