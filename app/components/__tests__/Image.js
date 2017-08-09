import React from 'react';
import renderer from 'react-test-renderer';

import Image from '../Image';

describe('Image', () => {
  test('renders', () => {
    const tree = renderer.create(<Image src="http://via.placeholder.com/350x150" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
