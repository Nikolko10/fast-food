import { getData } from '../../utils/data.js';
export const getDataBurger = (id) => (dispatch, getState) => {
	const burger = getData().all_burgers.filter(item => {
		return item.id === id;
	});
	console.log(id);

	dispatch({ type: 'GET_DATA_BURGER', payload: burger[0] })
}