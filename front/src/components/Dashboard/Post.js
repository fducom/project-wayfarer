import React,{ Component } from 'react'

class Post extends Component {
    render(){
        let Posts = this.props.posts.map((post, index)=>{
            return (<div key={index}>
                        <div>{post.description} - {post._user.email}</div>
                    </div>)
        })
        return(
            <div>
                {Posts}
            </div>
        );
    }
}


export default Post