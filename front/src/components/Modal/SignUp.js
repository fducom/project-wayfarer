import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUp extends Component {
    render(){
        return(
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Sign Up</h5>
                        <Link to={{
                            pathname: "/",
                        }}>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Link>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="username" aria-describedby="basic-addon2" onChange={this.props.handleInput}/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="password" aria-describedby="basic-addon2" onChange={this.props.handleInput}/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="confirm password" aria-describedby="basic-addon2" onChange={this.props.handleInput}/>
                            </div>
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.props.handleSignUp}>Register</button>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default SignUp