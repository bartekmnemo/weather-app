import React from 'react';

const Result = props => {
    const {sended, value} = props.all
    return ( 
        <>
        {sended && value}
        </>
     );
}
 
export default Result;