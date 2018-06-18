import React, { Component } from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayoutI';
import TwoSideLayout from '../components/TwoSideLayout/TwoSideLayout';
import NavigationBar from '../components/NavigationBar';
import Banner from '../components/common/Banner';
import Course from '../components/Train/Course';
import Previous from '../components/Train/Previous';
import bannerBg from '../../assets/train_bg.jpg';
import bannerBg2x from '../../assets/train_bg_2x.jpg';
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
    const course = getProperty(list, 'course').value;
    const left = <Course course={course} />;
    const right = <Previous />;

    const sections = [
      <NavigationBar fixed={true} location={location} navs={navs} />,
      <Banner bg={bannerBg} bg2x={bannerBg2x} title='配音培训班' />,
      <TwoSideLayout left={left} right={right} />,
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
