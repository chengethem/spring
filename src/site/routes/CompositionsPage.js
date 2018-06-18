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
import querystring from 'querystring';

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
    const compositions = getProperty(list, 'compositions').value;
    const query = querystring.parse(location.search.split('?')[1]);
    let tabs = [];
    if (!compositions) {
      return '';
    }
    compositions.map(composition => {
      console.info('composition__', composition);
      if (composition.category && tabs.indexOf(composition.category) === -1) {
        tabs.push(composition.category);
      }
    });

    const sections = [
      <NavigationBar fixed={true} location={location} navs={navs} />,
      <CompositionBanner bg={CompositionBannerBg} bg2x={CompositionBannerBg2x} title='我们的配音作品集' />,
      <CompositionTabBar tabs={tabs} current_category={query.category} />,
      <CompositionList compositions={compositions} />,
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
