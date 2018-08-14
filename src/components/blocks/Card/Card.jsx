import React from 'react';
import styles from './Card.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

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

		return <div className={styles.card + ' grid-item'} id={id}>
			<div className={styles.burger_img}>
				<div className={styles.edit}>
		    		<Link to={`/burger/${id}`}>
		    			<Button type='button' text='Detailed view' />
		    		</Link>
		    		<Button left type='button' text='Delete burger' onClick={() => this.handleDeleteBurger(id)} />
		    	</div>
				<img src={require('../../../images/burger.png')} alt='' />
			</div>
			<div className={styles.main_info}>
				<div className={styles.name}>
					<p>Name: </p>
					<div>{name === '' ? 
					<div className={styles.save}>
						<input type='text' ref={(node) => this.name = node} />
						<Button type='button' text='Save' onClick={() => this.handleSave(id)} />
					</div> : name}</div>
				</div>
				<div className={styles.ingredients}>
					<p>Ingredients: </p>
					<div className={styles.list}>
						{
							ingredients.length !== 0 ? ingredients.map((ingredient, i) => {
								return <div key={i} className={styles.wrapper_ingredient}>
									<p>{ingredient.name}</p>
									<Button type='button' text='Delete' onClick={() => this.handleDeleteIngFromBurger(ingredient.id, id)} />
								</div>
							}) : 'No ingredients'
						}
					<div className={styles.add}>
						<div className={this.state.isAdd ? cn(styles.edding, styles.active) : styles.edding}>
							<input type='text' ref={(node) => this.input = node} placeholder='Enter some ingredient' />
						</div>
						<Button type='button' text={this.state.isAdd ? 'Add' : 'Add some ingredient'} onClick={(e) => this.handleAdd(id)} />
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