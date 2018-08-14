import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import AllBurgersPage from './containers/AllBurgersPage';
import BurgerPage from './containers/BurgerPage';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return <div>
    	<Switch>
    		<Route exact path='/' component={AllBurgersPage} />
    		<Route path='/burger/:number' component={BurgerPage} />
    	</Switch>
    </div>
  }
}

export default hot(module)(App);
