import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom'

class LoggedOut extends Component {
    render() {
    return (
        <div>
            <ul className="navbar-nav">
            <li className="nav-item mr-right ">
                    <Link to="/dashboard" className="nav-link" data-toggle="modal" data-target="#exampleModalCenter">
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item mr-right ">
                    <Link to="/"className="nav-link" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.props.handleLogOut}>
                        Log out
                    </Link>
                </li>
            </ul>
        </div>
        );
    }
}

export default LoggedOut;