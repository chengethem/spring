import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './AboutOffice.scss';
import pic from '../../../assets/laptop.png';
import p1 from '../../../assets/photo/1_2x.jpg';
import p2 from '../../../assets/photo/2_2x.jpg';
import p3 from '../../../assets/photo/3_2x.jpg';
import p4 from '../../../assets/photo/4_2x.jpg';
import p5 from '../../../assets/photo/5_2x.jpg';
import p6 from '../../../assets/photo/6_2x.jpg';
import p7 from '../../../assets/photo/7_2x.jpg';
import p8 from '../../../assets/photo/8_2x.jpg';
import p9 from '../../../assets/photo/9_2x.jpg';

class AboutOffice extends Component {
  render() {
    const photos = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
    const photoEl = photos.map((photo, idx) => {
      const classname = idx === 3 ? styles['photo-big'] : styles.photo;
      return (
        <div className={styles.item}>
          <img src={photo} alt="" className={classname} />
        </div>
      );
    });
    return (
      <div className={styles.wraper}>
        <div className={commmonStyles.container}>
          <div className={`${commmonStyles.tag} ${styles.tag}`}></div>
          <div className={styles.title}>我们的工作环境</div>
          <div className={styles.items}>
            <div className={styles.item}>
              <img src={p1} alt="" className={styles.photo} />
            </div>
            <div className={`${styles.item} ${styles['item-middle']}`}>
              <img src={p2} alt="" className={styles.photo} />
            </div>
            <div className={styles.item}>
              <img src={p3} alt="" className={styles.photo} />
            </div>
          </div>
          <div className={styles.photos}>
            <div className={styles.item}>
              <img src={p4} alt="" className={styles['photo-big']} />
            </div>
            <div className={`${styles.item} ${styles['item-right']}`}>
              <img src={p5} alt="" className={styles.photo} />
            </div>
            <div className={`${styles.item} ${styles['item-right']}`}>
              <img src={p6} alt="" className={styles.photo} />
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <img src={p7} alt="" className={styles.photo} />
            </div>
            <div className={`${styles.item} ${styles['item-middle']}`}>
              <img src={p8} alt="" className={styles.photo} />
            </div>
            <div className={styles.item}>
              <img src={p9} alt="" className={styles.photo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutOffice;
