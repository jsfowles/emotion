import React from 'react';
import PropTypes from 'prop-types';

import {
  HeroWrapper,
  HeroContent,
} from './styles';

import Shadow from '../Shadow';
import Image from '../Image';

const Hero = ({ children, imageUrl }) => (
  <HeroWrapper>
    { children && <HeroContent>
      { children }
    </HeroContent> }

    <Image src={ imageUrl } absolute />
    <Shadow />
  </HeroWrapper>
);

Hero.defaultProps = {
  children: null,
};

Hero.propTypes = {
  children: PropTypes.element,
  imageUrl: PropTypes.string.isRequired,
};

export default Hero;
