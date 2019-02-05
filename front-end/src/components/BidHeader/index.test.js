import React from 'react';
import renderer from 'react-test-renderer';
import BidHeader from './index';

const journey = {
  key: 'test',
  flight: 'test',
  departure: 'test',
  departureDate: 'test',
  arrival: 'test',
  arrivalDate: 'test',
};

test('renders correctly', () => {
  const component = renderer.create(<BidHeader
    journey={journey}
  />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
