import React from 'react';
import PropTypes from 'prop-types';

import { clamp, interpolate } from '../../lib/numbers';
import { optimizedEvent } from '../../lib/events';

export default class Parallax extends React.Component {
  static propTypes = {
    // We need to render children as a function so we can pass it our state as a prop.
    children: PropTypes.func.isRequired,

    // Do we want to go from 0-1 (default) or 1-0
    reverse: PropTypes.bool,

    // How much of the wrapping element do we want to run the parallax effect, default 1.
    durationMultiplier: PropTypes.number,

    // Do we want to start the parallax effect further down than at the top or bottom? default 0.
    offsetMultiplier: PropTypes.number,

    // Do we start at the bottom or the top of the wrapping element?
    startTop: PropTypes.bool,
  };

  static defaultProps = {
    reverse: false,
    startTop: false,
    durationMultiplier: 1,
    offsetMultiplier: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      wrapperHeight: 0,
    };
  }

  componentDidMount() {
    this.startingOffset = this.elem.offsetTop;

    this.onScroll();

    this.scrollEvent = optimizedEvent('scroll');
    this.scrollEvent.add(this.onScroll);
  }

  componentWillUnmount() {
    this.scrollEvent.remove(this.onScroll);
  }

  onScroll = () => {
    const { reverse } = this.props;

    // Get time off state, name it prevState because we are going to update it
    const { time: prevTime } = this.state;

    // Lets calculate the new time, and make sure it is between 0 and 1 (0%-100%)
    const newTime = clamp(this.calculateFrame(), 0, 1);

    // We do not want to call set state when it is out of the bounds of the scroll target. This
    // would be a performance issue.
    if (prevTime !== newTime) {
      // We can reverse the time, this is because sometimes you might need to go from an amount
      // to 0. i.e if you want to go from translateX(200px) - translateX(0)
      const time = reverse ? interpolate(1, 0, newTime) : newTime;

      // set the state with all the cool stuff we just did.
      this.setState(() => ({
        time,
        wrapperHeight: this.elem.clientHeight,
      }));
    }
  }

  calculateFrame = () => {
    // Make sure element is there before we start calculating the time (percentage scrolled)
    if (this.elem) {
      const { durationMultiplier, startTop, offsetMultiplier } = this.props;

      // Either do pageYoffset if its available or do scroll top. This is the distance in pixels
      // it would take to scroll to the top of the document.
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Offset is how tall the wrapping element is * the offsetMultiplier. The wrapping element
      // is measured in pixels, the offsetMultiplier is a float i.e 0.7 for 70% of the wrapping
      // elements height. This is used so that you can start the parallax with an offset.
      const offset = this.elem.clientHeight * offsetMultiplier;

      // Sometimes we want to start the parallax as it is coming into the view, sometimes we want
      // to start it when it hits the top of the view. `startTop` will start the animation when
      // it is at the top of the view. This is default to run when it is at the bottom.
      const st = startTop ? 0 - offset : window.innerHeight - offset;

      // Gets the scroll position based on where we are starting the animation (top vs bottom). We
      // multiply it by a -1 so that it stays between the wrapping element.
      const scrollPosition = (this.startingOffset - (scrollTop + st)) * -1;

      // Return a percentage of the scroll position based on the wrapping element in pixels. This
      // also multiplies it by the duration multiplier so that we can run the parallax as a
      // percentage of the client height. i.e 200 would run the parallax duration over 200% of the
      // elements height.
      return scrollPosition / (this.elem.clientHeight * durationMultiplier);
    }

    return 0;
  }

  render() {
    return (
      <div ref={ (e) => { this.elem = e; } }>
        { this.props.children(this.state) }
      </div>
    );
  }
}
