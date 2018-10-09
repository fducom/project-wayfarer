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

    componentDidMount () {
        if(this.props.choice.length !== 0){
        axios.get('http://localhost:3001/api/posts/cities/'+this.props.choice._id)
        .then(postResponse => {
            console.log("POST RESPONSE:")
            console.log(postResponse.data)
            let array = postResponse.data
            this.setState({
                posts: array
            })
            console.log("POSTS: "+this.state.posts)
            // console.log("State posts:"+this.state.posts)
        })

        }
    }



    render(){
        let cityName
        let country
        let imageUrl
        let array = []
        if(this.props.posts && this.props.choice){

            console.log("CHOICE: "+this.props.choice)
            console.log(this.props.choice)
            console.log("id: "+this.props.choice._id)
            
            cityName = this.props.choice.cityName
            country = this.props.choice.country
            imageUrl = this.props.choice.imageUrl
        } else {
            cityName = "No city selected"
            country = ""
            imageUrl = ""
        }
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
                <Post posts={this.state.posts} />
            </div>
        )
    }
}

export default CityDetail