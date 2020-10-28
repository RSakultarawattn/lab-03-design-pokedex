import React, { Component } from 'react'

export default class CharacterList extends Component {
    render() {
        return (
            <>
                <input onChange={this.props.selectPoke} />
            You have chosen: {this.props.selected}

            </>
        )
    }
}
