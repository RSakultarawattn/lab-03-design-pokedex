import React, { Component } from 'react'
import MyLittlePokes from './MyLittlePokes.js';

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
                    this.state.pokemonResults === 0
                        ? 'loading!!!'

                        : <div>
                            <MyLittlePokes
                                caption={this.state.pokemonResults.title}
                                color={this.state.pokemonResults.background}
                                pokemon={this.state.pokemonResults.pokemon}
                                image={this.state.pokemonResults.url_image}
                            />
                        </div>
                }
            </div>
        )
    }
}