import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Types from '../utils/types';
import PassengerList from '../components/PassengerList';
import Flights from '../components/Flights';

const Bids = (props) => {
  const { booking, meals } = props;

  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={3} lg={3} xl={2}>
          <PassengerList passengers={booking.passengers} />
        </Grid>

        <Grid item xs={12} md={9} lg={9} xl={10}>
          <Flights journeys={booking.journeys} meals={meals} />
        </Grid>
      </Grid>
    </div>
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
