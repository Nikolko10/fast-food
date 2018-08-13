import React from 'react';
import styles from './Ingredients.scss';

class Ingredients extends React.Component {
	render() {
		return <div className={styles.ingredients_list}>
			<p>Ingredients</p>
			<div className={styles.list}>
				<div className={styles.ingredient}>
					<p>meat</p>
					<p className={styles.price}>140$</p>
				</div>
				<div className={styles.ingredient}>
					<p>cabbage</p>
					<p className={styles.price}>150$</p>
				</div>
				<div className={styles.ingredient}>
					<p>tomato</p>
					<p className={styles.price}>110$</p>
				</div>
				<div className={styles.ingredient}>
					<p>cucumber</p>
					<p className={styles.price}>190$</p>
				</div>
				<div className={styles.ingredient}>
					<p>bow</p>
					<p className={styles.price}>10$</p>
				</div>
			</div>
		</div>
	}
}

export default Ingredients;