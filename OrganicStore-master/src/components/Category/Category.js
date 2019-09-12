import React from 'react';
import styles from './Category.module.css';

const Category = props => {
    return(
        <button  className={`${styles.category} btn btn-primary active`} onClick={props.click}>
            {props.name}
        </button>
    )
}

export default Category;