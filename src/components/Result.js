import React from 'react';
import './Result.css'

const Result = props => {
    const {value, date, timezone, country, city, sunrise, sunset ,temp ,feels_like ,temp_min ,temp_max ,humidity ,pressure ,wind_speed ,wind_deg ,weather_main ,weather_description , error} = props.all
    let content = null
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    if(!error && city){
        const celcTemp = Math.round(temp - 273.15)
        const sunriseTime = new Date((sunrise + timezone - 7200)  * 1000).toLocaleTimeString();
        const sunsetTime = new Date((sunset + timezone - 7200) * 1000).toLocaleTimeString();
        const windKM = Math.round((wind_speed / 1000) * 3600)
        content = (
            <div className="result">
            <h3>Search results for <em>{capitalizeFirstLetter(city)}</em> ({country})</h3>
            <h4>The current day and time: {date}</h4>
            <h4>Temperature: {celcTemp} &#176;C </h4>
            <h4>Weather conditions: {weather_main}, details: {weather_description}</h4> 
            <h4>Sunrise today at: {sunriseTime}</h4>
            <h4>Sunset today at: {sunsetTime}</h4>
            <h4>Wind speed: {windKM} km/s</h4>
            <h4>Pressure: {pressure} hPa</h4>
        </div>
        )
    }
    return ( 
        <>
             {error ? <p>Incorrect city name: <span>{value}</span></p> : content}
        </>
     );
}

 
export default Result;