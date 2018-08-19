import React, { Component } from 'react';
import styles from './NavigationBar.scss';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.navigation = React.createRef();
    this.state = { hideMenu: true };
  }

  componentDidMount() {
    const { triggerFixedElementSelector } = this.props;
    if (triggerFixedElementSelector) {
      window.addEventListener('touchmove', this.fixNavigationBar.bind(this));
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

  toogleMenu() {
    this.setState({ hideMenu: !this.state.hideMenu });
  }

  render() {
    const { location, navs, fixed } = this.props;
    const { navigationBarFixed, hideMenu } = this.state;
    const items = (navs || []).map((item, idx) => {
      const path = location.pathname.split('/')[1];
      const link = item.link.split('/')[1];
      const item_class = path && link.indexOf(path) != -1 || path == link ? `${styles.item} ${styles.cur}` : styles.item;
      return (
        <a href={item.link} key={idx} className={item_class}>{item.title}</a>
      );
    });
    const _this = this;
    const list_icon_style = hideMenu ? `${styles["list-icon"]}` : `${styles["list-icon"]} ${styles["list-icon--close"]}`;
    const items_style = hideMenu ? `${styles["items"]}` : `${styles["items"]} ${styles["show"]}`;
    let navigatorStyle = navigationBarFixed || !hideMenu ? `${styles.wraper} ${styles.fixed}` : `${styles.wraper} ${styles.fixed}`;

    return (
      <div className={navigatorStyle} ref={this.navigation}>
        <div className={styles.list}>
          <a href={navs && navs[0].link} className={styles.logo}></a>
          <div className={list_icon_style} onClick={_this.toogleMenu.bind(this)}>
            <div className={styles["list-icon-0"]}></div>
            <div className={styles["list-icon-1"]}></div>
            <div className={styles["list-icon-2"]}></div>
          </div>
          <div className={items_style}>
            {items}
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
