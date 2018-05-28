import React, { Component } from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayoutI';
import NavigationBar from '../components/NavigationBar';
import CompositionBanner from '../components/common/Banner';
import CompositionBannerBg from '../../assets/list_banner_bg.jpg';
import CompositionBannerBg2x from '../../assets/list_banner_bg_2x.jpg';
import CompositionTabBar from '../components/Composition/CompositionTabBar';
import CompositionList from '../components/Composition/CompositionList';
import Footer from '../components/Footer';

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
  render() {
    const { location, list, loading } = this.props;
    const navs = getProperty(list, 'navigation').value;
    const pix = getProperty(list, 'slider').value;
    const news = getProperty(list, 'news').value;
    const dubbers = getProperty(list, 'dubbers').value;

    const sections = [
      <NavigationBar fixed={true} location={location} navs={navs} />,
      <CompositionBanner bg={CompositionBannerBg} bg2x={CompositionBannerBg2x} title='我们的配音作品集' />,
      <CompositionTabBar />,
      <CompositionList />,
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
