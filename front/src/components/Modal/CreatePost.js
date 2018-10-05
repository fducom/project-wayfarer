import React, { Component } from 'react';

class CreatePost extends Component {
    render() {
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
                            <input type='text' name='title' className="form-control" placeholder="Title" aria-describedby="basic-addon2" onChange={this.props.handleInput}/>
                        </div>
                        <div className="input-group mb-3">
                            <textarea name="description" className="form-control" rows="5" id="comment"></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <input value='Create Post' type='submit'/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default CreatePost;