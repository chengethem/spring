import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './IndexNews.scss';

class IndexNews extends Component {
  render() {
    const { list } = this.props;
    const item = (list || []).map((item, idx) => {
      const bg_item = {
        backgroundImage: `url('${item.thumb}')`
      };
      return (
        <a className={styles.item} href={item.link} key={idx} target="_blank">
          <div className={styles['item-cover']} style={bg_item}>
            <img src={item.thumb} className={styles['item-cover-pic']} />
          </div>
          <div className={styles['item-text']}>
            <div className={styles['item-title']}>{item.title}</div>
            <div className={styles['item-desc']}>{item.description}</div>
            <div className={styles['item-update']}><span className={styles['item-update--icon']}></span><span className={styles['item-update--text']}>{item.publish}</span></div>
          </div>
        </a>
      );
    });
    return (
      <div className={commmonStyles.container}>
        <div className={commmonStyles.tag}></div>
        <div className={commmonStyles.title}>最新动态</div>
        <div className={styles.list}>
          {item}
        </div>
      </div>
    );
  }
}

export default IndexNews;
