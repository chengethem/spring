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
            <div className={`${styles['item-icon']} ${styles['icon-phone']}`}></div>
            <div className={styles['item-title']}>配音</div>
            <div className={styles['item-desc']}>影视剧、资料片、广告、游戏、动漫配音</div>
          </div>
          <div className={styles.item}>
            <div className={`${styles['item-icon']} ${styles['icon-voice']}`}></div>
            <div className={styles['item-title']}>音频后期</div>
            <div className={styles['item-desc']}>音频收录，后期混缩，音效制作等</div>
          </div>
          <div className={styles.item}>
            <div className={`${styles['item-icon']} ${styles['icon-disc']}`}></div>
            <div className={styles['item-title']}>音乐制作</div>
            <div className={styles['item-desc']}>各类流行音乐、影视剧及舞台剧歌曲的词曲创作、录音</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutBusiness;
