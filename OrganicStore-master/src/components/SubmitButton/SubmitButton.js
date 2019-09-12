import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = props => {
    return(
        <button className={styles.button} type={props.type} onClick={props.clicked}>{props.children}</button>
    );
}


export default SubmitButton;