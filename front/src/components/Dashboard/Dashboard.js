import React, { Component } from 'react';
import CityList from './CityList'
import CityDetail from './CityDetail'
import '../../index.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount () {
        axios.get('http://localhost:3001/api/cities')
            .then(response => {
            this.setState({
                list: response.data
            })
        })
    }

    handleClickCity = (event) =>{
        event.preventDefault()
        console.log()
    }


    render() {
        let element
        if(this.props.isLoggedIn){
            element = <div className='dashBoard'><CityList list={this.state.list} handleClickCity={this.handleClickCity}/><CityDetail /></div>
        } else{
            element = <Redirect to="/"/>
        }
        return (
            <div>
                {element}
            </div>
        );
    }
}

export default Dashboard; 