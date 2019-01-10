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
    return (
      <a target='_blank' href={video.link} className={styles.container}>
        <img src={video.cover} alt="" />
        <div className={styles.button}></div>
      </a>
    );
  }
}

export default IndexVideo;
