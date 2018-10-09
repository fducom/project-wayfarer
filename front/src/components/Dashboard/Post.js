import React,{ Component } from 'react'

class Post extends Component {
    render(){
        // let Posts = this.props.posts.map((post, index)=>{
        //     return (<div key={index}>
        //                 <div>{post.description} - {post._user.email}</div>
        //             </div>)
        // })
        let Posts = ""

 
        console.log("POSTS:")
        console.log(this.props.posts)
            Posts = this.props.posts.map((post, index) =>{
            return(
                <div>
                    <p>Comment: {index+1}</p>
                    <h5>Title: {post.title}</h5>
                    <p>Description: {post.description}</p>
                </div>
            )
        })
            
        return(
            <div>
                <h1>yo boi</h1>
                {Posts}
            </div>
        );
    }
}


export default Post