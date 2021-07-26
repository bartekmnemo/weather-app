import React, { Component } from 'react';
import TopPanel from './TopPanel';
import MainPanel from './MainPanel'
import Footer from './Footer';
import './App.css';

// API from https://home.openweathermap.org
const ApiKey = "c84b8f5c077147fb55d9a448295d1fe7"

class App extends Component {
  state = { 
    isloading: false,
    value: '',
    countryID: '',
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
    visibility: '',
    error: false,
    errorId: '',
    errorMessage: ''
   }
   componentDidMount = () => {
    this.handleCityClick();
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

  setToloading = () => {
    this.setState({
      isloading: true
    })
  }

  handleCityClick = e => {
    let city = 'dubai'
    if(e !== undefined) 
    {
      e.preventDefault()
      city = this.state.value
    }
     this.setToloading();
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
      const time = new Date().toLocaleTimeString()
      const weatherIndex = data.weather.length - data.weather.length
      this.setState( prevState => ({
        isloading: false,
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
        visibility: data.visibility,
        error: false
      }))
    })
    .catch (err => {
      this.setState({
        error: true,
        errorMessage: err,
        isloading: false
      })
    })
  }

  render() { 
    return ( 
      <div className="app">
        <TopPanel />
        <MainPanel all={this.state} change={this.handleValueChange} click={this.handleCityClick}/>
        <Footer/>
      </div>
     );
  }
}



export default App;