import React, { Component } from 'react';
import api from '../api/';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Booking from '../components/Booking';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      booking: {},
      meals: {},
    };
  }

  componentDidMount() {
    this.isAlreadyMounted = true;
    this.getBids();
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  getBids() {
    api.getBids()
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            loading: false,
            booking: Object.assign({}, data.booking),
            meals: data.options.slice(),
          });
        }
      }).catch(() => {
        if (this.isAlreadyMounted) {
          this.setState({
            error: true,
          });
        }
      });
  }

  render() {
    const {
      error,
      loading,
      booking,
      meals,
    } = this.state;

    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    return <Booking booking={booking} meals={meals} />;
  }
}

export default Home;
