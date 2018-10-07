import React, { Component } from 'react';
import CityList from './CityList'
import CityDetail from './CityDetail'
import '../../index.css';
import axios from 'axios'
import Landing from '../Landing/Landing'

class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: [],
            choice: [],
            posts:[]
        }
    }

    reportMark = (choice) => {
        this.setState({
            choice: choice
        })
    }

    componentDidMount () {
        axios.get('http://localhost:3001/api/cities')
            .then(response => {
                this.setState({
                    list: response.data
                })
            })
        axios.get(`http://localhost:3001/api/posts/`)
            .then(response => {
                let array = []
                response.data.forEach(element => {
                    array.push(element)
                })
                this.setState({
                    posts: array
                })
            })
    }

    render() {
        let element
        if(this.props.isLoggedIn){
            element =   <div className='dashBoard'>
                            <CityList reportMark={this.reportMark} list={this.state.list}/>
                            <CityDetail choice={this.state.choice} posts={this.state.posts}/>
                        </div>
        } else{
            element = <Landing/>
        }
        return (
            <div>
                {element}
            </div>
        );
    }
}

export default Dashboard; 