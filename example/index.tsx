import 'react-app-polyfill/ie11';
import 'sanitize.css/sanitize.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Thing />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
