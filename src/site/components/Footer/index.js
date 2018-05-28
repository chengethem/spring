import React, { Component } from 'react';
import styles from './style.scss';
import { Link } from 'dva/router';
import { Icon } from 'antd';
import img from '../../../assets/wechat.jpg';

class Footer extends Component {
  constructor(props) {
    super(props);
    // this.props.show = false;
    this.toggleQR = this.toggleQR.bind(this);
    this.state = {
      show: false
    }
  }
  toggleQR() {
    const isShow = this.state.show || false;
    console.info('toggleQR__!', isShow, !isShow);
    this.setState({
      show: !isShow
    });
  }
  render() {
    const toggleQR = this.toggleQR;
    const isShow = this.state.show;
    const y = new Date().getFullYear();
    return (
      <div className={styles.container} id="contact">
        <div className={styles.contact}>
          <div className={styles.logo}></div>
          <div className={styles.way}>
            <div className={styles['contact-title']}>联系我们</div>
            <div className={styles['contact-way']}>电话：021-52527144</div>
            <div className={styles['contact-way']}>邮箱：springmedia@163.com</div>
          </div>
          <div className={styles.focus}>
            <div className={styles['contact-title']}>关注我们</div>
            <div className={`${styles.wechatqrcode}${isShow ? ` ${styles.show}` : ''}`}><img className={styles.qrcode} src={img} alt="" /></div>
            <a href="javasript:;" onClick={toggleQR} className={`${styles.wechat}${isShow ? ` ${styles.active}` : ''}`}><Icon type="wechat" /></a>
            <a href="https://weibo.com/springmedia" className={styles.weibo} target="_blank"><Icon type="weibo" /></a>
          </div>
        </div>
        <p className={styles.copyright}>Copyright © 1997-{y} Spring Media Ltd. All Rights Reserved.</p>
        <p className={styles.copyright}>
          {/* <a href="http://www.miibeian.gov.cn/">沪ICP备16047667号</a>  */}
          <span className={styles.gap}>沪ICP备16047667号</span>
          <span>沪公网备31010702003953号</span>
        </p>
      </div>
    );
  }
}

export default Footer;
