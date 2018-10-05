import React, { Component } from 'react'
import CityButton from './CityButton'

class City extends Component {
    constructor(props){
        super(props)
        this.state ={
            choice: []
        }
    }

    handleClick = () => {
        this.state.choice.push(this.props.cityInfo)
        this.props.reportMark(this.state.choice)
    }

    render(){
        return(
            <div>
                <CityButton handleClick={this.handleClick} cityName={this.props.cityInfo.cityName}/>
            </div>
        );
    }
}

export default City;