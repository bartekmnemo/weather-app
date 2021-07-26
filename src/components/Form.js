import React from 'react';
import './Form.css'

const Form = props => {
    return ( 
        <form>
            <input type="text" value={props.value} onChange={props.change} placeholder="enter a city name..." />
            <select id="countries" name="country" value={props.countryID} onChange={props.change}>
                <option value="af">Afrikaans</option>
                <option value="al">Albanian</option>
                <option value="ar">Arabic</option>
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
                <option value="se">Swedish</option>
                <option value="sk">Slovak</option>
                <option value="sl">Slovenian</option>
                <option value="es">Spanish</option>
                <option value="sr">Serbian</option>
                <option value="th">Thai</option>
                <option value="tr">Turkish</option>
                <option value="ua">Ukrainian</option>
                <option value="vi">Vietnamese</option>
                <option value="zh_cn">Chinese Simplified</option>
                <option value="zh_tw">Chinese Traditional</option>
                <option value="zu">Zulu</option>
            </select>
            <button onClick={props.click}>Enter</button>
        </form>
     );
}
 
export default Form;