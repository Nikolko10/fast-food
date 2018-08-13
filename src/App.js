import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Burgers from './components/Burgers/Burgers';
import AddBurger from './components/AddBurger/AddBurger';
import Ingredients from './components/Ingredients/Ingredients';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div style={{'display': 'flex'}} className="App">
        <div style={{'width': '20%'}}>
          <Ingredients />
        </div>
      <div style={{'width': '80%'}}>
        <Grid fluid>
          <Burgers />
          <Col xs={6} md={6} lg={3}>
            <AddBurger />
          </Col>
        </Grid>
      </div>
      </div>
    );
  }
}

export default hot(module)(App);
