import React, { Component } from 'react'
import axios from "axios"
class Profile extends Component {
    constructor(){
        super()
        this.state={
            id: "",
            username: "",
            comments: []
        }
    }

    componentDidMount () {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        axios.post('http://localhost:3001/users/verify',{headers: axios.defaults.headers.common['authorization']})
            .then(response => {
                this.setState({
                    id: response.data.id
                })
            axios.get('http://localhost:3001/users/'+response.data.id)
                .then(username => {
                    this.setState({
                        username:username.data.email
                    })
                axios.get('http://localhost:3001/users/profile/'+response.data.id)
                    .then(comments => {
                        this.setState({
                            comments: comments.data
                        })
                    })
                })
            })
        }

    render(){
        let mappedComments = this.state.comments.map((comment, index) =>{
        return (<div key={index}>
                    <p>Comment #{index+1}</p>
                    <h5>{comment.title}</h5>
                    <p>{comment.description}</p>
                    <p>{comment._city.cityName}</p>
                </div>)
        })

        return(
            <div>
                <h1>Hi, its yo boi, {this.state.username}</h1>
                {mappedComments}
            </div>
        );
    }
}

export default Profile