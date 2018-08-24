import React, { Component } from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayoutI';
import NavigationBar from '../components/NavigationBar';
import CompositionBanner from '../components/common/Banner';
import CompositionBannerBg from '../../assets/list_banner_bg_m.jpg';
import CompositionBannerBg2x from '../../assets/list_banner_bg_2x.jpg';
import CompositionTabBar from '../components/Composition/CompositionTabBar';
import CompositionList from '../components/Composition/CompositionList';
import Footer from '../components/Footer';
import querystring from 'querystring';
import createHistory from 'history/createBrowserHistory';

function findByName(name) {
  return (item) => {
    return item.name === name;
  }
}
function getProperty(obj, key) {
  if (!obj) return {};
  if (obj instanceof Array) {
    return obj.find(findByName(key)) || {};
  }
  return obj[key] || '';
}
class CompositionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: '' };
  }
  changeTab(tab) {
    this.setState({ tab });
    createHistory().push(`/compositions?category=${tab}`);
  }
  render() {
    const _this = this;
    const { location, list, loading } = this.props;
    const navs = getProperty(list, 'navigation').value;
    const compositions = getProperty(list, 'compositions').value;
    const query = querystring.parse(location.search.split('?')[1]);
    let tabs = [];
    const TABS = {
      movie: '电影',
      game: '游戏',
      teleplay: '电视剧',
      animation: '动画',
      stage: '舞台剧',
      ad: '广告',
    };
    if (!compositions) {
      return '';
    }
    compositions.map(composition => {
      if (composition.category && tabs.indexOf(composition.category) === -1) {
        tabs.push(composition.category);
      }
    });
    const ordered_tabs = [];
    Object.keys(TABS).map(tab => {
      if (tabs.indexOf(TABS[tab]) != -1) {
        ordered_tabs.push(TABS[tab]);
      }
      return tab;
    });
    console.info('_this.state.tab_', _this.state.tab);
    const sections = [
      <NavigationBar fixed={true} location={location} navs={navs} />,
      <CompositionBanner bg={CompositionBannerBg} title='我们的配音作品集' />,
      <CompositionTabBar tabs={ordered_tabs} changeTab={_this.changeTab} current_category={_this.state.tab || query.category} />,
      <CompositionList compositions={compositions} current_category={_this.state.tab || query.category} />,
      <Footer />
    ];
    return (
      <MainLayout sections={sections}>
      </MainLayout>
    );
  }
}
function mapStateToProps(state) {
  const { list, total, page } = state.sections;
  return {
    loading: state.loading.models.sections,
    list,
    total,
    page,
  };
}
export default connect(mapStateToProps)(CompositionsPage);
