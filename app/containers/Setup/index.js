import React from 'react';
import axios from 'axios';

export default (
  Component,
) => class extends React.Component {
  static async getInitialProps({ req, query }) {
    const isServer = !!req;

    console.log('getInitialProps called:', isServer ? 'server' : 'client')

    if (isServer) {
      // When being rendered server-side, we have access to our data in query that we put there in
      // routes/item.js, saving us an http call. Note that if we were to try to
      // require('../operations/get-item') here, it would result in a webpack error.
      return { item: query.itemData };
    } else {
      // On the client, we should fetch the data remotely
      const res = await axios({
        method: 'get',
        url: '/_data/item',
      });
      return { item: res };
    }
  }

  render() {
    return <Component { ...this.props } />;
  }
};
