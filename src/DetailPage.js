import React, { Component } from 'react'
import MyLittlePokes from './MyLittlePokes.js';
import fetch from 'superagent';

export default class DetailPage extends Component {

    state = {
        pokemonResults: {},
    }

    componentDidMount = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.pokemonName}`);

        this.setState({ pokemonResults: response.body });
    }

    render() {

        return (

            <div className="fetch">
                <h1>{this.props.match.params.pokemonName}'s name!</h1>
                {
                    this.state.pokemonResults.length === 0
                        ? 'loading!!!'

                        : this.state.pokemon.map(poke => <div key={poke.poke}>
                            <p>{poke.character}</p>
                            <img src={poke.image} alt={poke.character} width="100" height="100" />
                            <p>{poke.poke}</p>

                            < MyLittlePokes
                                caption={this.state.pokemonResults.title}
                                color={this.state.pokemonResults.background}
                                pokemon={this.state.pokemonResults.pokemon}
                                image={this.state.pokemonResults.url_image} />

                        </div>)
                }
            </div>
        )
    }
}





