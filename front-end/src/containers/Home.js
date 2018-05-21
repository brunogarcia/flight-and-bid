import React, { Component } from 'react';
import api from '../api/';
import Error from '../components/Error';
import Loading from '../components/Loading';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      bids: {},
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
            bids: Object.assign({}, data),
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
    const { error, loading, bids } = this.state;

    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    console.log(bids);

    return 'hi';
  }
}

export default Home;
