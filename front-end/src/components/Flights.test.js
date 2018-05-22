import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import Bid from './Bid';
import Flights from './Flights';

const props = {
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
  history: {
    push: () => {},
  },
};

describe('Flights component', () => {
  it('renders a Button component', () => {
    const wrapper = shallow(<Flights.WrappedComponent journeys={props.journeys} meals={props.meals} history={props.history} />);
    expect(wrapper.find(Button).exists()).toBeTruthy();
  });

  it('renders a Bid component', () => {
    const wrapper = shallow(<Flights.WrappedComponent journeys={props.journeys} meals={props.meals} history={props.history} />);
    expect(wrapper.find(Bid).exists()).toBeTruthy();
  });
});
