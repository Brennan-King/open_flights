import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import Airlines from '../components/Airlines/Airlines';
import Airline from '../components/Airline/Airline';
import NavigationBar from './NavigationBar/NavigationBar';

/**
 * Top level compenent of the project used to handle routing.
 * @return {node} a swith used to render a route
 */
const App = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Airlines}/>
        <Route path="/airlines/:slug" exact component={Airline}/>
      </Switch>
    </Fragment>
  );
};

export default App;
