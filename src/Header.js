import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <p className="intro">
                    Would you like to fetch some Pokemon?
                </p>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/fetch">Fetch</Link>
                    </li>
                    <li>
                        <Link to="/pagination">See them all!</Link>
                    </li>
                    


                </ul>
            </div>
        )
    }
}
