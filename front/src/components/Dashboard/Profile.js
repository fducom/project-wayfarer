import React, { Component } from 'react'

class Profile extends Component {
    constructor(){
        super()
        this.state={
            comments: []
        }
    }

    // componentDidMount () {
    //     axios.get('http://localhost:3001/api/posts//users/:id')
    //     .then(response => {
    //         this.setState({
    //             comments: response.data
    //         })
    //     })
    // }

    render(){
        return(
            <div>
                <h1>Hi, its yo boi, Wai Ka</h1>
            </div>
        );
    }
}

export default Profile