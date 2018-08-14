import React from 'react';
import styles from './Ingredients.scss';

class Ingredients extends React.Component {
	render() {
		const {
			ingredients,
		} = this.props;
		return <div className={styles.ingredients_list}>
			<p className={styles.name}>Ingredients</p>
			<div className={styles.list}>
				{
					ingredients !== undefined ? ingredients.map((ingredient, i) => {
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