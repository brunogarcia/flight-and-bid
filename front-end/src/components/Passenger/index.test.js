import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Passenger from './index';

const passenger = {
  firstName: 'Burt',
  lastName: 'Reynolds',
  prefix: 'Mr',
  gender: 'Male',
  type: 'Adult',
};

describe('Passenger component', () => {
  it('renders a ListItem component', () => {
    const wrapper = shallow(<Passenger passenger={passenger} />);
    expect(wrapper.find(ListItem).exists()).toBeTruthy();
  });

  it('renders a Avatar component', () => {
    const wrapper = shallow(<Passenger passenger={passenger} />);
    expect(wrapper.find(Avatar).exists()).toBeTruthy();
  });

  it('renders a ListItemText component', () => {
    const wrapper = shallow(<Passenger passenger={passenger} />);
    expect(wrapper.find(ListItemText).exists()).toBeTruthy();
  });
});
