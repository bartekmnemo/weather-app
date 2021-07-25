import React from 'react';
import './Form.css'

const Form = props => {
    return ( 
        <form>
            <input type="text" value={props.value} onChange={props.change} placeholder="enter a city name..."/>
            <button onClick={props.click}>Enter</button>
        </form>
     );
}
 
export default Form;