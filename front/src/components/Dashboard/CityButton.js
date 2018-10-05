import React, { Component } from 'react'

class CityButton extends Component {

    render(){
        return(
            <div>
                <button type="button" onClick={this.props.handleClick} className="btn btn-outline-secondary btn-lg btn-block">{this.props.cityName}</button>
            </div>
        );
    }
}

export default CityButton;