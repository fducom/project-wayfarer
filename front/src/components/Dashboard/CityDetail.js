import React, { Component } from 'react'
import Post from './Post'
import Modal from '../Modal/Modal'


class CityDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
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
        let button
        if(this.props.choice){
            cityName = this.props.choice.cityName
            country = this.props.choice.country
            imageUrl = this.props.choice.imageUrl
            button = (<button data-toggle="modal" data-target="#exampleModalCenter" onClick={this._onButtonClick} >
                        Create Post
                    </button>)
        } else {
            cityName = "No city selected"
            country = ""
            imageUrl = ""
            button = null
        }
        return(
            <div className='city-detail'>
                <div>
                    <h1>{cityName}</h1>
                    <p>{country}</p>
                </div>
                <img src={imageUrl} alt=""/>
                {button}
                {this.state.showComponent ? < Modal posts={this.props.posts} component={"Post"} choice={this.props.choice} handleInput={this.props.handleInput} updateShownPosts={this.props.updateShownPosts} /> : null}
                <Post posts={this.props.posts} />
            </div>
        )
    }
}

export default CityDetail