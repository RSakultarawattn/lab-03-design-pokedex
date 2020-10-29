import React, { Component } from 'react'
import pokes from './data.js';
import PokeList from './PokeList.js';

export default class ListPage extends React.Component {

    state = {

        filter: ''
    }

    handleChange = (e) => {
        this.setState({
            filter: e.target.value
        });
    }






    render() {
        return (

            <div className="griddy">
                <PokeList pokes={pokes} filter={this.state.filter} />




            </div>

        );
    }
}
