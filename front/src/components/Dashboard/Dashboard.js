import React, { Component } from 'react';
import CityList from './CityList'
import CityDetail from './CityDetail'
import '../../index.css';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

    render() {
        return (
            <div>
                {this.props.isLoggedIn ? <div className='dashBoard'><CityList /><CityDetail /></div> : <Redirect to="/"/>}
            </div>
        );
    }
}

export default Dashboard; 