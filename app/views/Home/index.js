import React from 'react';
import glamorous from 'glamorous';

import MarkdownRenderer from '@components/MarkdownRenderer';
import README from '../../../README.md';

export default () => (
  <main>
    <MarkdownRenderer source={ README } />
  </main>
);
