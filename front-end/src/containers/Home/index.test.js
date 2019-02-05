import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Bids from '../../components/Bids';

const booking = {
  passengers: [
    {
      firstName: 'Burt',
      lastName: 'Reynolds',
      prefix: 'Mr',
      gender: 'Male',
      type: 'Adult',
    },
  ],
  journeys: [
    {
      key: 'TST12 BCN-LAX 30/08/2014 08:35',
      flight: 'TST 12',
      departure: 'BCN',
      departureDate: '2014-08-30T08:35:00.000+08:00',
      arrival: 'LAX',
      arrivalDate: '2014-08-30T19:45:00.000+08:00',
    },
  ],
};

const meals = [
  {
    mealId: 'ML01',
    desc: 'Snacks & Soda',
    priceRange: {
      min: 0,
      max: 20,
      jump: 5,
    },
    currency: 'EUR',
  },
];

describe('Home component', () => {
  it('renders differently with default state', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Loading).exists()).toBeTruthy();
  });

  it('renders differently with some error', () => {
    const wrapper = shallow(<Home />);

    wrapper.setState({
      loading: false,
      error: true,
      booking: {},
      meals: {},
    });

    expect(wrapper.find(Error).exists()).toBeTruthy();
  });

  it('renders differently with bids', () => {
    const wrapper = shallow(<Home />);

    wrapper.setState({
      loading: false,
      error: false,
      booking,
      meals,
    });

    expect(wrapper.find(Bids).exists()).toBeTruthy();
  });

  it('should call getBids when the component did mount', () => {
    const getBidsMocked = jest.spyOn(Home.prototype, 'getBids');

    shallow(<Home />);

    expect(getBidsMocked).toHaveBeenCalledTimes(1);

    getBidsMocked.mockClear();
  });
});
