import React from 'react';
import renderer from 'react-test-renderer';

import Navigation from '../Navigation';

describe('Navigation', () => {
  test('renders', () => {
    const tree = renderer.create(<Navigation />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
