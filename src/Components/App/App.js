import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.sass';
// Components
import Homepage from '../Homepage/Homepage';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function App({ history }) {
  return (
    <div className="app">
      <NavBar history={history} />
      <Switch>
        <Route exact path="/">
          <Homepage history={history} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
