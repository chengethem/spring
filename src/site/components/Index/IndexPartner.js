import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './IndexPartner.scss';
import adidas from '../../../assets/demo/partners/adidas_2x.png';
import apple from '../../../assets/demo/partners/apple_2x.png';
import cn from '../../../assets/demo/partners/cn_2x.png';
import disney from '../../../assets/demo/partners/disney_2x.png';
import wekids from '../../../assets/demo/partners/wekids_2x.png';
import blizzard from '../../../assets/demo/partners/blizzard_2x.png';
import mcdonlad from '../../../assets/demo/partners/mcdonald_2x.png';
import benz from '../../../assets/demo/partners/benz_2x.png';
import pesi from '../../../assets/demo/partners/pesi_2x.png';
import cocacola from '../../../assets/demo/partners/cocacola_2x.png';

class IndexPartner extends Component {
  render() {
    const { list } = this.props;
    const partner = [adidas, apple, cn, disney, wekids, blizzard, mcdonlad, benz, pesi, cocacola];
    const item = partner.map((item, idx) => {
      return (
        <div className={styles.item} key={idx}>
          <img className={styles['item-pic']} src={item} alt=""/>
        </div>
      );
    });
    return (
      <div className={commmonStyles.container}>
        <div className={commmonStyles.tag}></div>
        <div className={commmonStyles.title}>这些品牌<br />与我们合作</div>
        <div className={styles.list}>
          {item}
        </div>
      </div>
    );
  }
}

export default IndexPartner;
