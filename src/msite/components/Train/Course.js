import React, { Component } from 'react';
import commmonStyles from '../common/style.scss';
import styles from './Course.scss';

class CompositionBanner extends Component {
  render() {
    let { course } = this.props;
    if (!course || course.length < 1) {
      return '';
    }
    course = course[0];
    const teacher_el = course.teacher.map((teacher, index) => {
      return (
        <a className={styles.dubber} href={teacher.homepage} target='_blank' key={index}>
          <div className={styles['dubber-avatar']} target='_blank' style={{ 'backgroundImage': `url("${teacher.avatar}")` }}>
          </div>
          <div className={styles['dubber-title']}>
            <div className={styles['dubber-name']}>{teacher.name}</div>
            <div className={styles['dubber-desc']}>{teacher.desc}</div>
          </div>
        </a>
      );
    });
    const recruit_el = course.recruit_info.map((recruit,index)=>{
      return (
      <div className={styles.state} key={index}>
        <div className={styles['state-label']}>{recruit.info_title}</div>
        <div className={styles['state-content']}>{recruit.info_content}</div>
      </div>
    );
    });
    return (
      <div className="">
        <div className={styles.titles}>
          <div className={styles['co-title']}>正在招生课程</div>
          <div className={styles.title}>{course.course_name}</div>
          <div className={styles['sub-title']}>{course.course_slogan}</div>
        </div>
        <div className={styles.mod}>
          <div className={styles['mod-title']}>
            导师阵容
          </div>
          <div className={styles.dubbers}>
            {teacher_el}
          </div>
        </div>
        <div className={styles.mod}>
          <div className={styles['mod-title']}>
            招生信息
          </div>
          <div className={styles.status}>
            <div className={styles['mod-card']}>
              <div className={styles['mod-card-title']}>招聘人数</div>
              <div className={`${styles['mod-card-icon']} ${styles['mod-card-icon--person']}`}></div>
              <div className={styles['mod-card-content']}>{course.students_number}人</div>
            </div>
            <div className={styles['mod-card']}>
              <div className={styles['mod-card-title']}>开课日期</div>
              <div className={`${styles['mod-card-icon']} ${styles['mod-card-icon--clock']}`}></div>
              <div className={`${styles['mod-card-content']} ${styles.highlight}`}>{course.start_date}</div>
            </div>
            <div className={styles['mod-card']}>
              <div className={styles['mod-card-title']}>报名截止日期</div>
              <div className={`${styles['mod-card-icon']} ${styles['mod-card-icon--date']}`}></div>
              <div className={`${styles['mod-card-content']} ${styles.highlight}`}>{course.deadline}</div>
            </div>
          </div>
          <div className={styles.states}>
            {recruit_el}
          </div>
        </div>
        <div className={styles.mod}>
          <div className={styles['mod-title']}>
            招生简章
          </div>
          <div className={styles['mod-p']}>
            <div className={styles['mod-p-title']}>报名要求：</div>
            <pre className={styles['mod-p-content']}>
              {course.require}
            </pre>
          </div>
          <div className={styles['mod-p']}>
            <div className={styles['mod-p-title']}>课程安排：</div>
            <pre className={styles['mod-p-content']}>
              {course.arrange}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default CompositionBanner;
