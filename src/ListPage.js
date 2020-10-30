import React from 'react'
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
        console.log(pokes)
        return (

            <div className="grid-this">
                <PokeList pokes={pokes} filter={this.state.filter} />




            </div>

        );
    }
}
