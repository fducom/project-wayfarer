import React, { Component } from 'react'

class DeleteButton extends Component {

    handleClick = () => {
        this.props.reportMark(this.props.Id)
    }

    render(){
        return(
            <div>
                <button type="button" onClick={this.handleClick}>
                    Delete
                </button>
            </div>
        );
    }
}

export default DeleteButton;