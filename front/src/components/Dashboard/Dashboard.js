import React, { Component } from 'react';
import CityList from './CityList'
import CityDetail from './CityDetail'
import '../../index.css';

class Dashboard extends Component {

    render() {
        return (
            <div className='dashBoard'>
                    <CityList />
                    <CityDetail />
            </div>
        );
    }
}

export default Dashboard; 