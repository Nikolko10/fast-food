import React from 'react';
import styles from './Card.scss';

class Card extends React.Component {
	render() {
		return <div className={styles.card}>
			<div className={styles.burder_img}>
				<img src={require('../../images/burger.png')} alt='' />
			</div>
			<div className={styles.main_info}>
				<div className={styles.name}>
					<p>Name: </p>
					<p>Burder first</p>
				</div>
				<div className={styles.ingredients}>
					<p>Ingredients: </p>
					<div className={styles.list}>
						<p>meat</p>
						<p>cabbage</p>
						<p>tomato</p>
						<p>cucumber</p>
						<p>bow</p>
					</div>
				</div>
			</div>
			<div className={styles.price}>
				<p>Prise: </p>
				<p>127$</p>
			</div>
		</div>
	}
}

export default Card;