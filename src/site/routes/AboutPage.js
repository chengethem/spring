import React, { Component } from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayoutI';
import NavigationBar from '../components/NavigationBar';
import AboutBanner from '../components/About/AboutBanner';
import AboutBusiness from '../components/About/AboutBusiness';
import AboutRoute from '../components/About/AboutRoute';
import AboutOffice from '../components/About/AboutOffice';
import AboutMore from '../components/About/AboutMore';
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

    const sections = [
      <NavigationBar triggerFixedElementSelector='#banner' location={location} navs={navs} />,
      <AboutBanner />,
      <AboutBusiness />,
      <AboutRoute />,
      <AboutOffice />,
      <AboutMore />,
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
