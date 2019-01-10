import React, { Component } from 'react';
import styles from './Banner.scss';

class CompositionBanner extends Component {
  render() {
    const { title, bg, bg2x } = this.props;
    return (
      <div style={{ backgroundImage: `url(${bg})` }} className={styles.container}>
        <div className={styles.title}>{title}</div>
      </div >
    );
  }
}

export default CompositionBanner;
