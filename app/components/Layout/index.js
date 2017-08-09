import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Navigation from '../Navigation';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Netflix Jobs</title>
    </Head>

    <Navigation />
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
