import React from 'react';
import renderer from 'react-test-renderer';

import Hero from '../Hero';

describe('Hero', () => {
  test('renders without children', () => {
    const tree = renderer.create(<Hero imageUrl="http://via.placeholder.com/350x150" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders with children', () => {
    const tree = renderer.create(
      <Hero imageUrl="http://via.placeholder.com/350x150">
        <h1>Test</h1>
      </Hero>,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
