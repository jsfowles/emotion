import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TextLink from '@components/TextLink';

const defaultProps = {
  href: 'https://underbelly.is',
  text: 'Underbelly',
  internal: false,
};

const generateComponent = (additionalProps = {}) => {
  const newProps = {
    ...defaultProps,
    ...additionalProps,
  };
  return <TextLink { ...newProps } />;
};

describe('TextLink', () => {
  it('renders with props', () => {
    const wrapper = shallow(generateComponent());
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders with default props', () => {
    const wrapper = shallow(<TextLink />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
