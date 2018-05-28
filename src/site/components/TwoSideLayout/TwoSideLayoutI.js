import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './TwoSideLayoutI.scss';

class TwoSideLayout extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <div className={`${styles.wraper}`}>
        <div className={styles.container}>
          <div className={styles.left}>
            {left}
          </div>
          <div className={styles.right}>
            {right}
          </div>
        </div>
      </div>
    );
  }
}

export default TwoSideLayout;