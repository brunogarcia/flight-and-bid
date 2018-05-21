import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Types from '../utils/types';
import PassengerList from '../components/PassengerList';
import BidList from '../components/BidList';

const Bids = (props) => {
  const { booking, meals } = props;

  return (
    <Fragment>
      <PassengerList passengers={booking.passengers} />
      <BidList journeys={booking.journeys} meals={meals} />
    </Fragment>
  );
};

Bids.propTypes = {
  booking: PropTypes.shape({
    passengers: PropTypes.arrayOf(Types.passenger).isRequired,
    journeys: PropTypes.arrayOf(Types.journey).isRequired,
  }).isRequired,
  meals: PropTypes.arrayOf(Types.meal).isRequired,
};

export default Bids;
