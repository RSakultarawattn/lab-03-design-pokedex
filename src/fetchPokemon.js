import React, { Component } from 'react'
import fetch from 'superagent';
import MyLittlePokes from './MyLittlePokes';

export default class fetchPokemon extends Component {

    state = {

        pokemonResults: [],
        searchInput: 'squirtle'

    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await this.fetchPokemon();
    }

    handleChange = (e) => {
        this.setState({ pokemon: e.target.value });

    }

    fetchPokemon = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex${this.state.pokemon}`);


        this.setState({ pokemonResults: response.body });
    }

    render() {
        return (

            <div className="fetch">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} />
                    <button>Search by Pokemon</button>
                </form>
                {
                    this.state.pokemon.length === 0
                        ? 'loading!!!'
                        : this.state.pokemonResults.map(poke =>
                            <MyLittlePokes
                                caption={poke.title}
                                color={poke.background}
                                pokemon={poke.pokemon}
                                image={poke.url_image}
                            />)


                }

            </div>

        )
    }
}
