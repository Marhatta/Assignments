import React from 'react';

const validation = (props) => {
    const TOO_SHORT = 5;
    let message;
    if(props.length <= TOO_SHORT) {
        message = 'Length too short';
    }else{
        message = 'Length long Enough';
    }
    
    
    return(
        <p>{message}</p>
    );
}


export default validation;