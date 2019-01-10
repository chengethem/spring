import React, { Component } from 'react';
import styles from '../Index/IndexBanner.scss';
// import banner from '../../../assets/demo/banner_2x.jpg';

class IndexBanner extends Component {
  render() {
    let { slogan } = this.props;
    if (!slogan || slogan.length < 1) {
      return '';
    }
    const bg_style = {
      backgroundImage: "url('http://cdn.springmedia.com.cn/banner_3_m.jpg')"
    }
    slogan = slogan[0];
    return (
      <div className={styles.banner} id='banner'>
        <div className={styles.slogan}>
          <p className={`${styles.title} ${styles.space0}`}>{slogan.title}</p>
          <p className={`${styles.subtitle} ${styles.space1}`}>{slogan.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default IndexBanner;
