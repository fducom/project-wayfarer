import React, { Component } from 'react';

import SignIn from './SignIn'
import SignUp from './SignUp'

class Modal extends Component {
    render() {
    // Render nothing if the "show" prop is false
    
    return (
        <SignIn />,
        <SignUp />
        );
    }
}

export default Modal;