import React from 'react';

import { Main } from '@identity/wrappers';
import { Div, Emotion } from './styles';

const Home = () => (
  <Main spacing={{ padding: 'vertical-lg' }}>
    <Div>Hello World</Div>
    <Emotion color={'#DA70D6'}>Hello World</Emotion>
  </Main>
);

export default Home;
