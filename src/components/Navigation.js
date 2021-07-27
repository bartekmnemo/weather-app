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
                        <li><button className="menuOption">About me</button></li>
                        <li><button className="menuOption">Info</button></li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navigation;