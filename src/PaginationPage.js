// import React, { Component } from 'react'
// import fetch from 'superagent';

// export default class PaginationPage extends Component {

//     state = {


//         pokemonResults: [],
//         searchInput: 'venusaur',
//         loading: false,
//         pageNumber: 1

//     }

//     componentDidMount = async () => {
//         await this.fetchPokemon();
//     }

//     handleSubmit = async (e) => {
//         e.preventDefault();

//         await this.fetchPokemon();
//     }

//     handleChange = (e) => {
//         this.setState({ searchInput: e.target.value });

//     }

//     handleIncrement = async () => {
//         await this.setState({
//             pageNumber: this.state.pageNumber + 1,
//         })

//         await this.fetchPokemon();
//     }

//     handleDecrement = async () => {
//         await this.setState({
//             pageNumber: this.state.pageNumber - 1,
//         })
//         await this.fetchPokemon();
//     }

//     fetchPokemon = async () => {
//         this.setState({ loading: true })
//         const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=20`);


//         this.setState({
//             pokemonResults: response.body.results,
//             loading: false,
//             count: response.body.count
//         });
//     }

//     render() {

//         return (

//             <div className="fetch">
//                 <form onSubmit={this.handleSubmit}>
//                     <input onChange={this.handleChange} placeholder="enter pokemon name" />
//                     <button>Search</button>
//                 </form>
//                 <div>
//                     Page {this.state.pageNumber} out of {Math.ceil(this.state.count / 20)}
//                 </div>
//                 <div>
//                     {this.state.count} total pokemon in query
//                     </div>
//                 {
//                     <button
//                         disabled={this.state.pageNumber === 1}
//                         onClick={this.handleDecrement}>
//                         Prev
//                         </button>
//                 }
//                 {
//                     <button
//                         onClick={this.handleIncrement}
//                         disabled={this.state.pageNumber === Math.ceil(this.state.count / 20)}>
//                         Next
//                         </button>
//                 }
//                 <div className="poke">
//                     {
//                         this.state.loading
//                             ? 'loading!!!'


//                                 ? 'loading!!!'

//                                 : this.state.pokemonResults.map(poke =>
//                                     <div key={poke.pokemon}>
//                                         <p>{poke.pokemon}</p>
//                                         <img src={poke.url_image} alt={poke.pokemon} width="100" height="100" />
//                                         <p>{poke.type_1}</p>
//                                     </div>
//                                 )


//                 </div>

//             </div>

//         )
//     }
// }