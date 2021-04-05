import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.sass';
// Components
import Homepage from '../Homepage/Homepage';
import NavBar from '../NavBar/NavBar';

function App({ history }) {
  return (
    <div className="App">
      <NavBar history={history} />
      <Switch>
        <Route exact path="/">
          <Homepage history={history} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
