import React, { Component } from 'react'

class CityButton extends Component {

    render(){
        return(
            <div className='cityButton'>
                <button type="button" onClick={this.props.handleClick} className="btn btn-outline-secondary btn-lg btn-block">
                    <img className="thumbnail" src={this.props.imageUrl} alt=""/>  {this.props.cityName}
                </button>
            </div>
        );
    }
}

export default CityButton;