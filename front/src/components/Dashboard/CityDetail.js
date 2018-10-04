import React, { Component } from 'react'
import Post from './Post'
class CityDetail extends Component {
     render(){
          return(
               <div className='city-detail'>
                    <h1>London</h1>
                    <img src='https://amp.businessinsider.com/images/58f4e5ebf40daef5008b4bb4-750-500.jpg' />
                    <Post />

               </div>
          )
     }
}

export default CityDetail