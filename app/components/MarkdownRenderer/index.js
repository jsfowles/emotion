import React from 'react';
import ReactMarkdown from 'react-markdown';

import TypeScale from '@identity/type';

const Headers = ({ level, children }) => {
  const levels = {
    1: <TypeScale.H1>{ children }</TypeScale.H1>,
    2: <TypeScale.H2>{ children }</TypeScale.H2>,
    3: <TypeScale.H3>{ children }</TypeScale.H3>,
    4: <TypeScale.H4>{ children }</TypeScale.H4>,
    5: <TypeScale.H5>{ children }</TypeScale.H5>,
    6: <TypeScale.H6>{ children }</TypeScale.H6>,
  };

  return levels[level] || levels['1'];
};

export default ({ source }) => (
  <ReactMarkdown
    source={ source }
    renderers={{
      heading: Headers,
      paragraph: ({ children }) => <TypeScale.P>{ children }</TypeScale.P>,
    }}
  />
);

