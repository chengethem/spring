import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './DubberCompositions.scss';

class DubberCompositions extends Component {
  render() {
    const { compositions } = this.props;
    const categories = {};

    compositions.map(composition => {
      const category = composition.composition_classify;
      if (!categories[category]) {
        categories[category] = [];
      }
      return categories[category].push(composition);
    });
    const compositions_el = Object.keys(categories).map((category, index) => {
      const list = categories[category];

      const list_el = list.map((item, idx) => {
        const coverStyle = {
          backgroundImage: `url("${item.composition_cover}")`
        };
        const a_el = item.composition_link ? <a href={item.composition_link} target='_blank' className={styles['mask-link']}></a> : '';
        return (
          <div className={styles.item} key={idx}>
            <div className={styles.cover} style={coverStyle}></div>
            <div className={styles.name}>{item.composition_name}</div>
            {a_el}
          </div>
        )
      });
      return (
        <div className={styles.list} key={index}>
          <div className={styles.title}>{category}</div>
          <div className={styles.items}>
            {list_el}
          </div>
        </div>
      );
    });
    return (
      <div className={styles.container}>
        {compositions_el}
      </div>
    );
  }
}

export default DubberCompositions;
