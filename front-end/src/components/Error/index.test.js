import React from 'react';
import renderer from 'react-test-renderer';
import Error from './index';

test('renders correctly', () => {
  const component = renderer.create(<Error />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
