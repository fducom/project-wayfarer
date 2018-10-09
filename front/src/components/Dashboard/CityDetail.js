import React, { Component } from 'react'
import Post from './Post'
import Modal from '../Modal/Modal'
import axios from 'axios'

class CityDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            posts: [],
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    render(){
        let cityName
        let country
        let imageUrl
        if(this.props.posts && this.props.choice){
            cityName = this.props.choice.cityName
            country = this.props.choice.country
            imageUrl = this.props.choice.imageUrl
        } else {
            cityName = "No city selected"
            country = ""
            imageUrl = ""
        }
        console.log(this.state.posts)
        return(
            <div className='city-detail'>
                <div>
                    <h1>{cityName}</h1>
                    <p>{country}</p>
                </div>
                <img src={imageUrl} alt=""/>
                <button data-toggle="modal" data-target="#exampleModalCenter" onClick={this._onButtonClick} >
                    Create Post
                </button>
                {this.state.showComponent ? < Modal component={"Post"} choice={this.props.choice} handleInput={this.props.handleInput}/> : null}
                <Post posts={this.props.posts} />
            </div>
        )
    }
}

export default CityDetail