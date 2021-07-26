import React from 'react';
import './MainPanel.css'
import Result from './Result'
import LoadingScreen from './LoadingScreen';

const Form = props => {
    const {isloading, value, countryID, iconImage, date, timezone, country, city, sunrise, sunset ,temp ,feels_like ,temp_min ,temp_max ,humidity ,pressure ,wind_speed ,wind_deg ,weather_main ,weather_description ,error, errorId, errorMessage } = props.all
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return ( 
        <div className="mainPanel">
            <form>
                 {errorId ? null : <div className="sideCountry"><span>{capitalizeFirstLetter(city)}<sup>({country})</sup></span> </div>}   
                
                <input type="text" value={value} onChange={props.change} placeholder="enter a city name" />
                {/* For more country codes visit => https://www.andiamo.co.uk/resources/iso-language-codes/ */}
                <select id="countries" name="country" value={countryID} onChange={props.change}>
                    <option value="">Worldwide</option>
                    <option value="af">Afrikaans</option>
                    <option value="al">Albanian</option>
                    <option value="ar ae">Arabic</option>
                    <option value="US">United States</option>
                    <option value="az">Azerbaijani</option>
                    <option value="bg">Bulgarian</option>
                    <option value="ca">Catalan</option>
                    <option value="cz">Czech</option>
                    <option value="da">Danish</option>
                    <option value="de">German</option>
                    <option value="el">Greek</option>
                    <option value="en">English</option>
                    <option value="eu">Basque</option>
                    <option value="fa">Persian (Farsi)</option>
                    <option value="fi">Finnish</option>
                    <option value="fr">French</option>
                    <option value="gl">Galician</option>
                    <option value="he">Hebrew</option>
                    <option value="hi">Hindi</option>
                    <option value="hr">Croatian</option>
                    <option value="hu">Hungarian</option>
                    <option value="id">Indonesian</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                    <option value="kr">Korean</option>
                    <option value="la">Latvian</option>
                    <option value="lt">Lithuanian</option>
                    <option value="mk">Macedonian</option>
                    <option value="no">Norwegian</option>
                    <option value="nl">Dutch</option>
                    <option value="pl">Polish</option>
                    <option value="pt">Portuguese</option>
                    <option value="pt_br">Português Brasil</option>
                    <option value="ro">Romanian</option>
                    <option value="ru">Russian</option>
                    <option value="sv se">Swedish</option>
                    <option value="sk">Slovak</option>
                    <option value="sl">Slovenian</option>
                    <option value="sp es">Spanish</option>
                    <option value="sr">Serbian</option>
                    <option value="th">Thai</option>
                    <option value="tr">Turkish</option>
                    <option value="ua uk">Ukrainian</option>
                    <option value="vi">Vietnamese</option>
                    <option value="zh_cn">Chinese Simplified</option>
                    <option value="zh_tw">Chinese Traditional</option>
                    <option value="zu">Zulu</option>
                </select> 
                <button onClick={props.click}><i className="fas fa-search"></i></button>
                </form>
                {isloading ? <LoadingScreen/> : <Result all={props.all}/>}
            </div>
     );
}
 
export default Form;