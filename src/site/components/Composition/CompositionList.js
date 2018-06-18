import React, { Component } from 'react';
import styles from './CompositionList.scss';
import icon from '../../../assets/icon/time.png';
import cover from '../../../assets/demo/cover1_2x.jpg';

class CompositionList extends Component {
  render() {
    const TABS = {
      animation: '动画',
      ad: '广告',
      movie: '电影'
    };
    const categories = ['animation', 'ad', 'movie'];
    const { current_category, compositions } = this.props;
    const show_compositions = compositions.filter(composition => {
      const composition_category = composition.category;
      return TABS[current_category || 'animation'] === composition_category;
    });
    console.info('CompositionList_compositions', compositions, show_compositions);
    const compositions_el = show_compositions.map((composition, index) => {
      const cover_style = {
        backgroundImage: `url(${composition.cover})`
      }
      const composition_index = compositions.findIndex((item) => {
        return item.name === composition.name;
      });
      return (
        <a href={`/composition?index=${composition_index}`} className={styles.item} key={index}>
          {/* <img className={styles.cover} src={composition.cover} alt={composition.title} /> */}
          <div className={styles.cover} style={cover_style}></div>
          <div className={styles.content}>
            <div className={styles.title}>{composition.title}</div>
            <div className={styles.desc}>{composition.desc}</div>
            <div className={styles.info}>
              <img className={styles.icon} src={icon} alt="" />
              <span className={styles.date}>{composition.publish_date}</span>
            </div>
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
