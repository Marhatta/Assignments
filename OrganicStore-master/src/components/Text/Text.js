import React from 'react';
import styles from './Text.module.css';

const Text = props => {
    return(
        <form>
            <input className={styles.input} type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.changed} value={props.value}/>
        </form>
    );
}
    
export default Text;
   