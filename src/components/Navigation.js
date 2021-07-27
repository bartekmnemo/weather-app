import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return ( 
        <nav>
            <div className="navWrapper">
                <div className="logo">
                    <h1>WeatherLand</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li><a target="_blank" rel="author noreferrer" href="https://www.instagram.com/be.st33v/" title="instagram.com/be.st33v" className="menuOption">About me</a></li>
                        <li><a target="_blank" rel="author noreferrer" href="https://github.com/bartekmnemo/weather-app" title="https://github.com" className="menuOption">Info</a></li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navigation;