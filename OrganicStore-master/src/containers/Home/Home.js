import React from 'react';
import {Link} from 'react-router-dom';

import img from '../../../src/hero.jpg';
import styles from './Home.module.css';
const Home = () => {
    return(
        <div>
        <h1 className={styles.title}>Get the best Products only on <strong><em>Organic</em></strong></h1>
        <Link to='mainContent'className={styles.button}>See All Categories</Link>
            <img className={styles.image} src={img}/>
        </div>
    )
}

export default Home;