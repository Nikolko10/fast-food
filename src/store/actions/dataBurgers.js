import { getData, setData } from '../../utils/data.js';
var uniqid = require('uniqid');

export const getDataForAll = () => (dispatch) => {
	dispatch({ type: 'GET_DATA', payload: getData() })
}

export const addIngredient = (id, text) => (dispatch, getState) => {
	var { burgers } = getState();

	var all_burgers = burgers.all_burgers.filter(item => {
    	if (item.id === id) {
    		return burgers.ingredients.filter(ingredient => {
    			if (text === ingredient.name) {
    				item.ingredients.push({name: text, price: ingredient.price});
    			}
    		})
    		return item;
    	} else {
    		return item;
    	}
    });
    setData(JSON.stringify({
    	...burgers,
    	all_burgers,
    }));
	dispatch({ type: 'ADD_SOME_INGREDIENT', payload: all_burgers })
}

export const addBurgerCard = () => (dispatch, getState) => {
	var { burgers } = getState();
	var card = {
		id: uniqid(),
		name: '',
		ingredients: [],
	};
	burgers.all_burgers.push(card);
	setData(JSON.stringify(burgers));
	dispatch({ type: 'GET_DATA', payload: getData() })
	dispatch({ type: 'ADD_CARD_BURGER', payload: burgers });
}

export const saveNameBurger = (id, text) => (dispatch, getState) => {
	var { burgers } = getState();
	var all_burgers = burgers.all_burgers.filter(item => {
    	if (id === item.id) {
    		item.name = text;
    		return item;
    	} else {
    		return item;
    	}
    });

    setData(JSON.stringify({
    	...burgers,
    	all_burgers,
    }));
    dispatch({ type: 'SAVE_NAME_BURGER', payload: all_burgers })
}

export const deleteIngFromBurger = (ingId, burId) => (dispatch, getState) => {
	var { burgers } = getState();

	var all_burgers = burgers.all_burgers.filter(item => {
    	if (burId === item.id) {
    		return item.ingredients.filter((ingredient, i) => {
    			if (ingredient.id === ingId) {
    				item.ingredients.splice(i, 1);
    			} else {
    				return ingredient;
    			}
    		})
    		return item;
    	} else {
    		return item;
    	}
    });
    
    setData(JSON.stringify({
    	...burgers,
    	all_burgers,
    }));

    dispatch({ type: 'DELETE_SOME_INGREDIENT', payload: all_burgers })
}