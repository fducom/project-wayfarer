import React, { Component } from 'react'
import City from './City'

class CityList extends Component {

    render(){
        let cityMapped = this.props.list.map((city, index)=>{
            console.log(city)
            return (<div key={index}>
                        <City imageUrl={city.imageUrl} reportMark={this.props.reportMark} cityInfo={city}/>
                    </div>)
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