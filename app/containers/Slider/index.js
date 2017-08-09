import React from 'react';
import PropTypes from 'prop-types';

class Slider extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    startsAt: PropTypes.string,
  };

  static defaultProps = {
    startsAt: 0,
  };

  constructor(props) {
    super(props);

    this.state = { index: this.props.startsAt };
  }

  moveSlider = index => this.setState(() => ({ index }));

  render() {
    return this.props.children(this.state.index, this.moveSlider);
  }
}

export default Slider;
