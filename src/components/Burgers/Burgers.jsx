import React, { Fragment } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import styles from './Burgers.scss';
import Card from '../Card/Card';

class Burgers extends React.Component {
	render() {
		return <Fragment>
			<Col xs={12} md={6} lg={3}>
    			<Card />
    		</Col>
    		<Col xs={6} md={6} lg={3}>
    			<Card />
    		</Col>
    		<Col xs={6} md={6} lg={3}>
    			<Card />
    		</Col>
		</Fragment>
	}
}

export default Burgers;