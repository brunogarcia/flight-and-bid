import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import GavelIcon from '@material-ui/icons/Gavel';
import CardContent from '@material-ui/core/CardContent';
import NumericInput from 'react-numeric-input';
import BidHeader from './BidHeader';
import BidMeals from './BidMeals';
import Types from '../utils/types';
import './Bid.css';

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

class Bid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealId: '',
      amount: 0,
    };

    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleSelectMeal = this.handleSelectMeal.bind(this);
    this.handleSendData = this.handleSendData.bind(this);
  }

  handleSelectMeal(mealId) {
    this.setState(
      { mealId },
      () => this.handleSendData(),
    );
  }

  handleChangeAmount(amount) {
    this.setState(
      { amount },
      () => this.handleSendData(),
    );
  }

  handleSendData() {
    const { mealId } = this.state;
    const mealSelected = this.props.meals.filter(meal => meal.mealId === mealId);
    const { currency, priceRange } = mealSelected[0];
    const { min, max } = priceRange;

    this.props.onFinishProcess({
      idx: this.props.idx,
      journeyKey: this.props.journey.key,
      mealId: this.state.mealId,
      amount: this.state.amount,
      min,
      max,
      currency,
    });
  }

  renderNumericInput() {
    const { mealId } = this.state;

    if (mealId) {
      const mealSelected = this.props.meals.filter(meal => meal.mealId === mealId);
      const { min, max, jump } = mealSelected[0].priceRange;
      const textPrimary = `You have selected meal ${mealId}`;
      const textSecondary = `The bid must be between ${min}€ and ${max}€. Also, each step is ${jump}€`;
      const adviceMessage = `Advice: with a ${min}€ bid you really do not have too many chances to win.`;
      const advice = this.state.amount <= min ? adviceMessage : '';

      return (
        <div className="Bid-action" >
          <ListItem>
            <Avatar>
              <GavelIcon />
            </Avatar>
            <ListItemText primary={textPrimary} secondary={textSecondary} />
          </ListItem>

          <NumericInput
            min={min}
            max={max}
            value={this.state.amount}
            style={numericInputStyle}
            size={MAX_SIZE_BID_INPUT}
            step={jump}
            onChange={this.handleChangeAmount}
          />

          <p className="Bid-advice">
            <small>{advice}</small>
          </p>
        </div>
      );
    }

    return null;
  }

  render() {
    const { idx, journey, meals } = this.props;

    return (
      <Card className="Bid-main">
        <CardContent>
          <BidHeader data={journey} />
          <BidMeals idx={idx} data={meals} onSelectMeal={this.handleSelectMeal} />
          {this.renderNumericInput()}
        </CardContent>
      </Card>
    );
  }
}

Bid.propTypes = {
  idx: PropTypes.number.isRequired,
  journey: Types.journey.isRequired,
  meals: PropTypes.arrayOf(Types.meal).isRequired,
  onFinishProcess: PropTypes.func.isRequired,
};


export default Bid;
