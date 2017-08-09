import React from 'react';
import renderer from 'react-test-renderer';

import Hero from '../Hero';

describe('Hero', () => {
  test('renders', () => {
    const tree = renderer.create(<Hero title="test" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
