import React, { Component } from 'react';
import Landing from '../Landing/Landing'
import Header from '../Navigation/Header'
import Dashboard from '../Dashboard/Dashboard'
import Modal from '../Modal/Modal'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }
  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleLogOut = () => {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/users/signup',
      {
        email: this.state.email,
        password: this.state.password
      }
    )
    .then(response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
      })
    })
    .catch(err => console.log(err))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/users/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then( response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
      })
    })
    .catch(err => console.log(err))
  }



  render() {
    return (
      <div>
          <Header isLoggedIn={this.state.isLoggedIn}/>
          <Switch>
            <Route path='/signup'
              render={(props) => {
                return (
                  <div>
                    <Modal component={"SignUp"} isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp}/>
                    <Landing/>
                  </div>
                )
              }}
            />
            <Route path='/login'
              render={(props) => {
                return (
                  <div>
                    <Modal component={"SignIn"} isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn}/>
                    <Landing/>
                  </div>
                )
              }}
            />
            <Route path="/dashboard" render={() => {
              return (
                  <Dashboard isLoggedIn={this.state.isLoggedIn}/>
              )
            }} />
            <Route path="/"
              render={() => {
              return (
                  <Landing/>
              )
            }} />
          </Switch>
      </div>
    );
  }
}

export default App;
