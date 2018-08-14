import React, { Fragment } from 'react';
import styles from './Burger.scss';
import { sumPrice } from '../../../utils/helperPrice.js';

const Burger = ({ name, ingredients }) => {
	return name !== undefined && ingredients !== undefined ? <Fragment>
	    <div className={styles.burger}>
	    	<p className={styles.name}>Name</p>
	    	<p>{name === '' ? 'No name' : name}</p>
	    	<div className={styles.img}>
	    		<img src={require('../../../images/burger.png')} />
	    	</div>
	    	<div>
	    		<p className={styles.ingredients}>Ingredients</p>
	    		{
	    			ingredients.length !== 0 ?ingredients.map((item, i) => {
	    				return <p key={i}>{item.name}</p>
	    			}) : 'No ingredients'
	    		}
	    	</div>
	    	<div className={styles.price}>
	    		<p>Price</p>
	    		<p>{sumPrice(ingredients)}$</p>
	    	</div>
	    </div>
	</Fragment> : ''
}

export default Burger;