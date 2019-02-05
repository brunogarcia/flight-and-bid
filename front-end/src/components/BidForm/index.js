import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import GavelIcon from '@material-ui/icons/Gavel';
import NumericInput from 'react-numeric-input';
import Types from '../../utils/types';

const MAX_SIZE_BID_INPUT = 3;

const numericInputStyle = {
  wrap: {
    marginLeft: '2.7em',
    padding: '2px 2.26ex 2px 2px',
    fontSize: 20,
  },
  input: {
    borderRadius: '4px 2px 2px 4px',
    padding: '0.1ex 1ex',
    border: '1px solid #ccc',
    marginRight: 4,
    display: 'block',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
  },
};

class BidForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };

    this.handleChangeAmount = this.handleChangeAmount.bind(this);
  }

  handleChangeAmount(amount) {
    this.setState({ amount });
    this.props.onChangeAmount(amount);
  }

  renderAdvice(min) {
    let message = 'Good bid!';
    const isAmountLowerThanMinimun = (this.state.amount <= min);

    if (isAmountLowerThanMinimun) {
      message = `Advice: with a ${min}€ bid you really do not have too many chances to win.`;
    }

    return (
      <p className="Bid-advice">
        <small>{message}</small>
      </p>
    );
  }

  render() {
    const { amount } = this.state;
    const { mealId, meals } = this.props;

    if (mealId) {
      const priceRange = meals
        .filter(meal => meal.mealId === mealId)
        .reduce((acc, meal) => {
          const { min, max, jump } = meal.priceRange;
          return acc.concat(min, max, jump);
        }, []);
      const [min, max, jump] = priceRange;
      const textPrimary = `You have selected meal ${mealId}`;
      const textSecondary = `The bid must be between ${min}€ and ${max}€. Also, each step is ${jump}€`;

      return (
        <div className="Bid-action" >
          <ListItem>
            <Avatar>
              <GavelIcon />
            </Avatar>
            <ListItemText
              primary={textPrimary}
              secondary={textSecondary}
            />
          </ListItem>

          <NumericInput
            min={min}
            max={max}
            value={amount}
            style={numericInputStyle}
            size={MAX_SIZE_BID_INPUT}
            step={jump}
            onChange={this.handleChangeAmount}
          />

          {this.renderAdvice(min)}
        </div>
      );
    }

    return null;
  }
}

BidForm.propTypes = {
  mealId: PropTypes.string.isRequired,
  meals: PropTypes.arrayOf(Types.meal).isRequired,
  onChangeAmount: PropTypes.func.isRequired,
};


export default BidForm;
