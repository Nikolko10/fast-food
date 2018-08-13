import { getData } from '../../utils/data.js';

export const getDataForAll = () => (dispatch) => {
	// console.log(getData());
	dispatch({ type: 'GET_DATA', payload: getData() })
}