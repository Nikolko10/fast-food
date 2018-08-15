import React, { Component } from 'react';
import { connect } from 'react-redux';
import Burgers from '../components/blocks/Burgers/Burgers';
import AddBurger from '../components/blocks/AddBurger/AddBurger';
import Ingredients from '../components/blocks/Ingredients/Ingredients';
import { Grid } from 'react-bootstrap';
import { 
	getDataForAll,
	addIngredient,
	addBurgerCard,
	saveNameBurger,
	deleteIngFromBurger,
	deleteBurger,
} from '../store/actions/dataBurgers';

class AllBurgersPage extends Component {
	componentDidMount() {
		this.props.getDataForAll();
	}

	render() {
		const { 
			all_burgers, 
			ingredients,
			addIngredient,
			addBurgerCard,
			saveNameBurger,
			deleteIngFromBurger,
			deleteBurger,
		} = this.props;

		return ingredients.length !== 0 ? <div style={{'display': 'flex'}} className="App">
        <div style={{'width': '30%'}}>
          <Ingredients ingredients={ingredients} />
        </div>
      	<div style={{'width': '70%'}}>
      	  <Grid fluid>
      	    <Burgers 
      	    	burgers={all_burgers} 
      	    	ingredients={ingredients}
      	    	addIngredient={addIngredient}
      	    	saveNameBurger={saveNameBurger}
      	    	deleteIngFromBurger={deleteIngFromBurger}
      	    	deleteBurger={deleteBurger}
      	    />
      	    <AddBurger addBurgerCard={addBurgerCard} />
      	  </Grid>
      	</div>
      </div> : <div className='loader'><img src={require('../images/Loading.gif')} alt=''/></div>
	}
};

const mapStateToProps = state => {
	const { all_burgers, ingredients } = state.burgers;
	return {
		all_burgers, 
		ingredients,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		getDataForAll: () => {
			setTimeout(() => {
				dispatch(getDataForAll())
			}, 1500)
		},
		addIngredient: (id, text) => dispatch(addIngredient(id, text)),
		addBurgerCard: () => dispatch(addBurgerCard()),
		saveNameBurger: (id, text) => dispatch(saveNameBurger(id, text)),
		deleteIngFromBurger: (ingId, burId) => dispatch(deleteIngFromBurger(ingId, burId)),
		deleteBurger: (id) => dispatch(deleteBurger(id)),
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBurgersPage);;