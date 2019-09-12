import React from 'react';

const Char = (props) =>{
    return(
        <p 
        style={style}
        onClick={props.click}
        >
            {props.c}
        </p>
    );
}


const style = {
    display:'inline-block',
    padding: '16px',
    textAlign:'center',
    margin:'16px',
    border:'1px solid black'
}

export default Char;