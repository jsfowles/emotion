import React from 'react';

import Layout from '../../components/Layout';

export default (
  Component,
  data = null,
  title,
  footer = true,
  theme = 'light',
) => class extends React.Component {
  static async getInitialProps({ req, query }) {
    let res = null;

    if (data) { res = await data(req, query); }

    return {
      title: query.slug || title,
      data: res && (res.data || res),
      footer,
      theme,
    };
  }

  render() {
    return (
      <Layout { ...this.props }>
        <Component { ...this.props } />
      </Layout>
    );
  }
};
