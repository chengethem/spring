import React, { Component } from 'react';
import styles from './IndexVideo.scss';
import img from '../../../assets/demo/video.jpg';

class IndexVideo extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={img} alt="" />
        <div className={styles.button}></div>
      </div>
    );
  }
}

export default IndexVideo;
