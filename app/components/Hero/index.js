import React from 'react';

import {
  Title,
  Hero,
  HeroContent,
} from './styles';

import Shadow from '../Shadow';
import Image from '../Image';

export default ({ title }) => (
  <Hero>
    <HeroContent>
      <Title measure="large">{ title }</Title>
    </HeroContent>

    <Image src="/static/images/home-hero.jpg" absolute />
    <Shadow />
  </Hero>
);
