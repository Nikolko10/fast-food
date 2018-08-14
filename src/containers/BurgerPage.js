import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Burger from '../components/blocks/Burger/Burger';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { 
	getDataBurger,
} from '../store/actions/dataBurger';

class BurgersPage extends Component {
	componentDidMount() {
		var id = this.props.history.location.pathname.split("/").slice(-1)[0];
		this.props.getDataBurger(id);
	}

	render() {
		const { name, ingredients } = this.props;

		return <Burger name={name} ingredients={ingredients} />
	}
};

const mapStateToProps = state => {

	const { name, ingredients } = state.burger;
	return {
		name, 
		ingredients,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		getDataBurger: (id) => dispatch(getDataBurger(id)),
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgersPage);;