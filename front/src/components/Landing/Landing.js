import React, { Component } from 'react';
import Carousel from './Carousel'
import Main from './Main'
import '../../index.css';
import Modal from '../Modal/Modal'

class Landing extends Component {

    render() {
        return (
            <div>
                <Modal/>
                <Carousel/>
                <Main/>
            </div>
        );
    }
}

export default Landing;