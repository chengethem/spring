import React, { Component } from 'react';
import styles from './IndexVideo.scss';
import img from '../../../assets/demo/video.jpg';

class IndexVideo extends Component {
  render() {
    let { video } = this.props;
    if(!video){
      return '';
    }
    video = video[0];
    const bg_style = {
      backgroundImage:`url(${video.cover})`
    };
    return (
      <a target='_blank' href={video.link} style={bg_style} className={styles.container}>
        <div className={styles.button}></div>
      </a>
    );
  }
}

export default IndexVideo;
