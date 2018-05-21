import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Types from '../utils/types';
import Meal from './Meal';

const Journey = (props) => {
  const { journey, meals } = props;
  return (
    <Fragment>
      <h2>{journey.key}</h2>
      {meals.map(meal => <Meal key={meal.mealId} meal={meal} />)}
    </Fragment>
  );
};

Journey.propTypes = {
  journey: Types.journey.isRequired,
  meals: PropTypes.arrayOf(Types.meal).isRequired,
};


export default Journey;
