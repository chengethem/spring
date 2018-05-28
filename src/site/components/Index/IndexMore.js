import React, { Component } from 'react';
// import commmonStyles from './common/style.scss';
import styles from './IndexMore.scss';

class IndexMore extends Component {
  render() {
    const { moreLink } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            如果你想进一步了解清泉配音工作室
          </div>
          <a href={moreLink} className={styles.subtitle}>联系我们 ></a>
        </div>
      </div>
    );
  }
}

export default IndexMore;
