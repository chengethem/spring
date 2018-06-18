import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './CompositionInfo.scss';

class CompositionInfo extends Component {
  render() {
    const { composition } = this.props;
    console.info('composition__', composition);
    const cover_style = {
      backgroundImage: `url(${composition.cover})`
    };
    const { info, clips } = composition;
    const info_el = info.map((info, info_index) => {
      return (
        <div className={styles.info} key={info_index}>
          <div className={styles.label}>{info.info_caption}</div>
          <div className={styles.value}>{info.info_content}</div>
        </div>
      );
    });
    const clips_el = clips.map((clip, clip_index) => {
      const clip_cover_style = {
        backgroundImage: `url(${clip.cover})`
      };
      return (
        <div className={styles['mod-item']} key={clip_index}>
          <a className={styles['item-cover']} style={clip_cover_style} href={clip.video} target='_blank'>
            <div className={`${styles['icon-play']} ${styles['item-play']}`}></div>
          </a>
          <div className={styles['item-content']}>{clip.clips_desc}</div>
        </div>
      );
    });

    return (
      <div className={styles.container}>
        <div className={styles.overview}>
          <div className={styles.cover} style={cover_style}></div>
          <div className={styles.content}>
            <div className={styles.title}>{composition.name}</div>
            <div className={styles.subtitle}>{composition.desc}</div>
            <div className={styles.infos}>
              {info_el}
            </div>
          </div>
        </div>
        <div className={styles.desc}>
          <div className={styles['mod-title']}>剧情简介</div>
          <div className={styles['mod-content']}>
            {composition.story}
          </div>
        </div>
        <div className="">
          <div className={styles['mod-title']}>视频片段</div>
          <div className={styles['mod-pics']}>
            {clips_el}
          </div>
        </div>
      </div>
    );
  }
}

export default CompositionInfo;
