import React from 'react';
import { shallow } from 'enzyme';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import BidMeals from './index';

const props = {
  idx: 1,
  data: [
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
  onSelectMeal: () => {},
};

describe('BidMeals component', () => {
  it('renders a FormControl component', () => {
    const wrapper = shallow(<BidMeals
      idx={props.idx}
      meals={props.data}
      onSelectMeal={props.onSelectMeal}
    />);
    expect(wrapper.find(FormControl).exists()).toBeTruthy();
  });

  it('renders a FormLabel component', () => {
    const wrapper = shallow(<BidMeals
      idx={props.idx}
      meals={props.data}
      onSelectMeal={props.onSelectMeal}
    />);
    expect(wrapper.find(FormLabel).exists()).toBeTruthy();
  });

  it('renders a RadioGroup component', () => {
    const wrapper = shallow(<BidMeals
      idx={props.idx}
      meals={props.data}
      onSelectMeal={props.onSelectMeal}
    />);
    expect(wrapper.find(RadioGroup).exists()).toBeTruthy();
  });

  it('renders a couple of FormControlLabel components', () => {
    const wrapper = shallow(<BidMeals
      idx={props.idx}
      meals={props.data}
      onSelectMeal={props.onSelectMeal}
    />);
    expect(wrapper.find(FormControlLabel).length).toBeGreaterThanOrEqual(props.data.length);
  });
});
