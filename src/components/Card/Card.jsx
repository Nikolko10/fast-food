import React from 'react';
import styles from './Card.scss';

class Card extends React.Component {
	render() {
		return <div className={styles.card}>
			<div className={styles.burger_img}>
				<div className={styles.edit}>
		    		<button>Detailed view</button>
		    	</div>
				<img src={require('../../images/burger.png')} alt='' />
			</div>
			<div className={styles.main_info}>
				<div className={styles.name}>
					<p>Name: </p>
					<p>{this.props.name}</p>
				</div>
				<div className={styles.ingredients}>
					<p>Ingredients: </p>
					<div className={styles.list}>
						{
							this.props.ingredients !== undefined ? this.props.ingredients.map((ingredient, i) => {
								return <p key={i}>{ingredient.name}</p>
							}) : ''
						}
					</div>
				</div>
			</div>
			<div className={styles.price}>
				<p>Prise: </p>
				<p>{this.props.price}$</p>
			</div>
		</div>
	}
}

export default Card;