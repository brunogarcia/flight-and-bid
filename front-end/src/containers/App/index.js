import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Selection from '../Selection';
import NoMatch from '../../components/NoMatch';
import constants from '../../utils/constants';

const { HOME, SELECTION } = constants.APP.PATH;

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={SELECTION} component={Selection} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
