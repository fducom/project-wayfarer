import React, { Component } from 'react';
import axios from 'axios'
class CreatePost extends Component {
    constructor(){
        super()
        this.state ={
            userId: "",
            title:"",
            description:"",
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

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCreate = () => {
        axios.post('http://localhost:3001/api/posts/new',
        {
            title: this.state.title,
            description: this.state.description,
            _user: this.state.userId,
            _city: this.props.choice._id
        })
        .then(response => {
            console.log(response)
            this.props.updateShownPosts(this.props.posts)
        })
    }

    render() {
        console.log(this.props.posts)
    return (
        <div>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Create a new Post</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <input type="hidden" name="_user" value={this.state.userId}/>
                            <input type="hidden" name="_city" value={this.props.choice._id}/>
                            <input type='text' name='title' className="form-control" placeholder="Title" aria-describedby="basic-addon2" onChange={this.handleInput}/>
                        </div>
                        <div className="input-group mb-3">
                            <textarea name="description" className="form-control" rows="5" id="comment" onChange={this.handleInput}></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <input value='Create Post' type='submit' onClick={this.handleCreate} data-dismiss="modal"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    
    }
}

export default CreatePost;