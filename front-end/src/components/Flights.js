import React, { Fragment, Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import PropTypes from 'prop-types';
import Types from '../utils/types';
import Bid from './Bid';
import './Flights.css';

class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journeys: {},
    };

    this.handleFinishProcess = this.handleFinishProcess.bind(this);
  }

  handleFinishProcess(data) {
    const journey = {
      [`journey${data.idx}`]: {
        journeyKey: data.journeyKey,
        mealId: data.mealId,
        amount: data.amount,
        min: data.min,
        max: data.max,
        currency: data.currency,
      },
    };

    this.setState(prevState => ({
      journeys: Object.assign(prevState.journeys, journey),
    }));
  }

  isProcessComplete() {
    const journeys = Object.values(this.state.journeys);
    const count = journeys.filter((journey) => {
      const {
        mealId,
        amount,
        min,
        max,
      } = journey;

      return mealId !== '' &&
             amount >= min &&
             amount <= max;
    });

    return count.length === this.props.journeys.length;
  }

  renderBids(journeys, meals) {
    return journeys.map((journey, idx) => {
      return (
        <Bid
          idx={idx}
          key={journey.key}
          meals={meals}
          journey={journey}
          onFinishProcess={this.handleFinishProcess}
        />
      );
    });
  }

  renderCallToAction() {
    return (
      <div className="Flights-action">
        <Button
          size="large"
          color="primary"
          variant="raised"
          disabled={!this.isProcessComplete()}
        >
          Save &nbsp; <SaveIcon />
        </Button>
      </div>
    );
  }

  render() {
    const { journeys, meals } = this.props;
    return (
      <Fragment>

        <Typography variant="title" gutterBottom>
          Flights
        </Typography>

        <Typography variant="subheading" component="p">
          Here you can select one meal for each flight and then propose a proper bid.
          <br />
          Good luck! &#x1F91E;
        </Typography>

        {this.renderBids(journeys, meals)}

        {this.renderCallToAction()}
      </Fragment>
    );
  }
}

Flights.propTypes = {
  journeys: PropTypes.arrayOf(Types.journey).isRequired,
  meals: PropTypes.arrayOf(Types.meal).isRequired,
};


export default Flights;
