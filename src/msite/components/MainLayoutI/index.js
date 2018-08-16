import React, { Component } from 'react';
import styles from './style.scss';

class Layout extends Component {
  render() {
    const { sections } = this.props;
    const Sections = sections.map((section, idx) => {
      return section;
    });
    return Sections;
  }
}

export default Layout;