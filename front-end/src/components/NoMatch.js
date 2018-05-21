import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const NoMatch = ({ location }) => (
  <Fragment>
      No match for <em>{location.pathname}</em>
  </Fragment>
);

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoMatch;
