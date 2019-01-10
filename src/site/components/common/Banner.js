import React, { Component } from 'react';
import styles from './Banner.scss';

class CompositionBanner extends Component {
  render() {
    const { title, bg, bg2x } = this.props;
    const backgroundImage = window.devicePixelRatio === 2 ? bg2x : bg;
    return (
      <div style={{ backgroundImage: `url(${backgroundImage})` }} className={styles.container}>
        <div className={styles.title}>{title}</div>
        {/* <div className={styles.title}>{我们的配音作品集}</div> */}
      </div >
    );
  }
}

export default CompositionBanner;
