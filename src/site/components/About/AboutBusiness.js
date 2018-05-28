import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './AboutBusiness.scss';

class AboutBusiness extends Component {
  render() {
    return (
      <div className={commmonStyles.container}>
        <div className={`${commmonStyles.tag} ${styles.tag}`}></div>
        <div className={styles.title}>我们承接</div>
        <div className={styles.subtitle}>各种影视广告、游戏动漫配音，音效后期及配乐制作等业务</div>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles['item-icon']}></div>
            <div className={styles['item-title']}>配音</div>
            <div className={styles['item-desc']}>国内外影视剧配音</div>
          </div>
          <div className={styles.item}>
            <div className={styles['item-icon']}></div>
            <div className={styles['item-title']}>配音</div>
            <div className={styles['item-desc']}>国内外影视剧配音</div>
          </div>
          <div className={styles.item}>
            <div className={styles['item-icon']}></div>
            <div className={styles['item-title']}>配音</div>
            <div className={styles['item-desc']}>国内外影视剧配音</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutBusiness;
