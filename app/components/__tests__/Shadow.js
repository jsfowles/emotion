import React from 'react';
import renderer from 'react-test-renderer';

import Shadow from '../Shadow';

describe('Shadow', () => {
  test('renders', () => {
    const tree = renderer.create(<Shadow />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
