import React, { Component } from 'react';
import Form from './Form'
import Result from './Result'
import './App.css';

// API from https://home.openweathermap.org
const ApiKey = "c84b8f5c077147fb55d9a448295d1fe7"

class App extends Component {
  state = { 
    value: '',
    date: '',
    timezone: '',
    country: '',
    city: '',
    sunrise: '',
    sunset: '', 
    temp: '',
    feels_like: '',
    temp_min: '',
    temp_max: '',
    humidity: '',
    pressure: '', 
    wind_speed: '',
    wind_deg: '',
    weather_main: '',
    weather_description: '',
    error: false
   }


  handleValueChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  handleCityClick = e => {
    e.preventDefault()
    const city = this.state.value
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`
    fetch(API)
    .then( response => {
      if(response.ok) {
        return response.json()
      }
      throw Error(`Incorrect city name`)
      })
    .then( data => {
      const time = new Date().toLocaleString()
      const weatherIndex = data.weather.length - data.weather.length
      console.log(time)
      this.setState( prevState => ({
        date: time,
        timezone: data.timezone,
        country: data.sys.country,
        city: data.name,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset, 
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        pressure: data.main.pressurp, 
        wind_speed: data.wind.speed,
        wind_deg: data.wind.deg,
        weather_main: data.weather[weatherIndex].main,
        weather_description: data.weather[weatherIndex].description,
        error: false
      }))
    })
    .catch (err => {
      console.log(err)
      this.setState({
        error: true
      })
    })
    console.log(this.state.city)
  }

  render() { 
    return ( 
      <div className="app">
        <Form value={this.state.value} change={this.handleValueChange} click={this.handleCityClick}/>
        <Result all={this.state}/>
      </div>
     );
  }
}
 
export default App;