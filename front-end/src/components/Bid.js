import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BidHeader from './BidHeader';
import BidMeals from './BidMeals';
import BidForm from './BidForm';
import Types from '../utils/types';
import './Bid.css';

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

  render() {
    const { mealId } = this.state;
    const { idx, journey, meals } = this.props;

    return (
      <Card className="Bid-main">
        <CardContent>
          <BidHeader
            journey={journey}
          />
          <BidMeals
            idx={idx}
            meals={meals}
            onSelectMeal={this.handleSelectMeal}
          />
          <BidForm
            meals={meals}
            mealId={mealId}
            onChangeAmount={this.handleChangeAmount}
          />
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
