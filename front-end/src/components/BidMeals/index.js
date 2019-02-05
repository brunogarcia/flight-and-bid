import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Types from '../../utils/types';

class BidMeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });

    this.props.onSelectMeal(event.target.value);
  }

  renderFormControlLabels() {
    const { meals } = this.props;

    return meals.map((meal) => {
      const { mealId, desc } = meal;
      return <FormControlLabel key={mealId} value={mealId} control={<Radio />} label={desc} />;
    });
  }

  render() {
    const { idx } = this.props;

    return (
      <FormControl component="fieldset">
        <FormLabel required component="legend">Please, select a meal</FormLabel>
        <RadioGroup
          name={`meal${idx}`}
          aria-label="meal"
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.renderFormControlLabels()}
        </RadioGroup>
      </FormControl>
    );
  }
}

BidMeals.propTypes = {
  idx: PropTypes.number.isRequired,
  meals: PropTypes.arrayOf(Types.meal).isRequired,
  onSelectMeal: PropTypes.func.isRequired,
};

export default BidMeals;
