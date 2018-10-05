import React, { Component } from 'react'
import City from './City'
import axios from "axios"

class CityList extends Component {

    render(){
        let cityMapped = this.props.list.map((city, index)=>{
            return <City reportMark={this.props.reportMark} key={index} cityInfo={city}/>
        })
        return(
            <div className='cityName'>
                <h1>Cities</h1>
                {cityMapped}
            </div>
        );
    }
}

export default CityList