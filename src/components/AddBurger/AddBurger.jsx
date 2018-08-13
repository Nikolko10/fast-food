import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import styles from './AddBurger.scss';
import Card from '../Card/Card';

class AddBurger extends React.Component {

	handleAdd = () => {
		console.log('add');
		this.props.addBurgerCard();
	}

	render() {
		return <div onClick={this.handleAdd} className={styles.add}> + </div>
	}
}

export default AddBurger;