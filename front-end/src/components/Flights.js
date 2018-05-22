import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Bid from './Bid';
import Types from '../utils/types';
import constants from '../constants';
import './Flights.css';

const { PATH } = constants.APP;


class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journeys: {},
    };

    this.handleFinishProcess = this.handleFinishProcess.bind(this);
    this.handleSendForm = this.handleSendForm.bind(this);
  }

  createData() {
    const { journeys } = this.state;
    const values = Object.values(journeys);

    return values.map(value => ({
      journeyKey: value.journeyKey,
      amount: value.amount,
      currency: value.currency,
      mealId: value.mealId,
    }));
  }

  handleSendForm() {
    const data = this.createData();

    this.props.history.push({
      pathname: PATH.SELECTION,
      state: { selection: data },
    });
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
          onClick={this.handleSendForm}
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default withRouter(Flights);
