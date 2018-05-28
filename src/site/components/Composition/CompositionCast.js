import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './CompositionCast.scss';

class CompositionCast extends Component {
  render() {
    const itemStyle1 = {
      backgroundImage: 'url("http://oezn2ph4e.bkt.clouddn.com/pf.jpg")'
    };
    const itemStyle = {
      backgroundImage: 'url("http://oezn2ph4e.bkt.clouddn.com/yt1.jpg")'
    };
    return (
      <div className=''>
        <div className={styles.title}>配音演员表</div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.avatar} style={itemStyle1}></div>
            <div className={styles.name}>张鹏飞</div>
            <div className={styles.acting} title='配音导演、饰凯文国王等'>配音导演、饰凯文国王等</div>
          </div>
          <div className={styles.item}>
            <div className={styles.avatar} style={itemStyle}></div>
            <div className={styles.name}>张昱</div>
            <div className={styles.acting}>饰茉艾拉</div>
          </div>
          <div className={styles.item}>
            <div className={styles.avatar} style={itemStyle}></div>
            <div className={styles.name}>张昱</div>
            <div className={styles.acting}>饰茉艾拉</div>
          </div>
          <div className={styles.item}>
            <div className={styles.avatar} style={itemStyle}></div>
            <div className={styles.name}>张昱</div>
            <div className={styles.acting}>饰茉艾拉</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompositionCast;
