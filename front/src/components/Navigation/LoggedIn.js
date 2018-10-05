import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom'

class LoggedIn extends Component {
    render() {
    return (
        <div>
            <ul className="navbar-nav">
                <li className="nav-item mr-right ">
                    <Link to={{
                        pathname: "/login",
                    }}>
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModalCenter">
                            Log in
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={{
                        pathname: "/signup",
                    }}>
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModalCenter">
                            Sign Up
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
        );
    }
}

export default LoggedIn;