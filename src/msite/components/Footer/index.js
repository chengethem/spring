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
            <a className={styles['contact-way']} href='tel:021-52527144'>电话：021-52527144</a>
            <a href={`mailto:springmedia@163.com`} className={styles['contact-way']}>邮箱：springmedia@163.com</a>
          </div>
          <div className={styles.focus}>
            <img className={styles.qrcode} src={img} alt="" />
            <div className={`${styles.wechat}${isShow ? ` ${styles.active}` : ''}`}><Icon type="wechat" /> 微信公众号</div>
            <a href="https://weibo.com/springmedia" className={`${styles.weibo}`} target="_blank"><Icon type="weibo" /> 微博</a>
          </div>
        </div>
        <p className={styles.copyright}>Copyright © 1997-{y} Spring Media Ltd. All Rights Reserved.</p>
        <div className={styles.copyright}>
          <div className={styles.gap}>沪ICP备16047667号</div>
          <div>沪公网备31010702003953号</div>
        </div>
      </div>
    );
  }
}

export default Footer;
