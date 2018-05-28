import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './CompositionInfo.scss';

class CompositionInfo extends Component {
  render() {
    const style = {
      backgroundImage: `url("http://g1.ykimg.com/051600005AEFEB42ADBC09AAAB05416F")`
    };
    const itemStyle = {
      backgroundImage: `url("http://www.wekids.com/wp-content/uploads/2018/01/wiki_mysticons_title.jpg")`
    };

    return (
      <div className={styles.container}>
        <div className={styles.overview}>
          <div className={styles.cover} style={style}></div>
          <div className={styles.content}>
            <div className={styles.title}>神域少女 · Mysticons</div>
            <div className={styles.subtitle}>该动画讲述四位拥有神奇力量的少女经历了惊险刺激的冒险故事</div>
            <div className={styles.infos}>
              <div className={styles.info}>
                <div className={styles.label}>国内播出平台</div>
                <div className={styles.value}>优酷，爱奇艺，腾讯，小米</div>
              </div>
              <div className={styles.info}>
                <div className={styles.label}>国内品牌运营</div>
                <div className={styles.value}>万童互动 · WeKids</div>
              </div>
              <div className={styles.info}>
                <div className={styles.label}>出品公司</div>
                <div className={styles.value}>Topps Animation, Corus Entertainment, Nelvana</div>
              </div>
              <div className={styles.info}>
                <div className={styles.label}>国外播出电视台</div>
                <div className={styles.value}>Nickelodeon, YTV, Nicktoons</div>
              </div>
              <div className={styles.info}>
                <div className={styles.label}>类别</div>
                <div className={styles.value}>学龄前</div>
              </div>
              <div className={styles.info}>
                <div className={styles.label}>节目授权区域</div>
                <div className={styles.value}>中国大陆，香港，澳门</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.desc}>
          <div className={styles['mod-title']}>剧情简介</div>
          <div className={styles['mod-content']}>
            《神域少女》是一部现代都市幻想动画，讲述了四个普普通通的女孩一步步转变为传奇的神域少女的故事。受到一个预言的召唤，艾克娜、卡莉娅、埃茉拉和佩佩为了保护自己的家园，齐心协力共同对抗邪恶的敌人——以尼可拉法和黑暗巴恩的为领导的反派组织。她们是令人刮目相看的英雄，一路共同成长为最伟大的勇士和最亲密的朋友。
          </div>
        </div>
        <div className="">
          <div className={styles['mod-title']}>视频片段</div>
          <div className={styles['mod-pics']}>
            <div className={styles['mod-item']}>
              <a className={styles['item-cover']} style={itemStyle} href='http://v.youku.com/v_show/id_XMzA4MjY3NTYyMA==.html?spm=a2h0k.11417342.searchresults.dselectbutton' target='_blank'>
                <div className={`${styles['icon-play']} ${styles['item-play']}`}></div>
              </a>
              <div className={styles['item-content']}>她们是令人刮目相看的英雄，一路共同成长为最伟大的勇士和最亲密的朋友。故事的背景在德雷克城，一座呈环形盘绕的现代都市。</div>
            </div>
            <div className={styles['mod-item']}>
              <a className={styles['item-cover']} style={itemStyle} href='http://v.youku.com/v_show/id_XMzA4MjY3NTYyMA==.html?spm=a2h0k.11417342.searchresults.dselectbutton' target='_blank'>
                <div className={`${styles['icon-play']} ${styles['item-play']}`}></div>
              </a>
              <div className={styles['item-content']}>她们是令人刮目相看的英雄，一路共同成长为最伟大的勇士和最亲密的朋友。故事的背景在德雷克城，一座呈环形盘绕的现代都市。</div>
            </div>
            <div className={styles['mod-item']}>
              <a className={styles['item-cover']} style={itemStyle} href='http://v.youku.com/v_show/id_XMzA4MjY3NTYyMA==.html?spm=a2h0k.11417342.searchresults.dselectbutton' target='_blank'>
                <div className={`${styles['icon-play']} ${styles['item-play']}`}></div>
              </a>
              <div className={styles['item-content']}>她们是令人刮目相看的英雄，一路共同成长为最伟大的勇士和最亲密的朋友。故事的背景在德雷克城，一座呈环形盘绕的现代都市。</div>
            </div><div className={styles['mod-item']}>
              <a className={styles['item-cover']} style={itemStyle} href='http://v.youku.com/v_show/id_XMzA4MjY3NTYyMA==.html?spm=a2h0k.11417342.searchresults.dselectbutton' target='_blank'>
                <div className={`${styles['icon-play']} ${styles['item-play']}`}></div>
              </a>
              <div className={styles['item-content']}>她们是令人刮目相看的英雄，一路共同成长为最伟大的勇士和最亲密的朋友。故事的背景在德雷克城，一座呈环形盘绕的现代都市。</div>
            </div>
            <div className={styles['mod-item']}>
              <a className={styles['item-cover']} style={itemStyle} href='http://v.youku.com/v_show/id_XMzA4MjY3NTYyMA==.html?spm=a2h0k.11417342.searchresults.dselectbutton' target='_blank'>
                <div className={`${styles['icon-play']} ${styles['item-play']}`}></div>
              </a>
              <div className={styles['item-content']}>她们是令人刮目相看的英雄，一路共同成长为最伟大的勇士和最亲密的朋友。故事的背景在德雷克城，一座呈环形盘绕的现代都市。</div>
            </div>
            <div className={styles['mod-item']}>
              <a className={styles['item-cover']} style={itemStyle} href='http://v.youku.com/v_show/id_XMzA4MjY3NTYyMA==.html?spm=a2h0k.11417342.searchresults.dselectbutton' target='_blank'>
                <div className={`${styles['icon-play']} ${styles['item-play']}`}></div>
              </a>
              <div className={styles['item-content']}>她们是令人刮目相看的英雄，一路共同成长为最伟大的勇士和最亲密的朋友。故事的背景在德雷克城，一座呈环形盘绕的现代都市。</div>
            </div>
            <div className={styles['mod-item']}>
              <a className={styles['item-cover']} style={itemStyle} href='http://v.youku.com/v_show/id_XMzA4MjY3NTYyMA==.html?spm=a2h0k.11417342.searchresults.dselectbutton' target='_blank'>
                <div className={`${styles['icon-play']} ${styles['item-play']}`}></div>
              </a>
              <div className={styles['item-content']}>她们是令人刮目相看的英雄，一路共同成长为最伟大的勇士和最亲密的朋友。故事的背景在德雷克城，一座呈环形盘绕的现代都市。</div>
            </div>
            <div className={styles['mod-item']}>
              <a className={styles['item-cover']} style={itemStyle} href='http://v.youku.com/v_show/id_XMzA4MjY3NTYyMA==.html?spm=a2h0k.11417342.searchresults.dselectbutton' target='_blank'>
                <div className={`${styles['icon-play']} ${styles['item-play']}`}></div>
              </a>
              <div className={styles['item-content']}>她们是令人刮目相看的英雄，一路共同成长为最伟大的勇士和最亲密的朋友。故事的背景在德雷克城，一座呈环形盘绕的现代都市。</div>
            </div>
            <div className={styles['mod-item']}>
              <a className={styles['item-cover']} style={itemStyle} href='http://v.youku.com/v_show/id_XMzA4MjY3NTYyMA==.html?spm=a2h0k.11417342.searchresults.dselectbutton' target='_blank'>
                <div className={`${styles['icon-play']} ${styles['item-play']}`}></div>
              </a>
              <div className={styles['item-content']}>她们是令人刮目相看的英雄，一路共同成长为最伟大的勇士和最亲密的朋友。故事的背景在德雷克城，一座呈环形盘绕的现代都市。</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default CompositionInfo;
