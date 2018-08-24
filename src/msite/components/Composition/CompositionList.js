import React, { Component } from 'react';
import styles from './CompositionList.scss';
import icon from '../../../assets/icon/time.png';
import cover from '../../../assets/demo/cover1_2x.jpg';
import { Link, browserHistory } from 'dva/router';

class CompositionList extends Component {
  
  render() {
    const TABS = {
      animation: '动画',
      game: '游戏',
      stage: '舞台剧',
      teleplay: '电视剧',
      ad: '广告',
      movie: '电影'
    };
    const categories = ['animation', 'stage', 'ad', 'movie'];
    const { current_category, compositions } = this.props;
    console.info('**current_category', current_category);
    const show_compositions = compositions.filter(composition => {
      const composition_category = composition.category;
      return TABS[current_category || 'movie'] === composition_category;
    });
    // console.info('CompositionList_compositions', compositions, show_compositions);
    const compositions_el = show_compositions.map((composition, index) => {
      const cover_style = {
        backgroundImage: `url(${composition.cover_l || composition.cover})`
      }
      const composition_index = compositions.findIndex((item) => {
        return item.name === composition.name;
      });
      const publish_date_el = composition.publish_date ? (<div className={styles.info}>
        <img className={styles.icon} src={icon} alt="" />
        <span className={styles.date}>{composition.publish_date}</span>
      </div>) : '';
      return (
        <a href={composition.nolink ? 'javascript:;' : composition.homepage || `/composition?index=${composition_index}`} target={composition.homepage ? '_blank' : ''} className={styles.item} key={index}>
          {/* <img className={styles.cover} src={composition.cover} alt={composition.title} /> */}
          <div className={styles.cover}>
            <img className={styles['cover-pic']} src={composition.cover_l || composition.cover} />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{composition.name}</div>
            <pre className={styles.desc}>{composition.desc}</pre>
            {publish_date_el}
          </div>
        </a>
      );
    });
    return (
      <div className={styles.container}>
        <div className={styles.items}>
          {compositions_el}
        </div>
      </div>
    );
  }
}

export default CompositionList;
