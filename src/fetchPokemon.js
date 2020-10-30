import React, { Component } from 'react'
import fetch from 'superagent';
import MyLittlePokes from './MyLittlePokes';




export default class FetchPokemon extends Component {

    state = {


        pokemonResults: [],
        searchInput: 'venusaur'

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
        console.log(this.state.pokemonResults)
        return (
            <>
                <div className="fetch">
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} placeholder="enter pokemon name" />
                        <button>Search</button>
                    </form>
                    {
                        this.state.pokemonResults.length === 0
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
            </>
        )
    }
}
