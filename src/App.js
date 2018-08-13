import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import AllBurgersPage from './containers/AllBurgersPage';

class App extends Component {
  render() {
    return <AllBurgersPage />
  }
}

export default hot(module)(App);
