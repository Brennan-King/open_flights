import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Airlines from '../components/Airlines/Airlines';
import Airline from '../components/Airline/Airline';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Airlines}/>
      <Route path="/airlines/:slug" exact component={Airline}/>
    </Switch>
  );
};

export default App;
