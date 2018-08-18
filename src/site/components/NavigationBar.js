import React, { Component } from 'react';
import styles from './NavigationBar.scss';
import logo from '../../assets/springmedia.png';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.navigation = React.createRef();
    this.state = {};
  }

  componentDidMount() {
    const { triggerFixedElementSelector } = this.props;
    if (triggerFixedElementSelector) {
      window.addEventListener('scroll', this.fixNavigationBar.bind(this));
    }
  }

  fixNavigationBar() {
    const { triggerFixedElementSelector } = this.props;
    const banner = document.querySelector(triggerFixedElementSelector);
    const bannerTop = banner.offsetTop + banner.offsetHeight;
    const navigationHeight = this.navigation.current.offsetHeight;
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > bannerTop - navigationHeight) {
      return this.setState({ navigationBarFixed: true });
    }
    this.setState({ navigationBarFixed: false });
  }
  render() {
    const { location, navs, fixed } = this.props;
    const { navigationBarFixed } = this.state;
    const items = (navs || []).map((item, idx) => {
      const path = location.pathname.split('/')[1];
      const link = item.link.split('/')[1];
      const item_class = link.indexOf(path) != -1 || path == item.link ? `${styles.item} ${styles.cur}` : styles.item;
      return (
        <a href={item.link} key={idx} className={item_class}>{item.title}</a>
      );
    });
    let navigatorStyle = navigationBarFixed ? `${styles.wraper} ${styles.fixed}` : `${styles.wraper}`;
    if (fixed) {
      navigatorStyle = `${styles.wraper} ${styles.static}`;
    }
    return (
      <div className={navigatorStyle} ref={this.navigation}>
        <div className={styles.list}>
          <a href={navs && navs[0].link} className={styles.logo}></a>
          <div className={styles.items}>
            {items}
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
