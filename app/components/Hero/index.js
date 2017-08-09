import React from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  Hero,
  HeroContent,
} from './styles';

import Shadow from '../Shadow';
import Image from '../Image';

const HomeHero = ({ title }) => (
  <Hero>
    <HeroContent>
      <Title measure="large">{ title }</Title>
    </HeroContent>

    <Image src="/static/images/home-hero.jpg" absolute />
    <Shadow />
  </Hero>
);

HomeHero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomeHero;
