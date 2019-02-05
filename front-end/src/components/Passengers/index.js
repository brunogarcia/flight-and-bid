import React, { Fragment } from 'react';
import randomID from 'random-id';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Types from '../../utils/types';
import Passenger from '../Passenger';

const Passengers = (props) => {
  const { passengers } = props;
  return (
    <Fragment>
      <Typography variant="title" gutterBottom>
        Passengers
      </Typography>
      <List>
        {passengers.map(passenger => <Passenger key={randomID()} passenger={passenger} />)}
      </List>
    </Fragment>
  );
};

Passengers.propTypes = {
  passengers: PropTypes.arrayOf(Types.passenger).isRequired,
};

export default Passengers;
