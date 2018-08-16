import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './CompositionCast.scss';

class CompositionCast extends Component {
  render() {
    const { cast } = this.props;
    if (!cast) {
      return '';
    }
    if(!cast[0].name){
      return '';
    }
    const cast_el = cast.map(cast => {
      const avatar_style = {
        backgroundImage: `url(${cast.avatar})`
      }
      return (
        <a href={cast.homepage?cast.homepage:'javascript:;'} target={cast.homepage&&cast.homepage.indexOf('http')!=-1?'_blank':''} className={styles.item}>
          <div className={styles.avatar} style={avatar_style}></div>
          <div className={styles.name}>{cast.name}</div>
          <div className={styles.acting} title={cast.role}>{cast.role}</div>
        </a>
      );
    });
    return (
      <div className=''>
        <div className={styles.title}>配音演员表</div>
        <div className={styles.list}>
          {cast_el}
        </div>
      </div>
    );
  }
}

export default CompositionCast;
