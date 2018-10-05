import React, { Component } from 'react'

class City extends Component {
    render(){
        return(
            <div>
                <button type="button" className="btn btn-outline-secondary btn-lg btn-block">{this.props.cityInfo.cityName}</button>
            </div>
        );
    }
}

export default City;