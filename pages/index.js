import React from 'react';

import { H1 } from '../app/identity/type';
import { TextWrapper, Main, Section } from '../app/identity/wrappers';

export default () => (
  <Main spacing={{ padding: 'vertical-xl' }}>
    <Section>
      <TextWrapper>
        <H1 spacing={{ margin: 'bottom-lg' }}>We are Netflix</H1>
      </TextWrapper>
    </Section>
  </Main>
);
