import React, { Fragment } from 'react';
import Types from '../utils/types';

const Passenger = (props) => {
  const { passenger } = props;
  return (
    <Fragment>
      <p>{passenger.firstName}</p>
    </Fragment>
  );
};

Passenger.propTypes = {
  passenger: Types.passenger.isRequired,
};

export default Passenger;
