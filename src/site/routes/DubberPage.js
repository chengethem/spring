import React, { Component } from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayoutI';
import TwoSideLayoutI from '../components/TwoSideLayout/TwoSideLayoutI';
import NavigationBar from '../components/NavigationBar';
import DubberInfo from '../components/Dubber/DubberInfo';
// import CompositionCast from '../components/Dubber/CompositionCast';
import Footer from '../components/Footer';
import DubberCompositions from '../components/Dubber/DubberCompositions';

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
class CompositionPage extends Component {
  render() {
    const { location, list, loading } = this.props;
    const navs = getProperty(list, 'navigation').value;
    const pix = getProperty(list, 'slider').value;
    const news = getProperty(list, 'news').value;
    const dubbers = getProperty(list, 'dubbers').value;
    const left = <DubberInfo />;
    const right = <DubberCompositions />;

    const sections = [
      <NavigationBar fixed={true} location={location} navs={navs} />,
      <TwoSideLayoutI left={left} right={right} />,
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
export default connect(mapStateToProps)(CompositionPage);
