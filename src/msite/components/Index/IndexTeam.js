import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './IndexTeam.scss';

class IndexTeam extends Component {
  render() {
    const { list, team } = this.props;

    const item = (list || []).map((item, idx) => {
      const avatarStyle = {
        'backgroundImage': `url(${item.avatar})`
      };
      const link = item.homepage ? item.homepage : `/dubber?id=${item.id}`;
      let pre_el = '';
      if (idx == 0) {
        pre_el = <pre className={`${styles['team-desc']}`}>{item.desc}</pre>;
      }
      return (
        <a className={styles.item} href={link} key={idx} target="_blank">
          <div className={styles['item-avatar']} src={item.avatar} alt={item.name} style={avatarStyle}></div>
          <div className={styles['item-text']}>
            <div className={styles['item-name']}>
              <div className={styles['item-name--text']}>{item.name}</div>
              <div className={styles['item-title']}>{item.job}</div>
              {pre_el}
            </div>
          </div>
        </a>
      );
    });
    const team_el = (team || []).map((item, index) => {
      const avatarStyle = {
        'backgroundImage': `url(${item.photo})`
      };
      return (
        <div className={styles['team-item']} key={index}>
          <div className={styles['team-item-avatar']} src={item.photo} style={avatarStyle}></div>
          <div className={styles['team-item-text']}>
            <div className={styles['team-item-name']}>
              <div className={styles['item-name--text']}>{item.name}</div>
            </div>
            <pre className={`${styles['team-desc']}`}>{item.desc}</pre>
          </div>
        </div>
      );
    });
    return (
      <div className={`${commmonStyles.container} ${styles.container}`}>
        <div className={commmonStyles.tag}></div>
        <div className={commmonStyles.title}>核心团队</div>
        <div className={styles.list}>
          {item}
        </div>
        <div className={styles['team-list']}>
          {team_el}
        </div>
      </div>
    );
  }
}

export default IndexTeam;
