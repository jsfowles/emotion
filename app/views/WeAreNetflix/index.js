import React from 'react';

import { Main, HeroText } from './styles';
import Hero from '../../components/Hero';
import Input from '../../components/Input';

const WeAreNetflix = () => (
  <Main>
    <Hero imageUrl="/static/images/home-hero.jpg">
      <HeroText spacing={{ margin: 'bottom-lg' }} measure="large">A Great Workplace Combines Stunning Colleagues and Hard Problems.</HeroText>
      <Input placeholder="Search Jobs" />
    </Hero>
  </Main>
);

export default WeAreNetflix;
