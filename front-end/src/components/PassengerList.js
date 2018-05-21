import React from 'react';
import randomID from 'random-id';
import PropTypes from 'prop-types';
import Types from '../utils/types';
import Passenger from './Passenger';

const PassengerList = (props) => {
  const { passengers } = props;
  return passengers.map(passenger => <Passenger key={randomID()} passenger={passenger} />);
};

PassengerList.propTypes = {
  passengers: PropTypes.arrayOf(Types.passenger).isRequired,
};

export default PassengerList;
