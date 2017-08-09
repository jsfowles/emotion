import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../Layout';

describe('Layout', () => {
  test('renders the child wrapped in the layout', () => {
    const tree = renderer.create(<Layout><div /></Layout>);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
