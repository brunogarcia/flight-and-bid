import { shape, number, string } from 'prop-types';

const passenger = shape({
  firstName: string.isRequired,
  lastName: string.isRequired,
  prefix: string.isRequired,
  gender: string.isRequired,
  type: string.isRequired,
});

const journey = shape({
  key: string.isRequired,
  flight: string.isRequired,
  departure: string.isRequired,
  departureDate: string.isRequired,
  arrival: string.isRequired,
  arrivalDate: string.isRequired,
});

const meal = shape({
  mealId: string.isRequired,
  desc: string.isRequired,
  priceRange: shape({
    min: number.isRequired,
    max: number.isRequired,
    jump: number.isRequired,
  }).isRequired,
  currency: string.isRequired,
});

export default { passenger, journey, meal };
