import { getData } from '../../utils/data.js';

export const getDataForAll = () => (dispatch) => {
	// console.log(getData());
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
	dispatch({ type: 'ADD_SOME_INGREDIENT', payload: all_burgers })
}