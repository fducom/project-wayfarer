import React, { Component } from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
class Header extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to={{
                                pathname: "/",
                            }}>
                    <a className="navbar-brand" href="#">X Wayfarer</a>
                    </Link>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mr-right" id="navbarText">
                        <ul className="navbar-nav">
                            <li className="nav-item mr-right ">
                                <Link to={{
                                    pathname: "/login",
                                }}>
                                    <button type="button" className="nav-link" data-toggle="modal" data-target="#exampleModalCenter">
                                        Sign in
                                    </button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id='signup' href="#">Sign up</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;