import React from 'react';
import PropTypes from 'prop-types';

import { Img } from './styles';
import ImageLoader from '../../containers/ImageLoader';

const Image = ({
  src,
  absolute,
  alt,
  fill,
  onLoad,
  style,
}) => (
  <ImageLoader src={ src }>
    { source => (
      <Img
        onLoad={ onLoad }
        src={ source }
        alt={ alt }
        loaded={ source }
        absolute={ absolute }
        fill={ fill }
        style={ style }
      />
    ) }
  </ImageLoader>
);

Image.defaultProps = {
  aspectRatio: 55.5,
  framed: false,
  absolute: false,
  alt: null,
  onLoad: null,
  fill: false,
  style: null,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  aspectRatio: PropTypes.number,
  framed: PropTypes.bool,
  absolute: PropTypes.bool,
  fill: PropTypes.bool,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
  style: PropTypes.object, // eslint-disable-line
};

export default Image;
