import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './DubberInfo.scss';

class DubberInfo extends Component {
  render() {
    const itemStyle = {
      backgroundImage: 'url("http://oezn2ph4e.bkt.clouddn.com/xc.jpeg")'
    };

    return (
      <div className={styles.container}>
        <div className={styles.pane}>
          <div className={styles.avatar} style={itemStyle}></div>
          <a href='https://weibo.com/u/1886906810' target='_blank' className={styles.name}>薛晨</a>
          <div className={styles.title}>音频工程师</div>
          <div className={styles.desc}>
            2009 年毕业于上海音乐学院 音乐工程系<br />
            2010年至今 上海清泉录音工作室 音频总工程师 暴雪中国 合作游戏语音设计师<br />
            2012年至今上海绘梦动画合作混音师、音效师<br />
            2015年—2016年 上海电影艺术学院《影视音频后期制作》外聘讲师
          </div>
        </div>
      </div>
    );
  }
}

export default DubberInfo;
