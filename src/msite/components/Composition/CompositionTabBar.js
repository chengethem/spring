import React, { Component } from 'react';
import styles from './CompositionTabBar.scss';
class CompositionTabBar extends Component {
  render() {
    const { tabs, current_category } = this.props;
    const TABS = {
      movie: '电影',
      game: '游戏',
      teleplay: '电视剧',
      animation: '动画',
      stage: '舞台剧',
      ad: '广告'
    };
    const tabs_el = tabs.map((tab, index) => {
      let catgory = '';
      Object.keys(TABS).map(key => {
        if (TABS[key] === tab) {
          catgory = key;
        }
      });
      let style_class = `${styles.item}`;
      if (!current_category && index === 0) {
        style_class = `${styles.item} ${styles.cur}`;
      }
      if (current_category && current_category === catgory) {
        style_class = `${styles.item} ${styles.cur}`;
      }
      const url = `/compositions?category=${catgory}`;
      return (
        <a href={url} className={style_class} key={index}>{tab}</a>
      );
    });
    return (
      <div className={styles.container}>
        {tabs_el}
      </div>
    );
  }
}
export default CompositionTabBar;

