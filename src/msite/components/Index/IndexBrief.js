import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './IndexBrief.scss';

class IndexBrief extends Component {
  render() {
    return (
      <div className={commmonStyles.container}>
        <div className={commmonStyles.tag}></div>
        <div className={`${commmonStyles.title} ${styles.title}`}>清泉配音工作室</div>
        <div className={styles.content}>Spring Media（清泉工作室）成立于一九九七年（香港），是一间提供专业影视制作服务的公司。于2006年开办上海分公司，专门从事广告音频制作、影视剧配音、音频缩混、游戏语音制作、翻译、音乐制作等。</div>
        <a href='/about' className={styles.button}>了解更多</a>
      </div>
    );
  }
}

export default IndexBrief;
