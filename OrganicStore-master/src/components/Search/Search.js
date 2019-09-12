import React from 'react';
import styles from './Search.module.css';


const Search = (props) => {
    return(
        <div className={`${styles.cyan} md-form mb-2`} >
            <input className={styles.input} type="text" onChange={props.changed} placeholder="Search"  />
        </div>
    )
}

export default Search;