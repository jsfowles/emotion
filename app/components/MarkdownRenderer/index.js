import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Ul,
  Li,
  Strong,
  Hr,
  TextWrapper,
} from './styles';

import CodeBlock from '@containers/CodeBlock';

const Headers = ({ level, children }) => {
  const levels = {
    1: <H1>{ children }</H1>,
    2: <H2>{ children }</H2>,
    3: <H3>{ children }</H3>,
    4: <H4>{ children }</H4>,
    5: <H5>{ children }</H5>,
    6: <H6>{ children }</H6>,
  };

  return levels[level] || levels['1'];
};

export default ({ source }) => (
  <TextWrapper>
    <ReactMarkdown
      source={ source }
      renderers={{
        heading: Headers,
        paragraph: ({ children }) => <P>{ children }</P>,
        link: ({ href, children }) => <a href={ href }>{ children }</a>,
        list: ({ ordered, children}) => <Ul>{ children }</Ul>,
        listItem: ({ children }) => <Li>{ children }</Li>,
        thematicBreak: () => <Hr />,
        strong: ({ children }) => <Strong>{ children }</Strong>,
        code: CodeBlock,
      }}
    />
  </TextWrapper>
);

