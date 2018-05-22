import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Selection = (props) => {
  const { location } = props;

  if (location.state) {
    return (
      <Fragment>
        <pre>{JSON.stringify(location.state.selection, null, 2) }</pre>
      </Fragment>
    );
  }

  return 'There is not information to show!';
};

Selection.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      selection: PropTypes.array.isRequired,
    }),
  }).isRequired,
};


export default Selection;
