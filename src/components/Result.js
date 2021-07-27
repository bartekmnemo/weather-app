import React from 'react';
import './Result.css';
import sunriseIcon from '../img/sunriseIcon.svg';
import sunsetIcon from '../img/sunsetIcon.svg';

const Result = props => {
    const { iconImage, date, timezone, visibility, city, sunrise, sunset ,temp ,feels_like ,temp_min ,temp_max ,humidity ,pressure ,wind_speed, wind_deg ,weather_main ,weather_description ,error,  errorMessage } = props.all
    let content = null

    const directionsOfTheWorld = (deg) => {
        if(deg >= -337.5 && deg <= 22.5) return 'N'
        else if(deg > 22.5 && deg < 67.5) return 'NE'
        else if(deg > 67.5 && deg < 112.5) return 'E'
        else if(deg > 112.5 && deg < 157.5) return 'SE'
        else if(deg > 157.5 && deg < 202.5) return 'S'
        else if(deg > 202.5 && deg < 247.5) return 'SW'
        else if(deg > 247.5 && deg < 292.5) return 'W'
        else if(deg > 292.5 && deg < 337.5) return 'NW'
    }

    if(!error && city){
        const sunriseTime = new Date((sunrise + timezone - 7200)  * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});;
        const sunsetTime = new Date((sunset + timezone - 7200) * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});;
        const windKM = Math.round((wind_speed / 1000) * 3600)
        const windDirection = {
            transform: `rotate(${wind_deg-45}deg)`, // -45deg because of image direction
        };

        content = (
        <div className="result">
            <div className="trashInfos">
                <p><b>Weather right now </b> - {date} | <img src={sunriseIcon} alt="sunrise"/> {sunriseTime} | <img src={sunsetIcon} alt="sunrise"/> {sunsetTime}</p>
                
                
            </div>
            <div className="detailInfo">
                <div className="leftInfo">
                    <div className="tempPanel">
                        {<img src={iconImage} alt="weather_icon"/>}<h4>{Math.floor(temp)}&#176;C</h4>
                    </div>
                    <div className="weatherWrapper">
                        <h3>{weather_main}</h3>
                        <div className="weatherDetails">
                            <div className="weatherParam">
                                <p>Feels Like</p>
                                <p>{Math.floor(feels_like)}&#176;C</p>
                            </div>
                            <div className="weatherParam">
                                <p>Pressure</p>
                                <p>{pressure} hPa</p>
                            </div>
                            <div className="weatherParam">
                                <p>Wind speed</p>
                                <p>{<i className="fas fa-location-arrow"  style={windDirection}></i>} {directionsOfTheWorld(wind_deg)} | {windKM} Km/h</p>
                            </div>
                        </div>
                    </div>
                </div>

                   
                   
                <div className="rightInfo">
                  <div className="weatherParam"> {weather_description}</div>
                  <div className="weatherParam">Humidity: {humidity}%</div>
                  <div className="weatherParam">Visibility: {(visibility / 1000).toFixed(1)}km</div>
                  
                    <div className="weatherParam">Min Temp: {Math.floor(temp_min)}&#176;C</div>
                    <div className="weatherParam">Max Temp: {Math.floor(temp_max)}&#176;C</div>
                   
                </div>
            </div>
            
        </div>
        )
    }
    return ( 
        <>
             {error ? <p className="errorMessage">{errorMessage.message}</p> : content}
        </>
     );
}

 
export default Result;