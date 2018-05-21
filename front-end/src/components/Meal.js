import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Types from '../utils/types';
import './Meal.css';

const MAX_SIZE_BID_INPUT = 3;

class Meal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ active: event.target.checked });
  }

  render() {
    const {
      mealId,
      desc,
      priceRange,
      currency,
    } = this.props.meal;

    const { min, max } = priceRange;

    const mainStyle = this.state.active ? 'Meal-main Meal-card-selected' : 'Meal-main';

    return (
      <Grid item xs={12} md={6} lg={6} xl={3}>
        <Card className={mainStyle}>
          <CardMedia
            image="food1.jpg"
            title="Contemplative Reptile"
            className="Meal-image"
          />

          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {mealId}
            </Typography>
            <Typography variant="subheading" component="p">
              {desc}
              <br /><br />
            </Typography>
            <Typography component="p">
              &bull; Min {min} {currency}
              <br />
              &bull; Max {max} {currency}
            </Typography>
          </CardContent>

          <CardActions className="Meal-actions">
            <Switch
              value={mealId}
              checked={this.state.active}
              onChange={this.handleChange}
            />
            <div className="Meal-input">
              <NumericInput
                min={min}
                max={max}
                value={min}
                size={MAX_SIZE_BID_INPUT}
                disabled={!this.state.active}
              />
            </div>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

Meal.propTypes = {
  meal: Types.meal.isRequired,
};


export default Meal;
