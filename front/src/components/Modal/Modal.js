import React, { Component } from 'react';

import SignIn from './SignIn'
import SignUp from './SignUp'

class Modal extends Component {
    render() {
    let AuthComp
    if(this.props.component === "SignIn"){
        AuthComp = <SignIn isLoggedIn={this.props.isLoggedIn} handleInput={this.props.handleInput} handleLogIn={this.props.handleLogIn} />
    } else {
        AuthComp = <SignUp isLoggedIn={this.props.isLoggedIn} handleInput={this.props.handleInput} handleSignUp={this.props.handleSignUp}/>
    }
    return (
        <div>
            {AuthComp}
        </div>
        );
    }
}

export default Modal;