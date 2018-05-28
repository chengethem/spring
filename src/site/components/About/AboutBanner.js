import React, { Component } from 'react';
import styles from '../Index/IndexBanner.scss';
import banner from '../../../assets/demo/banner1_2x.jpg';

class AboutBanner extends Component {
  render() {
    return (
      <div className={styles.banner} id='banner'>
        <img src={banner} alt="" />
        <div className={styles.slogan}>
          <p className={styles.title}>清泉，一个专业的配音团队</p>
          <p className={styles.subtitle}>我们认真对待每一个声音</p>
        </div>
      </div>
    );
  }
}

export default AboutBanner;
