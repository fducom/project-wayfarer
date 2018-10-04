import React, { Component } from 'react'
import {
     Link,   
 } from 'react-router-dom'

 class SignIn extends Component {
      render(){
           return(
               <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
               <div className="modal-dialog modal-dialog-centered" role="document">
                   <div className="modal-content">
                       <div className="modal-header">
                           <h5 className="modal-title" id="exampleModalLongTitle">Sign In</h5>
                           <Link to={{
                               pathname: "/login",
                           }}>
                               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                               </button>
                           </Link>
                       </div>
                       <div className="modal-body">
                           <div className="input-group mb-3">
                               <input type="text" className="form-control" placeholder="username" aria-describedby="basic-addon2"/>
                           </div>
                           <div className="input-group mb-3">
                               <input type="text" className="form-control" placeholder="password" aria-describedby="basic-addon2"/>
                           </div>
                       </div>
                       <div className="modal-footer">
                           <button type="button" className="btn btn-primary">Login</button>
                       </div>
                   </div>
               </div>
           </div>
        );  
    }
 }

 export default SignIn