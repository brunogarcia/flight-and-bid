import React from 'react';
import PropTypes from 'prop-types';
import Types from '../utils/types';
import Journey from '../components/Journey';

const JourneyList = (props) => {
  const { journeys, meals } = props;
  return journeys.map(journey => <Journey key={journey.key} journey={journey} meals={meals} />);
};

JourneyList.propTypes = {
  journeys: PropTypes.arrayOf(Types.journey).isRequired,
  meals: PropTypes.arrayOf(Types.meal).isRequired,
};


export default JourneyList;
