import React, { Component } from 'react'
import City from './City'
import axios from "axios"

class CityList extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount () {
        axios.get('http://localhost:3001/api/cities')
            .then(response => {
            this.setState({
                list: response.data
            })
        })
    }

    render(){
        let cityMapped = this.state.list.map((city, index)=>{
            return <City key={index} cityInfo={city}/>
        })
        return(
            <div className='cityName'>
                <h1>Cities</h1>
                <ul>
                    {cityMapped}
                </ul>
            </div>
        );
    }
}

export default CityList