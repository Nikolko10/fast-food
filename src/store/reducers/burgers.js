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
    default:
      break;
  }
  return state;
}

export default Burgers;