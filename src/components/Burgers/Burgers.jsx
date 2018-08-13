import React, { Fragment } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import styles from './Burgers.scss';
import Card from '../Card/Card';

class Burgers extends React.Component {
	sumPrice = (ingredients) => {
		var price = 0;
		ingredients.forEach((item) => {
			price += +item.price;
		})
		return price;
	}

	render() {
		return <Fragment>
		    {
		    	this.props.burgers.map((burger, i) => {
		    		return <Col key={burger.id} lg={3}>
		    			<Card 
		    				name={burger.name} 
		    				ingredients={burger.ingredients} 
		    				price={this.sumPrice(burger.ingredients)}
		    				id={burger.id}
		    				addIngredient={this.props.addIngredient}
		    			/>
		    		</Col>
		    	})
		    }
		</Fragment>
	}
}

export default Burgers;