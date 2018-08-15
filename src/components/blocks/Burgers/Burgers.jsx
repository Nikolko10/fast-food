import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './Burgers.scss';
import Card from '../Card/Card';
import cn from 'classnames';
import { sumPrice } from '../../../utils/helperPrice.js';

const Burgers = ({ burgers, addIngredient, saveNameBurger, deleteIngFromBurger, deleteBurger }) => {
	return <Fragment>
		<p className={styles.name}>Burgers</p>
		<div className={styles.burgers + ' clearix'}>
			<Row className={cn(styles.row, 'row-vertical-indent')}>
	    		{
	    			burgers.length !== 0 ? burgers.map((burger, i) => {
	    				return <Col key={burger.id} lg={3} md={4} sm={6} xs={12}>
	    					<Card 
	    						name={burger.name} 
	    						ingredients={burger.ingredients} 
	    						price={sumPrice(burger.ingredients)}
	    						id={burger.id}
	    						addIngredient={addIngredient}
	    						saveNameBurger={saveNameBurger}
	    						deleteIngFromBurger={deleteIngFromBurger}
	    						deleteBurger={deleteBurger}
	    					/>
	    				</Col>
	    			}) : <div className={styles.empty}>Data empty</div>
	    		}
	    	</Row>
	    </div>
	</Fragment>
}

export default Burgers;