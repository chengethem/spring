import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './AboutRoute.scss';
import pic from '../../../assets/laptop.png';

class AboutRoute extends Component {
  render() {
    return (
      <div className={commmonStyles.container}>
        <div className={commmonStyles.tag}></div>
        <div className={styles.content}>
          <div className={styles['content-left']}>
            <div className={styles.title}>我们的发展历程</div>
            <ul className={styles.routes}>
              <li className={styles.route}>Spring Media (清泉工作室)成立于一九九七年(香港)，是一家提供专业影视制作服务的公司。</li>
              <li className={styles.route}>于 2006 年开办上海分公司，专门从事广告、音频制作、影视剧配音、音频缩混、游戏语音制作、翻译、音乐制作等。</li>
              <li className={styles.route}>目前 Spring Media 拥有四间不同规格的专业录音棚及音控室，一流的软硬件设备及经验丰富的工作团队。</li>
            </ul>
          </div>
          <div className={styles['content-right']}>
            <img className={styles['content-img']} src={pic} alt="清泉" />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutRoute;
