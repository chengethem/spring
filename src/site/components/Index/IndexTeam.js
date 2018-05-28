import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './IndexTeam.scss';

class IndexTeam extends Component {
  render() {
    const { list } = this.props;

    const item = (list || []).map((item, idx) => {
      const avatarStyle = {
        'backgroundImage': `url(${item.avatar})`
      };
      return (
        <a className={styles.item} href={item.link} key={idx} target="_blank">
          <div className={styles['item-avatar']} src={item.avatar} alt={item.name} style={avatarStyle}></div>
          <div className={styles['item-text']}>
            <div className={styles['item-name']}>
              <div className={styles['item-name--text']}>{item.name}</div>
              <div className={styles['item-title']}>{item.job_title}</div>
            </div>
            <div className={styles['item-desc']}>{item.description}</div>
          </div>
        </a>
      );
    });
    return (
      <div className={commmonStyles.container}>
        <div className={commmonStyles.tag}></div>
        <div className={commmonStyles.title}>我们的团队</div>
        <div className={styles.list}>
          {item}
        </div>
      </div>
    );
  }
}

export default IndexTeam;
