import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages
import Home from '../pages/Home'
import PuppyDetails from '../pages/PuppyDetails'

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pet/:id" component={PuppyDetails} />
      </Switch>
    </Fragment>
  );
}

export default App;
