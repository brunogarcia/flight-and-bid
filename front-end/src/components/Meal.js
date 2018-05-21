import React, { Fragment } from 'react';
import Types from '../utils/types';

const Meal = (props) => {
  const { meal } = props;
  return (
    <Fragment>
      <p>{meal.mealId}</p>
    </Fragment>
  );
};

Meal.propTypes = {
  meal: Types.meal.isRequired,
};


export default Meal;
