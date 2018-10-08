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


    handleCreate () {
    }

    componentDidMount () {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        axios.post('http://localhost:3001/users/verify',{headers: axios.defaults.headers.common['authorization']})
        .then(response => {
            console.log(response.data)
            console.log("USER ID: "+response.data.id)
            axios.get('http://localhost:3001/users/profile/'+response.data.id)
            .then(profResponse => {
            this.setState({
                id: profResponse.data[0],
                username: profResponse.data[1],
                comments: profResponse.data[2]
            })
            console.log(profResponse.data)
        })
            

        })
    }

    render(){
        let mappedComments = this.state.comments.map((comment, index) =>{
        return (<div>
            <p>Comment #{index+1}</p>
            <h5>{comment.title}</h5>
            <p>{comment.description}</p>
            <p>At: {comment._city}</p>
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