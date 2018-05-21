import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types';
import Types from '../utils/types';
import Bid from '../components/Bid';

const Flights = (props) => {
  const { journeys, meals } = props;
  return (
    <Fragment>

      <Typography variant="title" gutterBottom>
        Flights
      </Typography>

      <Typography variant="subheading" component="p">
        Please select one meal for each flight and then propose a proper bid.
        <br />
        Good luck!
      </Typography>

      {journeys.map(journey => <Bid key={journey.key} journey={journey} meals={meals} />)}

      <Button variant="raised" size="large" color="primary">
        Send &nbsp; <SendIcon />
      </Button>
    </Fragment>
  );
};

Flights.propTypes = {
  journeys: PropTypes.arrayOf(Types.journey).isRequired,
  meals: PropTypes.arrayOf(Types.meal).isRequired,
};


export default Flights;