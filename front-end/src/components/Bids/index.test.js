import React from 'react';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';
import Passengers from '../Passengers';
import Flights from '../Flights';
import Bids from '../Bids';

const props = {
  booking: {
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
  },
  meals: [
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
  ],
};

describe('Bids component', () => {
  it('renders a Grid component', () => {
    const wrapper = shallow(<Bids booking={props.booking} meals={props.meals} />);
    expect(wrapper.find(Grid).exists()).toBeTruthy();
  });

  it('renders a PassengerList component', () => {
    const wrapper = shallow(<Bids booking={props.booking} meals={props.meals} />);
    expect(wrapper.find(Passengers).exists()).toBeTruthy();
  });

  it('renders a Flights component', () => {
    const wrapper = shallow(<Bids booking={props.booking} meals={props.meals} />);
    expect(wrapper.find(Flights).exists()).toBeTruthy();
  });
});
