import React from 'react';
import { shallow } from 'enzyme';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Passengers from '../Passengers';
import Passenger from '../Passenger';

const passengers = [
  {
    firstName: 'Test',
    lastName: 'Test',
    prefix: 'Mr',
    gender: 'Male',
    type: 'Adult',
  },
  {
    firstName: 'Test',
    lastName: 'Test',
    prefix: 'Mrs',
    gender: 'Female',
    type: 'Adult',
  },
];

describe('Passengers component', () => {
  it('renders a Typography component', () => {
    const wrapper = shallow(<Passengers passengers={passengers} />);
    expect(wrapper.find(Typography).exists()).toBeTruthy();
  });

  it('renders a List component', () => {
    const wrapper = shallow(<Passengers passengers={passengers} />);
    expect(wrapper.find(List).exists()).toBeTruthy();
  });

  it('renders a couple of Passenger components', () => {
    const wrapper = shallow(<Passengers passengers={passengers} />);
    expect(wrapper.find(Passenger).length).toBeGreaterThanOrEqual(passengers.length);
  });
});
