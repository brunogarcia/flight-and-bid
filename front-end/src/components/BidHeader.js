import React from 'react';
import Typography from '@material-ui/core/Typography';
import PlaneIcon from '@material-ui/icons/Flight';
import Types from '../utils/types';
import './BidHeader.css';

const BidHeader = ({ journey }) => {
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
    <div className="BidHeader-flights">
      <div className="BidHeader-flight">
        <Typography variant="headline">
          {departure} <small>{departureHourNormalized}</small>
        </Typography>
        <Typography component="p">
          {departureDateNormalized}
        </Typography>
      </div>

      <div className="BidHeader-flight BidHeader-flight-icon">
        <PlaneIcon />
      </div>

      <div className="BidHeader-flight">
        <Typography variant="headline">
          {arrival} <small>{arrivalHourNormalized}</small>
        </Typography>
        <Typography component="p">
          {arrivalDateNormalized}
        </Typography>
      </div>
    </div>
  );
};

BidHeader.propTypes = {
  journey: Types.journey.isRequired,
};


export default BidHeader;

