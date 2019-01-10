import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './Previous.scss';

class Previous extends Component {
  render() {
    const style = {
      backgroundImage: `url("http://oezn2ph4e.bkt.clouddn.com/yt1.jpg")`
    }
    let { previous, download } = this.props;
    if (!previous) { return '' };
    const previous_el = previous.map((item, index) => {
      const style = {
        backgroundImage: `url("${item.avatar}")`
      };
      return (
        <a className={styles.item} href={item.homepage} key={index} target='_blank'>
          <div className={styles.avatar} style={style}></div>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.subname}>{item.desc}</div>
        </a>
      );
    });
    const previous_els = previous.length > 0 ? (
      <div>
        <div className={styles.title}>往期优秀学员</div>
        <div className={styles.list}>
          {previous_el}
        </div>
      </div>
    ) : '';
    const pwd_el = download[0].password ? (
      <div className={styles['info-content']}>
        要参加我们的培训班？<br />
        <a href={download[0].link} target='_blank' className={styles.link}>点击这里</a> (密码: {download[0].password}) 下载资料
      </div>
    ) : (<div className={styles['info-content']}>
      要参加我们的培训班？<br />
      <a href={download[0].link} target='_blank' className={styles.link}>点击这里</a>下载报名资料
  </div>);
    return (
      <div>
        <div className={styles.info}>
          {pwd_el}
          <div className={styles['info-icon']}></div>
        </div>
        {previous_els}
      </div>
    );
  }
}

export default Previous;
