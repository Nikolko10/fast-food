import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Burgers from '../components/Burgers/Burgers';
import AddBurger from '../components/AddBurger/AddBurger';
import Ingredients from '../components/Ingredients/Ingredients';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { 
	getDataForAll,
	addIngredient, 
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
		} = this.props;

		return <div style={{'display': 'flex'}} className="App">
        <div style={{'width': '20%'}}>
          <Ingredients ingredients={ingredients} />
        </div>
      	<div style={{'width': '80%'}}>
      	  <Grid fluid>
      	    <Burgers 
      	    	burgers={all_burgers} 
      	    	ingredients={ingredients}
      	    	addIngredient={addIngredient}
      	    />
      	    <Col xs={6} md={6} lg={3}>
      	      <AddBurger />
      	    </Col>
      	  </Grid>
      	</div>
      </div>
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
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBurgersPage);;