import React, { Component } from 'react'

export default class MyLittlePokes extends Component {
    render() {
        return (
            <div className='pokes' style={{ background: this.props.color }}>
                <img src={this.props.image} alt="poke" />
                <div>{this.props.caption}</div>
                <h3>{this.props.pokemon}</h3>

            </div>
        )
    }
}
