import React, { Component } from 'react'
import Pokes from './data.js';

export default class PokeList extends Component {

    state = {
        filter: '',
        value: ''
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
        console.log(this.state.value);
    }


    render() {
        const filteredPoke = this.props.poke.filter((Pokes) => {
            if (!this.props.filter) {
                return true;
            } if (this.state.name === this.props.filter) {
                return true;
            } if (this.state.type === this.props.filter) {
                return true;
            } else {
                return false
            }
        });