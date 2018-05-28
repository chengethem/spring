import React, { Component } from 'react';
import styles from '../Index/IndexBanner.scss';
import banner from '../../../assets/demo/banner_2x.jpg';

class IndexBanner extends Component {
  render() {
    return (
      <div className={styles.banner} id='banner'>
        <img src={banner} alt="" />
        <div className={styles.slogan}>
          <p className={styles.title}>相约清泉</p>
          <p className={styles.subtitle}>与好声音相遇</p>
        </div>
      </div>
    );
  }
}

export default IndexBanner;
