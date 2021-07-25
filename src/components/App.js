import React, { Component } from 'react';
import Form from './Form'
import Result from './Result'
import './App.css';

const API = "c84b8f5c077147fb55d9a448295d1fe7"
// API from https://home.openweathermap.org

class App extends Component {
  state = { 
    value: '',
    sended: false,
   }

  handleValueChange = e => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  handleCityClick = e => {
    e.preventDefault()
    this.setState({
      sended: true
    })
  }

  render() { 
    return ( 
      <div className="app">
        <Form value={this.state.value} change={this.handleValueChange} click={this.handleCityClick}/>
        <Result sended={this.state.sended} all={this.state}/>
      </div>
     );
  }
}
 
export default App;