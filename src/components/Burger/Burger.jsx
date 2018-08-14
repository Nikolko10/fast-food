import React, { Fragment } from 'react';
import styles from './Burger.scss';;

class Burger extends React.Component {
	sumPrice = (ingredients) => {
		var price = 0;
		ingredients.forEach((item) => {
			price += +item.price;
		})
		return price;
	}
	render() {
		const { name, ingredients } = this.props;
		return name !== undefined && ingredients !== undefined ? <Fragment>
		    <div className={styles.burger}>
		    	<p>Name: {name}</p>
		    	<div className={styles.img}>
		    		<img src={require('../../images/burger.png')} />
		    	</div>
		    	<div className={styles.ingredients}>
		    		<p>INGREDIENTS</p>
		    		{
		    			ingredients.map((item, i) => {
		    				return <p key={i}>{item.name}</p>
		    			})
		    		}
		    	</div>
		    	<div className={styles.price}>
		    		<p>Price: {this.sumPrice(ingredients)}$</p>
		    	</div>
		    </div>
		</Fragment> : ''
	}
}

export default Burger;