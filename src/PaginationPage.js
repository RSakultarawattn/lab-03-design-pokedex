import React, { Component } from 'react'
import fetch from 'superagent';


export default class PaginationPage extends Component {

    state = {


        pokemonResults: [],
        //searchInput: '',
        loading: false,
        pageNumber: 1

    }

    handleIncrement = async () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1,
        })

        await this.fetchPokemon();
    }

    handleDecrement = async () => {
        this.setState({
            pageNumber: this.state.pageNumber - 1,
        })
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true })
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=23`);


        this.setState({
            pokemonResults: response.body.results,
            loading: false,
            count: response.body.count
        });
    }

    render() {

        return (

            <div className="fetch">

                <div className="pages">
                    Page {this.state.pageNumber} out of {Math.ceil(this.state.count / 23)}
                </div>
                <div className="query">
                    {this.state.count} Total Pokemon in Query
                    </div>
                {
                    <button
                        disabled={this.state.pageNumber === 1}
                        onClick={this.handleDecrement}>
                        Prev
                        </button>
                }
                {
                    <button
                        onClick={this.handleIncrement}
                        disabled={this.state.pageNumber === Math.ceil(this.state.count / 23)}>
                        Next
                        </button>
                }
                <div>
                    {
                        this.state.loading
                            ? 'loading!!!'

                            : this.state.pokemonResults.map(pokemonResults =>
                                <div className="page-pokes" key={pokemonResults.pokemonResults}>
                                    <p>{pokemonResults.pokemonResults}</p>
                                    <img src={pokemonResults.url_image} alt={pokemonResults.pokemonResults} width="200" height="300" />
                                    <p>{pokemonResults.pokemon}</p>
                                </div>
                            )}
                </div>

            </div>

        )
    }
}