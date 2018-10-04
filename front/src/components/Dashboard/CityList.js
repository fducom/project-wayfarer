import React, { Component } from 'react'
import City from './City'
class CityList extends Component {
     render(){
          let cities = ['New York','Tokyo','San Francisco','Hong Kong', 'Dubai']
          let cityMapped = cities.map((city, index)=>{
              return <City key={index} cityInfo={city}/>
          })
          return(
               <div className='cityName'>
                    <h1>Cities</h1>
                    <ul>
                         {cityMapped}
                    </ul>
               </div>
          );
     }
}

export default CityList