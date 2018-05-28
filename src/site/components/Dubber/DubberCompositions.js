import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './DubberCompositions.scss';

class DubberCompositions extends Component {
  render() {
    const itemStyle = {
      backgroundImage: 'url("http://oezn2ph4e.bkt.clouddn.com/xc.jpeg")'
    };
    const coverStyle = {
      backgroundImage: 'url("https://img3.doubanio.com/view/photo/raw/public/p509221460.jpg")'
    }

    return (
      <div className={styles.container}>
        <div className={styles.list}>
          <div className={styles.title}>电影混音、对白录音</div>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.cover} style={coverStyle}></div>
              <div className={styles.name}>香港电影《前度》国语版对白录音</div>
            </div>
            <div className={styles.item}>
              <div className={styles.cover} style={coverStyle}></div>
              <div className={styles.name}>香港电影《前度》国语版对白录音</div>
            </div><div className={styles.item}>
              <div className={styles.cover} style={coverStyle}></div>
              <div className={styles.name}>香港电影《前度》国语版对白录音</div>
            </div><div className={styles.item}>
              <div className={styles.cover} style={coverStyle}></div>
              <div className={styles.name}>香港电影《前度》国语版对白录音</div>
            </div>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>电影混音、对白录音</div>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.cover} style={coverStyle}></div>
              <div className={styles.name}>香港电影《前度》国语版对白录音</div>
            </div>
            <div className={styles.item}>
              <div className={styles.cover} style={coverStyle}></div>
              <div className={styles.name}>香港电影《前度》国语版对白录音</div>
            </div><div className={styles.item}>
              <div className={styles.cover} style={coverStyle}></div>
              <div className={styles.name}>香港电影《前度》国语版对白录音</div>
            </div><div className={styles.item}>
              <div className={styles.cover} style={coverStyle}></div>
              <div className={styles.name}>香港电影《前度》国语版对白录音</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DubberCompositions;
