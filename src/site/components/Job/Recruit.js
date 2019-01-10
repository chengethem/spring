import React, { Component } from 'react';
import styles from './Recruit.scss';
import commmonStyles from '../common/style.scss';

class Recruit extends Component {
  render() {
    const { jobs } = this.props;
    if (!jobs || jobs.length == 0) {
      return (<div className={commmonStyles.container}>
        <div className={commmonStyles.tag}></div>
        <div className={`${commmonStyles.title} ${styles.none}`}>暂无岗位需求</div>
      </div>);
    }
    const jobs_el = jobs.map((job, index) => {
      return (
        <div className={styles.mtl}>
          <div className={commmonStyles.tag}></div>
          <div className={styles.title}>{job.job_title}</div>
          <div className={`${styles.subtitle} ${styles.mts} ${styles.mbx}`}>职位描述：</div>
          <pre className={styles.desc}>{job.job_desc}</pre>
          <div className={`${styles.subtitle} ${styles.mts} ${styles.mbx}`}>职位要求：</div>
          <pre className={styles.desc}>{job.job_need}</pre>
          <div className={`${styles.subtitle}`}>投递邮箱：</div>
          <pre className={styles.desc}>{job.mail}</pre>
        </div>
      );
    });
    return (
      <div className={styles.container}>
        <div className={commmonStyles.tag}></div>
        <div className={commmonStyles.title}>招聘职位</div>
        {jobs_el}
      </div>
    );
  }
}

export default Recruit;
