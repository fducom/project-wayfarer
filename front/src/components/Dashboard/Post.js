import React,{ Component } from 'react'
import axios from 'axios'
import DeleteButton from './DeleteButton'

class Post extends Component {
    constructor(){
        super()
        this.state={
            userId: "",
        }
    }

    componentDidMount (){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        axios.post('http://localhost:3001/users/verify',{headers: axios.defaults.headers.common['authorization']})
        .then(response => {
            this.setState({
                userId: response.data.id
            })
        })
    }

    reportMark = (choice) => {
        axios.delete('http://localhost:3001/api/posts/'+choice)
        .then(response => {
            console.log(response)
        })
    }

    render(){
        let Posts = ""
        let delButton
        Posts = this.props.posts.map((post, index) =>{
            if(post._user === this.state.userId){
                delButton = <DeleteButton reportMark={this.reportMark} Id={post._id}/>
            } else{
                delButton = null
            }
            return(
                <div key={index}>
                    <p>Comment: {index+1}</p>
                    <h5>Title: {post.title}</h5>
                    <p>Description: {post.description}</p>
                    {delButton}
                </div>
            )
        })
            
        return(
            <div>
                <h1>Posts</h1>
                {Posts}
            </div>
        );
    }
}


export default Post