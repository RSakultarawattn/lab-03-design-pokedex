import React, { Component } from 'react'
import fetch from 'superagent';
import MyLittlePokes from './MyLittlePokes';
import { Link } from 'react-router-dom';
import DropDown from './DropDown.js';




export default class FetchPokemon extends Component {

    state = {

        pokemonResults: [],
        searchInput: '',
        loading: false,
        DropDown: ''

    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await this.fetchPokemon();
    }

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value });

    }

    fetchPokemon = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchInput}`);


        this.setState({ pokemonResults: response.body.results });
    }

    render() {

        return (

            <div className="fetch">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} placeholder="enter pokemon name" />
                    <button>Search</button>
                    <DropDown handleChange={this.handleChange} />
                </form>
                {
                    this.state.loading
                        ? 'loading!!!'

                        : this.state.pokemonResults.map(poke =>

                            <Link to={`/DetailPage/${poke._id}`}>
                                <MyLittlePokes
                                    caption={poke.title}
                                    color={poke.background}
                                    pokemon={poke.pokemon}
                                    image={poke.url_image}
                                />)
                            </Link>)

                }
            </div>

        )
    }
}
