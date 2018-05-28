import React, { Component } from 'react';
import styles from './AboutMore.scss';

class AboutMore extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>加入清泉大家庭</div>
        <div className={styles.subtitle}>我们期待着您的加入</div>
        <div className={styles.more}>
          <a className={styles.button}>参加培训班</a>
          <a className={styles.button}>商务合作</a>
          <a className={styles.button}>加入清泉</a>
        </div>
      </div>
    );
  }
}

export default AboutMore;
