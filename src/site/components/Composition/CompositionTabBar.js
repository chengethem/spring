import React, { Component } from 'react';
import styles from './CompositionTabBar.scss';
class CompositionTabBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.items}>
          <a href="" className={styles.item}>游戏动画</a>
          <a href="" className={styles.item}>影视剧</a>
          <a href="" className={`${styles.item} ${styles.cur}`}>广告</a>
        </div>
      </div>
    );
  }
}
export default CompositionTabBar;

