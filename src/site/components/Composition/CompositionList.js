import React, { Component } from 'react';
import styles from './CompositionList.scss';
import icon from '../../../assets/icon/time.png';
import cover from '../../../assets/demo/cover1_2x.jpg';

class CompositionList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.item}>
            <img className={styles.cover} src={cover} alt="" />
            <div className={styles.content}>
              <div className={styles.title}>暴雪魔兽世界资料片“大地的裂变”</div>
              <div className={styles.desc}>受上古之神操控的黑龙死亡之翼趁着英雄远征诺森德时突破了土元素位面，拉近了元素位面与艾泽拉斯的距离，巨大的灾难降临到艾泽拉斯大陆上，整块大陆都改变了外貌</div>
              <div className={styles.info}>
                <img className={styles.icon} src={icon} alt="" />
                <span className={styles.date}>2018.06.01</span>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img className={styles.cover} src={cover} alt="" />
            <div className={styles.content}>
              <div className={styles.title}>暴雪魔兽世界资料片“大地的裂变”</div>
              <div className={styles.desc}>受上古之神操控的黑龙死亡之翼趁着英雄远征诺森德时突破了土元素位面，拉近了元素位面与艾泽拉斯的距离，巨大的灾难降临到艾泽拉斯大陆上，整块大陆都改变了外貌</div>
              <div className={styles.info}>
                <img className={styles.icon} src={icon} alt="" />
                <span className={styles.date}>2018.06.01</span>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img className={styles.cover} src={cover} alt="" />
            <div className={styles.content}>
              <div className={styles.title}>暴雪魔兽世界资料片“大地的裂变”</div>
              <div className={styles.desc}>受上古之神操控的黑龙死亡之翼趁着英雄远征诺森德时突破了土元素位面，拉近了元素位面与艾泽拉斯的距离，巨大的灾难降临到艾泽拉斯大陆上，整块大陆都改变了外貌</div>
              <div className={styles.info}>
                <img className={styles.icon} src={icon} alt="" />
                <span className={styles.date}>2018.06.01</span>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img className={styles.cover} src={cover} alt="" />
            <div className={styles.content}>
              <div className={styles.title}>暴雪魔兽世界资料片“大地的裂变”</div>
              <div className={styles.desc}>受上古之神操控的黑龙死亡之翼趁着英雄远征诺森德时突破了土元素位面，拉近了元素位面与艾泽拉斯的距离，巨大的灾难降临到艾泽拉斯大陆上，整块大陆都改变了外貌</div>
              <div className={styles.info}>
                <img className={styles.icon} src={icon} alt="" />
                <span className={styles.date}>2018.06.01</span>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img className={styles.cover} src={cover} alt="" />
            <div className={styles.content}>
              <div className={styles.title}>暴雪魔兽世界资料片“大地的裂变”</div>
              <div className={styles.desc}>受上古之神操控的黑龙死亡之翼趁着英雄远征诺森德时突破了土元素位面，拉近了元素位面与艾泽拉斯的距离，巨大的灾难降临到艾泽拉斯大陆上，整块大陆都改变了外貌</div>
              <div className={styles.info}>
                <img className={styles.icon} src={icon} alt="" />
                <span className={styles.date}>2018.06.01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompositionList;
