import React, { Component } from 'react';
import TopPanel from './TopPanel';
import Form from './Form'
import Result from './Result'
import './App.css';

// API from https://home.openweathermap.org
const ApiKey = "c84b8f5c077147fb55d9a448295d1fe7"

class App extends Component {
  state = { 
    value: '',
    countryID: 'en',
    iconImage: '',
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
    error: false,
    errorId: '',
    errorMessage: ''
   }


  handleValueChange = e => {
    if(e.target.type === 'text')
    {
      this.setState({
        value: e.target.value,
        errorId: ''
      })
    } else if (e.target.type === 'select-one'){
      this.setState({
        countryID: e.target.value,
        errorId: ''
      })
    }
   
    
  }

  handleCityClick = e => {
    e.preventDefault()
    const city = this.state.value

    //Fahrenheit: units=imperial
    //Celsius: units=metric
    
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city},${this.state.countryID}&appid=${ApiKey}&units=metric`
    fetch(API)
    .then( response => {
      if(response.status === 200) {
        return response.json()
      }else if (response.status === 404){
        this.setState({
          errorId: 1
        })
        throw Error(`Incorrect city name`)
      }else if (response.status === 500){
        this.setState({
          errorId: 2
        })
        throw Error(`The request was not completed due to an internal error on the server side.`)
      }
      
      })
    .then( data => {  
      const time = new Date().toLocaleString()
      const weatherIndex = data.weather.length - data.weather.length
      this.setState( prevState => ({
        value: '',
        iconImage: `http://openweathermap.org/img/wn/${data.weather[weatherIndex].icon}@2x.png`,
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
        pressure: data.main.pressure, 
        wind_speed: data.wind.speed,
        wind_deg: data.wind.deg,
        weather_main: data.weather[weatherIndex].main,
        weather_description: data.weather[weatherIndex].description,
        error: false
      }))
    })
    .catch (err => {
      this.setState({
        error: true,
        errorMessage: err
      })
    })
  }

  render() { 
    return ( 
      <div className="app">
        <TopPanel />
        <Form value={this.state.value} change={this.handleValueChange} click={this.handleCityClick} countryID={this.state.countryID}/>
        <Result all={this.state}/>
      </div>
     );
  }
}
 
export default App;