import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './CompositionInfo.scss';

class CompositionInfo extends Component {
  render() {
    const { composition } = this.props;
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
    const clips_el = clips[0] && clips[0].cover && clips.map((clip, clip_index) => {
      const clip_cover_style = {
        backgroundImage: `url(${clip.cover})`
      };
      let cover_el = '';
      let desc_el = '';
      if (clip.video) {
        cover_el = <a className={styles['item-cover']} style={clip_cover_style} href={clip.video} target='_blank'>
          <div className={`${styles['icon-play']} ${styles['item-play']}`}></div>
        </a>;
      } else {
        cover_el = <div className={`${styles['item-cover']} ${styles['item-pic']}`} style={clip_cover_style} target='_blank'>
        </div>
      }
      if (clip.clips_desc) {
        desc_el = <div className={styles['item-content']}>{clip.clips_desc}</div>;
      }
      return (
        <div className={styles['mod-item']} key={clip_index}>
          {cover_el}
          {desc_el}
        </div>
      );
    });
    const clips_mod = clips_el ? (
      <div className="">
        <div className={styles['mod-title']}>精彩片段</div>
        <div className={styles['mod-pics']}>
          {clips_el}
        </div>
      </div>
    ) : '';

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
        {clips_mod}
      </div>
    );
  }
}

export default CompositionInfo;
