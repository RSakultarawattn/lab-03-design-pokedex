import React, { Component } from 'react';
import MyLittlePokes from './MyLittlePokes';

export default class PokeList extends Component {




    render() {

        const filteredPokes = this.props.pokes.filter((poke) => {

            if (!this.props.filter) return true;

            if (poke.pokemon === this.props.filter) return true;

            return false
        });

        console.log(this.props.pokes)
        return (
            <>

                <div className="pokes">
                    {
                        filteredPokes.map((poke, i) =>
                            <MyLittlePokes
                                key={i}
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