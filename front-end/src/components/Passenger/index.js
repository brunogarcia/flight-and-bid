import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import ChilIcon from '@material-ui/icons/ChildCare';
import Types from '../../utils/types';
import constants from '../../utils/constants';

const { ADULT } = constants.PASSENGER;

const Passenger = (props) => {
  const { firstName, lastName, type } = props.passenger;
  const name = `${firstName} ${lastName}`;

  return (
    <ListItem>
      <Avatar>
        {type === ADULT ? <PersonIcon /> : <ChilIcon />}
      </Avatar>
      <ListItemText primary={name} secondary={type} />
    </ListItem>
  );
};

Passenger.propTypes = {
  passenger: Types.passenger.isRequired,
};

export default Passenger;
