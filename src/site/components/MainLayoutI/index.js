import React, { Component } from 'react';
import styles from './style.scss';

class Layout extends Component {
  render() {
    const { sections } = this.props;
    const Sections = sections.map((section,idx) => {
      return (
        <div key={idx}>
          {section}
        </div>
      );
    });
    return (
      <div>
        {Sections}
      </div>
    );
  }
}

export default Layout;