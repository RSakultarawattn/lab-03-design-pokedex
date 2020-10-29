import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import PokeList from './PokeList.js';
import MyLittlePokes from './MyLittlePokes.js';

export default class PokeStatus extends Component {


  render() {

    return (
      <div>
        <Router>
          <Header name="Ray" />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <ListPage {...routerProps} />}
            />
            <Route
              path="/"
              exact
              render={(routerProps) => <fetchPokemon {...routerProps} />}
            />
            <Route
              path="/"
              exact
              render={(routerProps) => <PokeList {...routerProps} />}
            />
          </Switch>
          <footer />



        </Router>

      </div>
    )
  }
}