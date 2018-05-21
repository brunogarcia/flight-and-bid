import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PlaneIcon from '@material-ui/icons/FlightTakeoff';
import Types from '../utils/types';
import Meal from './Meal';
import './Bid.css';

const Bid = (props) => {
  const { journey, meals } = props;

  const {
    departure,
    arrival,
    departureDate,
    arrivalDate,
  } = journey;

  const hourFormat = {
    hour: 'numeric',
    minute: 'numeric',
  };

  const dateFormat = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  const departureHourNormalized = new Date(departureDate)
    .toLocaleString('en-us', hourFormat);

  const arrivalHourNormalized = new Date(arrivalDate)
    .toLocaleString('en-us', hourFormat);

  const departureDateNormalized = new Date(departureDate)
    .toLocaleString('en-us', dateFormat);

  const arrivalDateNormalized = new Date(arrivalDate)
    .toLocaleString('en-us', dateFormat);

  return (
    <Card className="Bid-main">
      <CardContent>
        <div className="Bid-flights">
          <div className="Bid-flight">
            <Typography variant="headline">
              {departure} <small>{departureHourNormalized}</small>
            </Typography>
            <Typography component="p">
              {departureDateNormalized}
            </Typography>
          </div>

          <div className="Bid-flight Bid-flight-icon">
            <PlaneIcon />
          </div>

          <div className="Bid-flight">
            <Typography variant="headline">
              {arrival} <small>{arrivalHourNormalized}</small>
            </Typography>
            <Typography component="p">
              {arrivalDateNormalized}
            </Typography>
          </div>
        </div>

        <Grid container spacing={24}>
          {meals.map(meal => <Meal key={meal.mealId} meal={meal} />)}
        </Grid>
      </CardContent>
    </Card>
  );
};

Bid.propTypes = {
  journey: Types.journey.isRequired,
  meals: PropTypes.arrayOf(Types.meal).isRequired,
};


export default Bid;
