import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './index';

test('renders correctly', () => {
  const component = renderer.create(<Loading />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
