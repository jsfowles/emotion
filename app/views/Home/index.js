import React from 'react';
import glamorous from 'glamorous';

import MarkdownRenderer from '@components/MarkdownRenderer';
import { Main } from '@identity/wrappers';
import README from '../../../README.md';

export default () => (
  <Main spacing={{ padding: 'vertical-lg' }}>
    <MarkdownRenderer source={ README } />
  </Main>
);
