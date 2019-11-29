import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages
import Home from '../pages/Home'

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Fragment>
  );
}

export default App;
