import React from 'react';
import axios from 'axios';

export default ({
  View,
  title,
  request,
  options,
}) => class extends React.Component {
  static async getInitialProps({ req, query }) {
    // TODO: This fails when requesting from a load balancer, for example it needs to make a request
    // internally, http://localhost:3000/ but it sees the request as external, https://underbelly.is.
    // Zeit recommends that you setup 2 endpoints to solve this.
    //
    // If we don't go to setting up 2 endpoints we should probably pass the host url's into the
    // ENV variables.
    const url = req ? `${req.protocol}://${req.get('Host')}` : '';

    // TODO: Previously we had `res.data`, I am not 100% sure why. Maybe it was to make a external
    // request (not to the internal node server) and merge it? I doubt it though.
    const { data } = request ? await axios.get(`${url}${request}`) : { data: null };

    return {
      data,
      title: query.slug || title,
      query,
      options,
    };
  }

  render() {
    return (
      <React.Fragment>
        <nav />
        <View { ...this.props } />
        <footer />
      </React.Fragment>
    );
  }
};
