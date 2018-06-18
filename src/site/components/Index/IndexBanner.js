import React, { Component } from 'react';
import styles from '../Index/IndexBanner.scss';
import banner from '../../../assets/demo/banner_2x.jpg';

class IndexBanner extends Component {
  render() {
    let { slogan } = this.props;
    if (!slogan || slogan.length < 1) {
      return '';
    }
    slogan = slogan[0];
    return (
      <div className={styles.banner} id='banner'>
        <img src={banner} alt="" />
        <div className={styles.slogan}>
          <p className={styles.title}>{slogan.title}</p>
          <p className={styles.subtitle}>{slogan.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default IndexBanner;
