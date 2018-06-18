import React, { Component } from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayoutI';
import NavigationBar from '../components/NavigationBar';
import IndexBanner from '../components/Index/IndexBanner';
import IndexBrief from '../components/Index/IndexBrief';
import IndexVideo from '../components/Index/IndexVideo';
import IndexNews from '../components/Index/IndexNews';
import IndexTeam from '../components/Index/IndexTeam';
import IndexPartner from '../components/Index/IndexPartner';
import IndexMore from '../components/Index/IndexMore';
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
class IndexPage extends Component {
  render() {
    const { location, list, loading } = this.props;
    const navs = getProperty(list, 'navigation').value;
    const pix = getProperty(list, 'slider').value;
    const news = getProperty(list, 'news').value;
    const dubbers = getProperty(list, 'dubbers').value;
    const slogan = getProperty(list, 'slogan').value;

    const sections = [
      <NavigationBar triggerFixedElementSelector='#banner' location={location} navs={navs} />,
      <IndexBanner slogan={slogan} />,
      <IndexBrief />,
      <IndexVideo />,
      <IndexNews list={news} />,
      <IndexTeam list={dubbers} />,
      <IndexPartner />,
      <IndexMore moreLink='/about' />,
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
export default connect(mapStateToProps)(IndexPage);
