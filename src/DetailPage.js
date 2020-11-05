import React, { Component } from 'react'

import fetch from 'superagent';

export default class DetailPage extends Component {

    state = {
        pokemonResults: {},
        Loading: true,
    }

    componentDidMount = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.pokemonName}`);

        this.setState({ pokemonResults: response.body, Loading: false });
    }

    render() {
        console.log(this.state.pokemonResults)
        return (
            <>
                {this.state.Loading ?
                    'Loading!!'
                    :
                    <div className="detail">

                        <h1>{this.state.pokemonResults.pokemon}</h1>

                    </div>
                }




            </>

        )
    }
}





