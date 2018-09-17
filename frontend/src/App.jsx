import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Travelers from './containers/Travelers';
import Cities from './containers/Cities';
import Films from './containers/Films';
import Asks from './containers/Asks';
import Critics from './containers/Critics';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Travelers} />
          <Route path="/finds" component={Travelers} />
          <Route path="/cities" component={Cities} />
          <Route path="/films" component={Films} />
          <Route path="/asks" component={Asks} />
          <Route path="/critics" component={Critics} />

        </Switch>
      </div>
    );
  }
}

export default App;
