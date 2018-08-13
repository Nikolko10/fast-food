import { setData } from '../../utils/data.js';

var initialState = {
	ingredients: [],
	all_burgers: [
		{
			id: '',
			name: '',
			ingredients: [{
				name: '',
				price: '',
			}],
		}
	],
};

const Burgers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload
    case 'ADD_SOME_INGREDIENT':
    	setData(JSON.stringify({
      		...state,
      		all_burgers: action.payload,
      	}));
      return {
      	...state,
      	all_burgers: action.payload,
      }
    default:
      break;
  }
  return state;
}

export default Burgers;