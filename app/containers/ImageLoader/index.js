/* global Image */
import React from 'react';
import PropTypes from 'prop-types';

export default class ImageLoader extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      src: null,
    };
  }

  componentDidMount() {
    if (!this.state.src) {
      this.setSrc();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.src !== this.props.src) {
      this.setSrc();
    }

    if (prevState.src !== this.state.src) {
      this.tmpImg.remove();
    }
  }

  setSrc = () => {
    const { src } = this.props;
    this.tmpImg = new Image();

    this.tmpImg.src = src;

    this.tmpImg.onload = () => this.setState(() => ({ src }));
    this.tmpImg.onerror = () => this.setState(() => ({ src: null }));
  }

  render() {
    return this.props.children(this.state.src);
  }
}
