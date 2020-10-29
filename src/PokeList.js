import React, { Component } from 'react'
import Pokes from './data.js';
import MyLittlePokes from './MyLittlePokes';

export default class PokeList extends Component {




    render() {

        const filteredPokes = this.props.pokes.filter((poke) => {

            if (!this.props.filter) return true;

            if (poke.pokemon === this.props.filter) return true;

            return false
        });


        return (
            <>

                <div className="pokes">
                    {
                        filteredPokes.map(poke =>
                            <MyLittlePokes
                                caption={poke.title}
                                color={poke.background}
                                pokemon={poke.pokemon}
                            />)


                    }
                </div>
            </>
        )
    }
}