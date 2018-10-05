import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
class CityDetail extends Component {
    render(){
        let cityName
        let country
        if(this.props.choice){
            cityName = this.props.choice.cityName
            country = this.props.choice.country
        } else {
            cityName = "No city selected"
            country = ""
        }
        return(
            <div className='city-detail'>
                <div>
                    <h1>{cityName}</h1>
                    <p>{country}</p>
                </div>
                <img src='https://amp.businessinsider.com/images/58f4e5ebf40daef5008b4bb4-750-500.jpg' />
                <Link to={{
                        pathname: "/dashboard/create_post",
                    }}>
                        <button data-toggle="modal" data-target="#exampleModalCenter">
                            Create Post
                        </button>
                </Link>
                <Post/>
            </div>
        )
    }
}

export default CityDetail