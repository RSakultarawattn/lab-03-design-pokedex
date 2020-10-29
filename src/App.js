import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import CharacterList from './ListPage.js';
import PokeList from './PokeList.js';

export default class PokeStatus extends Component {


  state = {

    selected: '',
  }

  selectPoke = (e) => {
    this.setState({ selected: e.target.value });
  }


  render() {

    <div>
      <h1>Yes, that's right, it's Pokemon...again...</h1>
      <Header />
    </div>
    return (

      <CharacterList
        selected={this.state.selected}
        selectPoke={this.selectPoke}
      />
      <PokeList
      filter={this.state.filter}
      value={this.state.value}
      handleChange={this.handleChange}
      />



    )
  }
}