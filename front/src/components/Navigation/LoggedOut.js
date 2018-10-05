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
                    <Link to={{
                        pathname: "/dashboard",
                    }}>
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModalCenter">
                            Dashboard
                        </a>
                    </Link>
                </li>
                <li className="nav-item mr-right ">
                    <Link to={{
                        pathname: "/",
                    }}>
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.props.handleLogOut}>
                            Log out
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
        );
    }
}

export default LoggedOut;