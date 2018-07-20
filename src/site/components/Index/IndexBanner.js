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
      backgroundImage: "url('http://p192wtmk1.bkt.clouddn.com/banner_3.jpg')"
    }
    slogan = slogan[0];
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

export default IndexBanner;
