import React, { Component } from 'react';

import SignIn from './SignIn'
import SignUp from './SignUp'

class Modal extends Component {
    render() {
    let AuthComp
    console.log(this.props)
    if(this.props.component === "SignIn"){
        AuthComp = <SignIn/>
    } else {
        AuthComp = <SignUp/>
    }
    return (
        <div>
            {AuthComp}
        </div>
        );
    }
}

export default Modal;