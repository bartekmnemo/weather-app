import React from 'react';
import './LoadingScreen.css'

const LoadingScreen = () => {
    return ( 
        <div className="wrapper">
            <div className="content"> 
                <div className="dot"></div>
                <div className="dot_s"></div>
                <p className="loadingText">Loading...</p>
            </div>
        </div>
     );
}
 
export default LoadingScreen;