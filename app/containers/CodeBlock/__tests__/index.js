import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CodeBlock from '@containers/CodeBlock';

const defaultProps = {
  value: `
  console.log("hello world");
  `,
  language: 'js',
};

const generateComponent = (additionalProps = {}) => {
  const newProps = {
    ...defaultProps,
    ...additionalProps,
  };

  return <CodeBlock { ...newProps } />;
};

describe('CodeBlock', () => {
  it('renders props', () => {
    const wrapper = mount(generateComponent());
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
