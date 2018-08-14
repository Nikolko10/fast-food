import React from 'react';
import styles from './Card.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

class Card extends React.Component {
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

	handleSave = (id) => {
		this.props.saveNameBurger(id, this.name.value);
	}

	handleDeleteIngFromBurger = (ingId, burId) => {
		this.props.deleteIngFromBurger(ingId, burId);
	}

	handleDeleteBurger = (id) => {
		this.props.deleteBurger(id);
	}


	render() {
		const {
			id,
			name,
			ingredients,
			price,
		} = this.props;

		return <div className={styles.card} id={id}>
			<div className={styles.burger_img}>
				<div className={styles.edit}>
		    		<Link to={`/burger/${id}`}>
		    			<button>Detailed view</button>
		    		</Link>
		    		<button onClick={() => this.handleDeleteBurger(id)}>Delete burger</button>
		    	</div>
				<img src={require('../../images/burger.png')} alt='' />
			</div>
			<div className={styles.main_info}>
				<div className={styles.name}>
					<p>Name: </p>
					<div>{name === '' ? 
					<div className={styles.save}>
						<input type='text' ref={(node) => this.name = node} />
						<button onClick={() => this.handleSave(id)}>Save</button>
					</div> : name}</div>
				</div>
				<div className={styles.ingredients}>
					<p>Ingredients: </p>
					<div className={styles.list}>
						{
							ingredients !== undefined ? ingredients.map((ingredient, i) => {
								return <div key={i} className={styles.wrapper_ingredient}>
									<p>{ingredient.name}</p>
									<button onClick={() => this.handleDeleteIngFromBurger(ingredient.id, id)}>Delete</button>
								</div>
							}) : ''
						}
					<div className={styles.add}>
						<div className={this.state.isAdd ? cn(styles.edding, styles.active) : styles.edding}>
							<input type='text' ref={(node) => this.input = node} placeholder='Enter some ingredient' />
						</div>
						<button onClick={(e) => this.handleAdd(id)}>{this.state.isAdd ? 'Add' : 'Add some ingredient'}</button>
					</div>
					</div>
				</div>
			</div>
			<div className={styles.price}>
				<p>Prise: </p>
				<p>{price}$</p>
			</div>
		</div>
	}
}

export default Card;