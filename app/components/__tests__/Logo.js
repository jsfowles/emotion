import React from 'react';
import renderer from 'react-test-renderer';

import Logo from '../Logo';

describe('Logo', () => {
  test('renders', () => {
    const tree = renderer.create(<Logo title="test" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
