import React, { Component } from 'react'

class City extends Component {
    render(){
        return(
            <div>
                <li>
                        {this.props.cityInfo.cityName}
                </li>
            </div>
        );
    }
}

export default City;