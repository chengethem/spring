import React, { Component } from 'react';
import styles from './CompositionBanner.scss';

class CompositionBanner extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>我们的配音作品集</div>
      </div>
    );
  }
}

export default CompositionBanner;
