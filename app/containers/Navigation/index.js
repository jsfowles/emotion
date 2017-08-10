import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { searchOpen: false };
  }

  toggleSearch = () => this.setState(cs => ({ searchOpen: !cs.searchOpen }));

  render() {
    return this.props.children(this.state.searchOpen, this.toggleSearch);
  }
}
