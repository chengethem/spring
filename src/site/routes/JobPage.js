import React, { Component } from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayoutI';
import NavigationBar from '../components/NavigationBar';
import Recruit from '../components/Job/Recruit';
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
class JobPage extends Component {
  render() {
    const { location, list, loading } = this.props;
    const navs = getProperty(list, 'navigation').value;
    const pix = getProperty(list, 'slider').value;
    const job = getProperty(list, 'job').value;
    const slogan = getProperty(list, 'about_slogan').value;
    const footer = job && job.length ? (<Footer />) : '';

    const sections = [
      <NavigationBar fixed={true} location={location} navs={navs} />,
      <Recruit jobs={job} />,
      footer
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
export default connect(mapStateToProps)(JobPage);
