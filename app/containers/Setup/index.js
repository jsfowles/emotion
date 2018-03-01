import React from 'react';

export default ({ View, title, options }) =>
  class extends React.Component {
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
