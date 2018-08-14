import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import styles from './AddBurger.scss';
import Card from '../Card/Card';
import Button from '../../common/Button/Button';

class AddBurger extends React.Component {

	handleAdd = () => {
		this.props.addBurgerCard();
	}

	render() {
		return <div className={styles.add}>
			<Button type='button' text='Add burger' onClick={this.handleAdd} />
		</div>
	}
}

export default AddBurger;