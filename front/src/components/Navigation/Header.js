import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

class Header extends Component {

    render() {
        let navOptions = []
        if(this.props.isLoggedIn){
            navOptions.push(<LoggedOut handleLogOut={this.props.handleLogOut}/>)
        } else {
            navOptions.push(<LoggedIn />)
        }

        return (
            <header>
                <nav className="navbar navbar-expand-sm navbar-light">
                    <Link to="/" className="navbar-brand" href="#">X Wayfarer</Link>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mr-right" id="navbarText">
                        {navOptions}
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;