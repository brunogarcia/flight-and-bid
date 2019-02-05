import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import NumericInput from 'react-numeric-input';
import BidHeader from '../BidHeader';
import BidMeals from '../BidMeals';
import Bid from './index';

const props = {
  idx: 1,
  journey: {
    key: 'test',
    flight: 'test',
    departure: 'test',
    departureDate: 'test',
    arrival: 'test',
    arrivalDate: 'test',
  },
  meals: [
    {
      mealId: 'test',
      desc: 'test',
      priceRange: {
        min: 0,
        max: 100,
        jump: 5,
      },
      currency: 'test',
    },
    {
      mealId: 'test',
      desc: 'test',
      priceRange: {
        min: 0,
        max: 50,
        jump: 5,
      },
      currency: 'test',
    },
  ],
  onFinishProcess: () => {},
};

describe('Bid component', () => {
  it('renders a Card component', () => {
    const wrapper = shallow(<Bid
      idx={props.idx}
      meals={props.meals}
      journey={props.journey}
      onFinishProcess={props.onFinishProcess}
    />);
    expect(wrapper.find(Card).exists()).toBeTruthy();
  });

  it('renders a CardContent component', () => {
    const wrapper = shallow(<Bid
      idx={props.idx}
      meals={props.meals}
      journey={props.journey}
      onFinishProcess={props.onFinishProcess}
    />);
    expect(wrapper.find(CardContent).exists()).toBeTruthy();
  });

  it('renders a BidHeader component', () => {
    const wrapper = shallow(<Bid
      idx={props.idx}
      meals={props.meals}
      journey={props.journey}
      onFinishProcess={props.onFinishProcess}
    />);
    expect(wrapper.find(BidHeader).exists()).toBeTruthy();
  });

  it('renders a BidMeals component', () => {
    const wrapper = shallow(<Bid
      idx={props.idx}
      meals={props.meals}
      journey={props.journey}
      onFinishProcess={props.onFinishProcess}
    />);
    expect(wrapper.find(BidMeals).exists()).toBeTruthy();
  });
});
