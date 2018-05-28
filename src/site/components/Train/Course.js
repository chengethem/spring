import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './Course.scss';

class CompositionBanner extends Component {
  render() {
    return (
      <div className="">
        <div className={styles.titles}>
          <div className={styles['co-title']}>正在招生课程</div>
          <div className={styles.title}>配音培训班第20期</div>
          <div className={styles['sub-title']}>欢迎热爱配音的你来参加</div>
        </div>
        <div className={styles.mod}>
          <div className={styles['mod-title']}>
            导师阵容
          </div>
          <div className={styles.dubbers}>
            <a className={styles.dubber} href="https://baike.baidu.com/item/%E5%BE%90%E6%95%8F/5834561#viewPageContent">
              <div className={styles['dubber-avatar']} target='_blank' style={{ 'backgroundImage': 'url("http://oezn2ph4e.bkt.clouddn.com/xm1.jpg")' }}>
              </div>
              <div className={styles['dubber-title']}>
                <div className={styles['dubber-name']}>徐敏</div>
                <div className={styles['dubber-desc']}>香港国语著名配音演员</div>
              </div>
            </a>
            <a className={styles.dubber} href="https://baike.baidu.com/item/%E5%BE%90%E6%95%8F/5834561#viewPageContent">
              <div className={styles['dubber-avatar']} target='_blank' style={{ 'backgroundImage': 'url("http://oezn2ph4e.bkt.clouddn.com/xm1.jpg")' }}>
              </div>
              <div className={styles['dubber-title']}>
                <div className={styles['dubber-name']}>徐敏</div>
                <div className={styles['dubber-desc']}>香港国语著名配音演员</div>
              </div>
            </a>
            <a className={styles.dubber} href="https://baike.baidu.com/item/%E5%BE%90%E6%95%8F/5834561#viewPageContent">
              <div className={styles['dubber-avatar']} target='_blank' style={{ 'backgroundImage': 'url("http://oezn2ph4e.bkt.clouddn.com/xm1.jpg")' }}>
              </div>
              <div className={styles['dubber-title']}>
                <div className={styles['dubber-name']}>徐敏</div>
                <div className={styles['dubber-desc']}>香港国语著名配音演员</div>
              </div>
            </a>
            <a className={styles.dubber} href="https://baike.baidu.com/item/%E5%BE%90%E6%95%8F/5834561#viewPageContent">
              <div className={styles['dubber-avatar']} target='_blank' style={{ 'backgroundImage': 'url("http://oezn2ph4e.bkt.clouddn.com/xm1.jpg")' }}>
              </div>
              <div className={styles['dubber-title']}>
                <div className={styles['dubber-name']}>徐敏</div>
                <div className={styles['dubber-desc']}>香港国语著名配音演员</div>
              </div>
            </a>
            <a className={styles.dubber} href="https://baike.baidu.com/item/%E5%BE%90%E6%95%8F/5834561#viewPageContent">
              <div className={styles['dubber-avatar']} target='_blank' style={{ 'backgroundImage': 'url("http://oezn2ph4e.bkt.clouddn.com/xm1.jpg")' }}>
              </div>
              <div className={styles['dubber-title']}>
                <div className={styles['dubber-name']}>徐敏</div>
                <div className={styles['dubber-desc']}>香港国语著名配音演员</div>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.mod}>
          <div className={styles['mod-title']}>
            招生信息
          </div>
          <div className={styles.status}>
            <div className={styles['mod-card']}>
              <div className={styles['mod-card-title']}>招聘人数</div>
              <div className={`${styles['mod-card-icon']} ${styles['mod-card-icon--person']}`}></div>
              <div className={styles['mod-card-content']}>20人</div>
            </div>
            <div className={styles['mod-card']}>
              <div className={styles['mod-card-title']}>开课日期</div>
              <div className={`${styles['mod-card-icon']} ${styles['mod-card-icon--clock']}`}></div>
              <div className={`${styles['mod-card-content']} ${styles.highlight}`}>2018.04.08</div>
            </div>
            <div className={styles['mod-card']}>
              <div className={styles['mod-card-title']}>报名截止日期</div>
              <div className={`${styles['mod-card-icon']} ${styles['mod-card-icon--date']}`}></div>
              <div className={`${styles['mod-card-content']} ${styles.highlight}`}>2018.05.01</div>
            </div>
          </div>
          <div className={styles.states}>
            <div className={styles.state}>
              <div className={styles['state-label']}>录取名额</div>
              <div className={styles['state-content']}>择优录取，每班不超过20人</div>
            </div>
            <div className={styles.state}>
              <div className={styles['state-label']}>授课时间</div>
              <div className={styles['state-content']}>周六全天 周日上午： 上午9:00 —— 20：30（中间有休息时间）</div>
            </div>
            <div className={styles.state}>
              <div className={styles['state-label']}>报名截止</div>
              <div className={styles['state-content']}>报名截止日期为：2018年5月1日</div>
            </div>
            <div className={styles.state}>
              <div className={styles['state-label']}>其他说明</div>
              <div className={styles['state-content']}>具体上课老师以实际安排为准</div>
            </div>
          </div>
        </div>
        <div className={styles.mod}>
          <div className={styles['mod-title']}>
            招生简章
          </div>
          <div className={styles['mod-p']}>
            <div className={styles['mod-p-title']}>报名要求：</div>
            <p className={styles['mod-p-content']}>
              1、热爱配音；<br />
              2、普通话标准流畅；<br />
              3、年满16周岁，无专业和基础限制。
            </p>
          </div>
          <div className={styles['mod-p']}>
            <div className={styles['mod-p-title']}>课程安排：</div>
            <p className={styles['mod-p-content']}>
              1、周末班开课时间：2018年3月中上旬。<br />
              2、录取名额：择优录取，每班不超过20人。<br />
              3、授课时间：周六全天 周日上午： 上午9:00 —— 20：30（中间有休息时间）<br />
              4、授课地点：上海市普陀区江宁路1306弄富丽大厦1602室（13号线地铁江宁路，学员食宿需自理）<br />
              5、培训费用：10,000 RMB<br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CompositionBanner;