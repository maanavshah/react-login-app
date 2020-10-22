import React, { Component } from 'react';
import './App.css';

import Login from './components/Login'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return { loggedIn: !prevState.loggedIn }
    })
  }

  render() {
    return (
      <div>
        <Login loggedIn={this.state.loggedIn} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
