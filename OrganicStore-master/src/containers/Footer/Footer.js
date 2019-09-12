import React from 'react';

import styles from './Footer.module.css';
const Footer = () => {
    return(
        <div id={styles.stickyFooter} className="py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>Copyright &copy; Organic</small>
    </div>
  </div>
    )
}

export default Footer;