import React from 'react';

const UserInput = (props) => {
    return(
        <div>
            <input 
                style={style}
                type='text'
                onChange={props.change}
                value={props.value}    
                />
        </div>
    );
  
}

const style = {
    border:'1px solid black',
    borderRadius:'30px',
    height:'30px',
    padding:'5px',
    margin:'10px',
    outline:'none',
    width:'300px'
}

export default UserInput;