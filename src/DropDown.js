import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <select onChange={this.props.handleChange}>

                <option value='attack'>Attack</option>
                <option value='defense'>Defense</option>
                <option value='speed'>Speed</option>
            </select>
        )
    }
}