import React, { Component } from 'react'
import CityButton from './CityButton'

class City extends Component {

    handleClick = () => {
        this.props.reportMark(this.props.cityInfo)
    }

    render(){
        return(
            <div>
                <CityButton imageUrl={this.props.imageUrl} handleClick={this.handleClick} cityName={this.props.cityInfo.cityName}/>
            </div>
        );
    }
}

export default City;