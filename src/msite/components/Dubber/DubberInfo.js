import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './DubberInfo.scss';

class DubberInfo extends Component {
  render() {
    const { dubber } = this.props;
    const itemStyle = {
      backgroundImage: `url("${dubber.avatar}")`
    };
    const name_el = dubber.weibo_url ? (<a href={dubber.weibo_url} target='_blank' className={`${styles.name} ${styles.weibo}`}>{dubber.name}</a>) : (<div className={styles.name}>{dubber.name}</div>);
    return (
      <div className={styles.container}>
        <div className={styles.pane}>
          <div className={styles.avatar} style={itemStyle}></div>
          {name_el}
          <div className={styles.title}>{dubber.job}</div>
          <pre className={styles.desc}>
            {dubber.desc}
          </pre>
        </div>
      </div>
    );
  }
}

export default DubberInfo;
