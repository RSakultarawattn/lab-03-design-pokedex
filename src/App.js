import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import FetchPokemon from './fetchPokemon.js';
import DetailPage from './DetailPage.js'
import PaginationPage from './PaginationPage.js';

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
              path="/fetch"
              exact
              render={(routerProps) => <FetchPokemon {...routerProps} />}
            />
            <Route
              path="/DetailPage/:pokemonName"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
            <Route
              path="/pagination"
              exact
              render={(routerProps) => <PaginationPage {...routerProps} />}
            />
          </Switch>
          <footer />



        </Router>

      </div>
    )
  }
}