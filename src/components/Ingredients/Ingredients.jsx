import React from 'react';
import styles from './Ingredients.scss';

class Ingredients extends React.Component {
	render() {
		return <div className={styles.ingredients_list}>
			<p>Ingredients</p>
			<div className={styles.list}>
				{
					this.props.ingredients !== undefined ? this.props.ingredients.map((ingredient, i) => {
						return <div key={i} className={styles.ingredient}>
							<p>{ingredient.name}</p>
							<p className={styles.price}>{ingredient.price}$</p>
						</div>
					}) : ''
				}
			</div>
		</div>
	}
}

export default Ingredients;