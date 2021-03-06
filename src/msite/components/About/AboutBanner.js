import React, { Component } from 'react';
import styles from '../Index/IndexBanner.scss';
// import banner from '../../../assets/demo/banner1_2x.jpg';

class AboutBanner extends Component {
  render() {
    let { slogan } = this.props;
    if (!slogan || slogan.length < 1) {
      return '';
    }
    slogan = slogan[0];
    const bg_style = {
      backgroundImage: "url('http://cdn.springmedia.com.cn/banner_1.jpg')"
    };
    return (
      <div className={styles.banner} id='banner' style={bg_style}>
        <div className={styles.slogan}>
          <p className={`${styles.title} ${styles.space0}`}>{slogan.title}</p>
          <p className={`${styles.subtitle} ${styles.space1}`}>{slogan.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default AboutBanner;
