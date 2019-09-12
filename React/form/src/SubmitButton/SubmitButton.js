import React from 'react';

const SubmitButton = props => {
    return(
        <button type={props.type} onClick={props.clicked}>{props.children}</button>
    );
}


export default SubmitButton;