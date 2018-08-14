import React from 'react';
import styles from './AddBurgerCard.scss';
import cn from 'classnames';

class AddBurgerCard extends React.Component {
	state = {
		isAdd: false,
	}

	handleAdd = (id) => {
		this.setState({
			isAdd: !this.state.isAdd,
		}, () => {
			if (this.state.isAdd) return false;
			this.props.addIngredient(id, this.input.value);
			this.input.value = '';
		});
	}

	render() {
		return <div className={styles.card} id={this.props.id}>
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
					<div className={styles.add}>
						<div className={this.state.isAdd ? cn(styles.edding, styles.active) : styles.edding}>
							<input type='text' ref={(node) => this.input = node} placeholder='Enter some ingredient' />
						</div>
						<button onClick={(e) => this.handleAdd(this.props.id)}>{this.state.isAdd ? 'Add' : 'Add some ingredient'}</button>
					</div>
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

export default AddBurgerCard;