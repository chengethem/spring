import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './Previous.scss';

class Previous extends Component {
  render() {
    const style = {
      backgroundImage: `url("http://oezn2ph4e.bkt.clouddn.com/yt1.jpg")`
    }
    return (
      <div>
        <div className={styles.info}>
          <div className={styles['info-content']}>
            要参加我们的培训班？<br />
            <a href="" className={styles.link}>点击这里</a>去下载报名资料
          </div>
          <div className={styles['info-icon']}></div>
        </div>
        <div className={styles.title}>往期优秀学员</div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.avatar} style={style}></div>
            <div className={styles.name}>张昱</div>
            <div className={styles.subname}>清泉配音演员、导演</div>
          </div>
          <div className={styles.item}>
            <div className={styles.avatar} style={style}></div>
            <div className={styles.name}>张昱</div>
            <div className={styles.subname}>清泉配音演员、导演</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Previous;
