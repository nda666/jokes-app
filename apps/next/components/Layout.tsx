import React from 'react';
import Navbar from './Navbar';

class Layout extends React.Component {
  render() {
    const title = process.env.APP_NAME;
    return (
      <>
        <Navbar title={title} />
        {this.props.children}
      </>
    );
  }
}

export default Layout;
