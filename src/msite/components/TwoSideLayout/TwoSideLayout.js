import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './TwoSideLayout.scss';

class TwoSideLayout extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <div className={`${commmonStyles.container} ${styles.contianer}`}>
        <div className={styles.left}>
          {left}
        </div>
      </div>
    );
  }
}

export default TwoSideLayout;