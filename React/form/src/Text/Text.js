import React from 'react';

const Text = props => {
    return(
        <form>
            <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.changed} value={props.value}/>
        </form>
    );
}
    
export default Text;
   