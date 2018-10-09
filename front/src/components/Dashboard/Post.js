import React,{ Component } from 'react'

class Post extends Component {
    render(){
        // let Posts = this.props.posts.map((post, index)=>{
        //     return (<div key={index}>
        //                 <div>{post.description} - {post._user.email}</div>
        //             </div>)
        // })
        let Posts = ""

        sleep(5000).then(() => {
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
        })

        function sleep (time) {
            return new Promise((resolve) => setTimeout(resolve, time));
            }
            
        return(
            <div>
                <h1>yo boi</h1>
                {Posts}
            </div>
        );
    }
}


export default Post